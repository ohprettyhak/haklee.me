'use client';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactElement, useMemo } from 'react';

import { BirdIcon, SparkleIcon, StorageIcon, ToiletIcon } from '@/components/icons';
import { theme } from '@/styles';

import * as styles from './styles.css';

const MENU = [
  { key: 'home', title: '홈', path: '/', icon: ToiletIcon },
  { key: 'about', title: '소개', path: '/about', icon: BirdIcon },
  { key: 'playground', title: '프로젝트', path: '/playground', icon: StorageIcon },
  { key: 'article', title: '글', path: '/article', icon: SparkleIcon },
];

const NavigationMenu: FC = (): ReactElement => {
  const pathname: string = usePathname();

  const menuItems: ReactElement[] = useMemo((): ReactElement[] => {
    return MENU.map(({ key, title, icon: Icon, path }) => {
      const isActive: boolean = pathname === path;

      return (
        <AnimatePresence key={key} mode="wait">
          <motion.li
            key={pathname}
            className={styles.menuItem}
            initial={{
              backgroundColor: theme.colors.menuBackground,
              color: theme.colors.background,
            }}
            animate={{
              backgroundColor: isActive
                ? theme.colors.menuActiveBackground
                : theme.colors.menuBackground,
              color: isActive ? theme.colors.text : theme.colors.background,
            }}
            exit={{
              backgroundColor: theme.colors.menuBackground,
              color: theme.colors.background,
            }}
            transition={{ duration: 0.5 }}
          >
            <Link href={path} className={styles.menuLink}>
              <Icon size={18} stroke={theme.colors.text} />
              {isActive && (
                <motion.span
                  key={pathname}
                  initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                  animate={{
                    width: 'auto',
                    opacity: 1,
                    marginLeft: '0.75rem',
                  }}
                  exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                  transition={{ duration: 0.5 }}
                  className={styles.menuName}
                >
                  {title}
                </motion.span>
              )}
            </Link>
          </motion.li>
        </AnimatePresence>
      );
    });
  }, [pathname]);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <ul className={styles.menu}>{menuItems}</ul>
      </div>
    </div>
  );
};

export default NavigationMenu;
