import image3 from '../assets/black.jpeg';
import image2 from '../assets/black.jpeg';
import image from '../assets/black.jpeg';
import image4 from '../assets/black.jpeg';

// 1. Define the data structure to keep the JSX clean
const teamMembers = [
  { name: "Ameya Shukla", role: "Chairperson", img: image, link: "#ameya" },
  { name: "Ananya Lakshmi", role: "Vice Chairperson", img: image2, link: "#anany" },
  { name: "Shyla Gupta", role: "Secretary", img: image3, link: "#csm-community/" },
  { name: "Samayak Nitesh Chajjed", role: "Co-Secretary, Management Head", img: image4, link: "#samayak" },
  { name: "Kailash V", role: "ChemECar, Technical Head", img: image4, link: "#csm-community---izakaya/" },
  { name: "Sharma AK", role: "ChemECube, R&D Head", img: image4, link: "#csm-community---izakaya/" },
  { name: "Aadya Saxena", role: "K12 & Outreach Head", img: image4, link: "#csm-community---izakaya/" },
  { name: "Imthiyaz Ahmed", role: "Events Head", img: image4, link: "#csm-community---izakaya/" },
  { name: "Lakshmi S", role: "Editorial Head", img: image4, link: "#csm-community---izakaya/" },
  { name: "Kaavyashree S", role: "Global Communications Head", img: image4, link: "#csm-community---izakaya/" },
  { name: "Abhilash A", role: "Podcast and Webmaster Head", img: image4, link: "#csm-community---izakaya/" },
  { name: "Arpit Wibhute", role: "Finance Head", img: image4, link: "#csm-community---izakaya/" },
  { name: "Abhishek Nair", role: "Design Head", img: image4, link: "#csm-community---izakaya/" },
  { name: "Kathakali Mishra", role: "ESC Liaison", img: image4, link: "#csm-community---izakaya/" },
];

const Features = () => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-full px-4 py-12">
      {/* Title Section */}
      <div className="mb-16">
        <h2 className="heading-text text-6xl lg:text-8xl tracking-tight font-bold">
          Featuring...
        </h2>
        <div className="h-2 w-24 bg-black mt-4 ml-2"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            onClick={() => handleClick(member.link)}
            className="group cursor-pointer flex flex-col gap-4 relative"
          >
            {/* Image Container with Hover Effects */}
            <div className="relative overflow-hidden w-full aspect-[3/4] border-2 border-black">
              <img 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0" 
                src={member.img} 
                alt={member.name} 
              />
              
              {/* Optional: Overlay effect on hover */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Text Content */}
            <div className="border-l-4 border-black pl-4 transition-all duration-300 group-hover:pl-6">
              <h3 className="heading-text text-2xl lg:text-3xl font-bold uppercase leading-none mb-1">
                {member.name}
              </h3>
              <p className="font-mono text-sm text-gray-600 uppercase tracking-wider">
                {member.role}
              </p>
            </div>
            
            {/* Decorative 'View' Arrow that appears on hover */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0 bg-white p-2 border border-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;