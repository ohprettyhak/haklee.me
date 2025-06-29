'use client';

import * as HoverCard from '@radix-ui/react-hover-card';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useCallback, useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { throttle } from '@/hooks';

export type TOCType = {
  id: string;
  level: number;
  text: string;
};

type TableOfContentsProps = {
  toc: TOCType[];
};

export const TableOfContents = ({ toc }: TableOfContentsProps) => {
  const { activeId, sectionProgress, totalProgress } = useScrollProgress(toc);
  const deferredProgress = useDeferredValue(totalProgress);
  const [hoverShow, setHoverShow] = useState<boolean>(false);

  return (
    <div>
      <HoverCard.Root openDelay={100} open={hoverShow} onOpenChange={setHoverShow}>
        <HoverCard.Trigger asChild>
          <ul className="hidden w-full h-fit list-none tablet:flex tablet:flex-col">
            {toc.map(({ id, level }) => {
              const isActive = activeId === id;
              return (
                <li key={id} className="relative inline-flex items-center h-[1.5rem]">
                  <div
                    className={twMerge(
                      'h-[0.35rem] rounded-full overflow-hidden',
                      isActive
                        ? 'bg-[var(--color-menu-border)]'
                        : 'bg-[var(--color-menu-background)]',
                    )}
                    style={{ width: `${LEVEL_WIDTH_MAP[level]}px` }}
                  >
                    {isActive && (
                      <span
                        className="block h-full rounded-full bg-[var(--color-menu-active-background)] transition-all duration-100 ease-in-out"
                        style={{ width: `${sectionProgress * 100}%` }}
                      />
                    )}
                  </div>
                </li>
              );
            })}
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
                      'scrollbar-none overflow-auto z-[var(--z-overlay)] transform-gpu',
                    )}
                  >
                    {toc.map(({ id, level, text }) => (
                      <li key={text}>
                        <Link
                          href={`#${id}`}
                          className={twMerge(
                            'row-between py-[0.25rem]',
                            'text-[var(--color-text-secondary)] [transition:color_0.2s_cubic-bezier(0.4,0,0.2,1),font-weight_0.2s_cubic-bezier(0.4,0,0.2,1)] hover:text-[var(--color-text)]',
                            id === activeId && 'text-[var(--color-text)] font-medium',
                          )}
                          style={{ marginLeft: `${(level - 2) * 10}px` }}
                          replace
                        >
                          <span className="text-xs text-left break-keep cursor-pointer hover:font-medium">
                            {text}
                          </span>
                          <span className="ml-[1rem] text-xxxs font-medium uppercase opacity-60">
                            h{level}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                </HoverCard.Content>
              )}
            </AnimatePresence>
          </div>
        </HoverCard.Portal>
      </HoverCard.Root>

      <div>
        <div>{Math.round(deferredProgress * 100)}%</div>
        <button>위로 올리기</button>
      </div>
    </div>
  );
};

const LEVEL_WIDTH_MAP: Record<number, number> = { 1: 72, 2: 72, 3: 60, 4: 48, 5: 36, 6: 24 };
const SCROLL_CONFIG = { THROTTLE_DELAY: 16, MAX_OFFSET: 64, OFFSET_RATIO: 0.1 } as const;

const useScrollProgress = (toc: TOCType[]) => {
  const [activeId, setActiveId] = useState<string | null>(toc[0]?.id || null);
  const [sectionProgress, setSectionProgress] = useState<number>(0);
  const [totalProgress, setTotalProgress] = useState<number>(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<Map<string, HTMLElement>>(new Map());

  const tocMap = useMemo(
    () =>
      toc.reduce(
        (acc, item, index) => {
          acc[item.id] = { ...item, index };
          return acc;
        },
        {} as Record<string, TOCType & { index: number }>,
      ),
    [toc],
  );

  const calculateTotalProgress = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    return Math.min(scrollTop / (documentHeight - windowHeight), 1);
  }, []);

  const calculateDynamicOffset = useCallback((sectionHeight: number) => {
    return Math.min(SCROLL_CONFIG.MAX_OFFSET, sectionHeight * SCROLL_CONFIG.OFFSET_RATIO);
  }, []);

  const getNextSectionTop = useCallback(
    (currentId: string): number => {
      const current = tocMap[currentId];
      if (!current) return document.body.scrollHeight;

      for (let i = current.index + 1; i < toc.length; i++) {
        const nextItem = toc[i];
        if (!nextItem) continue;

        if (nextItem.level <= current.level) {
          const nextElement = elementsRef.current.get(nextItem.id);
          if (nextElement) return nextElement.offsetTop;
        }
      }
      return document.body.scrollHeight;
    },
    [toc, tocMap],
  );

  const calculateSectionProgress = useCallback(
    (activeId: string): number => {
      const element = elementsRef.current.get(activeId);
      if (!element) return 0;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const sectionTop = element.offsetTop;
      const sectionBottom = getNextSectionTop(activeId);
      const sectionHeight = sectionBottom - sectionTop;

      const dynamicOffset = calculateDynamicOffset(sectionHeight);
      const adjustedScrollTop = scrollTop + dynamicOffset;

      if (adjustedScrollTop < sectionTop) return 0;
      if (adjustedScrollTop >= sectionBottom) return 1;

      return (adjustedScrollTop - sectionTop) / sectionHeight;
    },
    [getNextSectionTop, calculateDynamicOffset],
  );

  const getActiveId = useCallback((): string | null => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    for (let i = toc.length - 1; i >= 0; i--) {
      const item = toc[i];
      if (!item) continue;

      const element = elementsRef.current.get(item.id);
      if (!element) continue;

      const sectionHeight = getNextSectionTop(item.id) - element.offsetTop;
      const dynamicOffset = calculateDynamicOffset(sectionHeight);

      if (scrollTop + dynamicOffset >= element.offsetTop) {
        return item.id;
      }
    }

    return toc[0]?.id || null;
  }, [toc, getNextSectionTop, calculateDynamicOffset]);

  const handleScrollLogic = useCallback(() => {
    setTotalProgress(calculateTotalProgress());

    const newActiveId = getActiveId();
    setActiveId(newActiveId);

    if (newActiveId) {
      setSectionProgress(calculateSectionProgress(newActiveId));
    }
  }, [calculateTotalProgress, getActiveId, calculateSectionProgress]);

  const throttledScrollRef = useRef(throttle(handleScrollLogic, SCROLL_CONFIG.THROTTLE_DELAY));

  useEffect(() => {
    throttledScrollRef.current = throttle(handleScrollLogic, SCROLL_CONFIG.THROTTLE_DELAY);
  }, [handleScrollLogic]);

  const handleScroll = useCallback(() => {
    throttledScrollRef.current();
  }, []);

  useEffect(() => {
    elementsRef.current.clear();

    toc.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        elementsRef.current.set(id, element);
      }
    });

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) handleScroll();
        });
      },
      { rootMargin: '0px 0px -85% 0px', threshold: 0 },
    );

    elementsRef.current.forEach((element) => {
      observerRef.current?.observe(element);
    });

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toc, handleScroll]);

  return { activeId, sectionProgress, totalProgress };
};
