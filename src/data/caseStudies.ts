export interface CaseStudy {
    slug: string;
    title: string;
    client: string;
    service: string;
    year: string;
    heroImage: string;
    thumbnail: string;
    summary: string;
    objective: string;
    challenge: string;
    solution: string;
    creativeApproach: string;
    outcome: string;
    sections: any[];
    pdfClient: string;
    pdfService: string;
    pdfYear: string;
    pdfDescription: string;
}

const caseStudyPath = (folder: string, file: string) =>
    `/assets/images/CaseStudies/${folder}/${file}`;

export const caseStudies: CaseStudy[] = [
    {
        slug: "vraj-meridian",
        title: "Meridian",
        client: "Vraj Group",
        service: "Brand Campaign",
        year: "2024",
        heroImage: caseStudyPath("Vraj", "VrajThumb.png"),
        thumbnail: caseStudyPath("Vraj", "VrajThumb.png"),
        summary: "A premium real estate communication system for Meridian, extending from identity and collateral to digital and outdoor touchpoints.",
        objective: "Build a premium project identity for a high-end residential launch.",
        challenge: "Create a refined brand presence that could work across sales collateral, digital media, OOH, and on-ground communication.",
        solution: "Developed a luxury-led visual language and translated it into campaign assets, collateral, and showcase imagery.",
        creativeApproach: "Minimal layouts, architectural imagery, and restrained typography mirror the polished presentation structure in the source deck.",
        outcome: "Delivered a cohesive launch ecosystem with a premium, recognizable positioning.",
        sections: [
            { type: "image", image: caseStudyPath("Vraj", "1.png"), alt: "Meridian lifestyle campaign visual", variant: "contained" },
            { type: "gallery", variant: "two-column", images: [
                { src: caseStudyPath("Vraj", "3.png"), alt: "Meridian collateral and brochure system" },
                { src: caseStudyPath("Vraj", "4.png"), alt: "Meridian outdoor campaign billboard" }
            ] },
            { type: "image", image: caseStudyPath("Vraj", "2.png"), alt: "Meridian social media campaign", variant: "contained" }
        ],
        pdfClient: "VRAJ GROUP",
        pdfService: "LAUNCH NEW PROPERTY",
        pdfYear: "2025",
        pdfDescription: "Launching Vraj group exclusive property in Mumbai Developed the brand communication for Vraj Meridian, a prime project in Andheri (W) Mumbai. From creating the logo, look and colour palette, the campaign was taken across multiple touchpoints like social, outdoor, and print, including a coffee table placed at the sales gallery."
    },
    {
        slug: "morde",
        title: "MORDE",
        client: "MORDE",
        service: "Launch New Packaging",
        year: "2025",
        heroImage: caseStudyPath("Morde", "MordThumb.png"),
        thumbnail: caseStudyPath("Morde", "MordThumb.png"),
        summary: "A packaging launch and brand refresh system across brochures, digital content, POSM, and social media.",
        objective: "Refresh brand identity and drive engagement across B2B and B2C audiences.",
        challenge: "Showcase the product range and new packaging across trade, digital, and on-ground contexts without losing consistency.",
        solution: "Created an integrated campaign language across catalogues, social content, store visibility, and launch communication.",
        creativeApproach: "Product-first layouts, strong red accents, and organized grid compositions preserve the food-led energy of the deck.",
        outcome: "Created a cohesive brand presence across touchpoints, driving visibility and engagement.",
        sections: [
            { type: "image", image: caseStudyPath("Morde", "2.png"), alt: "MORDE brochure and collateral showcase", variant: "contained" },
            { type: "image", image: caseStudyPath("Morde", "3.png"), alt: "MORDE launch and booth communication", variant: "full" },
            { type: "image", image: caseStudyPath("Morde", "4.png"), alt: "MORDE social media and website layout", variant: "full" }
        ],
        pdfClient: "MORDE",
        pdfService: "LAUNCH NEW PACKAGING",
        pdfYear: "2025",
        pdfDescription: "Objective: Digital content to drive engagement and increase footfalls for the brand at Bakery Business South, Hyderabad with emailers, videos, e-brochures, Insta reels, posts, and carousels."
    },
    {
        slug: "killer",
        title: "Killer Jeans",
        client: "Killer Jeans",
        service: "Original Content & Copywriting",
        year: "2024",
        heroImage: caseStudyPath("Killer", "KillThumb.png"),
        thumbnail: caseStudyPath("Killer", "KillThumb.png"),
        summary: "A youth-first content and campaign system spanning print, digital, social media, and outdoor formats.",
        objective: "Reinforce brand identity for a younger, style-forward audience.",
        challenge: "Build high-energy creative that felt native to youth culture while retaining the brand's established attitude.",
        solution: "Developed bold copy, campaign visuals, social formats, and activation-led content.",
        creativeApproach: "High-contrast visuals, poster grids, and street-culture compositions follow the PDF's energetic layout sequence.",
        outcome: "Delivered scroll-stopping content aligned with youth culture and digital traction.",
        sections: [
            { type: "gallery", variant: "filmstrip", images: [
                { src: caseStudyPath("Killer", "2.png"), alt: "Killer Jeans campaign poster one" },
                { src: caseStudyPath("Killer", "3.png"), alt: "Killer Jeans campaign poster two" }
            ] },
            { type: "image", image: caseStudyPath("Killer", "4.png"), alt: "Killer Jeans social and summer campaign collage", variant: "contained" }
        ],
        pdfClient: "KEWAL KIRAN CLOTHING LTD.",
        pdfService: "SOCIAL MEDIA",
        pdfYear: "2020",
        pdfDescription: "Creative mandate for the iconic denim brand for print, social and OOH. Developed the brand communication for Vraj Meridian, a prime project in Andheri (W) Mumbai."
    },
    {
        slug: "netflix",
        title: "Netflix India",
        client: "Netflix India",
        service: "Campaign Production",
        year: "2021-2023",
        heroImage: caseStudyPath("Netflix", "NetfThumb.png"),
        thumbnail: caseStudyPath("Netflix", "NetfThumb.png"),
        summary: "End-of-year Playback campaigns and entertainment-led social films built around culturally relevant storytelling.",
        objective: "Drive engagement through culturally relevant storytelling.",
        challenge: "Create high-recall campaign films that could connect platform titles with Indian pop culture moments.",
        solution: "Produced the Playback campaign series and extended platform engagement through celebrity-led, shareable content.",
        creativeApproach: "Large cinematic stills and tight text panels preserve the entertainment editorial rhythm of the deck.",
        outcome: "Built high-recall, shareable content that amplified platform love and cultural relevance.",
        sections: [
            { type: "image", image: caseStudyPath("Netflix", "1.png"), alt: "Netflix Playback 2021 film still", variant: "contained" },
            { type: "image", image: caseStudyPath("Netflix", "2.png"), alt: "Netflix Playback 2022 film still", variant: "contained" },
            { type: "image", image: caseStudyPath("Netflix", "3.png"), alt: "Netflix Playback 2023 film still", variant: "contained" },
            { type: "image", image: caseStudyPath("Netflix", "4.png"), alt: "Netflix Playback behind the scenes still", variant: "contained" }
        ],
        pdfClient: "NETFLIX",
        pdfService: "XXXXX XXXX XXXX",
        pdfYear: "XXXX",
        pdfDescription: "Objective: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis."
    },
    {
        slug: "conosh",
        title: "CONOSH",
        client: "CONOSH",
        service: "Brand Solutions",
        year: "2025",
        heroImage: caseStudyPath("Conosh", "ConoThumb.png"),
        thumbnail: caseStudyPath("Conosh", "ConoThumb.png"),
        summary: "A community-led culinary brand ecosystem spanning social media, website, videos, and a flagship content series.",
        objective: "Build a community-driven culinary platform and grow digital presence.",
        challenge: "Unify chef-led community content, digital discovery, and premium food experiences under one recognizable identity.",
        solution: "Created social media systems, website content, video assets, and a flagship web series featuring celebrity chefs.",
        creativeApproach: "Hexagonal chef imagery, desktop/mobile product views, and food-led film stills follow the deck's editorial order.",
        outcome: "Scaled to 100K followers and established a strong content-led brand identity in the food space.",
        sections: [
            { type: "image", image: caseStudyPath("Conosh", "1.png"), alt: "CONOSH chef community collage", variant: "contained" },
            { type: "gallery", variant: "two-column", images: [
                { src: caseStudyPath("Conosh", "3.png"), alt: "CONOSH website showcase" },
                { src: caseStudyPath("Conosh", "2.png"), alt: "CONOSH social media showcase" }
            ] },
            { type: "image", image: caseStudyPath("Conosh", "4.png"), alt: "CONOSH branded food visual", variant: "full" },
            { type: "gallery", variant: "two-column", images: [
                { src: caseStudyPath("Conosh", "5.png"), alt: "Ultimate Homechef of India title visual" },
                { src: caseStudyPath("Conosh", "6.png"), alt: "Ultimate Homechef of India production stills" }
            ] }
        ],
        pdfClient: "CONOSH",
        pdfService: "XXXXX XXXX XXXX",
        pdfYear: "XXXX",
        pdfDescription: "Objective: A hospitality company promoting culinary learning and experence dining on a global stage. Here guests interact with culinary stars to share, imbibe and expand their clulinary senses."
    },
    {
        slug: "oppo",
        title: "OPPO",
        client: "OPPO",
        service: "Video Editing & Animation",
        year: "2024",
        heroImage: caseStudyPath("Oppo", "OppoThumb.png"),
        thumbnail: caseStudyPath("Oppo", "OppoThumb.png"),
        summary: "A mascot-led product narrative that made OPPO AI features clear, approachable, and human.",
        objective: "Bring AI capabilities to life in an engaging, humanised way.",
        challenge: "Explain AI product features through a story that felt warm rather than technical.",
        solution: "Conceptualised and executed a mascot-led narrative blending storytelling with product demonstration.",
        creativeApproach: "The section order keeps the deck's transition from hero mascot visual to production and interaction frames.",
        outcome: "Created a friendly product communication system for AI-led phone features.",
        sections: [
            { type: "image", image: caseStudyPath("Oppo", "1.png"), alt: "OPPO mascot hero visual", variant: "contained" },
            { type: "image", image: caseStudyPath("Oppo", "2.png"), alt: "OPPO AI product demonstration frames", variant: "contained" },
            { type: "image", image: caseStudyPath("Oppo", "3.png"), alt: "OPPO AI campaign supporting frames", variant: "contained" }
        ],
        pdfClient: "OPPO",
        pdfService: "MASCOT IDENTITY & BRAND FILM",
        pdfYear: "2024",
        pdfDescription: "Communicate OPPO AI capabilities, driving narrative through celebrity Ranbir Kapoor."
    },
    {
        slug: "mahindra-xuv-500",
        title: "Mahindra XUV 500",
        client: "Mahindra XUV 500",
        service: "Campaign Production",
        year: "2018",
        heroImage: caseStudyPath("Mahindra", "MahiThumb.png"),
        thumbnail: caseStudyPath("Mahindra", "MahiThumb.png"),
        summary: "A full-CG automotive launch and product film campaign showcasing design, performance, and technology.",
        objective: "Showcase product innovation and elevate brand perception.",
        challenge: "Create premium automotive films and CG imagery that made the new vehicle feel technically advanced and desirable.",
        solution: "Delivered product films and full-CG executions highlighting design, performance, and features.",
        creativeApproach: "Dark studio imagery, close-up feature grids, and high-gloss driving frames mirror the PDF's product-led pacing.",
        outcome: "Positioned Mahindra as a tech-forward automotive brand, including India's first end-to-end CG car launch.",
        sections: [
            { type: "image", image: caseStudyPath("Mahindra", "1.png"), alt: "Mahindra XUV 500 hero product visual", variant: "contained" },
            { type: "gallery", variant: "grid", title: "Product Film", images: [
                { src: caseStudyPath("Mahindra", "2.png"), alt: "Mahindra product film frame one" },
                { src: caseStudyPath("Mahindra", "3.png"), alt: "Mahindra product film frame two" },
                { src: caseStudyPath("Mahindra", "4.png"), alt: "Mahindra product film frame three" },
                { src: caseStudyPath("Mahindra", "5.png"), alt: "Mahindra product film frame four" }
            ] },
            { type: "image", image: caseStudyPath("Mahindra", "6.png"), alt: "Mahindra CGI image film frames", variant: "full" }
        ],
        pdfClient: "Mahindra",
        pdfService: "XXXXX XXXX XXXX",
        pdfYear: "XXXX",
        pdfDescription: "Objective: This product film is a visual experience, showcasing the best of what Mahindra XUV 500 has to offer. With this, we became the first Indian company to execute end-to-end CG for a car launch."
    },
    {
        slug: "estuary",
        title: "Estuary",
        client: "Estuary",
        service: "Digital Marketing",
        year: "2020",
        heroImage: caseStudyPath("Estuary", "EstuThumb.png"),
        thumbnail: caseStudyPath("Estuary", "EstuThumb.png"),
        summary: "A refined brand and digital language for a premium bottled water brand.",
        objective: "Establish a premium identity in a niche category.",
        challenge: "Position the brand as aspirational while keeping the communication clean and product-forward.",
        solution: "Built a refined brand language across packaging, digital, website, and films.",
        creativeApproach: "Blue-and-white compositions, product close-ups, and digital mockups retain the source deck's crisp hierarchy.",
        outcome: "Positioned the brand as aspirational and category-defining.",
        sections: [
            { type: "image", image: caseStudyPath("Estuary", "1.png"), alt: "Estuary product identity visual", variant: "contained" },
            { type: "image", image: caseStudyPath("Estuary", "2.png"), alt: "Estuary website showcase", variant: "contained" },
            { type: "gallery", variant: "two-column", images: [
                { src: caseStudyPath("Estuary", "3.png"), alt: "Estuary digital and social assets" },
                { src: caseStudyPath("Estuary", "4.png"), alt: "Estuary product film visual" }
            ] }
        ],
        pdfClient: "Mahindra",
        pdfService: "XXXXX XXXX XXXX",
        pdfYear: "XXXX",
        pdfDescription: "Objective: This product film is a visual experience, showcasing the best of what Mahindra XUV 500 has to offer. With this, we became the first Indian company to execute end-to-end CG for a car launch."
    },
    {
        slug: "calamus-one",
        title: "Calamus One - Ultrabike",
        client: "Calamus One - Ultrabike",
        service: "Brand Film",
        year: "2019",
        heroImage: caseStudyPath("Calumus", "CaluThumb.png"),
        thumbnail: caseStudyPath("Calumus", "CaluThumb.png"),
        summary: "A tech-forward launch narrative and campaign system for a next-generation e-bike.",
        objective: "Launch a next-gen e-bike with a tech-forward narrative.",
        challenge: "Introduce a new mobility product with enough product clarity and future-facing energy to support market entry.",
        solution: "Developed product films and digital storytelling highlighting design innovation and smart features.",
        creativeApproach: "Wide bike imagery, identity layouts, and dark product frames keep the exact source-deck sequence.",
        outcome: "Enabled strong market entry and successful crowdfunding traction.",
        sections: [
            { type: "image", image: caseStudyPath("Calumus", "1.png"), alt: "Calamus One e-bike hero visual", variant: "contained" },
            { type: "image", image: caseStudyPath("Calumus", "2.png"), alt: "Calamus One logo and identity system", variant: "contained" },
            { type: "image", image: caseStudyPath("Calumus", "3.png"), alt: "Calamus One product film frames", variant: "contained" }
        ],
        pdfClient: "CALAMUS",
        pdfService: "SHOWREEL",
        pdfYear: "2019",
        pdfDescription: "Objective: o introduce Calamus One, a next-generation E-bike, by positioning it as a breakthrough in urban mobility. The brand identity and messaging highlighted its pioneering features like the world’s first Android-enabled integrated display, on-board navigation, biometric rider recognition, and real-time diagnostics. The design language and campaign visuals conveyed a sense of intelligent innovation and precision engineering for the tech-savvy commuter."
    },
    {
        slug: "elegant",
        title: "Elegant Builders & Developers",
        client: "Elegant Builders & Developers",
        service: "Brand Solutions",
        year: "2024",
        heroImage: caseStudyPath("Elegent", "ElegThumb.png"),
        thumbnail: caseStudyPath("Elegent", "ElegThumb.png"),
        summary: "A nature-led luxury project launch positioned around conscious living and refined residential design.",
        objective: "Launch a nature-led luxury project.",
        challenge: "Express sustainability and premium residential value without making the communication feel generic.",
        solution: "Built a brand language rooted in conscious living across campaign and media assets.",
        creativeApproach: "Architectural visuals and intimate lifestyle imagery preserve the calmer closing rhythm of the PDF.",
        outcome: "Positioned the project at the intersection of sustainability and luxury.",
        sections: [
            { type: "image", image: caseStudyPath("Elegent", "1.png"), alt: "Elegant project hero visual", variant: "contained" },
            { type: "gallery", variant: "two-column", images: [
                { src: caseStudyPath("Elegent", "2.png"), alt: "Elegant project brand layout" },
                { src: caseStudyPath("Elegent", "3.png"), alt: "Elegant lifestyle visual" }
            ] },
            { type: "image", image: caseStudyPath("Elegent", "4.png"), alt: "Elegant project supporting visual", variant: "contained" }
        ],
        pdfClient: "ELEGENT",
        pdfService: "CAMPAIGN",
        pdfYear: "2024",
        pdfDescription: "Objective: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"
    },
    {
        slug: "micl",
        title: "MICL",
        client: "MICL",
        service: "Brand Campaign",
        year: "2024",
        heroImage: caseStudyPath("MICL", "MICLThumb.png"),
        thumbnail: caseStudyPath("MICL", "MICLThumb.png"),
        summary: "A lifestyle-led real estate campaign with coastal, community, and fashion-inspired visual language.",
        objective: "Create a premium lifestyle story for a residential project launch.",
        challenge: "Balance aspirational lifestyle imagery with project credibility across campaign formats.",
        solution: "Built a warm, people-first communication system across campaign visuals and outdoor-led layouts.",
        creativeApproach: "Beach lifestyle frames, collage spreads, and fashion-led imagery follow the presentation's exact visual pacing.",
        outcome: "Gave the project a recognizable lifestyle-first brand world.",
        sections: [
            { type: "image", image: caseStudyPath("MICL", "1.png"), alt: "MICL lifestyle hero campaign visual", variant: "contained" },
            { type: "image", image: caseStudyPath("MICL", "2.png"), alt: "MICL coastal lifestyle collage", variant: "contained" },
            { type: "gallery", variant: "two-column", images: [
                { src: caseStudyPath("MICL", "3.png"), alt: "MICL family lifestyle campaign" },
                { src: caseStudyPath("MICL", "4.png"), alt: "MICL fashion lifestyle campaign" }
            ] }
        ],
        pdfClient: "ELEGENT",
        pdfService: "CAMPAIGN",
        pdfYear: "2024",
        pdfDescription: "Objective: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"
    },
    {
        slug: "puravankara",
        title: "Puravankara",
        client: "Puravankara",
        service: "Real Estate Marketing",
        year: "2022",
        heroImage: caseStudyPath("Purvankara", "PurvThumb.png"),
        thumbnail: caseStudyPath("Purvankara", "PurvThumb.png"),
        summary: "A premium residential launch campaign across print, digital, and on-ground media.",
        objective: "Launch a premium residential project across channels.",
        challenge: "Carry a luxury real estate story across sales, outdoor, brochure, and digital campaign touchpoints.",
        solution: "Delivered a 360-degree campaign across print, digital, and on-ground media.",
        creativeApproach: "Brochure spreads, facade imagery, and outdoor installations preserve the deck's real-estate presentation style.",
        outcome: "Built a consistent, high-end brand narrative.",
        sections: [
            { type: "image", image: caseStudyPath("Purvankara", "1.png"), alt: "Puravankara project hero visual", variant: "contained" },
            { type: "image", image: caseStudyPath("Purvankara", "2.png"), alt: "Puravankara brochure showcase", variant: "contained" },
            { type: "gallery", variant: "two-column", images: [
                { src: caseStudyPath("Purvankara", "3.png"), alt: "Puravankara outdoor campaign assets" },
                { src: caseStudyPath("Purvankara", "4.png"), alt: "Puravankara digital campaign assets" }
            ] }
        ],
        pdfClient: "ELEGENT",
        pdfService: "CAMPAIGN",
        pdfYear: "2024",
        pdfDescription: "Objective: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"
    }
];

export const getCaseStudyBySlug = (slug: string | undefined) =>
    caseStudies.find((study) => study.slug === slug);

export const getRelatedCaseStudies = (slug: string, count = 3) =>
    caseStudies.filter((study) => study.slug !== slug).slice(0, count);