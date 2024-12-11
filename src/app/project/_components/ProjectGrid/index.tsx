'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC, Fragment, ReactElement } from 'react';

import { type Project } from '@/app/project/_utils';

import * as styles from './styles.css';

type ProjectGridProps = {
  projects: Project[];
};

const MotionLink = motion.create(Link);

const ProjectGrid: FC<ProjectGridProps> = ({ projects }): ReactElement => {
  return (
    <Fragment>
      {projects.map(({ year, items }) => (
        <div key={year} className={styles.root}>
          <h2 id={`#${year}`}>{year}.</h2>
          <div className={styles.line} />
          <div className={styles.dot} />

          <div className={styles.grid}>
            {items.map(({ slug, frontmatter }) => (
              <MotionLink key={slug} layoutId={`project-${slug}`} href={`/project/${slug}`}>
                <div className={styles.card}>
                  <p className={styles.metadata}>
                    {frontmatter.duration} &middot; {frontmatter.type}
                  </p>
                  <div className={styles.cover}>
                    <Image
                      src={frontmatter.cover}
                      alt={frontmatter.title}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      fill
                    />
                  </div>
                  <h4>{frontmatter.title}</h4>

                  <p className={styles.description}>{frontmatter.description}</p>
                </div>
              </MotionLink>
            ))}
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default ProjectGrid;
