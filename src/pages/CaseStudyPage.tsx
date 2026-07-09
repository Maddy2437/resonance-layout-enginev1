import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import { X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import pdfTextData from "../data/extracted_pdf_text.json";

const textData = pdfTextData as Record<string, string>;

// Map each case study slug to its corresponding PDF page slides
const caseStudyPages: Record<string, { page: number; title: string }[]> = {
    "vraj-meridian": [
        { page: 1, title: "Campaign Cover" },
        { page: 2, title: "Logo & Color Palette" },
        { page: 3, title: "Coffee Table Book & Outdoor" },
        { page: 4, title: "Teasers & Social Media" },
        { page: 5, title: "Digital Microsite" },
        { page: 6, title: "Influencer Marketing Campaign" },
        { page: 7, title: "Project Walkthrough" },
    ],
    "morde": [
        { page: 9, title: "Launch Cover" },
        { page: 10, title: "Engagement Brochure" },
        { page: 11, title: "Exhibition graphics" },
        { page: 12, title: "Teaser series" },
    ],
    "killer": [
        { page: 13, title: "Denim Cover" },
        { page: 14, title: "Ali Fazal Film Campaign" },
        { page: 15, title: "Ali Fazal Print Campaign" },
        { page: 16, title: "Outdoor and Brand Attitude" },
    ],
    "netflix": [
        { page: 17, title: "Squid Game Cover" },
        { page: 18, title: "VFX Production Playback 2021" },
        { page: 19, title: "Playback 2022" },
        { page: 20, title: "Playback 2023" },
        { page: 21, title: "KitKat Ultimate Break Campaign" },
    ],
    "conosh": [
        { page: 22, title: "Culinary Learning Cover" },
        { page: 23, title: "Chef Branded series" },
        { page: 24, title: "Website Platform Launch" },
        { page: 25, title: "Digital Social and Branded Series" },
    ],
    "oppo": [
        { page: 26, title: "OPPO Mascot Cover" },
        { page: 27, title: "OPPO AI best face film campaign" },
        { page: 28, title: "Mascot design execution film" },
    ],
    "mahindra-xuv-500": [
        { page: 29, title: "CGI Launch Cover" },
        { page: 30, title: "automotive showcase film" },
        { page: 31, title: "CG execution car launch" },
        { page: 32, title: "CGI Image film details" },
    ],
    "estuary": [
        { page: 33, title: "Estuary Cover" },
        { page: 34, title: "Estuary Packaging Design" },
        { page: 35, title: "Estuary Brand Film and Digital" },
    ],
    "calamus-one": [
        { page: 36, title: "Calamus Cover" },
        { page: 37, title: "Android-enabled integrated bike" },
        { page: 38, title: "Logo identity e-bike showcase" },
    ],
    "elegant": [
        { page: 39, title: "Elegant Cover" },
        { page: 40, title: "Single Fold Leaflet" },
        { page: 41, title: "Elegant Brochure" },
        { page: 42, title: "Outdoor Campaign" },
    ],
    "monte-carlo": [
        { page: 43, title: "Monte Carlo Cover" },
        { page: 44, title: "Summer Fashion Collection Visual" },
        { page: 45, title: "Contemporary Looks Catalog" },
        { page: 46, title: "Versatile Style Showcase" },
    ],
    "happy-home": [
        { page: 47, title: "Happy Home Cover" },
        { page: 48, title: "Influencer Series" },
    ],
};

const mobilePageMap: Record<number, number> = {
    // Vraj Meridian (offset +5)
    2: 7,
    3: 8,
    4: 9,
    6: 11,
    7: 12,
    // Killer Jeans (offset +4)
    14: 18,
    16: 20,
    // Netflix (offset +4)
    18: 22,
    19: 23,
    20: 24,
    21: 25,
    // Conosh (offset +4)
    23: 27,
    24: 28,
    25: 29,
    // Oppo (offset +4)
    28: 32,
    // Mahindra (offset +4 / +5)
    30: 34,
    31: 36,
    // Estuary (offset +4)
    34: 38,
    35: 39,
    // Calamus (offset +4)
    37: 41,
    38: 42,
    // Elegant (offset +5)
    40: 45,
    41: 46,
    42: 47,
    // Monte Carlo (offset +5)
    45: 50,
    46: 51,
    // Happy Home (offset +5)
    48: 53
};

// Simple text formatter for screen readers / SEO
const formatSlideText = (text: string) => {
    if (!text) return null;
    const lines = text.split("\n")
        .map(l => l.trim())
        .filter(l => l && !l.includes("View Case") && l !== "→" && l !== "≡MENU" && !l.includes("Brand Solutions |"));
        
    return (
        <div className="space-y-2">
            {lines.map((line, idx) => (
                <p key={idx}>{line}</p>
            ))}
        </div>
    );
};

const CaseStudyPage = () => {
    const { slug } = useParams();
    const study = getCaseStudyBySlug(slug);

    if (!study) {
        return <Navigate to="/brand-solutions" replace />;
    }

    const pages = caseStudyPages[study.slug] || [];
    const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug);

    const scrollToNextSlide = () => {
        const sections = document.querySelectorAll("main section");
        if (sections.length > 1) {
            sections[1].scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Helmet>
                <meta name="description" content={study.summary} />
            </Helmet>

            <div className="min-h-screen bg-theme-secondaryBg2 text-theme-secondaryText">
                <Header />
                <main className="pt-[148px] md:pt-[164px] pb-16">
                    {/* Sticky Header - Under Navbar */}
                    <div className="fixed top-[72px] md:top-[80px] left-0 right-0 z-40 w-full bg-[#f0ede1]/60 backdrop-blur-md py-5 px-12 md:px-24 select-none">
                        <div className="w-full flex items-center justify-between">
                            <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-800 tracking-tight leading-none">
                                <span className="font-bold text-gray-700">Brand Solutions</span> <span className="text-gray-300 font-light mx-1">|</span>{" "}
                                <span className="text-gray-400 font-light">Case Studies</span>
                            </h2>
                            {/* Close Button linking back to /brand-solutions#case-studies */}
                            <Link 
                                to="/brand-solutions#case-studies"
                                className="text-gray-400 hover:text-gray-800 transition-colors flex items-center justify-center p-2 rounded-full hover:bg-black/[0.04]"
                                aria-label="Close case study"
                            >
                                <X className="h-5 w-5 stroke-[3]" />
                            </Link>
                        </div>
                    </div>

                    {/* Slides Vertical Feed - Covering Entire Screen Width */}
                    <div className="w-full space-y-0 px-0 mx-0 mt-0">
                        {pages.map((slide, idx) => {
                            const slideImgSrc = `/assets/images/CaseStudies/PDF_Pages/Reso_website-AAa-${String(slide.page).padStart(2, "0")}.webp`;
                            const ocrText = textData[String(slide.page)] || "";

                            // Alternate between white and cream background
                            const isCream = idx % 2 === 0;
                            const bgColor = isCream ? "bg-[#f7f5ee]" : "bg-white";

                            if (idx === 0) {
                                const coverImgSrc = `/assets/images/CaseStudies/Cover_Images/${currentIndex + 1}.webp`;
                                const clientVal = study.pdfClient || study.client;
                                const serviceVal = study.pdfService || study.service;
                                const yearVal = study.pdfYear || study.year;
                                const descVal = study.pdfDescription || study.summary;

                                return (
                                    <section key={slide.page} className="w-full bg-[#f7f5ee] py-16 px-12 md:px-24 border-b border-black/[0.06] select-none">
                                        <div className="w-full">
                                            <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center">
                                                {/* Left Column: Image and View Case Bar */}
                                                <div className="w-full lg:w-[58%] flex flex-col">
                                                    <div className="relative w-full aspect-[1.58] overflow-hidden bg-white/20">
                                                        <img
                                                            src={coverImgSrc}
                                                            alt={`${study.title} Cover`}
                                                            loading="eager"
                                                            decoding="async"
                                                            className="w-full h-full object-cover block"
                                                        />
                                                    </div>
                                                    {/* Interactive View Case Bar */}
                                                    <button 
                                                        onClick={scrollToNextSlide}
                                                        className="w-full flex items-center justify-between bg-[#9ea2ac] hover:bg-[#8e929c] text-black font-semibold text-sm md:text-base lg:text-lg px-5 py-3 select-none transition-colors duration-200 mt-[1px]"
                                                    >
                                                        <span className="font-sans tracking-[0.12em] uppercase font-bold text-xs md:text-sm lg:text-base">View Case</span>
                                                        <span className="text-sm font-bold">→</span>
                                                    </button>
                                                </div>

                                                {/* Right Column: Metadata Table + Description */}
                                                <div className="w-full lg:w-[42%] flex flex-col justify-center">
                                                    <div className="w-full border-t border-black/[0.08] border-b border-black/[0.08] divide-y divide-black/[0.08] max-w-lg lg:max-w-xl xl:max-w-2xl">
                                                        <div className="grid grid-cols-[100px_1fr] md:grid-cols-[110px_1fr] lg:grid-cols-[120px_1fr] xl:grid-cols-[140px_1fr] py-3 items-baseline">
                                                            <span className="text-xs md:text-sm lg:text-base xl:text-lg tracking-[0.05em] text-gray-500 font-normal">Client</span>
                                                            <span className="text-sm md:text-base lg:text-lg xl:text-2xl font-bold uppercase tracking-wider text-gray-800 pl-4 font-sans">
                                                                {clientVal}
                                                            </span>
                                                        </div>
                                                        <div className="grid grid-cols-[100px_1fr] md:grid-cols-[110px_1fr] lg:grid-cols-[120px_1fr] xl:grid-cols-[140px_1fr] py-3 items-baseline">
                                                            <span className="text-xs md:text-sm lg:text-base xl:text-lg tracking-[0.05em] text-gray-500 font-normal">Service</span>
                                                            <span className="text-sm md:text-base lg:text-lg xl:text-2xl font-bold uppercase tracking-wider text-gray-800 pl-4 font-sans">
                                                                {serviceVal}
                                                            </span>
                                                        </div>
                                                        <div className="grid grid-cols-[100px_1fr] md:grid-cols-[110px_1fr] lg:grid-cols-[120px_1fr] xl:grid-cols-[140px_1fr] py-3 items-baseline">
                                                            <span className="text-xs md:text-sm lg:text-base xl:text-lg tracking-[0.05em] text-gray-500 font-normal">Year</span>
                                                            <span className="text-sm md:text-base lg:text-lg xl:text-2xl font-bold uppercase tracking-wider text-gray-800 pl-4 font-sans">
                                                                {yearVal}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <p className="text-gray-600 text-sm md:text-base lg:text-lg xl:text-2xl leading-relaxed font-sans mt-7 max-w-lg lg:max-w-xl xl:max-w-2xl font-light tracking-wide">
                                                        {descVal.startsWith("Objective:") ? descVal.substring("Objective:".length).trim() : descVal}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                );
                            }

                            let responsiveClass = "w-full";
                            if (study.slug === "vraj-meridian") {
                                if ([2, 3, 4].includes(slide.page)) {
                                    responsiveClass = "w-full hidden md:block";
                                } else if ([5, 6, 7].includes(slide.page)) {
                                    responsiveClass = "w-full block md:hidden";
                                }
                            }

                            return (
                                <section key={slide.page} className={`${responsiveClass} ${bgColor} py-0 flex items-center justify-center border-b border-black/[0.04]`}>
                                    <div className="w-full">
                                         {mobilePageMap[slide.page] !== undefined ? (
                                             <picture>
                                                 <source 
                                                     media="(max-width: 768px)" 
                                                     srcSet={`/assets/images/CaseStudies/PDF_Pages_Mobile/Reso_Mobile-web_BS-${String(mobilePageMap[slide.page]).padStart(2, "0")}.webp`} 
                                                 />
                                                 <img
                                                     src={slideImgSrc}
                                                     alt={`${study.title} case study slide ${idx + 1}`}
                                                     loading="lazy"
                                                     decoding="async"
                                                     className="w-full h-auto block"
                                                 />
                                             </picture>
                                         ) : (
                                             <img
                                                 src={slideImgSrc}
                                                 alt={`${study.title} case study slide ${idx + 1}`}
                                                 loading="lazy"
                                                 decoding="async"
                                                 className="w-full h-auto block"
                                             />
                                         )}
                                     </div>

                                    {/* Screen-reader Only Container to maintain SEO text accessibility */}
                                    <div className="sr-only" aria-hidden="true">
                                        <h2>{slide.title}</h2>
                                        {formatSlideText(ocrText)}
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                </main>
            </div>
        </>
    );
};

export default CaseStudyPage;