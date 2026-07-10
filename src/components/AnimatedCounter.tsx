import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
    value: number;
    duration?: number; // duration in ms, default to 1500
}

export const AnimatedCounter = ({ value, duration = 1500 }: AnimatedCounterProps) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let startTime: number | null = null;

                    const step = (timestamp: number) => {
                        if (!startTime) startTime = timestamp;
                        const elapsed = timestamp - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        
                        // Ease out quad: starts fast, slows down at the end
                        const easeOutQuad = (t: number) => t * (2 - t);
                        const easedProgress = easeOutQuad(progress);
                        
                        setCount(Math.floor(easedProgress * value));

                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        } else {
                            setCount(value);
                        }
                    };

                    window.requestAnimationFrame(step);
                }
            },
            { threshold: 0.1 }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [value, duration]);

    return <span ref={elementRef}>{count}</span>;
};

export default AnimatedCounter;
