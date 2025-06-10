'use client';

import { useState } from 'react';

import { Signature as BaseSignature } from '@/components/ui';

import { RefreshButton } from './refresh-button';

export const Signature = () => {
  const [key, seyKey] = useState<number>(0);

  const handleRefresh = (): void => {
    seyKey((prev) => prev + 1);
  };

  return (
    <>
      <div className="center w-full h-[19.5rem] border-[0.063rem] border-solid border-[var(--color-craft-border)] rounded-[1rem] overflow-hidden">
        <BaseSignature key={key} />
      </div>
      <RefreshButton className="mt-[1.5rem]" onClick={handleRefresh} />
    </>
  );
};
