import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const docsDir = path.join(root, "docs");
const publicDir = path.join(root, "public");
const distClientDir = path.join(root, "dist", "client");

async function renderHtml() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("github-pages", `${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const response = await worker.fetch(
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

  if (!response.ok) {
    throw new Error(`Unable to render site HTML: ${response.status}`);
  }

  return response.text();
}

function getCssHref(html) {
  return html.match(/href="(\/assets\/index-[^"]+\.css)"/)?.[1];
}

function makeStaticHtml(html, cssHref) {
  if (!cssHref) {
    throw new Error("Unable to find generated CSS asset.");
  }

  return html
    .replace(/<link rel="modulepreload"[^>]*>/g, "")
    .replace(/<script\b[^>]*>(?:(?!<\/script>)[\s\S])*self\.__VINEXT(?:(?!<\/script>)[\s\S])*<\/script>/g, "")
    .replace(/<script id="_R_">(?:(?!<\/script>)[\s\S])*<\/script>/g, "")
    .replace(/<script[^>]*type="module"[\s\S]*?<\/script>/g, "")
    .replace(/ data-rsc-css-href="[^"]*"/g, "")
    .replace(/ data-precedence="[^"]*"/g, "")
    .replace(new RegExp(cssHref.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), cssHref.slice(1))
    .replace(/(href|src|content)="\/(?!\/)/g, '$1="')
    .replace(/<meta property="og:image" content="home-cover\.png"\/>/, '<meta property="og:image" content="https://eoniancco-hub.github.io/podcast/home-cover.png"/>')
    .replace(/<meta name="twitter:image" content="home-cover\.png"\/>/, '<meta name="twitter:image" content="https://eoniancco-hub.github.io/podcast/home-cover.png"/>')
    .replace("</body>", '<script src="script.js" defer></script></body>');
}

await rm(docsDir, { force: true, recursive: true });
await mkdir(path.join(docsDir, "assets"), { recursive: true });

const html = await renderHtml();
const cssHref = getCssHref(html);
await writeFile(path.join(docsDir, "index.html"), makeStaticHtml(html, cssHref), "utf8");
await writeFile(path.join(docsDir, ".nojekyll"), "", "utf8");

await cp(path.join(distClientDir, cssHref.slice(1)), path.join(docsDir, cssHref.slice(1)), { recursive: true });

for (const fileName of [
  "cover-slide-2.png",
  "cover-slide-3.png",
  "favicon.svg",
  "home-cover.png",
  "industry-agent.png",
  "industry-consultant.png",
  "industry-designer.png",
  "logo.png",
  "og.png",
  "pain-points.png",
  "script.js",
  "service-positioning.png",
]) {
  await cp(path.join(publicDir, fileName), path.join(docsDir, fileName));
}

console.log(`GitHub Pages files written to ${docsDir}`);
