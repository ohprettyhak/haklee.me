'use client';

import { FC, ReactElement, useEffect, useRef } from 'react';

import { BackButton } from '@/components/back-button';
import { useTheme } from '@/states/ThemeProvider';

import * as styles from './page.css';

const IFRAME_URL = 'https://ohprettyhak.github.io/react-southkorea-d3map/';

const SouthKoreaD3MapCraft: FC = (): ReactElement => {
  const { theme } = useTheme();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage({ theme }, IFRAME_URL);
    }
  }, [theme]);

  return (
    <section className="craft-section" data-animate={true}>
      <BackButton />

      <h1>South Korea D3 Map</h1>
      <p>
        South Korea Map components created using <code>D3.js</code>, <code>GeoJSON</code>, and&nbsp;
        <code>TopoJSON</code>.
      </p>

      <iframe
        ref={iframeRef}
        className={styles.iframe}
        src={IFRAME_URL}
        width="100%"
        height="560px"
        frameBorder="0"
      />
    </section>
  );
};

export default SouthKoreaD3MapCraft;
