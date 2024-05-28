import React, { ReactElement } from 'react';

import ExperienceLinks from '@/components/ExperienceLinks';
import { PROJECT_TYPE, PROJECTS } from '@/constants/projects';
import * as styles from '@/styles/app.css';

const ProjectSection = (): ReactElement => {
  return (
    <section className={styles.section.root}>
      <h3 className={styles.section.title}>Projects</h3>
      <div className={styles.section.content}>
        {PROJECTS.map(project => (
          <div key={project.title} className={styles.experienceGrid.root}>
            <div className={styles.experienceGrid.metadataContainer}>
              <p className={styles.experienceGrid.metadataTitle}>
                {project.period.start === project.period.end
                  ? project.period.start
                  : `${project.period.start} — ${project.period.end}`}
              </p>
              <p className={styles.experienceGrid.metadataSubTitle}>
                {project.type === PROJECT_TYPE.OUTSOURCING_PROJECT
                  ? '외주 프로젝트'
                  : '사이드 프로젝트'}
              </p>
            </div>

            <div className={styles.experienceGrid.contentContainer}>
              <p className={styles.experienceGrid.contentTitle}>
                {project.title}
              </p>
              <p className={styles.experienceGrid.contentSubTitle}>
                {project.description}
              </p>
              <p className={styles.experienceGrid.contentSubTitle}>
                {project.members}
              </p>
              <p className={styles.experienceGrid.contentSubTitle}>
                {project.technologies.join(', ')}
              </p>
              <ul className={styles.list.root}>
                {project.responsibilities.map(responsibility => (
                  <li key={responsibility} className={styles.list.item}>
                    {responsibility}
                  </li>
                ))}
                <ExperienceLinks links={project.links} />
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
