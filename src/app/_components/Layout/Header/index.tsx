'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import { FC, ReactElement } from 'react';

import { BrandLogo, SunglassesIcon, MoonIcon, SunIcon, CircleDashIcon } from '@/components/icons';
import { useIsClient } from '@/hooks/useIsClient';
import { useTheme } from '@/states/ThemeProvider';
import { theme } from '@/styles';

import * as styles from './styles.css';
import CommandMenu from '../CommandMenu';

const Header: FC = (): ReactElement | null => {
  const { theme: currentTheme, toggleTheme } = useTheme();

  return (
    <div className={styles.root}>
      <Link href="/">
        <motion.div className={styles.branding} whileHover="hover" initial="initial">
          <motion.div
            variants={{
              initial: { scale: 1, rotateX: 0, rotateY: 0, z: 0 },
              hover: { scale: 1.2, rotateX: -16, rotateY: -16, z: 20 },
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 16 }}
          >
            <BrandLogo
              height={36}
              width={30}
              fill={theme.colors.gray950}
              stroke={theme.colors.gray950}
            />
          </motion.div>

          <motion.div
            className={styles.sunglasses}
            variants={{
              initial: { opacity: 0, rotateX: 0, rotateY: 0, translateY: 0 },
              hover: { opacity: 1, rotateX: -16, rotateY: -16, translateY: 12 },
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 16 }}
          >
            <SunglassesIcon
              height={10}
              width={24}
              fill={theme.colors.gray950}
              stroke={theme.colors.gray950}
            />
          </motion.div>
        </motion.div>
      </Link>

      <div className={styles.menu}>
        <CommandMenu>
          <button className={styles.cmdk} aria-label="Open search menu">
            Search...
            <kbd className={styles.kbd}>⌘K</kbd>
          </button>
        </CommandMenu>

        <button onClick={toggleTheme}>
          <motion.div
            key={currentTheme}
            initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 45 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {!useIsClient() ? (
              <CircleDashIcon height={22} width={22} stroke={theme.colors.text} />
            ) : currentTheme === 'light' ? (
              <MoonIcon height={22} width={22} stroke={theme.colors.text} />
            ) : (
              <SunIcon height={22} width={22} stroke={theme.colors.text} />
            )}
          </motion.div>
        </button>
      </div>
    </div>
  );
};

export default Header;
