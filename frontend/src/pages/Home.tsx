
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, ThermometerSun, ShieldCheck, Fan, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full bg-slateGray overflow-hidden py-32 lg:py-48 flex items-center">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-iceBlue via-transparent to-transparent" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-iceBlue/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-alertOrange/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center lg:text-left flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Premium AC Services <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-iceBlue to-white">We Keep You Cool.</span>
            </h1>
            <p className="text-lg md:text-xl text-iceBlue/90 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Professional installation, rapid repairs, and comprehensive maintenance plans. Your comfort is our top priority, 24/7.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-alertOrange text-white font-bold rounded-full shadow-lg shadow-alertOrange/30 hover:shadow-xl hover:shadow-alertOrange/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto flex items-center justify-center group"
              >
                Book a Service
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300 w-full sm:w-auto border border-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-16 lg:mt-0 relative hidden md:block perspective-1000">
             {/* Decorative Hero Image/Element */}
             <div className="relative w-full aspect-square max-w-lg mx-auto transform hover:rotate-y-12 transition-transform duration-700 ease-out">
                <div className="absolute inset-0 bg-gradient-to-br from-iceBlue/20 to-white/5 rounded-[2rem] border border-white/10 backdrop-blur-md shadow-2xl flex items-center justify-center overflow-hidden">
                   <Fan className="w-48 h-48 text-iceBlue opacity-50 animate-spin" style={{ animationDuration: '8s', animationTimingFunction: 'linear' }} />
                </div>
                {/* Floating achievement card */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-4 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slateGray">100% Guaranteed</p>
                    <p className="text-sm text-gray-500">Satisfaction</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Highlights Section */}
      <section className="py-24 bg-iceBlue/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slateGray mb-4">Our Expertise</h2>
            <div className="w-24 h-1.5 bg-alertOrange mx-auto rounded-full mb-6" />
            <p className="text-gray-600 text-lg">Comprehensive cooling solutions tailored for residential and commercial spaces.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Wrench className="w-8 h-8 text-white" />,
                title: "Expert Repair",
                desc: "Fast, reliable diagnostics and repair for all major AC brands, minimizing your downtime."
              },
              {
                icon: <Fan className="w-8 h-8 text-white" />,
                title: "Professional Installation",
                desc: "Precision installation services ensuring optimal performance and energy efficiency from day one."
              },
              {
                icon: <ThermometerSun className="w-8 h-8 text-white" />,
                title: "AMC Maintenance",
                desc: "Preventative Annual Maintenance Contracts to extend equipment lifespan and prevent emergencies."
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                <div className="w-16 h-16 bg-slateGray rounded-xl flex items-center justify-center mb-6 group-hover:bg-alertOrange transition-colors duration-300 shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slateGray mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-alertOrange font-semibold flex items-center group/link">
                  Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Reviews Widget */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slateGray mb-4">What Our Customers Say</h2>
            <div className="w-24 h-1.5 bg-iceBlue mx-auto rounded-full mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Rahul Sharma", text: "Exceptional service! The technicians arrived on time and fixed my AC within an hour. Highly recommended.", rating: 5 },
              { name: "Priya Patel", text: "Got a new unit installed. The team was professional, clean, and knowledgeable. Great experience overall.", rating: 5 },
              { name: "Anil Kumar", text: "Their AMC service is great piece of mind. The regular checkups have saved us from big repair bills.", rating: 4 }
            ].map((review, idx) => (
              <div key={idx} className="bg-iceBlue/10 rounded-2xl p-8 border border-iceBlue/50 relative">
                <div className="flex text-alertOrange mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-slateGray rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-bold text-slateGray">{review.name}</p>
                    <p className="text-xs text-gray-500">Verified Customer</p>
                  </div>
                </div>
                <div className="absolute top-6 right-6 text-iceBlue opacity-50">
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L16.41 14H10.5V3H21V14.1L17.75 21H14.017ZM3.18 21L5.57 14H-0.34V3H10.16V14.1L6.91 21H3.18Z" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="py-12 bg-alertOrange relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 pattern-diagonal-lines opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready for perfect cooling?</h2>
            <p className="text-white/90">Contact us today for a free diagnostic and quote.</p>
          </div>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-white text-alertOrange font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-iceBlue hover:-translate-y-1 transition-all duration-300"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
