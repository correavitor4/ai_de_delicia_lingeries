/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

// Support GitHub Pages repository path or custom domain / local dev
const getBasePath = () => {
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }
  if (process.env.GITHUB_REPOSITORY && isProd) {
    const repo = process.env.GITHUB_REPOSITORY.split('/')[1];
    return `/${repo}`;
  }
  return '';
};

const basePath = getBasePath();

const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
