'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type Props = {
  key?: string;
  src: string;
  alt: string;
  className?: string;
};

export const Cover = ({ key, src, alt, className }: Props) => {
  return (
    <motion.div
      layoutId={key}
      className={twMerge(
        'relative w-full aspect-[720/450] border-[0.063rem] border-solid border-[var(--color-card-border)] rounded-[0.625rem] overflow-hidden',
        className,
      )}
    >
      {src.endsWith('.mp4') ? (
        <video
          className="w-full h-full object-cover transform scale-105 select-none outline-none focus:outline-none focus:ring-0 focus:shadow-none"
          draggable={false}
          muted
          loop
          playsInline
          autoPlay
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <Image
          className="object-cover select-none"
          src={src}
          alt={alt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          draggable={false}
          quality={100}
          fill
          priority
        />
      )}
    </motion.div>
  );
};
