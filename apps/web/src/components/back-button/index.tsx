'use client';

import { MoveLeftIcon } from '@haklee/icon';
import { clsx } from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { ComponentProps } from 'react';

import * as styles from './styles.css';

type BackButtonProps = ComponentProps<'button'> & {
  className?: string;
};

export const BackButton = ({ className, ...props }: BackButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleBack = () => {
    if (pathname === '/') {
      router.back();
      return;
    }

    const path: string[] = pathname.split('/').filter(Boolean);
    if (path.length > 1) {
      const parent = `/${path.slice(0, -1).join('/')}`;
      router.replace(parent);
    } else {
      router.replace('/');
    }
  };

  return (
    <button className={clsx(className, styles.button)} onClick={handleBack} {...props}>
      <MoveLeftIcon />
      이전으로
    </button>
  );
};
