'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC, Fragment, ReactElement } from 'react';

import { type Project } from 'contentlayer/generated';

import * as styles from './styles.css';

type ProjectGridProps = {
  list: Project[];
};

const ProjectGrid: FC<ProjectGridProps> = ({ list: _list }): ReactElement => {
  const list = getSortedProjectByYears(_list);

  return (
    <Fragment>
      {list.map(({ year, items }) => (
        <div key={year} className={styles.root}>
          <h2 id={`#${year}`}>{year}.</h2>
          <div className={styles.line} />
          <div className={styles.dot} />

          <div className={styles.grid}>
            {items.map(({ slug, cover, title, description, duration, category }) => (
              <Link key={slug} href={`/projects/${slug}`}>
                <motion.div className={styles.card}>
                  <p className={styles.metadata}>
                    {duration} &middot; {category}
                  </p>
                  <motion.div className={styles.cover}>
                    <Image
                      src={cover}
                      alt={title}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      draggable={false}
                      quality={100}
                      fill
                      priority
                    />
                  </motion.div>
                  <motion.h3>{title}</motion.h3>
                  <motion.p className={styles.description}>{description}</motion.p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default ProjectGrid;

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
