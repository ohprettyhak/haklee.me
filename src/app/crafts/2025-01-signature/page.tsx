'use client';
import { FC, ReactElement, useState } from 'react';

import { BackButton } from '@/components/back-button';
import { RefreshButton } from '@/components/refresh-button';
import { Signature } from '@/components/signature';

import * as styles from './page.css';

const SignatureCraft: FC = (): ReactElement => {
  const [key, seyKey] = useState<number>(0);

  const handleRefresh = (): void => {
    seyKey((prev) => prev + 1);
  };

  return (
    <section className={styles.root} data-animate={true}>
      <BackButton />

      <h1 className={styles.title}>Signature</h1>
      <p className={styles.description}>
        Signature component created using <code>motion.dev</code> and <code>CSS</code>.
      </p>

      <div className={styles.signature}>
        <Signature key={key} />
      </div>

      <RefreshButton className={styles.refresh} onClick={handleRefresh} />
    </section>
  );
};

export default SignatureCraft;
