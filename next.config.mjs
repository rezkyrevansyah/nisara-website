/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "";
if (isGithubActions) {
  const repoName = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "");
  if (repoName && !repoName.endsWith(".github.io")) {
    repo = `/${repoName}`;
  }
}

const nextConfig = {
  output: isGithubActions ? "export" : undefined,
  basePath: repo || undefined,
  assetPrefix: repo ? `${repo}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
