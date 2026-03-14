
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Fan, 
  ThermometerSun, 
  Droplets,
  Zap,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      id: "installation",
      icon: <Fan className="w-10 h-10 text-white" />,
      title: "AC Installation",
      subtitle: "Professional Setup",
      description: "We provide expert installation for all types of AC units including Split, Window, Cassette, and Central Air Conditioning systems. Our technicians ensure proper sizing and positioning for maximum efficiency.",
      features: ["Site inspection & layout planning", "Energy-efficient unit sizing", "Seamless setup process", "Post-installation testing"]
    },
    {
      id: "repair",
      icon: <Wrench className="w-10 h-10 text-white" />,
      title: "AC Repair & Service",
      subtitle: "Fast Diagnostics",
      description: "Experiencing cooling issues or strange noises? Our rapid response repair team can diagnose and fix any AC problem quickly, using genuine spare parts to guarantee longevity.",
      features: ["Comprehensive issue diagnostics", "Compressor & motor repair", "PCB and electrical fixes", "Noise & vibration reduction"]
    },
    {
      id: "maintenance",
      icon: <ThermometerSun className="w-10 h-10 text-white" />,
      title: "AMC Contracts",
      subtitle: "Annual Maintenance",
      description: "Protect your investment with our Annual Maintenance Contracts. Regular servicing prevents unexpected breakdowns, maintains air quality, and lowers your monthly power bills.",
      features: ["Periodic deep cleaning", "Filter replacement", "Performance tuning", "Priority emergency support"]
    },
    {
      id: "gas",
      icon: <Droplets className="w-10 h-10 text-white" />,
      title: "Gas Refilling",
      subtitle: "Refrigerant Top-up",
      description: "Low refrigerant means poor cooling and high bills. We provide leak detection, fixing, and safe gas refilling services to restore your AC's cooling power.",
      features: ["Precision leak detection", "Vacuuming & flushing", "Safe, eco-friendly refrigerants", "Cooling performance check"]
    },
    {
      id: "electrical",
      icon: <Zap className="w-10 h-10 text-white" />,
      title: "Electrical & Wiring",
      subtitle: "Safe Connections",
      description: "Improper wiring can damage your AC and pose fire risks. We offer dedicated electrical support for HVAC systems, including stabilizer installation and dedicated circuit routing.",
      features: ["Stabilizer installation", "Circuit breaker upgrading", "Complete wiring inspection", "Earth grounding checks"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* Page Header */}
      <section className="bg-slateGray py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-iceBlue/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Our HVAC <span className="text-alertOrange">Services</span>
          </h1>
          <p className="text-lg text-iceBlue/90 max-w-2xl mx-auto font-light">
            Comprehensive air conditioning solutions designed to keep your environment perfectly tempered all year round.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {servicesList.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col lg:flex-row items-center gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300
                  ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}
                `}
              >
                {/* Visual Side */}
                <div className="lg:w-1/3 flex justify-center w-full">
                  <div className="relative group perspective-1000 w-full max-w-sm aspect-square">
                    <div className="absolute inset-0 bg-iceBlue rounded-[2rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-slateGray rounded-[2rem] transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 flex flex-col items-center justify-center p-8 text-center text-white relative z-10 shadow-2xl">
                      <div className="bg-white/10 p-6 rounded-full inline-block mb-6 backdrop-blur-md">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-iceBlue/80 text-sm mt-2">{service.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-2/3 w-full">
                  <h2 className="text-3xl font-bold text-slateGray mb-4 tracking-tight">{service.title}</h2>
                  <div className="w-16 h-1 bg-alertOrange rounded-full mb-6" />
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-white border-2 border-slateGray text-slateGray font-bold rounded-full hover:bg-slateGray hover:text-white transition-colors duration-300 group"
                  >
                    Request this Service
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-iceBlue border-t border-iceBlue/50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slateGray mb-6">Not sure which service you need?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Our experts are just a call away. We offer free phone consultations to help diagnose your AC issues and recommend the best course of action.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="px-8 py-4 bg-slateGray text-white font-bold rounded-full shadow-lg flex flex-col items-center">
              <span>Call Now</span>
              <div className="flex space-x-4 mt-1 text-sm font-normal">
                <a href="tel:+919704710017" className="hover:text-alertOrange transition-colors">Borabanda: 097047 10017</a>
                <span className="text-white/30">|</span>
                <a href="tel:+919666480610" className="hover:text-alertOrange transition-colors">Chaithanyapuri: 096664 80610</a>
              </div>
            </div>
            <Link to="/contact" className="px-8 py-4 bg-alertOrange text-white font-bold rounded-full hover:bg-orange-600 transition-colors shadow-lg">
              Write to Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
