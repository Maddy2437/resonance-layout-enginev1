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
        year: "2025",
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
                <div className="px-6 md:px-12 lg:px-20">
                    <h2 className="font-display text-3xl md:text-4xl font-normal text-theme-secondaryText mb-12">
                        <span className="font-bold text-theme-secondaryText">Motion Picture</span> <span className="text-theme-primaryText">|</span>{" "}
                        <span className="text-theme-secondaryText/70 font-light">Showcase</span>
                    </h2>
                </div>

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

                                <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-right text-white pointer-events-none">
                                    <div className="font-display text-xl md:text-3xl font-semibold leading-none">
                                        {item.title}
                                    </div>
                                    <div className="mt-1 text-sm md:text-lg tracking-wider leading-none">
                                        {item.year}
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