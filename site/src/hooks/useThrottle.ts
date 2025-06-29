/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState, useEffect, useCallback } from 'react';

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

export const useThrottle = <T>(value: T, delay: number): T => {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const throttledUpdate = useRef(throttle((newValue: T) => setThrottledValue(newValue), delay));

  useEffect(() => {
    throttledUpdate.current(value);
  }, [value]);

  return throttledValue;
};

export const useThrottledCallback = <T extends any[]>(
  callback: (...args: T) => void,
  delay: number
) => {
  const throttledFunction = useRef(throttle(callback, delay));

  useEffect(() => {
    throttledFunction.current = throttle(callback, delay);
  }, [callback, delay]);

  return useCallback((...args: T) => {
    throttledFunction.current(...args);
  }, []);
};
