"use client";

import { useCallback, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

export default function DebouncePage() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount((prev) => {
      return prev + 1;
    });
  }, []);
  const { debounce } = useDebounce(handleClick, 350);
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => debounce(true)}>CLICK TO DEBOUNCE</button>
    </div>
  );
}
