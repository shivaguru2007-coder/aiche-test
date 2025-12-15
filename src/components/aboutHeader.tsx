import { useState } from 'react';
// 1. Import hooks
import { motion, Variants, useScroll, useMotionValueEvent } from 'framer-motion'; 
import logo from '../assets/header.png';
import image from '../assets/black.webp';
import sidebar from '../assets/sidebarmenu.png'; 

const Header = () => {
    const handleClick = (url: string) => {
        window.location.href = url;
    };

    // --- Scroll Logic ---
    const [isHidden, setIsHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        // Hide if scrolling down and moved past 150px
        if (latest > previous && latest > 150) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    });

    // --- Navbar Variants ---
    const navVariants: Variants = {
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
    };

    const textVariant: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: 0.5 + i * 0.1, duration: 0.8, ease: "easeOut" }
        })
    };

    const lineVariant: Variants = {
        hidden: { height: 0 },
        visible: { 
            height: "100%", 
            transition: { delay: 0.2, duration: 1.5, ease: "easeInOut" } 
        }
    };

    return (
        <div className="relative w-full min-h-screen flex flex-col overflow-hidden lg:pr-32">
            
            {/* === 1. TOP NAVIGATION (Fixed & Animated) === */}
            <motion.nav
                variants={navVariants}
                initial="visible" // Start visible
                animate={isHidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                // Added: fixed, top-0, left-0, z-50. Removed: bg-white (kept transparent)
                className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-6 md:px-12 z-50"
            >
                {/* Logo */}
                <motion.img
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    onClick={() => handleClick("/")}
                    className="w-24 md:w-32 cursor-pointer mix-blend-multiply" 
                    src={logo} 
                    alt="Logo"
                />

                {/* Mobile Menu Trigger */}
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => handleClick("/menu")}
                    className="w-12 md:hidden block cursor-pointer hover:opacity-70 transition-opacity"
                    src={sidebar}
                    alt="Menu"
                />
            </motion.nav>

            {/* === 2. HERO CONTENT SECTION === */}
            {/* Added pt-24 to compensate for the fixed header so content doesn't get covered initially */}
            <div className="flex-grow flex flex-col lg:flex-row items-center lg:items-start justify-center px-6 md:px-12 mt-8 lg:mt-20 mb-20 pt-24">
                
                {/* LEFT COLUMN: The Typography */}
                <div className="w-full lg:w-3/5 flex flex-col justify-center relative z-10">
                    
                    <div className="flex">
                        {/* The Animated White Line */}
                        <div className="mr-6 md:mr-10 relative w-1 md:w-2 bg-black/10 h-auto min-h-[200px]">
                            <motion.div 
                                variants={lineVariant}
                                initial="hidden"
                                animate="visible"
                                className="absolute top-0 left-0 w-full bg-black" 
                            />
                        </div>

                        {/* The Headline Text */}
                        <div className="flex flex-col justify-center">
                            {["A set of engineers,", "Built different"].map((text, i) => (
                                <motion.h1
                                    key={text}
                                    custom={i}
                                    variants={textVariant}
                                    initial="hidden"
                                    animate="visible"
                                    className="text-5xl md:text-7xl lg:text-8xl font-semi-bold tracking-tight leading-[0.9] uppercase heading-text text-black"
                                >
                                    {text}
                                </motion.h1>
                            ))}
                        </div>
                    </div>

                    {/* The Intro Paragraph */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="mt-12 md:pl-12 max-w-xl"
                    >
                        <p className="text-lg md:text-xl font-light text-justify leading-relaxed opacity-80 options-text border-t pt-6 border-black">
                            Established in 2014, AIChE VIT stands as the powerhouse of chemical innovation at VIT Vellore. We are a future-forging force where technical brilliance meets social impact.
                        </p>
                    </motion.div>
                </div>

                {/* RIGHT COLUMN: The Image */}
                <div className="w-full lg:w-2/5 mt-12 lg:mt-0 relative flex justify-center lg:justify-end">
                    <motion.div 
                        initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
                        animate={{ opacity: 1, rotate: -2, scale: 1 }}
                        transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
                        className="relative w-full max-w-md aspect-[3/4] p-4 bg-white shadow-2xl border border-black/10 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 ease-out"
                    >
                        {/* Tape Effect */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm rotate-1 border-l border-r border-white/60 shadow-sm z-20"></div>

                        {/* The Image */}
                        <div className="w-full h-full overflow-hidden border border-black/5 bg-black">
                             <motion.img 
                                initial={{ scale: 1.2, filter: "grayscale(100%)" }}
                                animate={{ scale: 1, filter: "grayscale(0%)" }}
                                transition={{ delay: 1.8, duration: 1.5 }}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                                src={image} 
                                alt="Hero" 
                            />
                        </div>

                        {/* Caption */}
                        <div className="absolute bottom-1 right-2 font-mono text-[10px] opacity-50 uppercase">
                            Fig 1.1 // The Beginning
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Header;