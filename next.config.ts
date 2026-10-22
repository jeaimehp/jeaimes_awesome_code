import type { NextConfig } from "next";

// Read basePath from env at build time. Set by the GitHub Actions workflow
// based on the repository name:
//   - Repo "<username>.github.io"        -> basePath = ""   (deployed at root domain)
//   - Any other repo name                -> basePath = "/<repo-name>"
// You can also set this locally with: NEXT_BASE_PATH=/my-portfolio bun run build
const basePath = process.env.NEXT_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static HTML export — required for GitHub Pages hosting.
  // Output is written to ./out and can be deployed directly to GitHub Pages.
  output: "export",
  // Emit trailing slashes so that GitHub Pages serves /section/ as /section/index.html.
  trailingSlash: true,
  // basePath ensures asset URLs (/_next/...) resolve correctly when the site
  // is served from <username>.github.io/<repo-name>/ instead of the root.
  basePath: basePath || undefined,
  // Disable image optimization — GitHub Pages is static and has no Next.js server.
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
