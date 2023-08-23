import { useState, useEffect } from "react";

function getWindowDimensions() {
  let width = 0;
  let height = 0;
  let sm = true;
  let md,
    lg,
    xl,
    xxl,
    largest = false;
  if (typeof window !== "undefined") {
    width = window.innerWidth;
    height = window.innerHeight;
    if (640 < width && width < 768) {
      sm = false;
      md = true;
    } else if (768 < width && width < 1024) {
      sm = false;
      lg = true;
    } else if (1024 < width && width < 1280) {
      sm = false;
      xl = true;
    } else if (1280 < width && width < 1536) {
      sm = false;
      xxl = true;
    } else if (width > 1536) {
      sm = false;
      largest = true;
    }
  }
  return {
    width,
    height,
    sm,
    md,
    lg,
    xl,
    xxl,
    largest,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
