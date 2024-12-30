'use client';
import { clsx } from 'clsx';
import { ComponentProps, FC, ReactElement } from 'react';

import { MoveLeftIcon } from '@/components/icons';
import { theme } from '@/styles';

import * as styles from './styles.css';

type PreviousEntry = { idx?: number } | null;

const BackButton: FC<ComponentProps<'button'>> = ({ className, ...props }): ReactElement => {
  const handleBack = () => {
    const currentHost: string = window.location.origin;
    const currentPathname: string = window.location.pathname;
    const previousEntry: PreviousEntry = window.history.state?.idx > 0 && window.history.state;

    const getParentPath = (pathname: string): string => {
      const segments: string[] = pathname.split('/').filter(Boolean);
      if (segments.length <= 1) return '/';
      return `/${segments.slice(0, -1).join('/')}`;
    };

    const parentPath: string = getParentPath(currentPathname);

    if (previousEntry) {
      const previousUrl = new URL(document.referrer);

      if (previousUrl.origin !== currentHost) {
        window.history.replaceState(null, '', `${currentHost}${parentPath}`);
      } else if (previousUrl.pathname === currentPathname && previousUrl.hash) {
        window.history.replaceState(null, '', `${currentHost}${parentPath}`);
      } else {
        window.history.back();
      }
    } else {
      window.history.replaceState(null, '', `${currentHost}${parentPath}`);
    }
  };

  return (
    <button className={clsx(styles.button, className)} onClick={handleBack} {...props}>
      <MoveLeftIcon stroke={theme.colors.text} />
      이전으로
    </button>
  );
};

export default BackButton;
