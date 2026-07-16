import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedColorText from "../components/AnimatedColorText";
import FixedHero from "@/components/FixedHero";

const showcaseImages = [
    {
        image: "/assets/images/motionPictures/CHHSS1.jpg",
        title: "Chhatrasal",
        year: "2025",
        description:
            "Produced by Resonance, Chhatrasal is a Hindi historical drama based on Maharaja Chhatrasal's fight against the Mughal Empire and the establishment of his kingdom in Bundelkhand. The series topped the viewing charts on MX Player, became one of India's most-watched historical web series, and earned a Filmfare OTT nomination.",
        youtubeUrl: "https://www.youtube.com/watch?v=kYvszK7_77E",
    },
    {
        image: "/assets/images/motionPictures/UHC1.png",
        title: "Ultimate Home Chef India",
        year: "2024",
        description:
            "Produced by us, India's Ultimate Home Chef is a culinary reality series featuring renowned chefs Gary Mehigan, Matt Preston, and George Calombaris. The show celebrates talented home cooks from across India as they compete through creativity, skill, and a shared passion for food.",
        youtubeUrl: "https://www.youtube.com/watch?v=s5j6l1X0c6o",
    },
    {
        image: "/assets/images/motionPictures/AyodhyaSS3.jpg",
        title: "Deepotsav",
        year: "2025",
        description:
            "We produced this iconic documentary film for Deepotsav Ayodhya 2024, capturing one of India's largest religious celebrations, where two world records were achieved. The film documents the scale, spirit, and cultural significance of this historic event.",
    },
];

const MotionPictures = () => {
    const showcaseRef = useRef<HTMLElement>(null);
    const [showStickyBar, setShowStickyBar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!showcaseRef.current) return;
            const rect = showcaseRef.current.getBoundingClientRect();
            // Show sticky bar when the top of the showcase section reaches the navbar bottom (~80px)
            setShowStickyBar(rect.top <= 80);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Helmet>
                <title>Motion Pictures | Resonance Digital</title>
                <meta
                    name="description"
                    content="Motion picture creative and production services by Resonance Digital."
                />
            </Helmet>

            <Header />

            <FixedHero
                backgroundImage="/assets/images/motionPictures/motionpicturesBg.png"
                title="Motion Pictures"
                description={
                    <AnimatedColorText
                        whiteText="From brand stories and commercials to documentaries, corporate films, and digital-first content, we produce cinematic narratives that inspire, engage, and persuade—"
                        blueText="combining strategic storytelling, world-class production, and cutting-edge post-production under one integrated creative ecosystem."
                    />
                }
            />

            {/* Fixed Sticky Bar - appears under navbar when showcase section is scrolled to */}
            <div
                className={`fixed top-[72px] md:top-[80px] left-0 right-0 z-40 w-full bg-[#14171d]/60 backdrop-blur-md py-5 px-6 md:px-12 lg:px-20 select-none border-b border-white/[0.06] transition-all duration-300 ${
                    showStickyBar
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
            >
                <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal tracking-tight leading-none">
                    <span className="font-bold text-[#f2eee2]">Motion Picture</span> <span className="text-[#f2eee2]/30 font-light mx-1">|</span>{" "}
                    <span className="text-[#f2eee2]/60 font-light">Showcase</span>
                </h2>
            </div>

            <section ref={showcaseRef} className="w-full bg-theme-primaryBg1 pt-0 pb-20">
                <div className="space-y-0">
                    {showcaseImages.map((item, index) => (
                        <div
                            key={item.image}
                            className={`w-full ${index % 2 === 0 ? "bg-theme-primaryBg1" : "bg-theme-secondaryText"} py-0 md:py-0 px-0`}
                        >
                            <div className="relative w-full flex justify-center overflow-hidden">
                                {item.youtubeUrl ? (
                                    <a
                                        href={item.youtubeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full cursor-pointer overflow-hidden"
                                    >
                                        <img
                                            src={item.image}
                                            alt={`Motion Pictures Showcase ${index + 1}`}
                                            className="block w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </a>
                                ) : (
                                    <img
                                        src={item.image}
                                        alt={`Motion Pictures Showcase ${index + 1}`}
                                        className="block w-full h-auto object-cover"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                )}

                                <div className="absolute bottom-6 left-6 md:bottom-10 md:right-10 text-left text-white">
                                    <div className="inline-block max-w-2xl bg-black/55 backdrop-blur-sm rounded-md px-5 py-4">
                                        <div className="flex items-baseline gap-2 font-display leading-none">
                                            <span className="text-xl md:text-3xl font-bold text-white">
                                                {item.title}
                                            </span>
                                            <span className="text-xl md:text-3xl font-light text-white/80">|</span>
                                            <span className="text-lg md:text-3xl font-light text-white/80 tracking-normal">
                                                {item.year}
                                            </span>
                                        </div>
                                        <p className="mt-3 max-w-xl text-sm md:text-base lg:text-lg leading-relaxed text-[#f2eee2] font-normal">
                                            {item.description}
                                        </p>
                                        {item.youtubeUrl && (
                                            <div className="mt-4">
                                                <a
                                                    href={item.youtubeUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
                                                >
                                                    Watch Trailer
                                                    <ChevronRight className="w-4 h-4" />
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer theme="dark" />
        </>
    );
};

export default MotionPictures;