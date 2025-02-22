import type { Metadata } from 'next';
import { FC, PropsWithChildren, ReactNode } from 'react';

import { BASE_URL, PATH, PROFILE } from '@/constants';

export const metadata: Metadata = {
  title: `이력 — ${PROFILE.TITLE}`,
  openGraph: {
    title: `이력 — ${PROFILE.TITLE}`,
    url: `${BASE_URL}${PATH.RESUME}`,
  },
  twitter: {
    title: `이력 — ${PROFILE.TITLE}`,
  },
};

const ResumeLayout: FC<PropsWithChildren> = ({ children }): ReactNode => {
  return children;
};

export default ResumeLayout;
