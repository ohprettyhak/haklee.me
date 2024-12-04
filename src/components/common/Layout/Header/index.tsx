'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import { FC, ReactElement } from 'react';

import { BrandIcon, SunglassesIcon } from '@/components/icons';
import { theme } from '@/styles';

import * as styles from './styles.css';

const Header: FC = (): ReactElement => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Link href="/" className={styles.branding}>
          <motion.div
            whileHover="hover"
            initial="initial"
            style={{ position: 'relative', display: 'inline-block' }}
          >
            <motion.div
              variants={{
                initial: { scale: 1, rotateX: 0, rotateY: 0, z: 0 },
                hover: { scale: 1.2, rotateX: -16, rotateY: -16, z: 20 },
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 16 }}
            >
              <BrandIcon
                height={36}
                width={30}
                fill={theme.colors.gray950}
                stroke={theme.colors.gray950}
              />
            </motion.div>

            <motion.div
              variants={{
                initial: { opacity: 0, rotateX: 0, rotateY: 0, translateY: -2 },
                hover: { opacity: 1, rotateX: -16, rotateY: -16, translateY: 5 },
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 16 }}
              style={{ position: 'absolute', top: 0 }}
            >
              <SunglassesIcon height={10} width={24} fill={theme.colors.gray950} />
            </motion.div>
          </motion.div>
        </Link>
      </header>
    </div>
  );
};

export default Header;
