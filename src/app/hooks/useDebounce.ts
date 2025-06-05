/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef } from "react";

export const useDebounce = (
  method: (...args: any[]) => unknown,
  delay: number = 2000
) => {
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fn = useRef(method);

  const debounce = useCallback(
    (...args: any[]) => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        fn.current(...args);
      }, delay);
    },
    [delay]
  );

  useEffect(() => {
    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  return {
    debounce,
  };
};
