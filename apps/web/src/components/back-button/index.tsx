'use client';

import { clsx } from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { ComponentProps } from 'react';

import { MoveLeftIcon } from '@/components/icons';
import { theme } from '@/styles';

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
      <MoveLeftIcon stroke={theme.color.text} />
      이전으로
    </button>
  );
};
