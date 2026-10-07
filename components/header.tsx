'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { company } from '@/lib/company';
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => { const close = (e: KeyboardEvent) => { if (e.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); } }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, [open]);
  return <header className="site-header"><div className="container header-inner">
    <Link href="/" className="wordmark" aria-label={`${company.name} home`}><span className="brand-mark" aria-hidden="true">e<span>.</span></span><span>{company.name}</span></Link>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}<span aria-hidden="true">{open ? '−' : '+'}</span></button>
    <nav id="main-navigation" aria-label="Main navigation" className={open ? 'navigation is-open' : 'navigation'}>
      <Link href="/capabilities/" aria-current={path.startsWith('/capabilities') ? 'page' : undefined}>Capabilities</Link>
      <Link href="/about/" aria-current={path.startsWith('/about') ? 'page' : undefined}>About</Link>
      <Link href="/contact/" className="nav-contact" aria-current={path.startsWith('/contact') ? 'page' : undefined}>Discuss a project</Link>
    </nav>
  </div></header>;
}
