import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let rafId: number;

    const move = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        cursor.style.setProperty("--x", `${e.clientX}px`);
        cursor.style.setProperty("--y", `${e.clientY}px`);
      });
    };

    const addHover = () => cursor.classList.add("hovering");
    const removeHover = () => cursor.classList.remove("hovering");

    // Use event delegation on document.body instead of querying all elements repeatedly
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button']")) {
        addHover();
      } else {
        removeHover();
      }
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor hidden md:block" />;
};

export default CustomCursor;
