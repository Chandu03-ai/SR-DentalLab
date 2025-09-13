import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practice: '',
    message: '',
    serviceType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        practice: '',
        message: '',
        serviceType: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="text-blue-600" size={24} />,
      title: "Phone",
      info: "(555) 123-4567",
      subInfo: "Mon-Fri: 8AM-6PM PST"
    },
    {
      icon: <Mail className="text-teal-600" size={24} />,
      title: "Email",
      info: "info@dentallab.com",
      subInfo: "Response within 2 hours"
    },
    {
      icon: <MapPin className="text-blue-600" size={24} />,
      title: "Location",
      info: "123 Dental Lab Way",
      subInfo: "San Francisco, CA 94102"
    },
    {
      icon: <Clock className="text-teal-600" size={24} />,
      title: "Hours",
      info: "Mon-Fri: 8AM-6PM",
      subInfo: "Weekend: Emergency only"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to partner with us? Get in touch for quotes, consultations, or to discuss 
            your specific restoration needs. Our team is here to support your practice.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Contact information */}
          <div className="lg:col-span-1 mb-12 lg:mb-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-8">
              We're here to help with all your dental prosthetics needs. Contact us through 
              any of the methods below or use our convenient online form.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-800 font-medium">{item.info}</p>
                    <p className="text-sm text-gray-600">{item.subInfo}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 bg-gray-100 rounded-lg h-48 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-gray-400 mx-auto mb-2" size={32} />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">Visit our modern facility</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Request a Quote
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Thank You!
                  </h4>
                  <p className="text-gray-600">
                    We've received your inquiry and will respond within 2 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Dr. John Smith"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="doctor@practice.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Practice Name
                      </label>
                      <input
                        type="text"
                        name="practice"
                        value={formData.practice}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your Dental Practice"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service...</option>
                      <option value="crowns">Crowns & Bridges</option>
                      <option value="implants">Implant Restorations</option>
                      <option value="dentures">Dentures</option>
                      <option value="cosmetic">Cosmetic Cases</option>
                      <option value="digital">Digital Design</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Please describe your case requirements, timeline, or any specific questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    * Required fields. We typically respond within 2 business hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Quick contact options */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Our team is available for urgent cases and consultations during business hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:5551234567"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium inline-flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call Now: (555) 123-4567</span>
            </a>
            <a 
              href="mailto:info@dentallab.com"
              className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium inline-flex items-center justify-center space-x-2"
            >
              <Mail size={20} />
              <span>Email Us Directly</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;