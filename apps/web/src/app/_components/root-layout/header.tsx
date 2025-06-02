'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import { BrandLogo, CircleDashIcon, MoonIcon, SunglassesIcon, SunIcon } from '@/components/icon';
import { PATH } from '@/constants';
import { useIsClient } from '@/hooks/useIsClient';

const Header = () => {
  const { theme: currentTheme, setTheme } = useTheme();

  return (
    <div className="row-between w-full max-w-[var(--spacing-app)] mt-[var(--spacing-inline)] px-[var(--spacing-inline)] z-[var(--z-header)]">
      <Link href={PATH.INDEX}>
        <motion.div
          className="center relative w-[3.25rem] h-[3.25rem] border-[0.0625rem] border-solid border-[var(--color-gray50)] rounded-full bg-[rgba(250,250,250,1)]"
          whileHover="hover"
          initial="initial"
        >
          <motion.div
            className="text-[var(--color-gray950)]"
            variants={{
              initial: { scale: 1, rotateX: 0, rotateY: 0, z: 0 },
              hover: { scale: 1.2, rotateX: -16, rotateY: -16, z: 20 },
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 16 }}
          >
            <BrandLogo height={36} width={30} />
          </motion.div>

          <motion.div
            className="absolute top-0 left-[0.625rem] text-[var(--color-gray950)]"
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

      <div className="center-y gap-[1rem] text-[var(--color-text)]">
        <button
          className="cursor-pointer"
          onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
        >
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
