'use client';

import { useState } from 'react';

import { BackButton, RefreshButton, Signature } from '@/components/ui';

import * as styles from './page.css';

const SignatureCraft = () => {
  const [key, seyKey] = useState<number>(0);

  const handleRefresh = (): void => {
    seyKey((prev) => prev + 1);
  };

  return (
    <section className="craft-section" data-animate={true}>
      <BackButton />

      <h1>Signature</h1>
      <p>
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
