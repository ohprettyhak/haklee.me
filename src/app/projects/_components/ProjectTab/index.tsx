'use client';
import { clsx } from 'clsx';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ComponentProps, FC, ReactElement, useEffect, useState } from 'react';

import { PATH } from '@/constants';

import * as styles from './styles.css';

type ProjectTabProps = ComponentProps<'div'> & {
  current: 'PROJECT' | 'HACKATHON';
};

const tabs = [
  { key: 'PROJECT', label: '프로젝트', href: PATH.PROJECT },
  { key: 'HACKATHON', label: '해커톤', href: PATH.HACKATHON },
];

export const ProjectTab: FC<ProjectTabProps> = ({ className, current, ...props }): ReactElement => {
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
    <div className={clsx(styles.root, className)} {...props}>
      <motion.div className={styles.wrapper}>
        {behind && (
          <motion.div
            className={styles.behind}
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
            className={clsx(styles.tab, { [styles.active]: current === tab.key })}
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
