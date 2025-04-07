import type { Metadata } from 'next';
import { FC, PropsWithChildren, ReactNode } from 'react';

import { BASE_URL, PATH, PROFILE } from '@/constants';

export const metadata: Metadata = {
  title: `프로젝트 — ${PROFILE.TITLE}`,
  openGraph: {
    title: `프로젝트 — ${PROFILE.TITLE}`,
    url: `${BASE_URL}${PATH.PROJECT}`,
  },
  twitter: {
    title: `프로젝트 — ${PROFILE.TITLE}`,
  },
};

const ProjectLayout: FC<PropsWithChildren> = ({ children }): ReactNode => {
  return children;
};

export default ProjectLayout;
