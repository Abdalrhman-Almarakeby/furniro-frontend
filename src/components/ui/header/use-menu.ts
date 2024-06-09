import { useEffect, useState } from "react";
import { useThrottle } from "@/lib/hooks";

export function useMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const throttledIsOpen = useThrottle(isOpen);
  const [windowWidth, setWindowWidth] = useState(0);

  const isMenuHidden = windowWidth < 768 && !isOpen;

  function toggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    setWindowWidth(window.innerWidth);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let prevScrollPosition = 0;

    function handleScroll() {
      const currentScrollPosition = window.scrollY;

      const MIN_SCROLL_AMOUNT = 50;
      const scrollAmount = Math.abs(currentScrollPosition - prevScrollPosition);

      const scrolledALot = scrollAmount > MIN_SCROLL_AMOUNT;
      if (isOpen && scrolledALot) {
        setIsOpen(false);
      }

      prevScrollPosition = currentScrollPosition;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, setIsOpen]);

  return {
    isMenuHidden,
    isOpen: throttledIsOpen,
    toggle,
  };
}
