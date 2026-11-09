'use client';
import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observe = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observe.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px 30px 0px",
        ...options
      }
    );

    if (ref.current) observe.observe(ref.current);
    return () => observe.disconnect();
  }, []);

  return {ref, inView}
}
