import path from 'path';

/**
 * Checks whether a given string is a valid HTTP or HTTPS URL.
 *
 * @param {string} value - The string to validate.
 * @returns {boolean} - Returns true if the input is a valid URL, otherwise false.
 */
export const isValidUrl = (value: string): boolean => {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};

/**
 * Resolves the absolute file system path of an image used in an MDX file.
 * If the image path is already a valid URL, it is returned as-is.
 *
 * @param {string} mdxFilePath - Absolute path to the MDX file.
 * @param {string} imagePath - Image path relative to the MDX file or a URL.
 * @returns {string} - Absolute path for local images, or the original URL if the image path is a valid URL.
 */
export const getAbsoluteImagePathFromMdx = (mdxFilePath: string, imagePath: string): string => {
  if (isValidUrl(imagePath)) {
    return imagePath;
  }

  const mdxDirectory = path.dirname(mdxFilePath).replace(/^content[\\/]/, '');
  const relativeImagePath = imagePath.startsWith('./') ? imagePath.slice(2) : imagePath;

  return path.join(process.cwd(), 'content', mdxDirectory, relativeImagePath);
};

/**
 * Finds image paths in Markdown syntax (e.g., `![alt](path)` from MDX or Markdown content).
 *
 * @param {string} mdxContent - The raw MDX or Markdown string to scan.
 * @returns {string[]} An array of extracted image paths.
 *
 * @example
 * findMarkdownImagePaths('![alt](./img/foo.png)');
 * // Returns: ['./img/foo.png']
 */
export const findMarkdownImagePaths = (mdxContent: string): string[] => {
  const imageRegex = /!\[.*?]\((.*?)\)/g;
  const paths: string[] = [];
  let match: RegExpExecArray | null;

  while ((match = imageRegex.exec(mdxContent))) {
    const imagePath = match[1]?.trim();
    if (imagePath) paths.push(imagePath);
  }

  return paths;
};
