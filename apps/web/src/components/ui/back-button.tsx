'use client';

import { clsx } from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { ComponentProps } from 'react';

import { MoveLeftIcon } from '@/components/icon';

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
    <button
      className={clsx(
        'center-y w-fit py-[0.375rem] px-[0.625rem] text-[var(--color-text)] text-sm font-medium border-[0.063rem] border-solid border-[var(--color-card-border)] rounded-[0.5rem] bg-[var(--color-card-background)] cursor-pointer transition-colors duration-200 ease-in-out gap-[0.25rem] select-none hover:bg-[var(--color-card-hover-background)]',
        className,
      )}
      onClick={handleBack}
      {...props}
    >
      <MoveLeftIcon />
      이전으로
    </button>
  );
};
