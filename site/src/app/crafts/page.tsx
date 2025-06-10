import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

import { allCrafts, type Craft } from 'contentlayer/generated';

import {
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
  TimelineList,
} from '@/components/ui';
import { PATH } from '@/constants';

const Craft = () => {
  const list = getSortedCraftByYears(allCrafts);

  return (
    <TimelineList className="mx-[var(--spacing-inline)]" asChild>
      <section>
        {list.map(({ year, items }) => (
          <TimelineItem key={year} className="pb-[2rem]">
            <TimelineHeading className="mb-[1rem] text-lg font-semibold" id={`#${year}`}>
              {year}.
            </TimelineHeading>
            <TimelineLine />
            <TimelineDot />

            <div className="grid grid-cols-1 w-full gap-[1rem] mobile:grid-cols-2">
              {items.map((craft) => {
                const path: string = `${PATH.CRAFT}/${craft.slug}`;

                return (
                  <Link
                    key={craft.slug}
                    className="opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-70"
                    href={path}
                  >
                    <div className="relative w-full aspect-[1200/630] border-[0.063rem] border-solid border-[var(--color-card-border)] rounded-[0.625rem] overflow-hidden">
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

const getSortedCraftByYears = (crafts: Craft[]) => {
  const grouped = crafts.reduce(
    (map, craft) => {
      const year = dayjs(craft.createdAt).year();
      (map[year] ??= []).push(craft);
      return map;
    },
    {} as Record<number, Craft[]>,
  );

  return Object.entries(grouped)
    .map(([year, items]) => ({
      year: Number(year),
      items: items.sort((a, b) => dayjs(b.createdAt).diff(dayjs(a.createdAt))),
    }))
    .sort((a, b) => b.year - a.year);
};
