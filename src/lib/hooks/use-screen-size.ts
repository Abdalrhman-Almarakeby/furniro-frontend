import { useState, useLayoutEffect } from "react";

type WindowSize = {
  width: number | null;
  height: number | null;
};

export function useWindowSize(): WindowSize {
  const [size, setSize] = useState<WindowSize>({
    width: null,
    height: null,
  });

  useLayoutEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
