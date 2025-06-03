import sharp from 'sharp';

import { getAbsoluteImagePathFromMdx } from './mdx-image-path';

export type BlurMap = Record<string, string>;

/**
 * Generates a blurred image Data URL (base64) from a given image path or URL.
 *
 * @param {string} src - The image source, either a local file path or a remote URL.
 * @returns {Promise<string>} - A base64-encoded Data URL representing the blurred image.
 * @throws {Error} - Throws if the image cannot be loaded or processed.
 */
export const createBlurDataUrlFromImage = async (src: string): Promise<string> => {
  try {
    const imageInput = await loadImageInput(src);

    const { data: buffer, info: meta } = await sharp(imageInput)
      .resize(128, 128, { fit: 'inside' })
      .blur(5)
      .toBuffer({ resolveWithObject: true });

    return `data:image/${meta.format};base64,${buffer.toString('base64')}`;
  } catch (err) {
    console.error(`Failed to create blur for image: ${src}`, err);
    throw new Error(`createBlurDataUrlFromImage failed: ${(err as Error).message}`);
  }
};

/**
 * Loads image data from a source which may be a local file path or a URL.
 *
 * @param {string} src - Image path or URL.
 * @returns {Promise<Buffer | string>} - Returns a Buffer for URL images or the file path string for local images.
 * @throws {Error} - Throws if the remote image cannot be fetched.
 */
const loadImageInput = async (src: string): Promise<Buffer | string> => {
  if (/^https?:\/\//.test(src)) {
    const response = await fetch(src);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  }

  return src;
};

/**
 * Generates a map of blurred image Data URLs for a list of image paths within an MDX file.
 *
 * @param {string} mdxFilePath - Absolute path to the MDX file.
 * @param {string[]} imagePaths - List of image paths (relative to the MDX file).
 * @returns {Promise<BlurMap>} - A map where keys are original image paths and values are base64-encoded blur Data URLs.
 */
export const createImageBlurMap = async (
  mdxFilePath: string,
  imagePaths: string[],
): Promise<BlurMap> => {
  const entries = await Promise.all(
    imagePaths.map(async (relativePath) => {
      try {
        const absolutePath = getAbsoluteImagePathFromMdx(mdxFilePath, relativePath);
        const blurDataUrl = await createBlurDataUrlFromImage(absolutePath);
        return [relativePath, blurDataUrl] as const;
      } catch (err) {
        console.error(`Failed to process image: ${relativePath}`, err);
        return [relativePath, ''] as const;
      }
    }),
  );

  return Object.fromEntries(entries);
};
