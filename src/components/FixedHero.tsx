import { ReactNode, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

type FixedHeroProps = {
    backgroundImage: string;
    title: string;
    description?: ReactNode;
    overlayStrength?: number;
    mirrored?: boolean;
    heroHeight?: string;
};

const FixedHero = ({
    backgroundImage,
    title,
    description,
    overlayStrength = 0.55,
    mirrored = false,
    heroHeight = "250vh",
}: FixedHeroProps) => {
    const heroRef = useRef<HTMLElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!heroRef.current) return;

            const rect = heroRef.current.getBoundingClientRect();

            const scrollProgress = Math.min(
                Math.max(-rect.top / (window.innerHeight * 0.7), 0),
                1,
            );

            setProgress(scrollProgress);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Helmet>
                <link rel="preload" href={backgroundImage} as="image" {...({ fetchpriority: "high" } as any)} />
            </Helmet>
            <section
                ref={heroRef}
                className="relative"
                style={{
                    height: heroHeight,
                }}
            >
            {/* Fixed Background */}
            <img
                src={backgroundImage}
                alt=""
                className="fixed inset-0 w-full h-full object-cover -z-10"
                style={{
                    transform: mirrored ? "scaleX(-1)" : undefined,
                }}
                loading="eager"
                {...({ fetchPriority: "high" } as any)}
                decoding="sync"
            />

            {/* Overlay */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    backgroundColor: `rgba(0,0,0,${overlayStrength * (1 - progress)})`,
                    zIndex: -5,
                }}
            />

            {/* Hero Content */}
            <div
                className="sticky top-0 h-screen flex items-center px-6 md:px-12 lg:px-24"
                style={{
                    opacity: Math.max(1 - progress * 2, 0),
                }}
            >
                <div className="w-full max-w-[85%]">
                    <h1 className="font-display text-[65px] md:text-[75px] lg:text-[85px] xl:text-[95px] 2xl:text-[110px] font-bold text-secondaryText mb-10 leading-tight">
                        {title}
                    </h1>

                    {description}
                </div>
            </div>
        </section>
        </>
    );
};

export default FixedHero;
