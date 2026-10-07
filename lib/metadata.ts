import type { Metadata } from 'next';
import { company, validOrigin } from './company';
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = validOrigin ? `${validOrigin}${path}` : undefined;
  return { title, description, ...(url ? { alternates: { canonical: url } } : {}), openGraph: { title: `${title} | ${company.name}`, description, ...(url ? { url } : {}), type: 'website' }, twitter: { card: 'summary', title: `${title} | ${company.name}`, description } };
}
