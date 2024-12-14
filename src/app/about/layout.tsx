import type { Metadata } from 'next';
import { FC, PropsWithChildren, ReactNode } from 'react';

export const metadata: Metadata = {
  title: '소개 — haklee',
  openGraph: {
    title: '소개 — haklee',
    url: 'https://www.haklee.me/about',
  },
  twitter: {
    title: '소개 — haklee',
  },
};

const AboutLayout: FC<PropsWithChildren> = ({ children }): ReactNode => {
  return children;
};

export default AboutLayout;
