import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import {phases,tasks} from '../shared/contracts';
import {guides} from './guide';
import './styles.css';
function App(){
 const [selected,setSelected]=useState<number|null>(null);
 const [query,setQuery]=useState('');
 const [menu,setMenu]=useState(false);
 const q=query.trim().toLowerCase();
 const matching=tasks.map((t,i)=>({number:i+1,title:t[0],product:t[1],guide:guides[i]})).filter(t=>!q||[t.title,t.product,t.guide.purpose,...t.guide.steps,...t.guide.questions].join(' ').toLowerCase().includes(q));
 const phaseIndex=selected===null?-1:phases.findIndex(p=>p.tasks.includes(selected));
 const guide=selected===null?null:guides[selected-1];
 const navigate=(n:number|null)=>{setSelected(n);setMenu(false);window.scrollTo({top:0,behavior:'smooth'})};
 return <div className="shell">
 <aside className={menu?'sidebar open':'sidebar'}>
 <div className="brand"><span className="brandmark">◈</span><div><strong>Risk Communication</strong><small>PLANNING REFERENCE GUIDE</small></div></div>
 <button className={selected===null?'nav-home selected':'nav-home'} onClick={()=>navigate(null)}>⌂ <span>Guide overview</span></button>
 <div className="side-caption">THE PLANNING PROCESS</div>
 {phases.map((p,i)=><div className="nav-group" key={p.name}><div className="nav-phase">{String(i+1).padStart(2,'0')} · {p.name}</div>{p.tasks.map(n=><button key={n} className={selected===n?'nav-task selected':'nav-task'} aria-current={selected===n?'page':undefined} onClick={()=>navigate(n)}><span className="nav-number">{n}</span><span>{tasks[n-1][0]}</span></button>)}</div>)}
 <div className="side-footer">A practical reference—not an official approval or release process.</div>
 </aside>
 <div className="content">
 <header className="topbar"><button className="menu-button" onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-label="Toggle navigation">☰</button><span>Risk Communication Planning Guide</span><button className="overview-link" onClick={()=>navigate(null)}>Overview</button></header>
 <main className="reader">
 {selected===null?<><div className="eyebrow">A PRACTICAL FIELD GUIDE</div><h1>Build a clearer risk communication plan.</h1><p className="lead">A straightforward, step-by-step reference for moving from a communication problem to a defensible strategy, actionable messages, and an implementation plan.</p><div className="intro-note"><strong>How to use this guide</strong><p>Choose any task in the navigation, or follow the phases in order. Each page explains the purpose, recommended approach, key questions, an example, and the expected work product. There are no forms, accounts, or saved projects.</p></div><div className="section-heading"><h2>Explore the planning process</h2><span>7 phases · 14 tasks</span></div><label className="search-label" htmlFor="guide-search">Find guidance</label><input id="guide-search" className="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search tasks, topics, or work products…"/>{q?<div className="search-results">{matching.length?matching.map(t=><button className="result" key={t.number} onClick={()=>navigate(t.number)}><span className="result-index">{String(t.number).padStart(2,'0')}</span><span><strong>{t.title}</strong><small>{t.guide.purpose}</small></span><span aria-hidden="true">→</span></button>):<p>No matching topics. Try another search term.</p>}</div>:<div className="phase-list">{phases.map((p,i)=><section className="phase-card" key={p.name}><div className="phase-meta"><span>PHASE {String(i+1).padStart(2,'0')}</span><h3>{p.name}</h3></div><div className="phase-tasks">{p.tasks.map(n=><button key={n} onClick={()=>navigate(n)}><span className="task-number">{String(n).padStart(2,'0')}</span><span>{tasks[n-1][0]}</span><span aria-hidden="true">↗</span></button>)}</div></section>)}</div>}</>:<>
 <div className="breadcrumbs"><button onClick={()=>navigate(null)}>Overview</button><span>/</span><span>{phases[phaseIndex].name}</span><span>/</span><span>Task {selected}</span></div>
 <div className="eyebrow">PHASE {phaseIndex+1} · {phases[phaseIndex].name.toUpperCase()} · TASK {selected} OF 14</div>
 <h1>{tasks[selected-1][0]}</h1><p className="lead">{guide!.purpose}</p>
 <div className="product-strip"><span>EXPECTED WORK PRODUCT</span><strong>{tasks[selected-1][1]}</strong></div>
 <section className="guide-section"><h2>How to approach it</h2><ol className="step-list">{guide!.steps.map((s,i)=><li key={i}><span>{s}</span></li>)}</ol></section>
 <section className="guide-section"><h2>Questions to consider</h2><ul className="question-list">{guide!.questions.map(s=><li key={s}>{s}</li>)}</ul></section>
 <section className="example"><div className="example-label">ILLUSTRATIVE EXAMPLE</div><p>{guide!.example}</p></section>
 <details className="caution"><summary>Important consideration</summary><p>{guide!.watchFor}</p></details>
 <div className="page-nav"><button disabled={selected===1} onClick={()=>navigate(selected-1)}>← Previous task</button><button className="next" onClick={()=>navigate(selected===14?null:selected+1)}>{selected===14?'Back to overview':'Next task →'}</button></div>
 </>}
 <footer className="footer">Risk Communication Planning Reference · Educational and planning support only. Follow applicable organizational policies, technical validation, and release requirements.</footer>
 </main></div></div>;
}
createRoot(document.getElementById('root')!).render(<App/>);
