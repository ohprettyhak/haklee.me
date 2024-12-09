import type { Metadata } from 'next';
import { FC, PropsWithChildren, ReactNode } from 'react';

export const metadata: Metadata = {
  title: '프로젝트 — haklee',
};

const PlaygroundLayout: FC<PropsWithChildren> = ({ children }): ReactNode => {
  return children;
};

export default PlaygroundLayout;
