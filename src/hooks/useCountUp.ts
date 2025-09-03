import { useState, useEffect, useRef } from "react";

interface UseCountUpOptions {
  duration?: number;
  startOnMount?: boolean;
  delay?: number;
}

export const useCountUp = (end: number, options: UseCountUpOptions = {}) => {
  const { duration = 2000, startOnMount = true, delay = 0 } = options;
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const frameRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const startAnimation = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCount(0);

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // 使用缓动函数
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        setIsAnimating(false);
        startTimeRef.current = 0;
      }
    };

    if (delay > 0) {
      setTimeout(() => {
        frameRef.current = requestAnimationFrame(animate);
      }, delay);
    } else {
      frameRef.current = requestAnimationFrame(animate);
    }
  };

  const reset = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }
    setCount(0);
    setIsAnimating(false);
    startTimeRef.current = 0;
  };

  useEffect(() => {
    if (startOnMount) {
      startAnimation();
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, startOnMount]);

  return { count, isAnimating, startAnimation, reset };
};
