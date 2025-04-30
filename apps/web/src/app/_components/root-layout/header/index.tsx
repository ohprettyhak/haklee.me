'use client';

import { BrandLogo, CircleDashIcon, MoonIcon, SunglassesIcon, SunIcon } from '@haklee/icon';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import { PATH } from '@/constants';
import { useIsClient } from '@/hooks/useIsClient';
import { theme } from '@/styles';

import * as styles from './styles.css';

const Header = () => {
  const { theme: currentTheme, setTheme } = useTheme();

  return (
    <div className={styles.root}>
      <Link href={PATH.INDEX}>
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
              fill={theme.color.gray950}
              stroke={theme.color.gray950}
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
            <SunglassesIcon height={10} width={24} />
          </motion.div>
        </motion.div>
      </Link>

      <div className={styles.menu}>
        <button onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}>
          <motion.div
            key={currentTheme}
            initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 45 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {!useIsClient() ? (
              <CircleDashIcon height={22} width={22} />
            ) : currentTheme === 'light' ? (
              <MoonIcon height={22} width={22} />
            ) : (
              <SunIcon height={22} width={22} />
            )}
          </motion.div>
        </button>
      </div>
    </div>
  );
};

export default Header;
