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
  assert.match(html, /你只要下單，我們協助完成企劃、講稿、錄製、剪輯、上架到發布/);
  assert.match(html, /Podcast 一季基礎包/);
  assert.match(html, /前往 EasyShop 下單/);
  assert.match(html, /常見問題/);
  assert.match(html, /加入官方 LINE 詢問/);
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
  assert.match(page, /基本包不包含/);
  assert.match(layout, /一站式 Podcast 製作服務｜企劃、講稿、錄製、上架一次完成/);
  assert.match(css, /@media \(max-width: 720px\)/);
  assert.match(script, /data-nav-toggle/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page + layout + css, /_sites-preview|codex-preview/);
});
