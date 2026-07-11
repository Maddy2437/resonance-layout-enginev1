import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedColorText from "@/components/AnimatedColorText";

const Awards = () => {
    return (
        <>
            <Helmet>
                <title>Awards & Achievements | Resonance Digital</title>
                <meta
                    name="description"
                    content="Resonance Digital's awards and achievements in VFX, creative technology, and digital innovation."
                />
            </Helmet>

            <Header />

            {/* Hero Section */}
            <section className="relative w-full min-h-screen overflow-hidden bg-theme-primaryBg1">

                {/* Header spacing */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 to-transparent z-10" />

                <div className="relative z-20 max-w-[1600px] mx-auto min-h-screen px-6 md:px-12 lg:px-20 pt-28 md:pt-32 pb-20 flex flex-col justify-between">
                    {/* Top Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 lg:gap-16 flex-1">
                        {/* Left Side */}
                        <div className="relative z-30 max-w-[720px] lg:min-h-[520px] flex flex-col justify-center">
                            <h1 className="font-display text-[56px] leading-[0.95] md:text-[84px] lg:text-[90px] font-bold text-theme-primaryText tracking-tight mb-8 md:mb-10">
                                Awards &<br />
                                Achievements
                            </h1>

                            <div className="max-w-[620px] text-base md:text-lg leading-relaxed">
                                <AnimatedColorText
                                    whiteText="A leading digital Creative Technology Company, which We"
                                    blueText="provide our clients with striking, practical, and intuitive sites that attract clientele and yield revenue."
                                />
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="absolute inset-0 lg:relative lg:flex lg:items-center lg:justify-end pointer-events-none">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[85vw] max-w-[520px] lg:static lg:translate-y-0 lg:w-full lg:max-w-[820px] lg:h-[700px] flex items-center justify-center">
                                <img
                                    src="/assets/images/awards/Awards-01.png"
                                    alt="Awards"
                                    decoding="async"
                                    className="w-full h-full object-contain scale-125 lg:scale-140 opacity-90"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards Showcase Image */}
            <section className="relative w-full bg-theme-secondaryText">
                {/* Desktop overlay title */}
                <div className="md:block absolute top-[180px] left-10 md:left-12 lg:left-20 z-10">
                    <h2 className="font-display text-[45px] md:text-[55px] lg:text-[75px] font-bold text-theme-primaryText tracking-tight leading-[0.95]">
                        Awards Showcase
                    </h2>
                </div>

                {/* Mobile standalone title container */}
                <picture>
                    <source
                        media="(max-width: 768px), (max-aspect-ratio: 4/5)"
                        srcSet="/assets/images/awards/awardshowcase-mobile.png"
                    />
                    <img
                        src="/assets/images/awards/awardshowcase.png"
                        alt="Awards Showcase"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto block"
                    />
                </picture>
            </section>

            <Footer theme="dark" />
        </>
    );
};

export default Awards;