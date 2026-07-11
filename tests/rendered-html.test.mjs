import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the podcast sales page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>一站式 Podcast 製作服務/);
  assert.match(html, /一站式 Podcast 製作服務，企劃、講稿、錄製、剪輯、上架一次完成/);
  assert.match(html, /\/home-cover\.png/);
  assert.match(html, /\/cover-slide-2\.png/);
  assert.match(html, /\/cover-slide-3\.png/);
  assert.match(html, /\/logo\.png/);
  assert.doesNotMatch(html, /\/service-hero\.png/);
  assert.match(html, /\/pain-points\.png/);
  assert.match(html, /\/service-positioning\.png/);
  assert.match(html, /\/industry-designer\.png/);
  assert.match(html, /\/industry-agent\.png/);
  assert.match(html, /\/industry-consultant\.png/);
  assert.match(html, /聲音內容製作所，Podcast 製作/);
  assert.match(html, /聲音內容製造所/);
  assert.match(html, /Podcast 一季基礎包/);
  assert.match(html, /加入官方 LINE 選購服務/);
  assert.match(html, /常見問題/);
  assert.match(html, /可以。你可以提供自行錄製的聲音檔，我們協助進行基礎音檔整理與上架。/);
  assert.match(html, /如Apple podcast、spotify、KKBOX/);
  assert.match(html, /基本包不包含哪些服務？/);
  assert.match(html, /加入官方 LINE 詢問/);
  assert.match(html, /LINE ID：@169wnclt/);
  assert.match(html, /https:\/\/line\.me\/R\/ti\/p\/@169wnclt/);
  assert.doesNotMatch(html, /EasyShop/);
  assert.doesNotMatch(html, /href="#order"/);
  assert.doesNotMatch(html, /button secondary[^>]*>LINE ID：@169wnclt/);
  assert.doesNotMatch(html, /若需要到場錄音或專業錄音室服務/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("keeps the product files focused on the finished site", async () => {
  const [page, layout, packageJson, css, script] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../public/script.js", import.meta.url), "utf8"),
  ]);

  assert.match(page, /選擇適合你的 Podcast 製作方案/);
  assert.match(page, /className="cover-section"/);
  assert.match(page, /className="cover-carousel"/);
  assert.doesNotMatch(page, /className="service-hero-section"/);
  assert.match(page, /className="image-section pain-image-section"/);
  assert.match(page, /className="image-section positioning-image-section"/);
  assert.match(page, /className="industry-card"/);
  assert.match(page, /className="brand-logo"/);
  assert.doesNotMatch(page, /SectionIntro title="基本包不包含"/);
  assert.doesNotMatch(page, /const exclusions/);
  assert.match(layout, /一站式 Podcast 製作服務｜企劃、講稿、錄製、上架一次完成/);
  assert.match(css, /cover-fade/);
  assert.match(css, /\.cover-section \{\n  padding: 0;/);
  assert.match(css, /\.cover-carousel \{[\s\S]*?width: 100%;/);
  assert.match(css, /method-frame-sweep/);
  assert.match(css, /industry-card:hover/);
  assert.match(css, /line-id/);
  assert.match(css, /@media \(max-width: 720px\)/);
  assert.match(script, /data-nav-toggle/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page + layout + css, /_sites-preview|codex-preview/);
});

test("writes a static GitHub Pages version under docs", async () => {
  const html = await readFile(new URL("../docs/index.html", import.meta.url), "utf8");

  assert.match(html, /<title>一站式 Podcast 製作服務/);
  assert.match(html, /href="assets\/index-[^"]+\.css"/);
  assert.match(html, /src="script\.js"/);
  assert.match(html, /home-cover\.png/);
  assert.match(html, /cover-slide-2\.png/);
  assert.match(html, /cover-slide-3\.png/);
  assert.match(html, /https:\/\/eoniancco-hub\.github\.io\/podcast\/home-cover\.png/);
  assert.match(html, /https:\/\/line\.me\/R\/ti\/p\/@169wnclt/);
  assert.doesNotMatch(html, /\b(?:href|src|content)="\/(?!\/)/);
  assert.doesNotMatch(html, /modulepreload|type="module"|__VINEXT_RSC|EasyShop/);
});
