import Link from 'next/link';
import { PageIntro } from '@/components/site';
export default function NotFound() { return <><PageIntro label="404 · Page not found" title="This page is not here."><p>The link may have changed. The homepage is a useful place to start.</p></PageIntro><div className="container not-found-actions"><Link className="button" href="/">Back to home</Link><Link className="text-link" href="/contact/">Contact the company</Link></div></>; }
