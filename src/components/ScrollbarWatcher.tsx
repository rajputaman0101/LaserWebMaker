'use client';

import { useEffect } from 'react';

const ScrollbarWatcher = () => {
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const showScrollbar = () => {
      document.body.classList.remove("hide-scrollbar");

      clearTimeout(timer);
      timer = setTimeout(() => {
        document.body.classList.add("hide-scrollbar");
      }, 1000); // Delay before hiding
    };

    const handleScroll = () => {
      showScrollbar();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const threshold = 20; // px from right edge
      if (window.innerWidth - e.clientX < threshold) {
        showScrollbar();
      }
    };

    // Initial hide
    document.body.classList.add("hide-scrollbar");

    // Listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return null;
};

export default ScrollbarWatcher;
