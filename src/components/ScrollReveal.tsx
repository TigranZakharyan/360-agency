'use client'
import React, { useRef, useEffect, useState, ReactNode, CSSProperties } from "react";

type Direction = "left" | "right" | "top" | "bottom";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  distance?: number;       // pixels to offset initially
  duration?: number;       // animation duration in ms
  className?: string;      // additional Tailwind or custom classes
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = "bottom",
  distance = 20,
  duration = 600,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Determine initial transform based on direction
  const getInitialTransform = (): string => {
    switch (direction) {
      case "left":
        return `translateX(-${distance}px)`;
      case "right":
        return `translateX(${distance}px)`;
      case "top":
        return `translateY(-${distance}px)`;
      case "bottom":
      default:
        return `translateY(${distance}px)`;
    }
  };

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate(0,0)" : getInitialTransform(),
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
