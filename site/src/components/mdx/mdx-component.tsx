'use client';

import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { ComponentProps, useEffect, useState, useMemo } from 'react';

type MdxComponentProps = {
  code: string;
  blurDataURLs?: Record<string, string>;
};

const aspectRatioCache = new Map<string, number>();

const ImageWithAspectRatio = ({
  src,
  alt,
  blurDataURL,
  ...props
}: {
  src: string;
  alt?: string;
  blurDataURL?: string;
} & Omit<ComponentProps<typeof Image>, 'src' | 'alt'>) => {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  useEffect(() => {
    if (blurDataURL) {
      if (aspectRatioCache.has(blurDataURL)) {
        setAspectRatio(aspectRatioCache.get(blurDataURL)!);
      } else {
        const img = new window.Image();
        img.onload = () => {
          const ratio = img.width / img.height;
          aspectRatioCache.set(blurDataURL, ratio);
          setAspectRatio(ratio);
        };
        img.src = blurDataURL;
      }
    }
  }, [blurDataURL]);

  return (
    <span
      className="relative inline-block w-full border border-[var(--color-card-border)] rounded-[0.625rem] overflow-hidden select-none"
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <Image
        className="w-full h-full object-cover"
        src={src}
        alt={alt || ''}
        width={0}
        height={0}
        quality={100}
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
        sizes="100vw"
        loading="lazy"
        draggable={false}
        {...props}
      />
    </span>
  );
};

export const MdxComponent = ({ code, blurDataURLs = {} }: MdxComponentProps) => {
  const components = useMemo(
    () => ({
      blockquote: ({ children, ...props }: ComponentProps<'blockquote'>) => (
        <blockquote
          className="column p-4 border border-[var(--color-background04)] rounded-[0.625rem] bg-[var(--color-background02)]"
          {...props}
        >
          {children}
        </blockquote>
      ),
      img: ({
        src,
        alt,
        ...props
      }: {
        src: string;
        alt?: string;
      } & Omit<ComponentProps<typeof Image>, 'src' | 'alt'>) => {
        if (!src) return null;

        const blurDataURL = blurDataURLs[src];
        return <ImageWithAspectRatio src={src} alt={alt} blurDataURL={blurDataURL} {...props} />;
      },
    }),
    [blurDataURLs],
  );

  const MDXComponent = useMDXComponent(code);

  return (
    <div className="column gap-[1.125rem]" data-mdx-article={true}>
      <MDXComponent components={components} />
    </div>
  );
};
