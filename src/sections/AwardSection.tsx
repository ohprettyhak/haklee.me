import React from 'react';

import ExperienceLinks from '@/components/ExperienceLinks';
import { AWARDS } from '@/constants/awards';
import * as styles from '@/styles/app.css';

const AwardSection = () => {
  return (
    <section className={styles.section.root}>
      <h3 className={styles.section.title}>Awards</h3>
      <div className={styles.section.content}>
        {AWARDS.map(award => (
          <div key={award.title} className={styles.experienceGrid.root}>
            <div className={styles.experienceGrid.metadataContainer}>
              <p className={styles.experienceGrid.metadataTitle}>
                {award.period.start === award.period.end
                  ? award.period.start
                  : `${award.period.start} — ${award.period.end}`}
              </p>
            </div>

            <div className={styles.experienceGrid.contentContainer}>
              <p className={styles.experienceGrid.contentTitle}>
                {award.title}
              </p>
              <p className={styles.experienceGrid.contentSubTitle}>
                {award.description}
              </p>
              <p className={styles.experienceGrid.contentSubTitle}>
                {award.members}
              </p>
              <p className={styles.experienceGrid.contentSubTitle}>
                {award.technologies.join(', ')}
              </p>
              <ul className={styles.list.root}>
                {award.responsibilities.map(responsibility => (
                  <li key={responsibility} className={styles.list.item}>
                    {responsibility}
                  </li>
                ))}
                <ExperienceLinks links={award.links} />
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardSection;
