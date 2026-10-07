import type { MetadataRoute } from 'next';
import { company, validOrigin } from '@/lib/company';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots { return { rules: company.publicReady ? { userAgent: '*', allow: '/' } : { userAgent: '*', disallow: '/' }, ...(validOrigin ? { sitemap: `${validOrigin}/sitemap.xml` } : {}) }; }
