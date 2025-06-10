'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef, useCallback } from 'react';

const IFRAME_URL = 'https://ohprettyhak.github.io/react-southkorea-d3map/';

export const MapIframe = () => {
  const { resolvedTheme: theme } = useTheme();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const postThemeMessage = useCallback(() => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage({ theme }, IFRAME_URL);
    }
  }, [theme]);

  useEffect(() => {
    postThemeMessage();
  }, [theme, postThemeMessage]);

  const handleLoad = () => {
    postThemeMessage();
  };

  return (
    <iframe
      ref={iframeRef}
      className="border-[0.063rem] border-solid border-[var(--color-craft-border)] rounded-[1rem] overflow-hidden"
      src={IFRAME_URL}
      width="100%"
      height="560px"
      frameBorder="0"
      onLoad={handleLoad}
    />
  );
};
