import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { BASE_URL, PATH, PROFILE } from '@/constants';

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

const CraftLayout = ({ children }: PropsWithChildren) => {
  return children;
};

export default CraftLayout;
