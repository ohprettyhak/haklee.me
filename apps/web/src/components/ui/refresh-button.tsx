import { clsx } from 'clsx';
import { ComponentProps } from 'react';

import { RotateCWIcon } from '@/components/icon';

type RefreshButtonProps = ComponentProps<'button'> & {
  className?: string;
};

export const RefreshButton = ({ className, ...props }: RefreshButtonProps) => {
  return (
    <button
      className={clsx(
        'center w-[3rem] h-[3rem] self-center text-[var(--color-text)] cursor-pointer border-[0.063rem] border-solid border-[var(--color-menu-border)] rounded-full bg-[var(--color-menu-background)] transition-colors duration-200 ease-in-out hover:bg-[var(--color-menu-active-background)]',
        className,
      )}
      {...props}
    >
      <RotateCWIcon size={20} />
    </button>
  );
};
