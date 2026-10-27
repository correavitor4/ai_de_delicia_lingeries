/**
 * Helper to ensure assets (images, icons, files) resolve correctly
 * on both localhost and GitHub Pages (which might have a repository subpath like /repo-name/)
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  if (!basePath) {
    return cleanPath;
  }
  
  // If path already starts with basePath, don't duplicate it
  if (cleanPath.startsWith(basePath)) {
    return cleanPath;
  }
  
  return `${basePath}${cleanPath}`;
}
