import React,{useState} from 'react';
import {phases,tasks} from '../shared/contracts';
import type {Plan} from './storage';

export type View='dashboard'|'evidence'|'assembly'|'task';
export function completedCount(plan:Plan|undefined){return plan?Array.from({length:14},(_,i)=>plan.statuses[i+1]).filter(x=>x==='complete').length:0}
export function TaskNavigation({plan,view,task,onNavigate}:{plan?:Plan;view:View;task:number;onNavigate:(view:View,task?:number)=>void}){
 const [collapsed,setCollapsed]=useState<Record<number,boolean>>({});
 const done=completedCount(plan);
 return <nav aria-label="Main navigation">
  <button className={view==='dashboard'?'active':''} aria-current={view==='dashboard'?'page':undefined} onClick={()=>onNavigate('dashboard')}>◫ Dashboard</button>
  <button className={view==='evidence'?'active':''} aria-current={view==='evidence'?'page':undefined} onClick={()=>onNavigate('evidence')}>▤ Evidence register</button>
  <button className={view==='assembly'?'active':''} aria-current={view==='assembly'?'page':undefined} onClick={()=>onNavigate('assembly')}>▣ Review & export</button>
  <div className="navtitle">GUIDED PLANNING <span>{done}/14 reviewed</span></div>
  <progress className="navprogress" value={done} max={14} aria-label="Reviewed tasks"/>
  {phases.map((p,i)=><section key={p.name}>
   <button className="phase-toggle" aria-expanded={!collapsed[i]} onClick={()=>setCollapsed(prev=>({...prev,[i]:!prev[i]}))}>
    <span>{i+1} · {p.name}</span><span>{p.tasks.filter(n=>plan?.statuses[n]==='complete').length}/{p.tasks.length} {collapsed[i]?'▸':'▾'}</span>
   </button>
   {!collapsed[i]&&p.tasks.map(n=><button key={n} className={view==='task'&&task===n?'active':''} aria-current={view==='task'&&task===n?'step':undefined} onClick={()=>onNavigate('task',n)}>
    <span className="num">{plan?.statuses[n]==='complete'?'✓':n}</span><span>{tasks[n-1][0]}</span>
   </button>)}
  </section>)}
 </nav>
}
