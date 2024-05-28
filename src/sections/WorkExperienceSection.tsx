import React, { ReactElement } from 'react';

import ExperienceLinks from '@/components/ExperienceLinks';
import { WORK_EXPERIENCES } from '@/constants/work-experiences';
import * as styles from '@/styles/app.css';

const WorkExperienceSection = (): ReactElement => {
  return (
    <section className={styles.section.root}>
      <h3 className={styles.section.title}>Work Experience</h3>
      <div className={styles.section.content}>
        {WORK_EXPERIENCES.map(experience => (
          <div key={experience.title} className={styles.experienceGrid.root}>
            <div className={styles.experienceGrid.metadataContainer}>
              <p className={styles.experienceGrid.metadataTitle}>
                {experience.period.start === experience.period.end
                  ? experience.period.start
                  : `${experience.period.start} — ${experience.period.end}`}
              </p>
              <p className={styles.experienceGrid.metadataSubTitle}>
                {experience.location}
              </p>
            </div>

            <div className={styles.experienceGrid.contentContainer}>
              <p className={styles.experienceGrid.contentTitle}>
                {experience.organization}
              </p>
              <p className={styles.experienceGrid.contentSubTitle}>
                {experience.title}
              </p>
              <p className={styles.experienceGrid.contentSubTitle}>
                {experience.technologies.join(', ')}
              </p>
              <ul className={styles.list.root}>
                {experience.responsibilities.map(responsibility => (
                  <li key={responsibility} className={styles.list.item}>
                    {responsibility}
                  </li>
                ))}
                <ExperienceLinks links={experience.links} />
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperienceSection;
