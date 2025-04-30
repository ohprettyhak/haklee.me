'use client';

import { PickaxeIcon, SparkleIcon, StorageIcon, ToiletIcon } from '@haklee/icon';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement, useMemo } from 'react';

import { PATH } from '@/constants';
import { theme } from '@/styles';

import * as styles from './styles.css';

const MENU = [
  { key: 'home', title: '홈', path: PATH.INDEX, icon: ToiletIcon },
  { key: 'crafts', title: '크래프트', path: PATH.CRAFT, icon: PickaxeIcon },
  { key: 'projects', title: '프로젝트', path: PATH.PROJECT, icon: StorageIcon },
  { key: 'articles', title: '글', path: PATH.ARTICLE, icon: SparkleIcon },
];

export const NavigationMenu = () => {
  const _pathname: string = usePathname();
  const pathname: string = '/' + _pathname.split('/')[1];

  const menuItems: ReactElement[] = useMemo((): ReactElement[] => {
    return MENU.map(({ key, title, icon: Icon, path }) => {
      const isActive: boolean = pathname === path;

      return (
        <AnimatePresence key={key} mode="wait">
          <motion.li
            key={pathname}
            className={styles.menuItem}
            initial={{
              backgroundColor: theme.color.menuBackground,
              color: theme.color.background,
            }}
            animate={{
              backgroundColor: isActive
                ? theme.color.menuActiveBackground
                : theme.color.menuBackground,
              color: isActive ? theme.color.text : theme.color.background,
            }}
            exit={{
              backgroundColor: theme.color.menuBackground,
              color: theme.color.background,
            }}
            transition={{ duration: 0.5 }}
          >
            <Link href={path} className={styles.menuLink}>
              <Icon size={18} />
              {isActive && (
                <motion.span
                  key={pathname}
                  className={styles.menuName}
                  initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                  animate={{ width: 'auto', opacity: 1, marginLeft: '0.5rem' }}
                  exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                  transition={{ duration: 0.5 }}
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
