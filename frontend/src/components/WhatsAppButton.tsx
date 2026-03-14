import { useState, useEffect } from 'react';

// Using an SVG icon for WhatsApp as it's not present in basic lucide-react
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a short delay for animation effect
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "919704710017"; // Replace with actual WhatsApp number
  const message = "Hello Sri Megha Aircon, I need a service query.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:shadow-2xl hover:bg-green-600 hover:-translate-y-1 transition-all duration-300
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-white text-slateGray text-sm font-medium py-2 px-3 rounded shadow-lg opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
        Chat with us!
        {/* Tooltip Arrow */}
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-white" />
      </div>

      {/* Ripple Effect Background */}
      <div className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-75" style={{ animationDuration: '3s' }} />
    </a>
  );
};

export default WhatsAppButton;
