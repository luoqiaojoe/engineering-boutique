import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/site';
import { company, validOrigin } from '@/lib/company';
import './globals.css';
const description = 'Product engineering, software modernization, integrations and automation. A small engineering company with experienced engineers directly involved.';
export const metadata: Metadata = {
  ...(validOrigin ? { metadataBase: new URL(validOrigin) } : {}),
  title: { default: `Software built for real use | ${company.name}`, template: `%s | ${company.name}` }, description,
  icons: { icon: '/favicon.svg' },
  robots: { index: company.publicReady, follow: company.publicReady },
  openGraph: { type: 'website', locale: 'en_US', siteName: company.name, title: 'Software built for real use', description },
  twitter: { card: 'summary', title: 'Software built for real use', description },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = company.publicReady && validOrigin ? { '@context': 'https://schema.org', '@type': 'Organization', name: company.name, legalName: company.legalName, url: validOrigin, email: company.email, description } : null;
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/>{organization && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, '\\u003c') }}/>}</body></html>;
}
