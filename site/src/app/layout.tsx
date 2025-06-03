import '@/styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

import { BASE_URL, GA_ID, PROFILE } from '@/constants';

import { NavigationMenu } from './_components/navigation-menu';
import { RootLayout as Layout } from './_components/root-layout';

const pretendard = localFont({
  src: './_fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  preload: true,
  variable: '--font-pretendard',
});

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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={pretendard.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div
            className="fixed top-0 left-0 w-full h-[4rem] select-none pointer-events-none backdrop-blur-[6px] opacity-95 [mask-image:linear-gradient(to_bottom,var(--color-black)_25%,transparent)] translate-z-0 z-[var(--z-overlay)] mobile:h-[6rem]"
            aria-hidden={true}
          />
          <Layout>{children}</Layout>
          <NavigationMenu />
        </ThemeProvider>
        <Analytics />
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
        async
      />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} async />
    </html>
  );
};

export default RootLayout;
