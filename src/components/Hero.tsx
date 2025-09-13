import React from 'react';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Crafting Precision Smiles for{' '}
              <span className="text-blue-600">Dental Professionals</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              State-of-the-art dental restorations combining traditional craftsmanship with
              cutting-edge digital technology. Trusted by dentists nationwide for over 15 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToServices}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center justify-center group"
              >
                Explore Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={scrollToContact}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
              >
                Partner With Us
              </button>
            </div>

            {/* Key features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Shield className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Quality Assured</h3>
                  <p className="text-sm text-gray-600">ISO certified lab</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <Clock className="text-teal-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Fast Turnaround</h3>
                  <p className="text-sm text-gray-600">3-5 day delivery</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Users className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Expert Team</h3>
                  <p className="text-sm text-gray-600">25+ specialists</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/6627715/pexels-photo-6627715.jpeg"
                alt="Dental prosthetics and crowns"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
            <div className="absolute top-8 -left-8 w-32 h-32 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-8 left-12 w-24 h-24 bg-teal-200 rounded-full opacity-50 animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;