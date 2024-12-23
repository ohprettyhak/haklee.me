'use client';
import { clsx } from 'clsx';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ComponentProps, FC, ReactElement, useEffect, useState } from 'react';

import * as styles from './styles.css';

type TabProps = ComponentProps<'div'> & {
  current: 'PROJECT' | 'PLAYGROUND' | 'HACKATHON';
};

const Tab: FC<TabProps> = ({ className, current, ...props }): ReactElement => {
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

        <Link
          href="/projects"
          data-tab="PROJECT"
          className={clsx(styles.tab, { [styles.active]: current === 'PROJECT' })}
          onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
          onMouseLeave={handleMouseLeave}
        >
          프로젝트
        </Link>

        <Link
          href="/projects?type=playground"
          data-tab="PLAYGROUND"
          className={clsx(styles.tab, { [styles.active]: current === 'PLAYGROUND' })}
          onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
          onMouseLeave={handleMouseLeave}
        >
          플레이그라운드
        </Link>

        <Link
          href="/projects?type=hackathon"
          data-tab="HACKATHON"
          className={clsx(styles.tab, { [styles.active]: current === 'HACKATHON' })}
          onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
          onMouseLeave={handleMouseLeave}
        >
          해커톤
        </Link>
      </motion.div>
    </div>
  );
};

export default Tab;
