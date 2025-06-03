'use client';

import { useState } from 'react';

import { BackButton, RefreshButton, Signature } from '@/components/ui';

const SignatureCraft = () => {
  const [key, seyKey] = useState<number>(0);

  const handleRefresh = (): void => {
    seyKey((prev) => prev + 1);
  };

  return (
    <section className="column px-[var(--spacing-inline)]" data-animate={true}>
      <BackButton />

      <h1 className="mt-[2.25rem] text-[var(--color-text)] text-xl font-mono font-semibold">
        Signature
      </h1>
      <p className="mt-[0.5rem] text-[var(--color-text-secondary)] text-sm font-mono">
        Signature component created using <code>motion.dev</code> and <code>CSS</code>.
      </p>

      <div className="center w-full h-[19.5rem] mt-[2.25rem] border-[0.063rem] border-solid border-[var(--color-craft-border)] rounded-[1rem] overflow-hidden">
        <Signature key={key} />
      </div>

      <RefreshButton className="mt-[1.5rem]" onClick={handleRefresh} />
    </section>
  );
};

export default SignatureCraft;
