'use client';

import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export type TOCType = {
  id: string;
  level: number;
  text: string;
};

type TableOfContentsProps = {
  toc: TOCType[];
};

export const TableOfContents = ({ toc }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string | null>(toc[0]?.id || null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      let lastVisibleId = activeId;
      entries.forEach((entry) => {
        if (entry.isIntersecting) lastVisibleId = entry.target.id;
      });
      if (lastVisibleId) setActiveId(lastVisibleId);
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: '0px 0px -85% 0px',
      threshold: 0,
    });

    toc.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, [toc, activeId]);

  return (
    <ul className="hidden w-full h-fit list-none gap-[0.25rem] tablet:flex tablet:flex-col">
      {toc.map(({ id, level, text }) => (
        <li key={text}>
          <a
            href={`#${id}`}
            className={twMerge(
              'text-[var(--color-toc)] text-sm text-left break-keep cursor-pointer [transition:color_0.2s_cubic-bezier(0.4,0,0.2,1),font-weight_0.2s_cubic-bezier(0.4,0,0.2,1)] hover:text-[var(--color-text)] hover:font-medium',
              id === activeId && 'text-[var(--color-text)] font-medium',
            )}
            style={{ marginLeft: `${(level - 2) * 10}px` }}
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};
