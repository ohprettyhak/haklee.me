import type { Metadata } from 'next';
import { FC, PropsWithChildren, ReactNode } from 'react';

import { BASE_URL, PATH, PROFILE } from '@/constants';

export const metadata: Metadata = {
  title: `글 — ${PROFILE.TITLE}`,
  openGraph: {
    title: `글 — ${PROFILE.TITLE}`,
    url: `${BASE_URL}${PATH.ARTICLE}`,
  },
  twitter: {
    title: `글 — ${PROFILE.TITLE}`,
  },
};

const ArticleLayout: FC<PropsWithChildren> = ({ children }): ReactNode => {
  return children;
};

export default ArticleLayout;
