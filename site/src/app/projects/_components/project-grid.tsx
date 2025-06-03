'use client';

import Image from 'next/image';
import Link from 'next/link';

import { allProjects, type Project } from 'contentlayer/generated';

import { TimelineDot, TimelineHeading, TimelineItem, TimelineLine } from '@/components/ui';

export const ProjectGrid = () => {
  const list = getSortedProjectByYears(allProjects);

  return (
    <>
      {list.map(({ year, items }) => (
        <TimelineItem key={year} className="pb-[2rem]">
          <TimelineHeading className="mb-[1rem] text-lg font-semibold" id={`#${year}`}>
            {year}.
          </TimelineHeading>
          <TimelineLine />
          <TimelineDot />

          <div className="grid grid-cols-1 w-full gap-[1rem] mobile:grid-cols-2">
            {items.map(({ slug, cover, title, description, duration, category }) => (
              <Link key={slug} href={`/projects/${slug}`}>
                <div className="column w-full py-[0.75rem] px-[1rem] border-[0.063rem] border-solid border-[var(--color-card-border)] rounded-[0.5rem] bg-[var(--color-card-background)] transition-colors duration-300 ease-in-out hover:border-[var(--color-card-hover)] hover:bg-[var(--color-card-hover-background)]">
                  <p className="text-[var(--color-text-secondary)] text-xs font-medium break-keep">
                    {duration} &middot; {category}
                  </p>
                  <div className="relative w-full mt-[0.5rem] aspect-[1200/630] border-[0.063rem] border-solid border-[var(--color-card-border)] rounded-[0.625rem] overflow-hidden">
                    <Image
                      className="object-cover select-none"
                      src={cover}
                      alt={title}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      draggable={false}
                      quality={100}
                      fill
                      priority
                    />
                  </div>
                  <h3 className="mt-[0.75rem] text-[var(--color-text)] font-medium leading-relaxed break-keep">
                    {title}
                  </h3>
                  <p className="mt-[0.125rem] text-[var(--color-text-secondary)] text-sm leading-relaxed break-keep">
                    {description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </TimelineItem>
      ))}
    </>
  );
};

const getSortedProjectByYears = (projects: Project[]) => {
  const grouped = projects.reduce((map, project) => {
    const yearMatch = project.duration.match(/^\d{4}/);
    if (yearMatch) {
      const year = parseInt(yearMatch[0], 10);
      if (!map.has(year)) map.set(year, []);
      map.get(year)!.push(project);
    }
    return map;
  }, new Map<number, Project[]>());

  return Array.from(grouped.entries())
    .map(([year, items]) => ({
      year,
      items: items.sort((a, b) => b.duration.localeCompare(a.duration)),
    }))
    .sort((a, b) => b.year - a.year);
};
