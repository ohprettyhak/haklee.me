import type { Metadata } from 'next';
import { FC, PropsWithChildren, ReactNode } from 'react';

import { BASE_URL, PATH } from '@/constants';

export const metadata: Metadata = {
  title: '소개 — ${PROFILE.TITLE}',
  openGraph: {
    title: '소개 — ${PROFILE.TITLE}',
    url: `${BASE_URL}${PATH.ABOUT}`,
  },
  twitter: {
    title: '소개 — ${PROFILE.TITLE}',
  },
};

const AboutLayout: FC<PropsWithChildren> = ({ children }): ReactNode => {
  return children;
};

export default AboutLayout;
