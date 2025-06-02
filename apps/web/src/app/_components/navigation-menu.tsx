'use client';

import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement, useMemo } from 'react';

import { PickaxeIcon, SparkleIcon, StorageIcon, ToiletIcon } from '@/components/icon';
import { PATH } from '@/constants';

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
            className="flex items-center h-[3rem] text-[var(--color-gray950)] user-select-none transform translate-z-0 border border-[var(--color-menu-border)] rounded-[1rem] bg-[rgba(28,27,31,0.03)] backdrop-blur-[4px] will-change-[backdrop-filter] motion-reduce:transition-none"
            initial={{
              backgroundColor: 'var(--color-menu-background)',
              color: 'var(--color-background)',
            }}
            animate={{
              backgroundColor: isActive
                ? 'var(--color-menu-active-background)'
                : 'var(--color-menu-background)',
              color: isActive ? 'var(--color-text)' : 'var(--color-background)',
            }}
            exit={{
              backgroundColor: 'var(--color-menu-background)',
              color: 'var(--color-background)',
            }}
            transition={{ duration: 0.5 }}
          >
            <Link href={path} className="center p-[0.75rem] text-[var(--color-text)]">
              <Icon size={18} />
              {isActive && (
                <motion.span
                  key={pathname}
                  className="center h-fit font-semibold whitespace-nowrap overflow-x-hidden"
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
    <div className="center fixed bottom-[var(--spacing-inline)] w-full">
      <div className="flex justify-center">
        <ul className="flex h-fit gap-[0.5rem]">{menuItems}</ul>
      </div>
    </div>
  );
};
