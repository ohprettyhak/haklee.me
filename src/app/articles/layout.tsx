import type { Metadata } from 'next';
import { FC, PropsWithChildren, ReactNode } from 'react';

export const metadata: Metadata = {
  title: '글 — haklee',
  openGraph: {
    title: '글 — haklee',
    url: 'https://www.haklee.me/articles',
  },
  twitter: {
    title: '글 — haklee',
  },
};

const ArticleLayout: FC<PropsWithChildren> = ({ children }): ReactNode => {
  return children;
};

export default ArticleLayout;
