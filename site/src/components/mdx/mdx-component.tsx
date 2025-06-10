'use client';

import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { ComponentProps } from 'react';

type MdxComponentProps = {
  code: string;
  blurDataURLs?: Record<string, { blur: string; ratio: number }>;
};

export const MdxComponent = ({ code, blurDataURLs = {} }: MdxComponentProps) => {
  const MDXComponent = useMDXComponent(code);

  return (
    <div className="column gap-[1.125rem]" data-mdx-article={true}>
      <MDXComponent
        components={{
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
          }: { src: string; alt?: string } & Omit<ComponentProps<typeof Image>, 'src' | 'alt'>) => {
            if (!src) return null;

            const imageData = blurDataURLs[src];

            return (
              <span
                className="relative inline-block w-full border border-[var(--color-card-border)] rounded-[0.625rem] overflow-hidden select-none"
                style={imageData?.ratio ? { aspectRatio: imageData.ratio } : undefined}
              >
                <Image
                  className="w-full h-full object-cover"
                  src={src}
                  alt={alt || ''}
                  width={0}
                  height={0}
                  quality={100}
                  placeholder={imageData?.blur ? 'blur' : 'empty'}
                  blurDataURL={imageData?.blur}
                  sizes="100vw"
                  loading="lazy"
                  draggable={false}
                  {...props}
                />
              </span>
            );
          },
        }}
      />
    </div>
  );
};
