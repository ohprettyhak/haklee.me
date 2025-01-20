import { clsx } from 'clsx';
import { ComponentProps, FC, ReactElement } from 'react';

import { RotateCWIcon } from '@/components/icons';
import { theme } from '@/styles';

import * as styles from './styles.css';

type RefreshButtonProps = ComponentProps<'button'> & {
  className?: string;
};

export const RefreshButton: FC<RefreshButtonProps> = ({ className, ...props }): ReactElement => {
  return (
    <button className={clsx(className, styles.button)} {...props}>
      <RotateCWIcon stroke={theme.colors.text} size={20} />
    </button>
  );
};
