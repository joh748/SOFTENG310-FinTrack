import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: document.documentElement.scrollWidth,
    height: document.documentElement.offsetHeight,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: document.documentElement.scrollWidth,
        height: document.documentElement.offsetHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Only run on mount and unmount
  return windowSize;
}

export default useWindowSize;
