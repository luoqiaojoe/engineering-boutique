# Engineering Boutique

Seven-page corporate website built with Next.js, TypeScript and Tailwind CSS. Pages are statically exported; no database, analytics, enquiry processor or invented case studies are included.

## Local development

`npm ci`, then `npm run dev`. For delivery: `npm run typecheck`, `npm run build`, `npm run verify`. Deploy the `out/` directory to a static host supporting directory index routes and a custom `404.html`.

## Confirm before public launch

The code is complete for the requested informational site. The business identity and legal content remain intentionally incomplete until verified facts are provided.

1. Set the approved brand name and verified entity details in `lib/company.ts`. The current display name is a descriptive working identity.
2. Replace the business email. The contact page automatically becomes a direct `mailto:` link when a valid address is configured; no message is sent by the website and no submission backend is implied.
3. Set `SITE_URL` to the verified origin when building. This controls canonical links and the seven-entry sitemap.
4. Complete and review all bracketed fields in Privacy, Terms and Company Information, including effective dates, providers, retention, processing locations and jurisdiction-specific requirements.
5. Set `company.publicReady` to `true` only after these facts and pages are confirmed. Until then pages emit `noindex, nofollow`, `robots.txt` disallows crawling and Organization JSON-LD is omitted. After enabling, valid organization information is emitted without fabricated facts.
6. Remove the optional phone field if no phone number is published. Verify email links, legal disclosures, the public domain and hosting-level security headers after final configuration.

No external fonts or imagery are required. Typography uses local sans-serif and Georgia. The client-side header handles mobile disclosure, route changes and Escape; the rest of the site uses server-rendered semantic content.

## Research and direction

- Portaeu: clear service explanations, business context and delivery model. Avoid borrowed geographic claims, proprietary products and broad service expansion.
- Kirin: typographic hierarchy, space and numbered service rhythm. Avoid its huge decorative graphics, marquee, extra practices and unverifiable credentials.
- Wahringer: direct small-team positioning and concrete business situations. Avoid its client work, schedules, status dashboard and biographies.

Original direction: white paper, ink typography, a restrained red accent, serif emphasis and fine rules. Homepage narrative: business → capabilities → concrete needs → working model → engineering principles → small-team structure → contact. Credibility comes from specific explanations rather than social proof.
