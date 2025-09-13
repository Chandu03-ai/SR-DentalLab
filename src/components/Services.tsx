import React from 'react';
import { Crown, Grid as Bridge, Smile, Palette, Monitor, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Crown className="text-white" size={28} />,
      title: "Crowns & Bridges Fabrication",
      description: "Custom-crafted crowns and bridges using premium materials including porcelain, zirconia, and metal alloys for optimal strength and aesthetics.",
      features: ["All-ceramic crowns", "Porcelain-fused-to-metal", "Zirconia restorations", "Temporary crowns"],
      color: "bg-blue-600"
    },
    {
      icon: <Wrench className="text-white" size={28} />,
      title: "Implant Restorations",
      description: "Precision-engineered implant crowns and abutments designed for perfect fit and long-term durability with all major implant systems.",
      features: ["Custom abutments", "Screw-retained crowns", "Cement-retained crowns", "Multi-unit restorations"],
      color: "bg-teal-600"
    },
    {
      icon: <Smile className="text-white" size={28} />,
      title: "Full & Partial Dentures",
      description: "Comfortable, natural-looking dentures crafted with attention to function and aesthetics using advanced materials and techniques.",
      features: ["Conventional dentures", "Immediate dentures", "Partial dentures", "Implant-supported dentures"],
      color: "bg-blue-600"
    },
    {
      icon: <Palette className="text-white" size={28} />,
      title: "Custom Shade Matching",
      description: "Expert color matching and characterization to ensure seamless integration with natural teeth using digital shade analysis.",
      features: ["Digital shade matching", "Custom staining", "Translucency mapping", "Natural characterization"],
      color: "bg-teal-600"
    },
    {
      icon: <Monitor className="text-white" size={28} />,
      title: "Digital Dental Design (CAD/CAM)",
      description: "State-of-the-art digital workflow from impression scanning to final milling for unparalleled precision and efficiency.",
      features: ["3D digital design", "CAD/CAM milling", "Intraoral scan processing", "Digital impression workflow"],
      color: "bg-blue-600"
    },
    {
      icon: <Bridge className="text-white" size={28} />,
      title: "Specialized Restorations",
      description: "Complex cases including full mouth reconstructions, orthodontic appliances, and custom prosthetic solutions.",
      features: ["Full mouth reconstruction", "Orthodontic appliances", "Surgical guides", "Custom prosthetics"],
      color: "bg-teal-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental prosthetics solutions tailored to meet the diverse needs 
            of modern dental practices, backed by cutting-edge technology and expert craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className={`${service.color} p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <div className="text-white/80 text-sm font-medium">
                    Professional Grade
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 ${service.color} rounded-full`}></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`mt-6 w-full ${service.color} text-white py-3 rounded-lg hover:opacity-90 transition-opacity font-medium`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              We specialize in complex cases and custom restorations. Our team of experts 
              can handle unique requirements and challenging prosthetic needs.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Discuss Your Case
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;