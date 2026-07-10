import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedColorText from "@/components/AnimatedColorText";


const members = [
    {
        name: "Rohit Raghuvanshi",
        role: "Executive Producer - Commercials",
        image: "/assets/images/team/Rohit.png",
    },
    {
        name: "Pooja Verma",
        role: "Head - Business Development",
        image: "/assets/images/team/Pooja.png",
    },
    {
        name: "Sajan Raj",
        role: "VFX Producer",
        image: "/assets/images/team/Sajan-Raj.png",
    },
    {
        name: "Maninder Singh",
        role: "Business Head - VFX",
        image: "/assets/images/team/Maninder-Singh.png",
    },
    {
        name: "Somak Mukherjee",
        role: "Creative Director",
        image: "/assets/images/team/Somak-Mukherjee.png",
    },
    {
        name: "Himanshu Pandey",
        role: "Creative Director - Commercials",
        image: "/assets/images/team/Himanshu-Pandey.png",
    },
    {
        name: "Manpreet Singh",
        role: "VFX Supervisor - Commercials",
        image: "/assets/images/team/Manpreet-Singh.png",
    },
    {
        name: "Mahim Kumar Chaudhuri",
        role: "Creative Director - Brand Solutions",
        image: "/assets/images/team/Mahim-Kumar-Chaudhuri.png",
    },
    {
        name: "Vinay Khilnani",
        role: "Head - Strategic Alliances & Growth",
        image: "/assets/images/team/Vinay-Khilnani.png",
    },
    {
        name: "Mansi Solanki",
        role: "Senior People Partner",
        image: "/assets/images/team/Mansi-Solanki.png",
    },
    {
        name: "Sandeep Avhad",
        role: "IT Manager",
        image: "/assets/images/team/Sandeep.png",
    },
];

const renderMember = (member: { name: string; role: string; image: string }, index: number) => (
    <div
        key={index}
        className="relative aspect-[0.8] overflow-hidden bg-theme-secondaryBg1"
    >
        <img
            src={member.image}
            alt={member.name}
            className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-x-0 bottom-0 h-20 bg-white/90 backdrop-blur-sm border-t border-black/[0.04]" />

        <div className="absolute inset-x-0 bottom-0 h-20 flex flex-col items-center justify-center px-3 text-center overflow-hidden">
            <div className="text-gray-800 font-semibold text-[11px] md:text-lg leading-tight max-w-full break-words">
                {member.name}
            </div>
            <div className="text-gray-600 text-[9px] md:text-sm mt-1 leading-tight max-w-full break-words">
                {member.role}
            </div>
        </div>
    </div>
);

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Resonance Digital</title>
                <meta
                    name="description"
                    content="Learn about Resonance Digital's story, philosophy, and the team behind our award-winning VFX and creative work."
                />
            </Helmet>

            <Header />

            {/* Hero Section with Animated Text */}
            <section className="relative w-full min-h-screen bg-[#f2eee2] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
                <div className="w-full max-w-[1700px] mx-auto mt-20">
                    <h1 className="font-display text-[65px] md:text-[85px] lg:text-[105px] font-bold text-gray-800 mb-16 leading-tight">
                        About us
                    </h1>

                    <div className="max-w-[1400px]">
                        <AnimatedColorText
                            theme="light"
                            whiteText="From concept to execution, Resonance Digital delivers end-to-end creative, tech, production, and post-production solutions tailored for world-class"
                            blueText="brands. With a global footprint spanning countries like the United States, Canada, Europe, and APAC, we bring bold ideas to life across screens. We don't merely support brand ambition, we accelerate it."
                        />
                    </div>
                </div>
            </section>

            {/* Stats and Services Section */}
                    <section className="w-full bg-[#f7f5ee] px-6 md:px-12 lg:px-24 border-b border-black/[0.06] flex items-center py-20">
                        <div className="w-full max-w-[1700px] mx-auto flex flex-col justify-center">

                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.05fr_1.2fr_0.9fr_0.85fr] gap-12 lg:gap-16 xl:gap-20 justify-items-center mb-20">
                                {/* Stat 1 */}
                                <div className="w-full max-w-[340px] mx-auto text-center flex flex-col items-center">
                                    <div className="flex items-center justify-center -mb-3">
                                        <img
                                            src="/assets/images/about/man.png"
                                            alt="Experts"
                                            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 object-contain filter brightness-0 opacity-40 shrink-0 -mr-3 sm:-mr-4 md:-mr-5 lg:-mr-6 xl:-mr-6"
                                        />
                                        <span className="relative inline-block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-light text-[#8e8e8e] leading-none ml-2">
                                            200
                                            <span className="absolute -top-1 md:-top-2 lg:-top-3 -right-6 md:-right-8 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-light text-[#8e8e8e] leading-none">+</span>
                                        </span>
                                    </div>
                                    <p className="text-[#58595b] text-sm md:text-base lg:text-lg font-sans font-bold tracking-wide">
                                        Experts in our team
                                    </p>
                                </div>

                                {/* Stat 2 */}
                                <div className="w-full max-w-[340px] mx-auto text-center flex flex-col items-center">
                                    <div className="flex items-center justify-center -mb-3">
                                        <img
                                            src="/assets/images/about/projects.png"
                                            alt="Projects Delivered"
                                            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 object-contain filter brightness-0 opacity-40 shrink-0 -mr-3 sm:-mr-4 md:-mr-5 lg:-mr-6 xl:-mr-7"
                                        />
                                        <span className="relative inline-block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-light text-[#8e8e8e] tracking-tight leading-none ml-2">
                                            1000
                                            <span className="absolute -top-1 md:-top-2 lg:-top-3 -right-6 md:-right-8 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-light text-[#8e8e8e] leading-none">+</span>
                                        </span>
                                    </div>
                                    <p className="text-[#58595b] text-sm md:text-base lg:text-lg font-sans font-bold tracking-wide">
                                        Projects Delivered
                                    </p>
                                </div>

                                {/* Stat 3 */}
                                <div className="w-full max-w-[340px] mx-auto text-center flex flex-col items-center">
                                    <div className="flex items-center justify-center -mb-3">
                                        <img
                                            src="/assets/images/about/globe.png"
                                            alt="Countries"
                                            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 object-contain filter brightness-0 opacity-40 shrink-0 -mr-3 sm:-mr-4 md:-mr-5 lg:-mr-6 xl:-mr-6"
                                        />
                                        <span className="relative inline-block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-light text-[#8e8e8e] leading-none ml-2">
                                            20
                                            <span className="absolute -top-1 md:-top-2 lg:-top-3 -right-6 md:-right-8 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-light text-[#8e8e8e] leading-none">+</span>
                                        </span>
                                    </div>
                                    <p className="text-[#58595b] text-sm md:text-base lg:text-lg font-sans font-bold tracking-wide">
                                        Countries served
                                    </p>
                                </div>

                                {/* Stat 4 */}
                                <div className="w-full max-w-[340px] mx-auto text-center flex flex-col items-center">
                                    <div className="flex items-center justify-center -mb-3">
                                        <img
                                            src="/assets/images/about/2016.png"
                                            alt="Years"
                                            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 object-contain filter brightness-0 opacity-40 shrink-0 -mr-3 sm:-mr-4 md:-mr-5 lg:-mr-6 xl:-mr-7"
                                        />
                                        <span className="relative inline-block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-light text-[#8e8e8e] leading-none ml-2">
                                            10
                                            <span className="absolute -top-1 md:-top-2 lg:-top-3 -right-6 md:-right-8 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-light text-[#8e8e8e] leading-none">+</span>
                                        </span>
                                    </div>
                                    <p className="text-[#58595b] text-sm md:text-base lg:text-lg font-sans font-bold tracking-wide">
                                        Years of legacy
                                    </p>
                                </div>
                            </div>

                            {/* Services Description Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.05fr_1.2fr_0.9fr_0.85fr] gap-10 lg:gap-16 xl:gap-19 items-start w-full">
                                {/* VFX: Movies & Ads */}
                                <div>
                                    <h3 className="font-display text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#58595b] pb-2 border-b border-black/[0.76] mb-3 whitespace-nowrap">
                                        VFX: Movies & Ads
                                    </h3>
                                    <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-5">
                                        Successfully delivered visual effects for more than 200 Hollywood projects & 50 Bollywood projects.
                                    </p>
                                    <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
                                        Films, Episodic, Commercials, Automobiles, Architectural & Products.
                                    </p>
                                </div>

                                {/* Brand Solutions */}
                                <div>
                                    <h3 className="font-display text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-[#58595b] pb-2 border-b border-black/[0.76] mb-3 whitespace-nowrap">
                                        Brand Solutions
                                    </h3>
                                    <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-5">
                                        Multiple campaigns for more than 50 brands/corporates in varied mediums.
                                    </p>
                                    <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
                                        Branding, Digital Marketing, Mainline advertising, Product photography, TVC production, Audio Visual films and Content Creation.
                                    </p>
                                </div>

                                {/* Real Estate Mar-tech */}
                                <div>
                                    <h3 className="font-display text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-[#58595b] pb-2 border-b border-black/[0.76] mb-3 whitespace-nowrap">
                                        Real Estate Mar-tech
                                    </h3>
                                    <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-5">
                                        Ideated and designed technology campaigns for large scale brands and corporates across India.
                                    </p>
                                    <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
                                        AR, VR, MR, Projection Mapping, Interactive Media, Custom Web & App development.
                                    </p>
                                </div>

                                {/* Motion Pictures */}
                                <div>
                                    <h3 className="font-display text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-[#58595b] pb-2 border-b border-black/[0.76] mb-3 whitespace-nowrap">
                                        Motion Pictures
                                    </h3>
                                    <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-5">
                                        Produced IP's ranging from web series, documentaries to short films.
                                    </p>
                                    <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
                                        Series, documentaries & short films.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
            {/* Meet Our Team Section */}
            <section className="relative w-full overflow-hidden bg-[#f2eee2] py-24 px-6 md:px-12 lg:px-20">
                {/* Background Glow */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),transparent_55%)]" />

                <div className="relative z-10 w-full">
                    {/* Heading */}
                    <div className="max-w-5xl relative z-10">
                        <h2 className=" text-[56px] md:text-[80px] lg:text-[100px] font-bold text-black leading-[0.95] mb-8">
                            Meet our team
                        </h2>

                        <div className="max-w-[1100px] text-theme-secondaryText text-[32px] md:text-[46px] lg:text-[58px] font-bold font-display leading-[0.90] tracking-tight">
                            Guided by strong vision and thoughtful, Resonance is proud to be a reliable
                            <span className="text-theme-secondaryText font-display font-bold"> partner for major creative initiatives in India and beyond.</span>
                        </div>
                    </div>

                    {/* Team Visual Composition */}
                    <div className="relative z-30 mt-2 md:mt-1 min-h-[700px] md:min-h-[500px] flex flex-col md:flex-row items-center md:items-end justify-center gap-6 md:gap-0">
                        {/* Left Info Card */}
                        <div className="relative md:absolute md:left-0 md:bottom-8 z-50 bg-white/90 border border-black/[0.06] backdrop-blur-sm p-6 w-full max-w-[320px] md:w-[280px] text-gray-800 shadow-2xl">
                            <h3 className="text-gray-500 font-semibold text-lg mb-3">
                                Abhyuday Grover
                            </h3>

                            <p className="text-sm leading-relaxed text-gray-600 mb-3">
                                Multiple campaigns for more than 50 brands/corporates in varied mediums.
                            </p>

                            <p className="text-sm leading-relaxed text-gray-500">
                                Branding, Digital Marketing, Mainline advertising, Product photography, TVC production, Audio Visual films and Content creation.
                            </p>
                        </div>

                        {/* Main Team Images */}
                        <div className="relative z-30 flex items-end justify-center my-4 md:my-0 md:translate-y-16">
                            {/* Back Person */}
                            <img
                                src="/assets/images/team/team-1.png"
                                alt="Team member"
                                className="relative z-30 w-[220px] sm:w-[260px] md:w-[420px] lg:w-[500px] object-contain grayscale contrast-125 brightness-95"
                            />

                            {/* Front Person */}
                            <img
                                src="/assets/images/team/team-2.png"
                                alt="Team member"
                                className="absolute bottom-0 right-[-15%] md:right-[-20%] z-40 w-[190px] sm:w-[230px] md:w-[360px] lg:w-[440px] object-contain grayscale contrast-125 brightness-95"
                            />
                        </div>

                        {/* Right Info Card */}
                        <div className="relative md:absolute md:right-0 md:bottom-0 z-50 bg-white/90 border border-black/[0.06] backdrop-blur-sm p-6 w-full max-w-[320px] md:w-[280px] text-gray-800 shadow-2xl">
                            <h3 className="text-gray-500 font-semibold text-lg mb-3">
                                Utsarg Grover
                            </h3>

                            <p className="text-sm leading-relaxed text-gray-600 mb-3">
                                Multiple campaigns for more than 50 brands/corporates in varied mediums.
                            </p>

                            <p className="text-sm leading-relaxed text-gray-500">
                                Branding, Digital Marketing, Mainline advertising, TVC production, Audio Visual films and Content creation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Members Grid */}
            <section className="w-full bg-[#f2eee2] px-12 md:px-24 pb-24 pt-24">
                <div className="max-w-[1700px] mx-auto flex flex-col gap-[2px]">
                    {/* Row 1 */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
                        {members.slice(0, 4).map((member, i) => renderMember(member, i))}
                    </div>
                    {/* Row 2 */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
                        {members.slice(4, 8).map((member, i) => renderMember(member, i + 4))}
                    </div>
                    {/* Row 3 */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-[2px] w-full md:w-[75%]">
                            {members.slice(8, 11).map((member, i) => renderMember(member, i + 8))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer theme="light" />
        </>
    );
};

export default About;
