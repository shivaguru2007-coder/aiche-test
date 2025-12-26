import { useState } from 'react';
//import classNames from 'classnames';
import logo from '../assets/header.png';
import sidebar from '../assets/sidebarmenu.png';
import { motion, Variants, useScroll, useMotionValueEvent } from 'framer-motion';

interface EventHeaderProps {
  hours: string;
  schedule: string;
  title: string;
  bgHover: string;
}

const Insider = ({ hours, schedule, title }: EventHeaderProps) => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  const handleClick = (url: string) => { window.location.href = url; };

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        // Hide if scrolling down and moved past 150px
        if (latest > previous && latest > 150) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    });
  const textReveal: Variants = {
    hidden: { y: "100%", opacity: 0 },
    show: { 
      y: "0%", 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } 
    }
  };
  const navVariants = {
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
    };
  return (
    <div className="relative min-h-screen w-full text-white overflow-x-hidden selection:bg-white selection:text-black font-sans">
      
      {/* --- Navbar --- */}

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
                    className="w-24 md:hidden md:w-32 cursor-pointer pointer-events-auto mix-blend-multiply"
                    onClick={() => handleClick("/")}
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

      <div className="flex flex-col md:flex-row min-h-screen w-full">
        
        {/* LEFT COLUMN: Title (Now Order-1 on Mobile) */}
        <div className="w-full md:w-3/5 flex flex-col justify-end md:justify-center px-6 pb-12 md:pb-0 md:px-20 z-10 order-1 pt-32 md:pt-0">
          
          <div className="flex gap-4 mb-6 items-center">
            <div className="h-[1px] w-8 bg-white/40" />
            <div className="flex gap-4">
              {[hours, schedule].map((item, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.p 
                    initial="hidden" whileInView="show" variants={textReveal}
                    className="text-[10px] font-mono uppercase tracking-widest text-white/60"
                  >
                    {item}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <h1 className="text-[15vw] md:text-[10vw] font-bold leading-[0.85] tracking-tighter uppercase">
              {title.split(' ').map((word, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span 
                    className="block" 
                    variants={textReveal} 
                    initial="hidden" 
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>
        </div>

        {/* RIGHT COLUMN: The Briefing Card (Order-2 on Mobile) */}
        <div className="w-full md:w-2/5 flex items-start md:items-center justify-center p-6 md:p-8 order-2">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="w-full max-w-sm bg-white/5 border border-white/10 rounded-xl p-8 md:p-12 backdrop-blur-xl relative"
          >
            {/* Aesthetic Detail */}
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20" />

            <h3 className="text-white/40 font-mono text-[10px] uppercase tracking-[0.4em] mb-8">inside</h3>
            
            <p className="text-lg md:text-xl leading-relaxed text-white/80 font-light">
              "An <span className="text-white font-semibold">AIChE-VIT Insider</span> isn’t just a member — they are the vital pulse. We define the strategy."
            </p>

            <div className="mt-10 flex justify-between items-center border-t border-white/10 pt-6">
               <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

export default Insider;