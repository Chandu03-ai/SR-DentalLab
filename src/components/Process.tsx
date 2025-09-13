import React from 'react';
import { Package, Scan, Cog, CheckCircle, Truck } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Package className="text-white" size={24} />,
      title: "Receiving Impressions",
      description: "We receive your physical impressions, digital scans, or intraoral scan files through our secure digital platform or traditional shipping.",
      details: ["Digital scan processing", "Physical impression handling", "Case documentation", "Priority scheduling"],
      color: "bg-blue-600",
      number: "01"
    },
    {
      icon: <Scan className="text-white" size={24} />,
      title: "Digital Design",
      description: "Our expert technicians use advanced CAD software to create precise 3D models and designs tailored to each patient's anatomy.",
      details: ["3D modeling", "Anatomical analysis", "Shade matching", "Design verification"],
      color: "bg-teal-600",
      number: "02"
    },
    {
      icon: <Cog className="text-white" size={24} />,
      title: "Fabrication",
      description: "State-of-the-art milling machines and traditional craftsmanship combine to create your restoration using premium materials.",
      details: ["CAD/CAM milling", "Hand finishing", "Material selection", "Quality craftsmanship"],
      color: "bg-blue-600",
      number: "03"
    },
    {
      icon: <CheckCircle className="text-white" size={24} />,
      title: "Quality Check",
      description: "Every restoration undergoes rigorous quality control testing including fit, function, and aesthetic evaluation before approval.",
      details: ["Dimensional accuracy", "Surface finish", "Color verification", "Final inspection"],
      color: "bg-teal-600",
      number: "04"
    },
    {
      icon: <Truck className="text-white" size={24} />,
      title: "Delivery",
      description: "Secure packaging and reliable shipping ensure your restorations arrive safely and on time, typically within 3-5 business days.",
      details: ["Protective packaging", "Tracking information", "Delivery confirmation", "Return logistics"],
      color: "bg-blue-600",
      number: "05"
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined workflow designed for accuracy, speed, and exceptional results. 
            From initial impression to final delivery, we ensure every step meets our rigorous standards.
          </p>
        </div>

        <div className="relative">
          {/* Process timeline for desktop */}
          <div className="hidden lg:block">
            <div className="flex justify-between items-center mb-12">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center relative">
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 relative z-10`}>
                    {step.icon}
                  </div>
                  <div className="text-center">
                    <div className={`text-xs font-bold ${step.color === 'bg-blue-600' ? 'text-blue-600' : 'text-teal-600'} mb-1`}>
                      STEP {step.number}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {step.title}
                    </h3>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-8 left-16 w-40 h-0.5 bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Process cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`${step.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className={`text-xs font-bold ${step.color === 'bg-blue-600' ? 'text-blue-600' : 'text-teal-600'} mb-1`}>
                      STEP {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>
                
                <div className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 ${step.color} rounded-full`}></div>
                      <span className="text-sm text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process guarantee */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Our Process Guarantee
          </h3>
          <p className="text-lg mb-6 opacity-90">
            We're committed to delivering exceptional results on time, every time. 
            Our quality guarantee ensures 100% satisfaction with every restoration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-2">3-5 Days</div>
              <div className="text-sm">Average Turnaround</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-2">99.8%</div>
              <div className="text-sm">Acceptance Rate</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-sm">Order Tracking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;