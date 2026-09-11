import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
  // Fully static site (no ISR / on-demand revalidation): serve the prerendered
  // routes straight from Workers static assets instead of the default dummy
  // incremental cache, which makes every SSG page 404 in production.
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
