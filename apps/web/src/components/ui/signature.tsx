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
        height="298"
        viewBox="0 0 739 298"
        fill="none"
      >
        <path
          className="group-data-[animate=true]:animate-[var(--animate-signature-draw)]"
          d="M405.785 61.1948C411.652 57.0615 438.318 46.9282 462.852 39.5948C517.918 22.9282 577.252 10.5282 623.518 5.86149C644.985 3.59482 675.252 5.99482 686.318 10.7948C693.385 13.7282 702 19.5 705 22"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          pathLength={1}
        />
        <path
          className="group-data-[animate=true]:animate-[var(--animate-signature-draw)]"
          d="M33.189 91.9335C50 91.9335 65 93.5 79.0556 96.3335"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          pathLength={1}
        />
        <path
          className="group-data-[animate=true]:animate-[var(--animate-signature-draw)]"
          d="M5 175C5 175 17.8559 163.267 50.7892 147.667C77.4559 134.867 110.523 123.8 136.256 119.133C142.656 117.933 153.189 117.267 162.523 117.4C175.989 117.667 178 118 181.856 120.467C191.189 127.4 188.923 135.133 170.923 157.4C158.523 172.733 152.923 181.533 152.923 185.533C152.923 188.6 161.989 194.067 170.123 195.8C178.923 197.667 189.989 196.067 205.589 190.867C220.789 185.8 235.989 178.467 272.923 158.333C320.656 132.467 339.189 124.467 359.456 121C383.189 117 400.656 125.8 410.123 146.333C415.589 158.067 418.123 170.067 419.189 189.133L419.989 204.733"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          pathLength={1}
        />
        <path
          className="group-data-[animate=true]:animate-[var(--animate-signature-draw)]"
          d="M346 290.8C462.267 233.2 630.667 152.4 685.333 143.467C700.667 140.934 715.6 141.734 723.467 145.467C732.133 149.734 734.933 154.667 734.4 164.8C733.467 181.334 720.267 201.734 687.467 237.467C672.4 253.867 665.467 257.467 665.467 257.467"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          pathLength={1}
        />
      </svg>
    </div>
  );
};
