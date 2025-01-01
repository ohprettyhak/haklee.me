'use client';
import { clsx } from 'clsx';
import { useRouter } from 'next/navigation';
import { ComponentProps, FC, ReactElement } from 'react';

import { MoveLeftIcon } from '@/components/icons';
import { theme } from '@/styles';

import * as styles from './styles.css';

const BackButton: FC<ComponentProps<'button'>> = ({ className, ...props }): ReactElement => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button className={clsx(styles.button, className)} onClick={handleBack} {...props}>
      <MoveLeftIcon stroke={theme.colors.text} />
      이전으로
    </button>
  );
};

export default BackButton;
