import React, { ReactElement } from 'react';

import { EDUCATIONS } from '@/constants/educations';
import * as styles from '@/styles/app.css';
import { sprinkles } from '@/styles/sprinkles.css';

const EducationSection = (): ReactElement => {
  return (
    <section className={styles.section.root}>
      <h3 className={styles.section.title}>Education</h3>
      {EDUCATIONS.map(
        ({ school, period, location, major, gpa, doubleMajor }) => (
          <div key={school} className={styles.experienceGrid.root}>
            <div className={styles.experienceGrid.metadataContainer}>
              <p className={styles.experienceGrid.metadataTitle}>
                {period.start} — {period.end}
              </p>
              <p className={styles.experienceGrid.metadataSubTitle}>
                {location}
              </p>
            </div>

            <div className={styles.experienceGrid.contentContainer}>
              <p className={styles.experienceGrid.contentTitle}>{school}</p>
              <p className={styles.experienceGrid.contentSubTitle}>
                {doubleMajor ? `본전공: ${major}` : major}, GPA {gpa}
              </p>
              {doubleMajor && (
                <p
                  className={sprinkles({
                    fontSize: 'sm',
                    color: 'blackAlpha60',
                  })}
                >
                  이중전공: {doubleMajor}
                </p>
              )}
            </div>
          </div>
        ),
      )}
    </section>
  );
};

export default EducationSection;
