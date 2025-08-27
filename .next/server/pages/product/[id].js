const CHUNK_PUBLIC_PATH = "server/pages/product/[id].js";
const runtime = require("../../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_14f8521f._.js");
runtime.loadChunk("server/chunks/ssr/[root-of-the-server]__e4971bf9._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_9cbe4711._.js");
runtime.loadChunk("server/chunks/ssr/[root-of-the-server]__974b013f._.js");
runtime.loadChunk("server/chunks/ssr/[root-of-the-server]__f6717f23._.js");
runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/pages/product/[id].tsx [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/pages/_document.tsx [ssr] (ecmascript)\", INNER_APP => \"[project]/pages/_app.tsx [ssr] (ecmascript)\" } [ssr] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/pages/product/[id].tsx [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/pages/_document.tsx [ssr] (ecmascript)\", INNER_APP => \"[project]/pages/_app.tsx [ssr] (ecmascript)\" } [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
