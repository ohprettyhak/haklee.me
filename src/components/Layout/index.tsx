import React, { ReactElement, ReactNode } from 'react';

import * as styles from './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  return <div className={styles.LayoutWrapper}>{children}</div>;
};

export default Layout;
