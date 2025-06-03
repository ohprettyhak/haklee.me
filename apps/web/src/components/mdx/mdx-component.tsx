'use client';

import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { ComponentProps } from 'react';

type MdxComponentProps = {
  code: string;
  blurDataURLs?: Record<string, string>;
};

export const MdxComponent = ({ code, blurDataURLs = {} }: MdxComponentProps) => {
  const components = {
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

      return (
        <span className="relative inline-block w-full border border-[var(--color-border)] rounded-[0.875rem] overflow-hidden">
          <Image
            className="w-full h-auto object-contain"
            src={src}
            alt={alt || ''}
            width={0}
            height={0}
            quality={100}
            placeholder={blurDataURL ? 'blur' : 'empty'}
            blurDataURL={blurDataURL}
            loading="lazy"
            {...props}
          />
        </span>
      );
    },
  };

  const MDXComponent = useMDXComponent(code);

  return (
    <div className="column gap-[1.125rem]" data-mdx-article={true}>
      <MDXComponent components={components} />
    </div>
  );
};
