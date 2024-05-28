import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';

import * as styles from '@/styles/app.css';
import { sprinkles } from '@/styles/sprinkles.css';

const ProfileSection = (): ReactElement => {
  return (
    <section className={sprinkles({ layout: 'rowBetween', gap: 'md' })}>
      <div className={styles.roundProfileImageWrapper}>
        <StaticImage
          src="https://avatars.githubusercontent.com/u/97780352?v=4"
          alt="Hak Lee"
          width={80}
          height={80}
          style={{ userSelect: 'none' }}
          draggable={false}
          placeholder="blurred"
        />
      </div>
      <div className={sprinkles({ layout: 'columnCenterY', flex: 1 })}>
        <h1 className={sprinkles({ fontSize: 'xl' })}>Hak Lee</h1>
        <p className={sprinkles({ fontSize: 'sm', color: 'blackAlpha60' })}>
          Web Frontend Engineer
        </p>
      </div>
    </section>
  );
};
export default ProfileSection;
