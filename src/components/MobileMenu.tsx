import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { label: "Home", href: "/" },
    { label: "VFX", href: "/vfx" },
    { label: "Brand Solutions", href: "/brand-solutions" },
    { label: "Real Estate", href: "/real-estate" },
    { label: "Motion Pictures", href: "/motion-pictures" },
    { label: "About Us", href: "/about" },
    { label: "Awards", href: "/awards" },
    { label: "Contact", href: "/contact" },
];

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    const location = useLocation();
    const isLightMenuTheme = [
        "/",
        "/brand-solutions",
        "/about",
        "/motion-pictures",
    ].includes(location.pathname);

    return (
        <>
            {/* Backdrop Overlay */}
            <div
                className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={onClose}
                style={{ willChange: "opacity" }}
            />

            {/* Side Menu Panel */}
            <div
                className={`fixed top-0 right-0 bottom-0 z-[70] w-full md:w-[450px] ${isLightMenuTheme ? "bg-[#f0ede1]" : "bg-[#14171d]"
                    } transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                style={{
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                }}
            >
                {/* Close Button - Top Right */}
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close menu"
                    className={`absolute top-8 right-8 flex items-center gap-2 transition-colors duration-300 group z-10 ${isLightMenuTheme
                            ? "text-[#cdcbc7] hover:text-[#14171d]"
                            : "text-[#58595b] hover:text-[#f6f4ed]"
                        }`}
                >
                    <X className="w-5 h-5" strokeWidth={1.5} />
                    <span className="text-xs uppercase tracking-wider font-light">
                        Close
                    </span>
                </button>

                {/* Menu Items - Centered with Padding */}
                <nav className="h-full flex flex-col justify-center gap-0 px-12 py-20 items-start">
                    {menuItems.map((item, index) => {
                        const isActive = location.pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                to={item.href}
                                onClick={onClose}
                                className="group relative w-full py-1.5 flex items-center justify-start"
                                style={{
                                    opacity: isOpen ? 1 : 0,
                                    transform: isOpen ? "translateX(0)" : "translateX(30px)",
                                    transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`,
                                    willChange: "opacity, transform",
                                }}
                            >
                                <span
                                    className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-colors duration-300 ${
                                        isActive
                                            ? (isLightMenuTheme ? "text-[#14171d]" : "text-[#f6f4ed]")
                                            : isLightMenuTheme
                                                ? "text-[#cdcbc7] group-hover:text-[#14171d]"
                                                : "text-[#58595b] group-hover:text-[#f6f4ed]"
                                    }`}
                                    style={{ willChange: "color" }}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Email at Bottom */}
                <div
                    className={`absolute bottom-12 left-0 right-0 flex justify-center text-xs px-8 ${isLightMenuTheme ? "text-[#cdcbc7]" : "text-[#58595b]"
                        }`}
                    style={{
                        opacity: isOpen ? 1 : 0,
                        transition: "opacity 0.8s ease 0.5s",
                    }}
                >
                    <a
                        href="mailto:info@resonancedigital.in"
                        className={`${isLightMenuTheme ? "hover:text-[#14171d]" : "hover:text-[#f6f4ed]"} transition-colors duration-300`}
                    >
                        info@resonancedigital.com
                    </a>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
