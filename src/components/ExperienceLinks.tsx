import React, { ReactElement } from 'react';

import { CommonAttributes } from '@/constants/_types';
import * as styles from '@/styles/app.css';

const ExperienceLinks = ({
  links,
}: {
  links: CommonAttributes['links'];
}): ReactElement | null => {
  const { website, application, github } = links;

  if (!website && !github && !application) return null;

  return (
    <li className={styles.list.item}>
      {website && (
        <>
          <a
            className={styles.experienceGrid.contentExternalLink}
            href={website}
            target="_blank"
          >
            Website
          </a>
          {(application || github) && ', '}
        </>
      )}
      {application && (
        <>
          <a
            className={styles.experienceGrid.contentExternalLink}
            href={application}
            target="_blank"
          >
            Application
          </a>
          {github && ', '}
        </>
      )}
      {github && (
        <a
          className={styles.experienceGrid.contentExternalLink}
          href={github}
          target="_blank"
        >
          Github
        </a>
      )}
    </li>
  );
};

export default ExperienceLinks;
