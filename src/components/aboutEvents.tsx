import img from '../assets/insider.jpeg';
import TickerTape from './tickerTape';

const AboutEvents = () => {
    const handleClick = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <div className="mt-12 md:mt-16 flex flex-col w-full mb-16">

            <div className="flex flex-col items-center justify-center mb-8">
                <h1 className="lg:text-8xl text-6xl text-center tracking-tighter heading-text uppercase">
                    Events<br />Coming Up
                </h1>
            </div>
            <TickerTape text="REGISTRATIONS OPEN // AIChE VIT" direction="left" />
            <div className="w-full flex flex-col md:flex-row border-b-2 border-black">
                <div className="group flex-1 flex flex-col items-center justify-center py-12 px-4 border-b-2 md:border-b-0 md:border-r-2 border-black transition-colors duration-300 hover:bg-black hover:text-[#E6D5B8] cursor-crosshair">
                    <span className="font-mono text-xs mb-2 opacity-60">01/2026</span>
                    <h3 className="text-xl md:text-2xl text-center font-bold uppercase leading-tight">Yantra Event</h3>
                </div>
                <div className="group flex-1 flex flex-col items-center justify-center py-12 px-4 border-b-2 md:border-b-0 md:border-r-2 border-black transition-colors duration-300 hover:bg-black hover:text-[#E6D5B8] cursor-crosshair">
                    <span className="font-mono text-xs mb-2 opacity-60">03/2026</span>
                    <h3 className="text-xl md:text-2xl text-center font-bold uppercase leading-tight">Chemathon <br/>7.0</h3>
                </div>
         {/*
            <div className="w-full flex flex-col md:flex-row border-b-2 border-black">
                <div className="group flex-1 flex flex-col items-center justify-center py-12 px-4 border-b-2 md:border-b-0 md:border-r-2 border-black transition-colors duration-300 hover:bg-black hover:text-[#E6D5B8] cursor-crosshair">
                    <span className="font-mono text-xs mb-2 opacity-60">09/21</span>
                    <h3 className="text-xl md:text-2xl text-center font-bold uppercase leading-tight">Smooth Operator</h3>
                </div>
                <div className="group flex-1 flex flex-col items-center justify-center py-12 px-4 border-b-2 md:border-b-0 md:border-r-2 border-black transition-colors duration-300 hover:bg-black hover:text-[#E6D5B8] cursor-crosshair">
                    <span className="font-mono text-xs mb-2 opacity-60">02/07</span>
                    <h3 className="text-xl md:text-2xl text-center font-bold uppercase leading-tight">Operation Antidote:<br/>The Final Formula</h3>
                </div>
  <div className="group flex-1 flex flex-col items-center justify-center py-12 px-4 transition-colors duration-300 hover:bg-black hover:text-[#E6D5B8] cursor-crosshair">
                    <span className="font-mono text-xs mb-2 opacity-60">12/11</span>
                    <h3 className="text-xl md:text-2xl text-center font-bold uppercase leading-tight">Hazard Protocol</h3>
                </div>*/}
            </div>

            <div className="w-full flex justify-center py-12 border-b-2 border-black border-dashed bg-[#E6D5B8]">
                <button 
                    onClick={() => handleClick("./events")} 
                    className="relative px-12 py-4 border-2 border-black bg-white text-xl font-bold uppercase tracking-widest transition-all duration-200 hover:bg-black hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                    View All Archives
                </button>
            </div>
            <div className="grid md:grid-cols-2 w-full md:mt-16 mt-8 gap-8 px-4 md:px-0">
                
                {/* === NEW "MEET THE TEAM" COMPONENT === */}
                <div 
                    onClick={() => handleClick("/board")} 
                    className="relative h-80 md:h-[500px] cursor-pointer group font-bold uppercase z-0"
                >
                    {/* The 'Shadow' Layer (Solid Black Offset Box) */}
                    <div className="absolute top-3 left-3 w-full h-full bg-black -z-10 transition-all duration-300 ease-out group-hover:top-0 group-hover:left-0"></div>

                    {/* The Foreground Layer (Beige Dashed Box) */}
                    <div className="h-full w-full border-2 border-black border-dashed bg-[#E6D5B8] flex flex-col items-between justify-between p-6 transition-all duration-300 group-hover:bg-black group-hover:text-[#E6D5B8] group-hover:border-solid">
                         
                         {/* Top decorative tags */}
                         <div className="w-full flex justify-between text-xs font-mono opacity-70">
                             <span>[ORG__COMMUNITY]</span>
                             <span>/// DIR_2025</span>
                         </div>

                         {/* Main Typography */}
                         <div className="flex-grow flex items-center justify-center">
                            <span className="text-7xl md:text-8xl text-center leading-[0.85] heading-text tracking-tighter">
                                Meet<br/>The<br/>Team
                            </span>
                         </div>

                         {/* Bottom CTA Arrow */}
                         <div className="w-full flex justify-end items-center text-xl font-mono tracking-widest">
                             <span className="mr-2 text-sm">ACCESS PERSONNEL</span> 
                             <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
                         </div>
                    </div>
                </div>
                {/* === END NEW COMPONENT === */}


                {/* Insider Map (Slightly adjusted height to match new neighbor) */}
                <div 
                    onClick={() => handleClick("/insider")} 
                    className="border-2 border-black border-dashed h-80 md:h-[500px] cursor-pointer relative overflow-hidden group"
                >
                    <img 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
                        src={img} 
                        alt="img" 
                    />+
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                        <span className="text-[#E6D5B8] text-4xl font-bold uppercase border-2 border-[#E6D5B8] px-6 py-2 bg-black">
                            Insider Access
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutEvents