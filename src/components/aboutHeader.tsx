import { useState } from 'react';
import { motion, Variants, useScroll, useMotionValueEvent } from 'framer-motion'; 
import { useNavigate } from 'react-router-dom';
import logo from '../assets/header.png';
import image from '../assets/core.jpg';
import sidebar from '../assets/sidebarmenu.png'; 

const Header = () => {
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
    // --- Animation Variants ---
    const navVariants: Variants = {
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
    };

    const textReveal: Variants = {
        hidden: { y: "100%" },
        visible: (i: number) => ({
            y: 0,
            transition: { delay: 0.3 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        })
    };
    const navigate = useNavigate();
    const handleClick = (url: string) => {
        navigate(url);
    };
    return (
        <div className="relative w-full min-h-screen bg-transparent overflow-x-hidden">
            
            {/* === 1. NAVIGATION (Logo & Menu) === */}
            <motion.nav
                variants={navVariants}
                initial="visible"
                animate={isHidden ? "hidden" : "visible"}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-8 md:px-16 z-[100] bg-transparent pointer-events-none"
            >
                {/* Logo */}
                <motion.img 
                    src={logo} 
                    alt="Logo" 
                    className="w-24 md:w-32 cursor-pointer pointer-events-auto mix-blend-multiply"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                />

                {/* Menu Trigger */}
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => handleClick("/menu")}
className="w-12 md:hidden block cursor-pointer hover:opacity-70 transition-opacity pointer-events-auto"
                    src={sidebar}
                    alt="Menu"
                />
            </motion.nav>

            {/* === 2. HERO CONTENT === */}
            <main className="max-w-7xl mx-auto px-6 md:px-12 pt-32 lg:pt-0 min-h-screen flex items-center">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full">
                    
                    {/* LEFT: Typography */}
                    <div className="w-full lg:w-3/5 space-y-8 relative z-10">
                        <div className="flex gap-6 md:gap-10">
                            {/* Animated Vertical Line */}
                            <div className="w-[2px] md:w-[3px] bg-black/10 relative overflow-hidden h-auto min-h-[150px]">
                                <motion.div 
                                    initial={{ height: 0 }}
                                    animate={{ height: "100%" }}
                                    transition={{ duration: 1.2, ease: "easeInOut" }}
                                    className="absolute top-0 w-full bg-black" 
                                />
                            </div>

                            {/* Headline Reveal */}
                            <div className="flex flex-col justify-center">
                                {["A set of engineers,", "Built different."].map((text, i) => (
                                    <div key={i} className="overflow-hidden">
                                        <motion.h1
                                            custom={i}
                                            variants={textReveal}
                                            initial="hidden"
                                            animate="visible"
                                            className="text-[10vw] md:text-[7vw] lg:text-[6.5vw] heading-text uppercase leading-[0.85] tracking-tighter text-black"
                                        >
                                            {text}
                                        </motion.h1>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Description Paragraph */}
                        <motion.p 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 0.7, x: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="max-w-md text-base md:text-lg font-light leading-relaxed md:ml-16 border-t border-black/10 pt-8 text-black"
                        >
                            Established in 2014, <span className="font-bold">AIChE VIT</span> stands as the powerhouse of chemical innovation at VIT Vellore. Technical brilliance meets social impact.
                        </motion.p>
                    </div>

                    {/* RIGHT: Polaroid Image */}
                    <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
                        <motion.div 
                            initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
                            animate={{ opacity: 1, rotate: -2, scale: 1 }}
                            transition={{ delay: 1.2, duration: 1, type: "spring" }}
                            className="relative w-full max-w-sm aspect-[3/4] p-4 bg-white shadow-2xl border border-black/5 hover:rotate-0 transition-transform duration-500 ease-out"
                        >
                            {/* Tape Accent */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-black/5 backdrop-blur-md z-20 border-x border-black/5" />
                            
                            {/* Image Container */}
                            <div className="w-full h-full overflow-hidden bg-black border border-black/5">
                                <motion.img 
                                    initial={{ scale: 1.2, filter: "grayscale(100%)" }}
                                    animate={{ scale: 1, filter: "grayscale(0%)" }}
                                    transition={{ delay: 1.8, duration: 1.5 }}
                                    src={image} 
                                    alt="Core Team" 
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            
                            {/* Industrial Caption */}
                            <div className="absolute bottom-1 right-2 font-mono text-[8px] opacity-30 uppercase">
                                // CHAPTER_CORE_2025 // FIG 1.1
                            </div>
                        </motion.div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Header;