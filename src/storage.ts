export type Entry={id:string;kind:string;task:number;title:string;data:Record<string,string>;updated:string};
export type Plan={id:string;title:string;created:string;updated:string;notes:Record<number,string>;statuses:Record<number,string>;entries:Entry[];reviews:{id:string;task:number;reviewer:string;finding:string;outcome:string;date:string}[];history:{date:string;description:string}[]};
export const KEY='risk-communication-planner-v2';
export function validatePlan(value:unknown):Plan{
 if(!value||typeof value!=='object'||Array.isArray(value))throw Error('Backup must be a plan object');
 const p=value as Record<string,unknown>;
 const str=(x:unknown)=>typeof x==='string';
 const obj=(x:unknown)=>!!x&&typeof x==='object'&&!Array.isArray(x);
 if(!str(p.id)||!str(p.title)||!(p.title as string).trim()||!str(p.created)||!str(p.updated)||!obj(p.notes)||!obj(p.statuses)||!Array.isArray(p.entries)||!Array.isArray(p.reviews)||!Array.isArray(p.history))throw Error('Missing or invalid plan fields');
 if(p.entries.length>10000||p.reviews.length>10000||p.history.length>50000)throw Error('Backup exceeds safe limits');
 for(const e of p.entries){if(!obj(e)||!str(e.id)||!str(e.kind)||!str(e.title)||typeof e.task!=='number'||!Number.isInteger(e.task)||e.task<0||e.task>14||!str(e.updated)||!obj(e.data)||!Object.values(e.data).every(str))throw Error('Invalid work product in backup')}
 for(const r of p.reviews){if(!obj(r)||!str(r.id)||typeof r.task!=='number'||!Number.isInteger(r.task)||r.task<1||r.task>14||!str(r.reviewer)||!str(r.finding)||!str(r.outcome)||!str(r.date))throw Error('Invalid review in backup')}
 for(const h of p.history){if(!obj(h)||!str(h.date)||!str(h.description))throw Error('Invalid history in backup')}
 if(!Object.values(p.notes as Record<string,unknown>).every(str)||!Object.values(p.statuses as Record<string,unknown>).every(str))throw Error('Invalid task notes or statuses');
 return p as unknown as Plan;
}
export function parsePlanBackup(raw:string):Plan{return validatePlan(JSON.parse(raw))}
export function readPlans():Plan[]{try{const raw=localStorage.getItem(KEY);if(!raw)return [];const data=JSON.parse(raw);return Array.isArray(data)?data.map(validatePlan):[]}catch{return []}}
export function writePlans(plans:Plan[]){try{localStorage.setItem(KEY,JSON.stringify(plans));return true}catch{return false}}
export function newPlan(title:string):Plan{const now=new Date().toISOString();return{id:crypto.randomUUID(),title,created:now,updated:now,notes:{},statuses:{},entries:[],reviews:[],history:[{date:now,description:'Plan created'}]}}
export function download(filename:string,content:string,type='application/json'){const url=URL.createObjectURL(new Blob([content],{type}));const a=document.createElement('a');a.href=url;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),500)}
export function escapeHtml(s:string){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]||c))}
export function printHtml(p:Plan){const lines=p.entries.map(e=>'<section><h3>'+escapeHtml(e.title)+'</h3><p>Task '+e.task+' · '+escapeHtml(e.kind)+' · ID '+escapeHtml(e.id)+'</p><dl>'+Object.entries(e.data).map(([k,v])=>'<dt>'+escapeHtml(k.replaceAll('_',' '))+'</dt><dd>'+escapeHtml(v)+'</dd>').join('')+'</dl></section>').join('');return '<!doctype html><html><head><meta charset="utf-8"><title>'+escapeHtml(p.title)+'</title><style>body{font:15px/1.6 system-ui;max-width:850px;margin:40px auto;color:#24364a}section{break-inside:avoid;border-top:1px solid #ddd;padding:12px}dt{font-weight:bold}dd{margin:0 0 12px}@media print{body{margin:10mm}}</style></head><body><h1>'+escapeHtml(p.title)+'</h1><p>Working planning document · Not independently approved or released</p><h2>Planning work products</h2>'+lines+'<h2>Review records</h2>'+p.reviews.map(r=>'<p>Task '+r.task+': '+escapeHtml(r.outcome)+' — '+escapeHtml(r.finding)+'</p>').join('')+'</body></html>'}
