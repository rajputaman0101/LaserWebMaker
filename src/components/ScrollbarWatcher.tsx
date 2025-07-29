'use client';

import { useEffect } from 'react';

const ScrollbarWatcher = () => {
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleScroll = () => {
      document.body.classList.remove("hide-scrollbar");

      clearTimeout(timer);
      timer = setTimeout(() => {
        document.body.classList.add("hide-scrollbar");
      }, 1000); // adjust timeout if needed
    };

    // Initial state: hide scrollbar
    document.body.classList.add("hide-scrollbar");

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return null;
};

export default ScrollbarWatcher;
