import { useState, useEffect } from "react";
import { ScrollDirection } from "@/types";
import { getScrollDirection } from "./get-scroll-direction";

export function useShowHeader() {
  const [isOnTop, setIsOnTop] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection | null>(null);

  const MAX_TOP_POSITION = 100;

  useEffect(() => {
    let lastScrollPosition = window.scrollY;

    function handleScroll() {
      if (window.innerWidth > 768) return;
      setIsOnTop(window.scrollY < MAX_TOP_POSITION);
      setScrollDirection(getScrollDirection(lastScrollPosition, scrollDirection || "up"));

      lastScrollPosition = window.scrollY;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDirection]);

  if (window.innerWidth > 768) return false;

  return scrollDirection === "up" || isOnTop;
}
