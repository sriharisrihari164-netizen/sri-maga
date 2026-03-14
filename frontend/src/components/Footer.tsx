
import { Link } from 'react-router-dom';
import { Snowflake, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slateGray text-white/90 pt-16 pb-8 border-t-[8px] border-alertOrange relative overflow-hidden">
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-iceBlue/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group inline-block">
              <div className="p-2 bg-white/10 rounded-lg group-hover:bg-alertOrange transition-colors duration-300">
                <Snowflake className="h-6 w-6 text-iceBlue group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white uppercase">
                Sri Megha <span className="text-alertOrange font-black">Aircon</span>
              </span>
            </Link>
            <p className="text-sm text-iceBlue/80 leading-relaxed font-light">
              Your trusted partner for professional Air Conditioning installation, maintenance, and repair services. We ensure your comfort year-round with expert HVAC solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide text-white mb-6 flex items-center">
              Quick Links
              <span className="ml-3 h-px flex-1 bg-white/20" />
            </h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm hover:text-alertOrange hover:translate-x-1 inline-block transition-all duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-alertOrange transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide text-white mb-6 flex items-center">
              Services
              <span className="ml-3 h-px flex-1 bg-white/20" />
            </h3>
            <ul className="space-y-4">
              {['AC Installation', 'AC Repair & Service', 'Gas Filling', 'AMC Contracts'].map((service) => (
                <li key={service} className="text-sm text-iceBlue/80 flex items-center space-x-2 group cursor-default">
                  <div className="w-1.5 h-1.5 rounded-full bg-alertOrange/50 group-hover:bg-alertOrange transition-colors" />
                  <span className="group-hover:text-white transition-colors">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide text-white mb-6 flex items-center">
              Get in Touch
              <span className="ml-3 h-px flex-1 bg-white/20" />
            </h3>
            <ul className="space-y-4 text-sm text-iceBlue/80">
              <li className="flex items-start space-x-3 group mb-2">
                <MapPin className="w-5 h-5 text-alertOrange shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="leading-relaxed group-hover:text-white transition-colors">
                  <span className="text-white text-xs font-bold block mb-1">Borabanda Branch:</span>
                  13-3-24, Snehapuri Colony, Borabanda,<br />
                  Hyderabad, Telangana 500114
                </div>
              </li>
              <li className="flex items-start space-x-3 group mb-4">
                <MapPin className="w-5 h-5 text-alertOrange shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="leading-relaxed group-hover:text-white transition-colors">
                  <span className="text-white text-xs font-bold block mb-1">Chaithanyapuri Branch:</span>
                  Street no:2, Prabhath Nagar, Chaithanyapuri,<br />
                  Hyderabad, Telangana 500060
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <Phone className="w-5 h-5 text-alertOrange shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+919704710017" className="hover:text-white transition-colors inline-block text-sm">Borabanda: 097047 10017</a>
                  <a href="tel:+919666480610" className="hover:text-white transition-colors inline-block text-sm">Chaithanyapuri: 096664 80610</a>
                </div>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-alertOrange shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@srimeghaaircon.com" className="hover:text-white transition-colors inline-block">info@srimeghaaircon.com</a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Clock className="w-5 h-5 text-iceBlue shrink-0 group-hover:text-white transition-colors" />
                <span>Mon-Sat: 9AM - 5PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-iceBlue/60 space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Sri Megha Aircon. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
