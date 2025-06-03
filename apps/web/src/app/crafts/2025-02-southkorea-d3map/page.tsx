'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

import { BackButton } from '@/components/ui';

const IFRAME_URL = 'https://ohprettyhak.github.io/react-southkorea-d3map/';

const SouthKoreaD3MapCraft = () => {
  const { theme } = useTheme();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage({ theme }, IFRAME_URL);
    }
  }, [theme]);

  return (
    <section className="column px-[var(--spacing-inline)]" data-animate={true}>
      <BackButton />

      <h1 className="mt-[2.25rem] text-[var(--color-text)] text-xl font-mono font-semibold">
        South Korea D3 Map
      </h1>
      <p className="mt-[0.5rem] text-[var(--color-text-secondary)] text-sm font-mono">
        South Korea Map components created using <code>D3.js</code>, <code>GeoJSON</code>, and&nbsp;
        <code>TopoJSON</code>.
      </p>

      <iframe
        ref={iframeRef}
        className="mt-[2.25rem] border-[0.063rem] border-solid border-[var(--color-craft-border)] rounded-[1rem] overflow-hidden"
        src={IFRAME_URL}
        width="100%"
        height="560px"
        frameBorder="0"
      />
    </section>
  );
};

export default SouthKoreaD3MapCraft;
