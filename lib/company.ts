// Descriptive working identity. Replace only with verified company information.
export const company = {
  name: 'Engineering Boutique',
  legalName: '[LEGAL COMPANY NAME]',
  registration: '[REGISTRATION NUMBER]',
  jurisdiction: '[REGISTRATION JURISDICTION]',
  address: '[REGISTERED ADDRESS]',
  email: '[BUSINESS EMAIL]',
  phone: '[PHONE — OPTIONAL]',
  siteUrl: process.env.SITE_URL || '',
  publicReady: false,
};
export const hasBusinessEmail = /^[^\s@\[\]]+@[^\s@\[\]]+\.[^\s@\[\]]+$/.test(company.email);
export const validOrigin = (() => { try { const u = new URL(company.siteUrl); return /^https?:$/.test(u.protocol) ? u.origin : null; } catch { return null; } })();
export const siteBaseUrl = validOrigin ? new URL(company.siteUrl).href.replace(/\/$/, '') : null;
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
