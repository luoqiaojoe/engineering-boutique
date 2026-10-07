import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const routes = ['', 'capabilities', 'about', 'contact', 'privacy', 'terms', 'company-information'];
const failures = [];
const titles = new Set();
for (const route of routes) {
  const file = path.join('out', route, 'index.html');
  try {
    const html = fs.readFileSync(file, 'utf8');
    const page = html.replace(/<script\b[\s\S]*?<\/script>/g, '');
    assert.equal((page.match(/<h1(?:\s|>)/g) || []).length, 1, `${route}: one h1`);
    assert.ok(page.includes('id="main"'), `${route}: main landmark`);
    const title = page.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title && !titles.has(title), `${route}: unique title`);
    titles.add(title);
    assert.ok(page.includes('name="description"'), `${route}: description`);
    assert.ok(page.includes('property="og:title"'), `${route}: Open Graph title`);
    assert.ok(page.includes('property="og:description"'), `${route}: Open Graph description`);
    assert.ok(page.includes('name="robots" content="noindex, nofollow"'), `${route}: draft protected from indexing`);
    for (const [, href] of page.matchAll(/href="([^"]+)"/g)) {
      if (!href.startsWith('/') || href.startsWith('//')) continue;
      const [pathname, hash] = href.split('#');
      const target = pathname.endsWith('/') ? `out${pathname}index.html` : `out${pathname}`;
      assert.ok(fs.existsSync(target), `${route}: missing link target ${href}`);
      if (hash) assert.ok(fs.readFileSync(target, 'utf8').includes(`id="${hash}"`), `${route}: missing anchor ${href}`);
    }
  } catch (error) { failures.push(error.message); }
}
assert.ok(fs.existsSync('out/favicon.svg'), 'custom favicon');
assert.ok(fs.existsSync('out/404.html'), '404 page');
assert.ok(fs.readFileSync('out/robots.txt', 'utf8').includes('Disallow: /'), 'draft robots');
const sitemap = fs.readFileSync('out/sitemap.xml', 'utf8');
assert.equal((sitemap.match(/<loc>/g) || []).length, 7, 'seven sitemap entries: build with SITE_URL');
if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log('Verified all seven exported pages: headings, metadata, draft indexing rules, internal links and anchors; favicon, 404, robots and sitemap.');
