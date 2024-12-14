'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC, Fragment, ReactElement } from 'react';

import { type Markdown } from '@/app/project/_utils';

import * as styles from './styles.css';

type ProjectGridProps = {
  projects: Markdown[];
};

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
              <Link key={slug} href={`/project/${slug}`}>
                <motion.div className={styles.card}>
                  <p className={styles.metadata}>
                    {frontmatter.duration} &middot; {frontmatter.type}
                  </p>
                  <motion.div className={styles.cover}>
                    <Image
                      src={frontmatter.cover}
                      alt={frontmatter.title}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      draggable={false}
                      fill
                    />
                  </motion.div>
                  <motion.h3>{frontmatter.title}</motion.h3>
                  <motion.p className={styles.description}>{frontmatter.description}</motion.p>
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
