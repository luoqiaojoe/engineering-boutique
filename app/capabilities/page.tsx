import Link from 'next/link';
import { ContactBand, Label, PageIntro } from '@/components/site';
import { capabilities } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Capabilities', 'Build a software product, modernize an existing system, or connect your business tools through APIs and automation.', '/capabilities/');
export default function Capabilities() { return <>
  <PageIntro label="Capabilities" title={<>Engineering that meets<br/>you <em>where you are.</em></>}><p>You might have a clear product idea, a system that needs attention, or a process that has become too manual. The starting point changes. The care in the work stays the same.</p></PageIntro>
  <nav className="capability-index container" aria-label="On this page">{capabilities.map(c => <a href={`#${c.id}`} key={c.id}><span>{c.number}</span>{c.title}</a>)}</nav>
  <div className="container">{capabilities.map(c => <section id={c.id} className="capability-detail section" key={c.id}><div className="detail-title"><Label number={c.number}>Capability</Label><h2>{c.title}</h2><p>{c.summary}</p></div><div className="detail-body"><p className="detail-lead">{c.description}</p><h3>When this is useful</h3><p>{c.when}</p><h3>Typical work</h3><ul className="work-list">{c.work.map(w => <li key={w}>{w}</li>)}</ul><div className="outcome"><Label>The result to work toward</Label><p>{c.outcome}</p></div><Link href="/contact/" className="text-link">Discuss this kind of work</Link></div></section>)}</div>
  <section className="engagement-note container"><Label>Starting with the right scope</Label><div><h2>A useful first step,<br/>then a clear way forward.</h2><p>The initial conversation establishes the problem, constraints and fit. Scope, responsibilities and delivery expectations are agreed before work begins. Continued involvement after launch is discussed as part of the engagement.</p></div></section><ContactBand/>
</>; }
