import type { MetadataRoute } from 'next';
import { validOrigin } from '@/lib/company';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap { return validOrigin ? ['/', '/capabilities/', '/about/', '/contact/', '/privacy/', '/terms/', '/company-information/'].map(path => ({url:`${validOrigin}${path}`})) : []; }
