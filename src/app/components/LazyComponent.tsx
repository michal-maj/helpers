"use client";

import { FC, ReactNode, useLayoutEffect, useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const defaultConfig: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

interface Props {
  children?: ReactNode | ReactNode[];
  config?: IntersectionObserverInit;
}

export const LazyComponent: FC<Props> = ({
  children,
  config = defaultConfig,
}) => {
  const [ref, isVisible] = useIntersectionObserver(config);
  const contentHeightRef = useRef<number>(200);

  useLayoutEffect(() => {
    if (ref.current && isVisible) {
      contentHeightRef.current = ref.current.offsetHeight;
      console.log(ref.current.offsetHeight);
    }
  }, [isVisible, ref]);

  return (
    <div ref={ref} style={{ backgroundColor: isVisible ? "green" : "grey" }}>
      {isVisible ? (
        children
      ) : (
        <div style={{ height: contentHeightRef.current }}></div>
      )}
    </div>
  );
};
