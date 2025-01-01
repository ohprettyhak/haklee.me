'use client';
import { clsx } from 'clsx';
import { ComponentProps, FC, ReactElement, useEffect, useRef } from 'react';

type GiscusProps = ComponentProps<'section'> & {
  className?: string;
};

const Giscus: FC<GiscusProps> = ({ className, ...props }): ReactElement => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'ohprettyhak/haklee.me');
    script.setAttribute('data-repo-id', 'R_kgDOMBikNQ');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOMBikNc4Clm-H');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-lang', 'ko');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-loading', 'lazy');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    if (ref.current) {
      ref.current.appendChild(script);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) ref.current.innerHTML = '';
    };
  }, []);

  return <section className={clsx('giscus-section', className)} ref={ref} {...props} />;
};

export default Giscus;
