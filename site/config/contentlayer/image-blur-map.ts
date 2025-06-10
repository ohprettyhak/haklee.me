import sharp from 'sharp';

import { getAbsoluteImagePathFromMdx } from './mdx-image-path';

export type BlurMap = Record<string, { blur: string; ratio: number }>;

/**
 * Generates a blurred image Data URL (base64) and aspect ratio from a given image path or URL.
 *
 * @param {string} src - The image source, either a local file path or a remote URL.
 * @returns {Promise<{ blur: string; ratio: number }>} - A base64-encoded Data URL and aspect ratio.
 * @throws {Error} - Throws if the image cannot be loaded or processed.
 */
export const createBlurDataUrlFromImage = async (
  src: string,
): Promise<{ blur: string; ratio: number }> => {
  try {
    const imageInput = await loadImageInput(src);
    const metadata = await sharp(imageInput).metadata();

    if (!metadata.width || !metadata.height) {
      throw new Error('Failed to get image dimensions');
    }

    const { data: buffer, info: meta } = await sharp(imageInput)
      .resize(128, 128, { fit: 'inside' })
      .blur(5)
      .toBuffer({ resolveWithObject: true });

    return {
      blur: `data:image/${meta.format};base64,${buffer.toString('base64')}`,
      ratio: metadata.width / metadata.height,
    };
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
 * Generates a map of blurred image Data URLs and aspect ratios for a list of image paths within an MDX file.
 *
 * @param {string} mdxFilePath - Absolute path to the MDX file.
 * @param {string[]} imagePaths - List of image paths (relative to the MDX file).
 * @returns {Promise<BlurMap>} - A map where keys are original image paths and values are objects containing blur Data URLs and aspect ratios.
 */
export const createImageBlurMap = async (
  mdxFilePath: string,
  imagePaths: string[],
): Promise<BlurMap> => {
  const entries = await Promise.all(
    imagePaths.map(async (relativePath) => {
      try {
        const absolutePath = getAbsoluteImagePathFromMdx(mdxFilePath, relativePath);
        const { blur, ratio } = await createBlurDataUrlFromImage(absolutePath);
        return [relativePath, { blur, ratio }] as const;
      } catch (err) {
        console.error(`Failed to process image: ${relativePath}`, err);
        return [relativePath, { blur: '', ratio: 0 }] as const;
      }
    }),
  );

  return Object.fromEntries(entries);
};
