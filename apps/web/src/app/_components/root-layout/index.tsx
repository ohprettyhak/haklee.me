import { clsx } from 'clsx';
import { ComponentProps, ReactNode } from 'react';

import Header from './header';
import * as styles from './styles.css';

type LayoutProps = ComponentProps<'div'> & {
  className?: string;
  children: ReactNode;
};

export const RootLayout = ({ className, children, ...props }: LayoutProps) => {
  return (
    <div className={styles.root}>
      <Header />
      <main className={clsx(className, styles.main)} data-animate={true} {...props}>
        {children}
      </main>
    </div>
  );
};
