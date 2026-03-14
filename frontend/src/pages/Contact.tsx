import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // API call to the backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', serviceType: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* Page Header */}
      <section className="bg-slateGray py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-iceBlue/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Get in <span className="text-alertOrange">Touch</span>
          </h1>
          <p className="text-lg text-iceBlue/90 max-w-2xl mx-auto font-light">
            Have a question or need emergency AC service? Our team is ready to respond.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 flex-grow relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 relative z-10">
            
            {/* Contact Information Side */}
            <div className="lg:w-2/5 bg-slateGray text-white p-10 md:p-14 relative overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-alertOrange/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-iceBlue/10 rounded-full blur-2xl pointer-events-none transform -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Contact Info</h3>
                  <div className="w-12 h-1 bg-alertOrange rounded-full mb-10" />
                  
                  <ul className="space-y-8">
                    <li className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-alertOrange" />
                      </div>
                      <div>
                        <p className="font-semibold text-iceBlue mb-1">Call Us Now</p>
                        <div className="flex flex-col space-y-1 mt-2">
                          <div>
                            <span className="text-sm text-iceBlue/80 block">Borabanda Branch:</span>
                            <a href="tel:+919704710017" className="text-lg hover:text-alertOrange transition-colors">097047 10017</a>
                          </div>
                          <div>
                            <span className="text-sm text-iceBlue/80 block">Chaithanyapuri Branch:</span>
                            <a href="tel:+919666480610" className="text-lg hover:text-alertOrange transition-colors">096664 80610</a>
                          </div>
                        </div>
                        <p className="text-sm text-iceBlue/70 mt-2">24/7 Emergency Service Available in Hyderabad</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-alertOrange" />
                      </div>
                      <div>
                        <p className="font-semibold text-iceBlue mb-1">Email Us</p>
                        <a href="mailto:info@srimeghaaircon.com" className="text-lg hover:text-alertOrange transition-colors">info@srimeghaaircon.com</a>
                      </div>
                    </li>
                    <li className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-alertOrange" />
                      </div>
                      <div className="w-full">
                        <p className="font-semibold text-iceBlue mb-3">Our Locations</p>
                        <div className="space-y-4">
                          <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                            <p className="text-sm font-semibold text-alertOrange mb-1">Branch 1 - Borabanda</p>
                            <p className="text-sm leading-relaxed">
                              13-3-24, Snehapuri Colony,<br />
                              Borabanda, Hyderabad,<br />
                              Telangana 500114
                            </p>
                          </div>
                          <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                            <p className="text-sm font-semibold text-alertOrange mb-1">Branch 2 - Chaithanyapuri</p>
                            <p className="text-sm leading-relaxed">
                              Street no:2, Prabhath Nagar,<br />
                              Chaithanyapuri, Hyderabad,<br />
                              Telangana 500060
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-12 pt-12 border-t border-white/20">
                  <h4 className="text-xl font-semibold mb-6">Business Hours</h4>
                  <ul className="space-y-3 text-iceBlue/90">
                    <li className="flex justify-between"><span>Mon - Sat:</span> <span>9:00 AM - 5:00 PM</span></li>
                    <li className="flex justify-between"><span>Sunday:</span> <span className="text-alertOrange font-medium">Emergency Only</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-3/5 p-10 md:p-14 bg-white">
              <h3 className="text-3xl font-bold text-slateGray mb-2">Send us a Message</h3>
              <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you immediately.</p>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                  <p>Thank you for contacting us. Our support team will reach out to you shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2 bg-white border-2 border-green-600 text-green-700 font-semibold rounded-full hover:bg-green-50 transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  
                  {/* Form fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slateGray mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-alertOrange focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slateGray mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-alertOrange focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white"
                        placeholder="097047 10017"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slateGray mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-alertOrange focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-semibold text-slateGray mb-2">Service Required *</label>
                      <select 
                        id="serviceType" 
                        name="serviceType" 
                        required
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-alertOrange focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="installation">AC Installation</option>
                        <option value="repair">AC Repair</option>
                        <option value="maintenance">AMC / Maintenance</option>
                        <option value="gas">Gas Refilling</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slateGray mb-2">Detailed Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-alertOrange focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white resize-y"
                      placeholder="Please describe your issue or requirement..."
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium border border-red-200">
                      Failed to send message. Please try again or call us directly.
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className={`w-full py-4 rounded-lg font-bold text-white shadow-lg transition-all duration-300 flex items-center justify-center group
                      ${status === 'submitting' ? 'bg-gray-400 cursor-not-allowed' : 'bg-alertOrange hover:bg-orange-600 hover:-translate-y-1 hover:shadow-xl'}
                    `}
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <MessageSquare className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
            
          </div>
        </div>

        {/* Decorative Map Section */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-iceBlue/20 pointer-events-none -z-10 mt-64 border-y border-gray-200">
             {/* Note: This is a placeholder for an iframe map to keep design clean and performant. In production, insert real Google Maps iframe here. */}
             <div className="w-full h-full flex flex-col items-center justify-center text-slateGray/30 space-y-4">
               <MapPin className="w-16 h-16" />
               <span className="text-xl font-bold uppercase tracking-widest">Interactive Map Placeholder</span>
             </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
