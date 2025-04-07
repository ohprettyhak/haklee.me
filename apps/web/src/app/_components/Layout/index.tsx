import { clsx } from 'clsx';
import { ComponentProps, ReactNode } from 'react';

import Header from './Header';
import * as styles from './styles.css';

type LayoutProps = ComponentProps<'div'> & {
  className?: string;
  children: ReactNode;
};

const Layout = ({ className, children, ...props }: LayoutProps) => {
  return (
    <div className={styles.root}>
      <Header />
      <main className={clsx(className, styles.main)} data-animate={true} {...props}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
