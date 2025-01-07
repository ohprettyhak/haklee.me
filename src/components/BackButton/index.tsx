'use client';
import { clsx } from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { ComponentProps, FC, ReactElement } from 'react';

import { MoveLeftIcon } from '@/components/icons';
import { theme } from '@/styles';

import * as styles from './styles.css';

const BackButton: FC<ComponentProps<'button'>> = ({ className, ...props }): ReactElement => {
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
    <button className={clsx(styles.button, className)} onClick={handleBack} {...props}>
      <MoveLeftIcon stroke={theme.colors.text} />
      이전으로
    </button>
  );
};

export default BackButton;
