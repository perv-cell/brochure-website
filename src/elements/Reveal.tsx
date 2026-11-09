'use client';
import { useInView } from "../hooks/useInView"
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  isOpen?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function Reveal(
  {
    children,
    isOpen,
    direction = "up",
    delay = 0,
    duration = 900,
    className='',
  }: RevealProps
) {
  const { ref, inView } = useInView();

  const isVisible = isOpen !== undefined ? isOpen : inView;

  const startPositions = {
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: '-translate-x-10',
    right: 'translate-x-10',
  }

  return (
    <div
      ref={ref}
      className={`
         transition-all ease-out
         ${isVisible
          ? 'opacity-100 translate-x-0 translate-y-0'
          : `opacity-0 ${startPositions[direction]}`
        }
         ${className}
       `}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
