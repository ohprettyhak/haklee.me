/* eslint-disable @typescript-eslint/no-explicit-any */

export const throttle = <T extends any[]>(func: (...args: T) => void, delay: number) => {
  let inThrottle = false;
  return (...args: T) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), delay);
    }
  };
};
