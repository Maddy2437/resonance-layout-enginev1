import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedColorText from "../components/AnimatedColorText";
import FixedHero from "../components/FixedHero";

const realEstateStatements = [
    {
        title: "3D Renders",
        body: "Photoreal visuals that help buyers and stakeholders experience the project before completion.",
    },
    {
        title: "Walkthrough Films",
        body: "Cinematic property walkthroughs designed for sales, investor presentations, and digital campaigns.",
    },
    {
        title: "2D & 3D Isometrics",
        body: "Detailed isometric plans to communicate spatial flow, zoning, and feature hierarchy clearly.",
    },
    {
        title: "Drone Films",
        body: "Aerial capture for site context, connectivity, and progress highlights across construction phases.",
    },
    {
        title: "Interactive Sales Tour",
        body: "Touch-friendly sales experiences to present unit layouts, tower views, and project inventories.",
    },
    {
        title: "Digital Twin",
        body: "Data-connected digital twins for monitoring, showcasing, and planning across project lifecycles.",
    },
    {
        title: "VR/AR",
        body: "VR-ready environments that let prospects explore interiors and amenities with true depth.AR overlays to bring brochures, models, and sales collateral to life in real-time.",
    },
];

const expertiseCategories = [
    "3D Renders",
    "Walkthrough Films",
    "2D & 3D Isometric Views",
    "Drone Films",
];

type ExpertiseShowcaseItem = {
    title: string;
    subtitle: string;
    image: string;
    category: string;
    videoSrc?: string;
};

const expertiseShowcase: ExpertiseShowcaseItem[] = [
    //3D RENDERS
    {
        title: "Hiranandani Empress Hill",
        subtitle: "",
        image: "/assets/images/martech/Renders/Hiranandani Empress Hill.jpg",
        category: "3D Renders",
    },
    {
        title: "Kalpataru",
        subtitle: "",
        image: "/assets/images/martech/Renders/Kalpataru.jpg",
        category: "3D Renders",
    },
    {
        title: "DLF",
        subtitle: "",
        image: "/assets/images/martech/Renders/DLF (1).jpg",
        category: "3D Renders",
    },
    {
        title: "Oberoi Sky City",
        subtitle: "",
        image: "/assets/images/martech/Renders/Oberoi Sky City.jpg",
        category: "3D Renders",
    },
    {
        title: "Larsen & Toubro",
        subtitle: "",
        image: "/assets/images/martech/Renders/Larsen & Turbo.jpg",
        category: "3D Renders",
    },
    {
        title: "Mahindra Vista",
        subtitle: "",
        image: "/assets/images/martech/Renders/Mahindra Vista.jpg",
        category: "3D Renders",
    },
    {
        title: "Hiranandini Empress Hill",
        subtitle: "",
        image: "/assets/images/martech/Renders/Hiranandini Empress Hill.jpg",
        category: "3D Renders",
    },
    {
        title: "Mahindra 2",
        subtitle: "",
        image: "/assets/images/martech/Renders/Mahindra_2.jpg",
        category: "3D Renders",
    },
    {
        title: "Mahindra 1",
        subtitle: "",
        image: "/assets/images/martech/Renders/Mahindra_1.jpg",
        category: "3D Renders",
    },
    {
        title: "Rustomjee",
        subtitle: "",
        image: "/assets/images/martech/Renders/Rustomjee.jpg",
        category: "3D Renders",
    },
    {
        title: "Rustomjee Lavie",
        subtitle: "",
        image: "/assets/images/martech/Renders/Rustomjee Lavie.jpg",
        category: "3D Renders",
    },
    {
        title: "Larsen & Toubro 1",
        subtitle: "",
        image: "/assets/images/martech/Renders/Larsen & Turbo_1.jpg",
        category: "3D Renders",
    },
    {
        title: "Mahindra",
        subtitle: "",
        image: "/assets/images/martech/Renders/Mahindra.jpg",
        category: "3D Renders",
    },

    //WALKTHROUGH FILMS
    {
        title: "Kalpataru Park Revera",
        subtitle: "",
        image: "/assets/images/martech/Walkthroughs/Kalpataru-Park-Revera.png",
        category: "Walkthrough Films",
        videoSrc: "/assets/videos/Kalpataru.webm",
    },
    {
        title: "Mahindra Vista",
        subtitle: "",
        image: "/assets/images/martech/Walkthroughs/Mahindra-Vista.png",
        category: "Walkthrough Films",
        videoSrc: "/assets/videos/Mahindra3D.webm",
    },
    {
        title: "Prestige Bellanza",
        subtitle: "",
        image: "/assets/images/martech/Walkthroughs/Prestige-Bellanza.png",
        category: "Walkthrough Films",
        videoSrc: "/assets/videos/Prestige.webm",
    },
    {
        title: "Zira",
        subtitle: "",
        image: "/assets/images/martech/Walkthroughs/Zira.png",
        category: "Walkthrough Films",
        videoSrc: "/assets/videos/Zira.webm",
    },
    {
        title: "Drone Showcase",
        subtitle: "",
        image: "/assets/images/martech/Walkthroughs/DroneShot.png",
        category: "Drone Films",
        videoSrc: "/assets/videos/DroneShot.webm",
    },

    //2D & 3D Isometrics
    {
        title: "2D Isometric 02",
        subtitle: "",
        image: "/assets/images/martech/2D-Isometrics/Picture2.png",
        category: "2D & 3D Isometric Views",
    },
    {
        title: "3D Isometric 01",
        subtitle: "",
        image: "/assets/images/martech/3D-Isometrics/Picture3.png",
        category: "2D & 3D Isometric Views",
    },
];

type ImmersiveTabData = {
    id: string;
    label: string;
    videoSrc: string;
    subtitle: string;
    description: string;
    bullets: string[];
};

const immersiveRows = [
    {
        bgColor: "bg-[#f2eee2]",
        items: [
            {
                id: "interactive-sales-tour",
                label: "Interactive Sales Tour",
                subtitle: "",
                description:
                    "A 360° walkthrough of the project and its surroundings, built for buyers to explore at their own pace — from skyline views to clubhouse details, all in one guided, self-navigable experience. Downloadable for offline viewing, anywhere, anytime.",
                bullets: [
                    "Skyline & clubhouse views",
                    "Guided self-navigable tours",
                    "Offline viewing capability",
                ],
                videoSrc: "https://storage.net-fs.com/hosting/6111279/12/index.html",
            },
            {
                id: "digital-twin",
                label: "Digital Twin",
                subtitle: "",
                description:
                    "A living, breathing replica of the project — accurate down to the tower, the unit, and the view. With dynamic weather, time-of-day lighting, and multiple camera angles, buyers don't just see the building. They see exactly what living in it will feel like, at any hour, in any season.",
                bullets: [
                    "Tower & unit-level accuracy",
                    "Dynamic lighting & weather simulation",
                    "Multiple interior & exterior camera angles",
                ],
                videoSrc: "/assets/videos/DigitalTwin.webm",
            },
        ],
    },
    {
        bgColor: "bg-[#f7f5ee]",
        items: [
            {
                id: "experience-center-showcase",
                label: "Experience Center Showcase",
                subtitle: "Immersive Technology Showcase",
                description:
                    "A physical space engineered for one moment: certainty. Every material, light, and layout is designed to move a buyer from interest to conviction — the difference between showing a project and letting someone experience it.",
                bullets: [
                    "High-impact presentations",
                    "Flexible content playback",
                    "Realistic visualization",
                ],
                videoSrc: "/assets/videos/ImmersiveTech.webm",
            },
            {
                id: "mahindra-l-screen",
                label: "L-Screen Video Experience",
                subtitle: "Mahindra Pink",
                description:
                    "A panoramic video setup that helps viewers feel like a part of the project, perfect for experience centres and presentation.",
                bullets: [
                    "Maximizes visual impact",
                    "Creates emotional resonance",
                    "Provides immersive experience",
                ],
                videoSrc: "/assets/videos/Mahindra-LScreen.webm",
            },
        ],
    },
    {
        bgColor: "bg-[#f2eee2]",
        items: [
            {
                id: "brigade-projection",
                label: "Projection Mapping on Real Scale Models",
                subtitle: "Brigade Valencia",
                description:
                    "A technique that uses high-precision projectors to overlay digital content onto physical scale models, improving project perception.",
                bullets: [
                    "High-impact presentations",
                    "Flexible content playback",
                    "Realistic visualization",
                ],
                videoSrc: "/assets/videos/Brigade.webm",
            },
            {
                id: "virtual-reality",
                label: "Virtual Reality",
                subtitle: "",
                description:
                    "Step inside the home before it's built. Room by room, finish by finish — augmented and virtual reality let buyers stand inside their future living room, long before the first brick is laid.",
                bullets: [
                    "Fully immersive VR walkthroughs",
                    "Interactive scale and space layout exploration",
                    "Realistic material & finish visualization",
                ],
                videoSrc: "/assets/videos/ARVR.webm",
            },
        ],
    },
];

const RealEstateMartech = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [selectedExpertiseCategory, setSelectedExpertiseCategory] =
        useState<string>("3D Renders");
    const [currentExpertisePage, setCurrentExpertisePage] = useState<number>(0);
    const [expertiseDirection, setExpertiseDirection] = useState<number>(0);
    const [autoRotatePausedUntil, setAutoRotatePausedUntil] = useState<number>(0);
    const [activeWalkthroughVideo, setActiveWalkthroughVideo] = useState<
        string | null
    >(null);
    const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

    // FIX 1: isMobileViewport — reactive state instead of a stale inline read.
    // The old code read window.innerWidth once at render time and never updated,
    // meaning EXPERTISE_PER_PAGE was always wrong after a resize and could be
    // wrong on the first render on some devices.
    const [isMobileViewport, setIsMobileViewport] = useState<boolean>(
        typeof window !== "undefined" && window.innerWidth < 768,
    );
    useEffect(() => {
        const check = () => setIsMobileViewport(window.innerWidth < 768);
        window.addEventListener("resize", check, { passive: true });
        return () => window.removeEventListener("resize", check);
    }, []);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    const filteredExpertiseItems = expertiseShowcase.filter(
        (item) => item.category === selectedExpertiseCategory,
    );

    // Derived from reactive state — stable per render
    const EXPERTISE_PER_PAGE = isMobileViewport
        ? 1
        : Math.min(3, filteredExpertiseItems.length || 3);
    const AUTO_ROTATE_MS = 4000;
    const totalExpertisePages = Math.ceil(
        filteredExpertiseItems.length / EXPERTISE_PER_PAGE,
    );
    const canSlideExpertise = totalExpertisePages > 1;

    const handleExpertiseNext = () => {
        if (!canSlideExpertise) return;
        setExpertiseDirection(1);
        setAutoRotatePausedUntil(Date.now() + 6000);
        setCurrentExpertisePage((prev) => (prev + 1) % totalExpertisePages);
    };

    const handleExpertisePrev = () => {
        if (!canSlideExpertise) return;
        setExpertiseDirection(-1);
        setAutoRotatePausedUntil(Date.now() + 6000);
        setCurrentExpertisePage(
            (prev) => (prev - 1 + totalExpertisePages) % totalExpertisePages,
        );
    };

    // FIX 2: Auto-rotate only runs when the expertise section is visible.
    // Previously the setInterval fired every 4 s unconditionally — even when the
    // user was on a completely different part of the page — triggering full
    // AnimatePresence transitions (GPU compositing, image decode) in the background.
    // An IntersectionObserver pauses the timer when the section scrolls off-screen.
    const expertiseSectionRef = useRef<HTMLElement>(null);
    const sectionVisibleRef = useRef<boolean>(true);

    useEffect(() => {
        const el = expertiseSectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                sectionVisibleRef.current = entry.isIntersecting;
            },
            { threshold: 0.1 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!canSlideExpertise) return;

        const timer = window.setInterval(() => {
            // Skip tick if section is off-screen or manually paused
            if (!sectionVisibleRef.current) return;
            if (Date.now() < autoRotatePausedUntil) return;

            setExpertiseDirection(1);
            setCurrentExpertisePage((prev) => (prev + 1) % totalExpertisePages);
        }, AUTO_ROTATE_MS);

        return () => window.clearInterval(timer);
    }, [
        canSlideExpertise,
        totalExpertisePages,
        selectedExpertiseCategory,
        autoRotatePausedUntil,
    ]);

    useEffect(() => {
        const videos = document.querySelectorAll("video[data-autopause='true']");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = entry.target as HTMLVideoElement;
                    if (entry.isIntersecting) {
                        video.play().catch(() => {});
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.1, rootMargin: "100px 0px" }
        );
        videos.forEach((v) => observer.observe(v));
        return () => observer.disconnect();
    }, []);

    const expertiseStartIndex = currentExpertisePage * EXPERTISE_PER_PAGE;
    const expertisePageItems = filteredExpertiseItems.slice(
        expertiseStartIndex,
        expertiseStartIndex + EXPERTISE_PER_PAGE,
    );

    const activeImage =
        activeImageIndex !== null
            ? filteredExpertiseItems[activeImageIndex]
            : null;

    const showPreviousImage = () => {
        if (activeImageIndex === null) return;
        setActiveImageIndex(
            (activeImageIndex - 1 + filteredExpertiseItems.length) %
            filteredExpertiseItems.length,
        );
    };

    const showNextImage = () => {
        if (activeImageIndex === null) return;
        setActiveImageIndex(
            (activeImageIndex + 1) % filteredExpertiseItems.length,
        );
    };


    return (
        <>
            <Header />

            <FixedHero
                backgroundImage="/assets/images/martech/Mahindra.png"
                title="Real Estate Mar-Tech"
                mirrored
                description={
                    <AnimatedColorText
                        whiteText="We redefine how real estate is imagined, experienced, and sold through immersive technology. "
                        blueText="From photorealistic visualisations and cinematic walkthroughs to interactive sales experiences, holograms, projection mapping, virtual reality, and intelligent digital tools, we transform projects into compelling buyer journeys."
                    />
                }
            />

            <section className="w-full min-h-screen bg-[#f2eee2] py-24 px-12 md:px-24 flex flex-col justify-center">
                <h2 className="font-display text-4xl md:text-5xl font-light text-gray-400 mb-12">
                    <span className="font-bold text-gray-700">Real Estate Mar-Tech</span> <span className="text-gray-300 font-light mx-1">|</span>{" "}
                    <span className="text-gray-400 font-light">Clients</span>
                </h2>

                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                        {/* FIX 3: lazy-load the large clients logo sheet — it's below the fold */}
                        <img
                            src="/assets/images/martech/Arch-client-logo.png"
                            alt="Real Estate Clients"
                            loading="lazy"
                            decoding="async"
                            className="w-full max-w-[750px] h-auto object-contain opacity-85"
                        />
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col self-start pb-4">
                        {realEstateStatements.map((item, i) => (
                            <div key={i}>
                                <div className="h-px bg-black/10 w-full" />
                                <button
                                    onClick={() => toggle(i)}
                                    className="w-full flex items-center justify-between py-4 text-left group"
                                >
                                    <span className="font-display text-[18px] md:text-[20px] text-gray-700 group-hover:text-black transition-colors duration-200 leading-tight">
                                        {item.title}
                                    </span>
                                    <ChevronDown
                                        style={{
                                            transform:
                                                openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                                            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                                        }}
                                        className="w-4 h-4 text-gray-500 flex-shrink-0 ml-4"
                                    />
                                </button>
                                <AnimatePresence initial={false}>
                                    {openIndex === i && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                ease: [0.4, 0, 0.2, 1],
                                            }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            <p className="text-gray-500 text-sm leading-relaxed pb-4 max-w-xl">
                                                {item.body}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                        <div className="h-px bg-black/10 w-full" />
                    </div>
                </div>
            </section>

            {/* ── Section 1: Areas of Expertise ─────────────────────────────── */}
            {/* FIX 4: ref added so IntersectionObserver can pause auto-rotate */}
            <section
                ref={expertiseSectionRef}
                className="w-full bg-[#f7f5ee] py-24 px-12 md:px-24"
            >
                <h2 className="font-display text-4xl md:text-5xl font-light text-gray-400 mb-12">
                    <span className="font-bold text-gray-700">Real Estate Mar-Tech</span> <span className="text-gray-300 font-light mx-1">|</span>{" "}
                    <span className="text-gray-400 font-light">Areas of expertise</span>
                </h2>

                <div className="mt-8 mb-12 w-full max-w-[1700px]">
                    <div className="hidden md:flex flex-wrap gap-y-1 gap-x-0 text-xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter">
                        {expertiseCategories.map((category, index) => (
                            <div key={category} className="flex items-center">
                                <button
                                    onClick={() => {
                                        setSelectedExpertiseCategory(category);
                                        setCurrentExpertisePage(0);
                                    }}
                                    className={`transition-colors duration-300 ${selectedExpertiseCategory === category
                                        ? "text-gray-700"
                                        : "text-gray-400 hover:text-gray-700"
                                        }`}
                                >
                                    {category}
                                </button>
                                {index < expertiseCategories.length - 1 && (
                                    <span className="text-gray-300 font-light mx-4">|</span>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="md:hidden flex items-center overflow-x-auto whitespace-nowrap scrollbar-hide pb-2 text-lg font-bold tracking-tight">
                        {expertiseCategories.map((category, index) => (
                            <div key={category} className="flex items-center shrink-0">
                                <button
                                    onClick={() => {
                                        setSelectedExpertiseCategory(category);
                                        setCurrentExpertisePage(0);
                                    }}
                                    className={`transition-colors duration-300 ${selectedExpertiseCategory === category
                                        ? "text-gray-700"
                                        : "text-gray-400"
                                        }`}
                                >
                                    {category}
                                </button>
                                {index < expertiseCategories.length - 1 && (
                                    <span className="text-gray-300 mx-3">|</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative w-full">
                    <button
                        onClick={handleExpertisePrev}
                        disabled={!canSlideExpertise}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-10 w-12 h-12 rounded-full flex items-center justify-center text-gray-700 transition-all duration-300 ${!canSlideExpertise
                            ? "bg-black/[0.02] cursor-not-allowed opacity-50 text-gray-400"
                            : "bg-black/5 hover:bg-black/10 cursor-pointer"
                            }`}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div
                        className={`relative overflow-hidden px-4 md:px-6 pt-4 ${isMobileViewport ? "pb-16" : "pb-4"
                            }`}
                    >
                        <AnimatePresence initial={false} custom={expertiseDirection} mode="wait">
                            <motion.div
                                key={`${selectedExpertiseCategory}-${currentExpertisePage}`}
                                custom={expertiseDirection}
                                initial={{ x: expertiseDirection > 0 ? "100%" : "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: expertiseDirection > 0 ? "-100%" : "100%", opacity: 0 }}
                                transition={{ duration: 0.45, ease: "easeInOut" }}
                                className={`grid gap-8 mx-auto w-full ${
                                    EXPERTISE_PER_PAGE === 1
                                        ? "grid-cols-1 md:max-w-[32%]"
                                        : EXPERTISE_PER_PAGE === 2
                                        ? "grid-cols-1 md:grid-cols-2 md:max-w-[65%]"
                                        : "grid-cols-1 md:grid-cols-3"
                                }`}
                            >
                                {expertisePageItems.map((item, index) => (
                                    <div
                                        key={`${item.title}-${item.subtitle}-${expertiseStartIndex + index}`}
                                        onClick={() => {
                                            if (item.videoSrc) {
                                                setActiveWalkthroughVideo(item.videoSrc);
                                            } else {
                                                setActiveImageIndex(
                                                    filteredExpertiseItems.findIndex(
                                                        (expertiseItem) =>
                                                            expertiseItem.image === item.image &&
                                                            expertiseItem.title === item.title,
                                                    ),
                                                );
                                            }
                                        }}
                                        className="group flex flex-col cursor-pointer"
                                    >
                                        <div className="relative overflow-hidden aspect-[16/10] w-full bg-black/[0.01] border border-black/10">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            {item.videoSrc && (
                                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                                        <div
                                                            className="ml-0.5"
                                                            style={{
                                                                width: 0,
                                                                height: 0,
                                                                borderTop: "7px solid transparent",
                                                                borderBottom: "7px solid transparent",
                                                                borderLeft: "11px solid #1f2937",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="mt-4 flex flex-col gap-1 text-gray-800">
                                            <h3 className="text-lg md:text-xl font-semibold leading-tight">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-500 uppercase tracking-wide">
                                                {item.category}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                {Array.from({
                                    length: EXPERTISE_PER_PAGE - expertisePageItems.length,
                                }).map((_, index) => (
                                    <div
                                        key={`placeholder-${index}`}
                                        className={
                                            isMobileViewport
                                                ? "aspect-[16/10] min-h-[320px] md:min-h-[520px]"
                                                : "aspect-[16/10]"
                                        }
                                    />
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={handleExpertiseNext}
                        disabled={!canSlideExpertise}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-10 w-12 h-12 rounded-full flex items-center justify-center text-gray-700 transition-all duration-300 ${!canSlideExpertise
                            ? "bg-black/[0.02] cursor-not-allowed opacity-50 text-gray-400"
                            : "bg-black/5 hover:bg-black/10 cursor-pointer"
                            }`}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </section>

            {/* ── Section 2: Immersive Technology Solutions ─────────────────── */}
            {immersiveRows.map((row, rowIdx) => (
                <section
                    key={rowIdx}
                    className={`w-full ${row.bgColor} py-24 px-12 md:px-24 border-b border-black/[0.06] text-gray-800`}
                >
                    <div className="w-full max-w-[1700px] mx-auto">
                        {rowIdx === 0 && (
                            <h2 className="font-display text-4xl md:text-5xl font-light text-gray-400 mb-20">
                                <span className="font-bold text-gray-700">Real Estate Mar-Tech</span> <span className="text-gray-300 font-light mx-1">|</span>{" "}
                                <span className="text-gray-400 font-light">Immersive Technology Solutions</span> <span className="text-gray-300 font-light mx-1">|</span>{" "}
                                <span className="text-gray-400 font-light">Showcase</span>
                            </h2>
                        )}

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
                            {row.items.map((item) => (
                                <div key={item.id} className="flex flex-col">
                                    {/* Title */}
                                    <div className="mb-2">
                                        <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-700 tracking-tight leading-tight">
                                            {item.label}
                                        </h3>
                                    </div>
                                    {/* Video/Iframe Container - First */}
                                    <div className="relative w-full aspect-video bg-black overflow-hidden shadow-2xl border border-black/10 mb-6">
                                        {item.videoSrc.startsWith("/assets/") || item.videoSrc.startsWith("/") ? (
                                            <video
                                                key={item.id}
                                                className="absolute inset-0 w-full h-full"
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                controls
                                                preload="metadata"
                                                data-autopause="true"
                                            >
                                                <source src={item.videoSrc} type={item.videoSrc.endsWith(".mp4") ? "video/mp4" : "video/webm"} />
                                            </video>
                                        ) : (
                                            <iframe
                                                key={item.id}
                                                src={item.videoSrc}
                                                title={item.label}
                                                className="absolute inset-0 w-full h-full border-0"
                                                loading="lazy"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen
                                            />
                                        )}
                                    </div>

                                    {/* Subtitle */}
                                    {item.subtitle && (
                                        <div className="mb-4">
                                            <p className="font-sans text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    )}

                                    {/* Text Content (Description + Bullets) */}
                                    <div className="flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed">
                                        <p>{item.description}</p>
                                        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 text-xs md:text-sm font-semibold">
                                            {item.bullets.map((bullet, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                    <span className="text-gray-700 font-bold">•</span>
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
            {activeImage && (
                <div
                    className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setActiveImageIndex(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white text-5xl leading-none"
                        onClick={() => setActiveImageIndex(null)}
                    >
                        ×
                    </button>
                    <button
                        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
                        onClick={(e) => {
                            e.stopPropagation();
                            showPreviousImage();
                        }}
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <img
                        src={activeImage.image}
                        alt={activeImage.title}
                        className="max-w-[80vw] max-h-[80vh] object-contain rounded-lg shadow-2xl"
                        decoding="async"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
                        onClick={(e) => {
                            e.stopPropagation();
                            showNextImage();
                        }}
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>
                </div>
            )}
            {activeWalkthroughVideo && (
                <div
                    className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setActiveWalkthroughVideo(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white text-5xl leading-none"
                        onClick={() => setActiveWalkthroughVideo(null)}
                    >
                        ×
                    </button>

                    <video
                        src={activeWalkthroughVideo}
                        controls
                        autoPlay
                        playsInline
                        className="max-w-full max-h-full object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
            <Footer theme="light" />
        </>
    );
};

export default RealEstateMartech;