import type { Metadata } from 'next';
import { FC, PropsWithChildren, ReactNode } from 'react';

import { BASE_URL, PATH, PROFILE } from '@/constants';

import * as styles from './layout.css';

export const metadata: Metadata = {
  title: `크래프트 — ${PROFILE.TITLE}`,
  openGraph: {
    title: `크래프트 — ${PROFILE.TITLE}`,
    url: `${BASE_URL}${PATH.CRAFT}`,
  },
  twitter: {
    title: `크래프트 — ${PROFILE.TITLE}`,
  },
};

const CraftLayout: FC<PropsWithChildren> = ({ children }): ReactNode => {
  return <div className={styles.root}>{children}</div>;
};

export default CraftLayout;
