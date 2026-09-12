export const categories = {'Pothole':'Roads','Garbage':'Sanitation','Streetlight':'Streetlights','Water Leakage':'Water','Traffic':'Traffic','Road Damage':'Roads','Drainage':'Drainage','Safety':'Emergency','Pollution':'Sanitation','Other':'Roads'};
export const closedStates = ['RESOLVED','CITIZEN_VERIFIED','CLOSED','REJECTED'];
export const transitions = {SUBMITTED:['AI_ANALYZING'],AI_ANALYZING:['TRIAGED'],TRIAGED:['ASSIGNED','REJECTED','ESCALATED'],ASSIGNED:['IN_PROGRESS','ESCALATED'],IN_PROGRESS:['RESOLVED','ESCALATED'],RESOLVED:['CITIZEN_VERIFIED','REOPENED'],CITIZEN_VERIFIED:['CLOSED'],CLOSED:['REOPENED'],REOPENED:['ASSIGNED','IN_PROGRESS','ESCALATED'],ESCALATED:['ASSIGNED','IN_PROGRESS','RESOLVED']};
export function distance(a,b) { const r=Math.PI/180,dlat=(b.lat-a.lat)*r,dlon=(b.lng-a.lng)*r; return 6371000*2*Math.asin(Math.sqrt(Math.sin(dlat/2)**2+Math.cos(a.lat*r)*Math.cos(b.lat*r)*Math.sin(dlon/2)**2)); }
export function sla(i,now=Date.now()) { const remaining=Math.round((i.deadline-now)/60000); return {remaining,risk:closedStates.includes(i.status)?'Complete':remaining<0?'Breached':remaining<=15?'Critical':remaining<=60?'At risk':'Safe'}; }
export function priority(i,now=Date.now()) {
  const reasons=[],text=(i.description+' '+i.location).toLowerCase(); let score={LOW:15,MEDIUM:30,HIGH:50,CRITICAL:65}[i.severity]||30;
  reasons.push(`${i.severity.toLowerCase()} reported severity`);
  if(i.reportCount>1){score+=Math.min(15,Math.ceil(i.reportCount/3));reasons.push(`${i.reportCount} citizen reports`);}
  if(/school|hospital|metro|main road/.test(text)){score+=10;reasons.push('school, hospital or transit landmark in report');}
  if(/accident|danger|injur|sparking|fire|unsafe|deep|safety/.test(text)){score+=10;reasons.push('safety risk described by citizen');}
  if(i.deadline-now<3600000&&!closedStates.includes(i.status)){score+=15;reasons.push('SLA due within an hour or overdue');}
  if(now-i.createdAt>86400000){score+=5;reasons.push('unresolved for more than a day');}
  return {score:Math.min(100,score),label:score>=80?'Critical':score>=50?'High':score>=30?'Medium':'Low',reasons,method:'Deterministic rules',at:now};
}
export function analyze(input,incidents) {
  const text=String(input.description||'').toLowerCase();
  const rules=[['Pothole',/pothole|crater/],['Garbage',/garbage|rubbish|waste/],['Streetlight',/street.?light|lamp/],['Water Leakage',/leak|burst pipe/],['Drainage',/flood|drain|waterlog/],['Safety',/fire|sparking|injur/],['Traffic',/traffic|congestion/],['Pollution',/pollution|smoke/]];
  const suggested=rules.find(([,pattern])=>pattern.test(text))?.[0];
  const category=input.category in categories?input.category:suggested||'Other';
  const severity=/fire|sparking|trapped|injur/.test(text)?'CRITICAL':/deep|large|danger|unsafe|school|hospital|accident/.test(text)?'HIGH':'MEDIUM';
  const matches=incidents.filter(i=>!closedStates.includes(i.status)&&i.category===category&&Date.now()-i.createdAt<7*86400000&&distance(i,input)<150).map(i=>({id:i.id,title:i.title,reportCount:i.reportCount,distance:Math.round(distance(i,input)),reason:'Same category · within 150 metres · last 7 days'})).sort((a,b)=>a.distance-b.distance);
  return {category,suggestedCategory:suggested||category,severity,department:categories[category],method:'Deterministic text and location rules',imageAnalyzed:false,confidence:null,at:Date.now(),reasons:[`Category: ${category}`,/deep|large|danger|unsafe|school|hospital|accident|fire|sparking|trapped|injur/.test(text)?'Potential risk terms in citizen description':'Standard response target; operator review required'],matches,summary:`${category} reported at ${input.location}. ${matches.length?'A nearby incident may describe the same issue.':'No matching open incident within 150 metres.'} ${categories[category]} review recommended.`};
}
