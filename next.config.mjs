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
  env: {
    NEXT_PUBLIC_BASE_PATH: repo,
  },
  output: isGithubActions ? "export" : undefined,
  basePath: repo || undefined,
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
