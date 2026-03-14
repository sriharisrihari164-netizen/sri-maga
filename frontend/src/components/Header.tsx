import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Snowflake } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-iceBlue shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-iceBlue rounded-lg group-hover:bg-alertOrange transition-colors duration-300">
              <Snowflake className="h-6 w-6 text-slateGray group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slateGray uppercase">
              Sri Megha <span className="text-alertOrange font-black">Aircon</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-alertOrange relative
                  ${isActive(link.path) ? 'text-alertOrange' : 'text-slateGray'}
                `}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-alertOrange rounded-full" />
                )}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="px-5 py-2.5 bg-alertOrange text-white text-sm font-medium rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slateGray hover:text-alertOrange focus:outline-none transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-iceBlue shadow-lg transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <nav className="flex flex-col px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors
                ${isActive(link.path) 
                  ? 'bg-iceBlue/50 text-alertOrange' 
                  : 'text-slateGray hover:bg-iceBlue hover:text-alertOrange'}
              `}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block mt-4 text-center px-4 py-3 bg-alertOrange text-white text-base font-medium rounded-lg shadow-md hover:bg-orange-600 transition-colors"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
