import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactElement } from 'react';

import {
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
  TimelineList,
} from '@/components/timeline';
import { PATH } from '@/constants';

import * as styles from './page.css';

const content = {
  '2025': [
    {
      id: '2025-01-signature',
      cover: 'https://hstatic.haklee.me/content/crafts/2025-01-signature/preview.webp',
      title: 'Signature',
    },
    {
      id: '2025-02-southkorea-d3map',
      cover: 'https://hstatic.haklee.me/content/crafts/2025-01-signature/preview.webp',
      title: 'South Korea D3 Map',
    },
  ],
};

const Craft: FC = (): ReactElement => {
  return (
    <TimelineList className={styles.root} asChild>
      <section>
        {Object.entries(content).map(([year, crafts]) => (
          <TimelineItem key={year} className={styles.year}>
            <TimelineHeading className={styles.heading} id={`#${year}`}>
              {year}.
            </TimelineHeading>
            <TimelineLine />
            <TimelineDot />

            <div className={styles.grid}>
              {crafts.reverse().map((craft) => {
                const path: string = `${PATH.CRAFT}/${craft.id}`;

                return (
                  <Link key={craft.id} className={styles.item} href={path}>
                    <div className={styles.cover}>
                      <Image
                        src={craft.cover}
                        alt={craft.title}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        draggable={false}
                        quality={100}
                        fill
                        priority
                      />
                    </div>
                    <h3 className={styles.title}>{craft.title}</h3>
                  </Link>
                );
              })}
            </div>
          </TimelineItem>
        ))}
      </section>
    </TimelineList>
  );
};

export default Craft;
