import { clsx } from 'clsx';
import { ComponentProps } from 'react';

import { RotateCWIcon } from '@/components/icons';
import { theme } from '@/styles';

import * as styles from './styles.css';

type RefreshButtonProps = ComponentProps<'button'> & {
  className?: string;
};

export const RefreshButton = ({ className, ...props }: RefreshButtonProps) => {
  return (
    <button className={clsx(className, styles.button)} {...props}>
      <RotateCWIcon stroke={theme.colors.text} size={20} />
    </button>
  );
};
