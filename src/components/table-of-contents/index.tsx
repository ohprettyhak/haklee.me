'use client';
import { clsx } from 'clsx';
import { FC, ReactElement, useEffect, useRef, useState } from 'react';

import * as styles from './styles.css';

export type TOCType = {
  id: string;
  level: number;
  text: string;
};

type TableOfContentsProps = {
  toc: TOCType[];
};

export const TableOfContents: FC<TableOfContentsProps> = ({ toc }): ReactElement => {
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
    <ul className={styles.list}>
      {toc.map(({ id, level, text }) => (
        <li key={text}>
          <a
            href={`#${id}`}
            className={clsx(styles.item, { [styles.active]: id === activeId })}
            style={{ marginLeft: `${(level - 2) * 10}px` }}
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};
