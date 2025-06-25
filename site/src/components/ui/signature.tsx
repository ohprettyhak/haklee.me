'use client';

import { useInView } from 'motion/react';
import { ComponentProps, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

type SignatureProps = ComponentProps<'div'> & {
  className?: string;
};

export const Signature = ({ className, ...props }: SignatureProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '96px',
  });

  return (
    <div
      className={twMerge('group center', className)}
      ref={ref}
      data-animate={isInView}
      {...props}
    >
      <svg
        className="w-[6rem] h-fit max-h-full text-[var(--color-text)] pointer-events-none [stroke-dashoffset:1] [stroke-dasharray:1]"
        width="739"
        height="296"
        viewBox="0 0 739 296"
        fill="none"
      >
        <path
          className="group-data-[animate=true]:animate-[var(--animate-signature-draw)]"
          d="M405.785 61.1951C411.652 57.0617 438.318 46.9284 462.852 39.5951C517.918 22.9284 577.252 10.5284 623.518 5.86173C644.985 3.59507 663.5 4.86124 678.5 9C691.5 12.5869 702 19.5002 705 22.0002"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          pathLength={1}
        />
        <path
          className="group-data-[animate=true]:animate-[var(--animate-signature-draw)]"
          d="M33.1895 91.9337C50.0005 91.9337 65.0005 93.5002 79.0561 96.3337"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          pathLength={1}
        />
        <path
          className="group-data-[animate=true]:animate-[var(--animate-signature-draw)]"
          d="M5 175C5 175 17.8559 163.267 50.7892 147.667C77.4559 134.867 110.523 123.8 136.256 119.134C142.656 117.934 153.166 116 162.5 116C167 116 180.455 117 184 123.5C187.545 130 186.5 139 170.923 157.4C158.523 172.734 150.587 175.221 152.923 185.534C154.5 192.5 161.989 194.067 170.123 195.8C178.923 197.667 189.989 196.067 205.589 190.867C220.789 185.8 235.989 178.467 272.923 158.334C320.656 132.467 339.189 124.467 359.456 121C383.189 117 400.656 125.8 410.123 146.334C415.589 158.067 418.123 170.067 419.189 189.134L419.989 204.734"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          pathLength={1}
        />
        <path
          className="group-data-[animate=true]:animate-[var(--animate-signature-draw)]"
          d="M346 290.801C462.267 233.201 629.333 150.434 684 141.5C699.333 138.967 713.384 140.344 721.5 143.5C730.5 147 734.4 154 734.4 164.801C734.4 177.534 721.696 203.1 687.467 237.467C671 254 665.467 257.467 665.467 257.467"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          pathLength={1}
        />
      </svg>
    </div>
  );
};
