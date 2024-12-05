import '@/styles/global.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import React, { FC, PropsWithChildren, ReactElement } from 'react';

import { darkModeColors, lightModeColors } from '@/styles';

import Header from './_components/Header';
import Layout from './_components/Layout';
import NavigationMenu from './_components/NavigationMenu';

const suit = localFont({
  src: './_fonts/SUIT-Variable.woff2',
  display: 'swap',
  weight: '45 920',
  preload: true,
  variable: '--font-suit',
});

const colorThemeScript = `
  (function() {
    window.__onThemeChange = function() {};
    function setTheme(newTheme) {
      window.__theme = newTheme;
      preferredTheme = newTheme;
      document.documentElement.setAttribute('data-theme', newTheme);
      document.documentElement.className = newTheme === 'dark' ? '${darkModeColors} ${suit.variable}' : '${lightModeColors} ${suit.variable}';
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
  description: "A website featuring Hak Lee's resume and portfolio.",
};

const RootLayout: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: colorThemeScript }} />
        <title>haklee</title>
      </head>
      <body>
        <Layout>{children}</Layout>
        <NavigationMenu />
      </body>
    </html>
  );
};

export default RootLayout;
