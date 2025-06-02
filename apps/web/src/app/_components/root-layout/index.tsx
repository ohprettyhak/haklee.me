import { clsx } from 'clsx';
import { ComponentProps, ReactNode } from 'react';

import Header from './header';

type LayoutProps = ComponentProps<'div'> & {
  className?: string;
  children: ReactNode;
};

export const RootLayout = ({ className, children, ...props }: LayoutProps) => {
  return (
    <div className="column w-full max-w-[var(--spacing-app)] h-full mx-auto">
      <Header />
      <main
        className={clsx(className, 'column flex-1 pt-[calc(var(--spacing-inline)*2)] pb-[6rem]')}
        data-animate={true}
        {...props}
      >
        {children}
      </main>
    </div>
  );
};
