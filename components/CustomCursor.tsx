"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input[type="submit"], input[type="button"], label[for], summary, select, .cursor-pointer, [data-cursor-hover]';

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressing, setPressing] = useState(false);
  const [visible, setVisible] = useState(false);

  const targetRef = useRef({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });
  const initializedRef = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringElRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (coarsePointer || reducedMotion) {
      return;
    }

    setEnabled(true);
    document.documentElement.classList.add("adk-custom-cursor-active");

    const onMouseMove = (event: MouseEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };

      if (!initializedRef.current) {
        ringRef.current = { x: event.clientX, y: event.clientY };
        initializedRef.current = true;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }

      setVisible(true);
    };

    const onMouseOver = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      setHovering(Boolean(target.closest(INTERACTIVE_SELECTOR)));
    };

    const onMouseDown = () => setPressing(true);
    const onMouseUp = () => setPressing(false);
    const onMouseLeave = () => setVisible(false);

    const animate = () => {
      ringRef.current = {
        x: lerp(ringRef.current.x, targetRef.current.x, 0.14),
        y: lerp(ringRef.current.y, targetRef.current.y, 0.14),
      };

      if (ringElRef.current) {
        ringElRef.current.style.transform = `translate3d(${ringRef.current.x}px, ${ringRef.current.y}px, 0)`;
      }

      rafRef.current = window.requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove("adk-custom-cursor-active");
      window.cancelAnimationFrame(rafRef.current);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  const stateClass = [
    visible ? "is-visible" : "",
    hovering ? "is-hover" : "",
    pressing ? "is-press" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div ref={ringElRef} className={`adk-cursor-ring ${stateClass}`} aria-hidden="true" />
      <div ref={dotRef} className={`adk-cursor-dot ${stateClass}`} aria-hidden="true" />
    </>
  );
}
