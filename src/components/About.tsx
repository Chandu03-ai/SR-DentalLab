import React from 'react';
import { Award, Target, Users2, Microscope } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Award className="text-blue-600" size={24} />,
      title: "ISO Certified Quality",
      description: "Maintaining the highest international standards in dental prosthetics manufacturing."
    },
    {
      icon: <Target className="text-teal-600" size={24} />,
      title: "Precision Engineering",
      description: "Utilizing advanced CAD/CAM technology for micron-level accuracy in every restoration."
    },
    {
      icon: <Users2 className="text-blue-600" size={24} />,
      title: "Collaborative Partnership",
      description: "Working closely with dental professionals to achieve optimal patient outcomes."
    },
    {
      icon: <Microscope className="text-teal-600" size={24} />,
      title: "Advanced Technology",
      description: "State-of-the-art equipment and materials for superior dental restorations."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Dental Lab
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 15 years, we've been at the forefront of dental prosthetics,
            combining traditional craftsmanship with cutting-edge technology to deliver
            exceptional results for dental professionals nationwide.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission & Expertise
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We specialize in creating high-quality dental restorations that meet the exacting
              standards of modern dentistry. Our team of skilled technicians and digital specialists
              work tirelessly to ensure every crown, bridge, and denture meets our rigorous quality
              standards.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Through precision engineering and collaborative partnerships with dental professionals,
              we've earned a reputation for reliability, accuracy, and exceptional customer service.
              Our commitment to continuous innovation ensures we stay ahead of industry trends and
              technological advances.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-600">Restorations Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
                <div className="text-gray-600">Partner Practices</div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <img
              src="https://images.pexels.com/photos/10890155/pexels-photo-10890155.jpeg"
              alt="Dental laboratory technician at work"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-white p-3 rounded-lg w-fit mb-4">
                {highlight.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {highlight.title}
              </h4>
              <p className="text-gray-600">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;