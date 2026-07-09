// components/AnimatedColorText.tsx
"use client";

import { useEffect, useState } from "react";

type Props = {
    whiteText: string;
    blueText: string;
    className?: string;
    theme?: "light" | "dark";
};

/**
 * Renders a two-part paragraph where the first part is static white/dark and the
 * second part appears using a typewriter animation on mount.
 */
export default function AnimatedColorText({
    whiteText,
    blueText,
    className = "",
    theme = "dark",
}: Props) {
    const [visibleChars, setVisibleChars] = useState(0);

    useEffect(() => {
        setVisibleChars(0);

        const intervalMs = Math.max(5, 1500 / Math.max(blueText.length, 1));

        const interval = setInterval(() => {
            setVisibleChars((prev) => {
                if (prev >= blueText.length) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + 1;
            });
        }, intervalMs);

        return () => clearInterval(interval);
    }, [blueText]);

    const hiddenText = blueText.slice(visibleChars);
    const visibleText = blueText.slice(0, visibleChars);

    const staticColor = theme === "light" ? "text-gray-800" : "text-[#ceccc7]";
    const animatedColor = theme === "light" ? "text-gray-300 font-extrabold" : "text-theme-secondaryText";

    return (
        <p
            className={`font-display text-[20px] md:text-[25px] lg:text-[50px] leading-[0.9] max-w-[1200px] font-bold ${className}`}
            style={{
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
                willChange: "auto",
            }}
        >
            <span className={staticColor}>{whiteText} </span>
            <span>
                <span className={staticColor}>{visibleText}</span>
                <span className={animatedColor}>{hiddenText}</span>
            </span>
        </p>
    );
}
