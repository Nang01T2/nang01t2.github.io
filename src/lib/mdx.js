import path from 'path';
import getAllFilesRecursively from './utils/files';

const root = process.cwd();

export function getFiles(type) {
  const prefixPaths = path.join(root, 'posts', type);
  const files = getAllFilesRecursively(prefixPaths);
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file) =>
    file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
  );
}
