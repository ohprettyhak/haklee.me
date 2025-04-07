import { RotateCWIcon } from '@haklee/icon';
import { clsx } from 'clsx';
import { ComponentProps } from 'react';

import * as styles from './styles.css';

type RefreshButtonProps = ComponentProps<'button'> & {
  className?: string;
};

export const RefreshButton = ({ className, ...props }: RefreshButtonProps) => {
  return (
    <button className={clsx(className, styles.button)} {...props}>
      <RotateCWIcon size={20} />
    </button>
  );
};
