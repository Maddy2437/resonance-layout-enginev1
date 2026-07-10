import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedColorText from "../components/AnimatedColorText";
import FixedHero from "@/components/FixedHero";

const showcaseImages = [
    {
        image: "/assets/images/motionPictures/AyodhyaSS3.jpg",
        title: "Deepotsav",
        year: "2025",
    },
    {
        image: "/assets/images/motionPictures/CHHSS1.jpg",
        title: "Chhatrasal",
        year: "2025",
    },
    {
        image: "/assets/images/motionPictures/UHC1.png",
        title: "Conosh",
        year: "2024",
    },
];

const MotionPictures = () => {
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

            {/* Motion Picture Showcase */}
            <section className="w-full bg-theme-primaryBg2 py-20">

                <div className="space-y-0">
                    {showcaseImages.map((item, index) => (
                        <div
                            key={item.image}
                            className={`w-full ${index % 2 === 0 ? "bg-theme-primaryBg2" : "bg-theme-secondaryBg2"} py-12 md:py-16 px-0`}
                        >
                            <div className="relative w-full flex justify-center">
                                <img
                                    src={item.image}
                                    alt={`Motion Pictures Showcase ${index + 1}`}
                                    className="block w-full h-auto object-contain"
                                    loading="lazy"
                                />

                                <div className="absolute bottom-6 left-6 md:bottom-10 md:right-10 text-left text-white pointer-events-none">
                                    <div className="flex items-baseline gap-2 font-display leading-none">
                                        <span className="text-xl md:text-3xl font-bold text-white">
                                            {item.title}
                                        </span>
                                        <span className="text-xl md:text-3xl font-light text-white/80">|</span>
                                        <span className="text-lg md:text-3xl font-light text-white/80 tracking-normal">
                                            {item.year}
                                        </span>
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