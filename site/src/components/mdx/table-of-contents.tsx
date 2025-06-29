'use client';

import * as HoverCard from '@radix-ui/react-hover-card';
import { AnimatePresence, motion } from 'motion/react';
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

  const [hoverShow, setHoverShow] = useState<boolean>(false);

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
    <HoverCard.Root openDelay={100} open={hoverShow} onOpenChange={setHoverShow}>
      <HoverCard.Trigger asChild>
        <ul className="hidden w-full h-fit list-none tablet:flex tablet:flex-col">
          {toc.map(({ id, level }) => (
            <li key={id} className="relative inline-block h-[1.5rem]">
              <button
                className="h-[0.5rem] rounded-full bg-[var(--color-menu-background)]"
                style={{ width: `${widthMap[level]}px` }}
              />
            </li>
          ))}
        </ul>
      </HoverCard.Trigger>
      <HoverCard.Portal forceMount>
        <div>
          <AnimatePresence>
            {hoverShow && (
              <HoverCard.Content side="left" align="start" asChild>
                <motion.ul
                  initial={{ opacity: 0, x: 112 }}
                  animate={{ opacity: 1, x: 96 }}
                  exit={{ opacity: 0, x: 112, transition: { duration: 0.1 } }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className={twMerge(
                    'column relative min-w-[8rem] max-h-[calc(100svh-4rem)] px-3 py-1 -my-1',
                    'rounded-lg border border-[var(--color-toc-border)] bg-[var(--color-toc)] shadow-context-menu',
                    'scrollbar-none overflow-auto z-10 transform-gpu',
                  )}
                >
                  {toc.map(({ id, level, text }) => (
                    <li key={text}>
                      <a
                        href={`#${id}`}
                        className={twMerge(
                          'row-between py-[0.25rem]',
                          'text-[var(--color-text-secondary)] [transition:color_0.2s_cubic-bezier(0.4,0,0.2,1),font-weight_0.2s_cubic-bezier(0.4,0,0.2,1)] hover:text-[var(--color-text)]',
                          id === activeId && 'text-[var(--color-text)] font-medium',
                        )}
                        style={{ marginLeft: `${(level - 2) * 10}px` }}
                      >
                        <span className="text-xs text-left break-keep cursor-pointer hover:font-medium">
                          {text}
                        </span>
                        <span className="ml-[1rem] text-xxxs font-medium uppercase opacity-50">
                          h{level}
                        </span>
                      </a>
                    </li>
                  ))}
                </motion.ul>
              </HoverCard.Content>
            )}
          </AnimatePresence>
        </div>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

const widthMap: Record<number, number> = {
  1: 72 - 6,
  2: 60 - 6,
  3: 48 - 6,
  4: 36 - 6,
  5: 24 - 6,
  6: 12 - 6,
};
