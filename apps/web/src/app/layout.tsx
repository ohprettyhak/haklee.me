import '@/styles/global.css';
import 'remark-blockquote-alerts/styles/blockquote.min.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import { FC, PropsWithChildren, ReactElement } from 'react';

import { BASE_URL, GA_ID, PROFILE } from '@/constants';
import { ThemeProvider } from '@/states/ThemeProvider';
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
    let preferredTheme;
    window.__onThemeChange = function() {};

    function setTheme(newTheme) {
      window.__theme = newTheme;
      preferredTheme = newTheme;
      document.documentElement.setAttribute('data-theme', newTheme);
      document.documentElement.className = newTheme === 'dark' ? '${darkModeColors}' : '${lightModeColors}';
      document.documentElement.classList.add('${pretendard.variable}');
      
      window.__onThemeChange(newTheme);
    }

    try {
      preferredTheme = localStorage.getItem('theme');
    } catch (err) {}

    window.__setPreferredTheme = function(newTheme) {
      setTheme(newTheme);
      try {
        localStorage.setItem('theme', newTheme);
      } catch (err) {}
    };

    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    if (typeof darkQuery.addEventListener === 'function') {
      darkQuery.addEventListener('change', function(e) {
        window.__setPreferredTheme(e.matches ? 'dark' : 'light');
      });
    } else if (typeof darkQuery.addListener === 'function') {
      darkQuery.addListener(function(e) {
        window.__setPreferredTheme(e.matches ? 'dark' : 'light');
      });
    }

    setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
  })();
`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: PROFILE.TITLE,
  description: PROFILE.DESCRIPTION,
  openGraph: {
    title: PROFILE.TITLE,
    description: PROFILE.DESCRIPTION,
    images: [{ url: PROFILE.PREVIEW_IMAGE, alt: PROFILE.PREVIEW_IMAGE_ALT }],
    type: 'website',
    siteName: PROFILE.TITLE,
    url: BASE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: PROFILE.TITLE,
    description: PROFILE.DESCRIPTION,
    images: [{ url: PROFILE.PREVIEW_IMAGE, alt: PROFILE.PREVIEW_IMAGE_ALT }],
    creator: PROFILE.SOCIAL.TWITTER,
  },
  authors: [{ name: PROFILE.NAME, url: BASE_URL }],
  robots: 'index, follow',
};

const RootLayout: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: colorThemeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <div className={styles.blur} aria-hidden={true} />
          <Layout>{children}</Layout>
          <NavigationMenu />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>

      <Script
        id="_next-ga-init"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_ID}')`,
        }}
      />
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
    </html>
  );
};

export default RootLayout;
