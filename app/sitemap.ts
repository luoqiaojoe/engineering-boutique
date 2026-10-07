import type { MetadataRoute } from 'next';
import { siteBaseUrl } from '@/lib/company';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap { return siteBaseUrl ? ['/', '/capabilities/', '/about/', '/contact/', '/privacy/', '/terms/', '/company-information/'].map(path => ({url:`${siteBaseUrl}${path}`})) : []; }
