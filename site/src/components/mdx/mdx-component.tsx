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
        <Image
          className="w-full h-auto"
          src={src}
          alt={alt || ''}
          width={0}
          height={0}
          quality={100}
          placeholder={blurDataURL ? 'blur' : 'empty'}
          blurDataURL={blurDataURL}
          sizes="100vw"
          loading="lazy"
          {...props}
        />
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
