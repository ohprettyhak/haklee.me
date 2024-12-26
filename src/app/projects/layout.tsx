import type { Metadata } from 'next';
import { FC, PropsWithChildren, ReactNode } from 'react';

export const metadata: Metadata = {
  title: '프로젝트 — haklee',
  openGraph: {
    title: '프로젝트 — haklee',
    url: 'https://www.haklee.me/projects',
  },
  twitter: {
    title: '프로젝트 — haklee',
  },
};

const ProjectLayout: FC<PropsWithChildren> = ({ children }): ReactNode => {
  return children;
};

export default ProjectLayout;
