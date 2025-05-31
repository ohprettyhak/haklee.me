'use client';

import Image from 'next/image';
import Link from 'next/link';

import { allProjects, type Project } from 'contentlayer/generated';

import { TimelineDot, TimelineHeading, TimelineItem, TimelineLine } from '@/components/ui';

import * as styles from './styles.css';

export const ProjectGrid = () => {
  const list = getSortedProjectByYears(allProjects);

  return (
    <>
      {list.map(({ year, items }) => (
        <TimelineItem key={year} className={styles.item}>
          <TimelineHeading className={styles.heading} id={`#${year}`}>
            {year}.
          </TimelineHeading>
          <TimelineLine />
          <TimelineDot />

          <div className={styles.grid}>
            {items.map(({ slug, cover, title, description, duration, category }) => (
              <Link key={slug} href={`/projects/${slug}`}>
                <div className={styles.card}>
                  <p className={styles.metadata}>
                    {duration} &middot; {category}
                  </p>
                  <div className={styles.cover}>
                    <Image
                      src={cover}
                      alt={title}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      draggable={false}
                      quality={100}
                      fill
                      priority
                    />
                  </div>
                  <h3>{title}</h3>
                  <p className={styles.description}>{description}</p>
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
