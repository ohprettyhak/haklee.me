import '@/styles/global.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { FC, ReactElement, ReactNode } from 'react';

import { darkModeColors, lightModeColors } from '@/styles';

import Layout from './_components/Layout';
import NavigationMenu from './_components/NavigationMenu';
import * as styles from './page.css';

const pretendard = localFont({
  src: './_fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  preload: true,
  variable: '--font-pretendard',
});

const colorThemeScript = `
  (function() {
    window.__onThemeChange = function() {};
    function setTheme(newTheme) {
      window.__theme = newTheme;
      preferredTheme = newTheme;
      document.documentElement.setAttribute('data-theme', newTheme);
      document.documentElement.className = newTheme === 'dark' ? '${darkModeColors} ${pretendard.variable}' : '${lightModeColors} ${pretendard.variable}';
      window.__onThemeChange(newTheme);
    }
    var preferredTheme;
    try {
      preferredTheme = localStorage.getItem('theme');
    } catch (err) {}
    window.__setPreferredTheme = function(newTheme) {
      setTheme(newTheme);
      try {
        localStorage.setItem('theme', newTheme);
      } catch (err) {}
    }
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkQuery.addListener(function(e) {
      window.__setPreferredTheme(e.matches ? 'dark' : 'light');
    });
    setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
  })();
`;

export const metadata: Metadata = {
  metadataBase: new URL('https://www.haklee.me'),
  title: 'haklee',
  description: "A website featuring Hak Lee's resume and portfolio.",
  openGraph: {
    title: 'haklee',
    description: "A website featuring Hak Lee's resume and portfolio.",
    images: '/static/preview.png',
    type: 'website',
    siteName: 'haklee',
    url: 'https://www.haklee.me',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'haklee',
    description: "A website featuring Hak Lee's resume and portfolio.",
    images: '/static/preview.png',
    creator: '@masonthecode',
  },
  authors: [
    {
      name: 'Hak Lee',
      url: 'https://www.haklee.me',
    },
  ],
};

type RootLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children, modal }): ReactElement => {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: colorThemeScript }} />
      </head>
      <body>
        <div className={styles.blur} aria-hidden={true} />
        <Layout>{children}</Layout>
        <NavigationMenu />
        {modal}
      </body>
    </html>
  );
};

export default RootLayout;
