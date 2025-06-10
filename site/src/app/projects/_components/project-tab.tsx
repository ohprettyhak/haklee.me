'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ComponentProps, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { PATH } from '@/constants';

type ProjectTabProps = ComponentProps<'div'> & {
  current: 'PROJECT' | 'HACKATHON';
};

const tabs = [
  { key: 'PROJECT', label: '프로젝트', href: PATH.PROJECT },
  { key: 'HACKATHON', label: '해커톤', href: PATH.HACKATHON },
];

export const ProjectTab = ({ className, current, ...props }: ProjectTabProps) => {
  const [behind, setBehind] = useState<{ width: number; x: number } | null>(null);

  const updateBehindPosition = (tab: HTMLElement | null) => {
    if (tab) {
      const { offsetWidth, offsetLeft } = tab;
      setBehind({ width: offsetWidth, x: offsetLeft });
    }
  };

  useEffect(() => {
    const activeTab: HTMLElement | null = document.querySelector(`[data-tab="${current}"]`);
    updateBehindPosition(activeTab);
  }, [current]);

  const handleMouseEnter = (tab: HTMLElement | null) => updateBehindPosition(tab);
  const handleMouseLeave = () => {
    const activeTab: HTMLElement | null = document.querySelector(`[data-tab="${current}"]`);
    updateBehindPosition(activeTab);
  };

  return (
    <div className={twMerge('center w-fit ml-[-0.625rem]', className)} {...props}>
      <motion.div className="center-y relative justify-between">
        {behind && (
          <motion.div
            className="absolute bottom-0 h-full rounded-[0.5rem] bg-[var(--color-tab-behind)] z-[var(--z-behind)]"
            animate={behind}
            initial={false}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            aria-hidden
          />
        )}

        {tabs.map((tab) => (
          <Link
            key={tab.key}
            href={tab.href}
            data-tab={tab.key}
            className={twMerge(
              'py-[0.3754rem] px-[0.625rem] text-[var(--color-text-secondary)] text-center font-medium no-underline transition-colors duration-300 ease-in-out',
              current === tab.key && 'text-[var(--color-text)]',
            )}
            onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
            onMouseLeave={handleMouseLeave}
          >
            {tab.label}
          </Link>
        ))}
      </motion.div>
    </div>
  );
};
