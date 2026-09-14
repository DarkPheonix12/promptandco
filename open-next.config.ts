import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

/**
 * `buildCommand` must point at plain `next build`.
 *
 * OpenNext's build step runs this command internally to build the Next.js app.
 * Its default is `npm run build`, but this package's `build` script is
 * `opennextjs-cloudflare build` (Cloudflare Workers Builds runs
 * `npm run build` as the user build command, and it must produce the
 * `.open-next` output). Without this override the outer build would invoke
 * the script again, recursing until the CI job times out.
 */
export default {
  ...defineCloudflareConfig({
    // Fully static site (no ISR / on-demand revalidation): serve the prerendered
    // routes straight from Workers static assets instead of the default dummy
    // incremental cache, which makes every SSG page 404 in production.
    incrementalCache: staticAssetsIncrementalCache,
    enableCacheInterception: true,
  }),
  buildCommand: "next build",
};
