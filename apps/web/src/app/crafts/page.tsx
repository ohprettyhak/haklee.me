import Image from 'next/image';
import Link from 'next/link';

import {
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
  TimelineList,
} from '@/components/ui';
import { PATH } from '@/constants';

const content = {
  '2025': [
    {
      id: '2025-01-signature',
      cover: 'https://hstatic.haklee.me/content/crafts/2025-01-signature/preview.webp',
      title: 'Signature',
    },
    {
      id: '2025-02-southkorea-d3map',
      cover: 'https://hstatic.haklee.me/content/crafts/2025-02-southkorea-d3map/preview.webp',
      title: 'South Korea D3 Map',
    },
  ],
};

const Craft = () => {
  return (
    <TimelineList className="mx-[var(--spacing-inline)]" asChild>
      <section>
        {Object.entries(content).map(([year, crafts]) => (
          <TimelineItem key={year} className="pb-[2rem]">
            <TimelineHeading className="mb-[1rem] text-lg font-semibold" id={`#${year}`}>
              {year}.
            </TimelineHeading>
            <TimelineLine />
            <TimelineDot />

            <div className="grid grid-cols-1 w-full gap-[1rem] mobile:grid-cols-2">
              {[...crafts].reverse().map((craft) => {
                const path: string = `${PATH.CRAFT}/${craft.id}`;

                return (
                  <Link
                    key={craft.id}
                    className="opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-70"
                    href={path}
                  >
                    <div className="relative w-full aspect-[1200/630] border-[0.063rem] border-solid border-[var(--color-card-border)] rounded-[0.5rem] overflow-hidden">
                      <Image
                        className="object-cover select-none"
                        src={craft.cover}
                        alt={craft.title}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        draggable={false}
                        quality={100}
                        fill
                        priority
                      />
                    </div>
                    <h3 className="w-full mt-[0.75rem] text-[var(--color-text)] text-sm text-center font-mono font-medium leading-relaxed break-keep">
                      {craft.title}
                    </h3>
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
