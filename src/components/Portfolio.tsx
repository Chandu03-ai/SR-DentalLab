import React, { useState } from 'react';
import { Eye, Award, Star } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'crowns', name: 'Crowns & Bridges' },
    { id: 'implants', name: 'Implant Restorations' },
    { id: 'dentures', name: 'Dentures' },
    { id: 'cosmetic', name: 'Cosmetic Cases' }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'crowns',
      title: 'Anterior Crown Restoration',
      description: 'Natural-looking porcelain crown with perfect shade matching and anatomical form.',
      image: 'https://images.pexels.com/photos/6502550/pexels-photo-6502550.jpeg',
      featured: true
    },
    {
      id: 2,
      category: 'implants',
      title: 'Implant Crown System',
      description: 'Custom abutment and crown for optimal emergence profile and tissue health.',
      image: 'https://images.pexels.com/photos/6627606/pexels-photo-6627606.jpeg',
      featured: false
    },
    {
      id: 3,
      category: 'dentures',
      title: 'Complete Denture Set',
      description: 'Full upper and lower dentures with natural aesthetics and comfortable fit.',
      image: 'https://images.pexels.com/photos/6502633/pexels-photo-6502633.jpeg',
      featured: true
    },
    {
      id: 4,
      category: 'crowns',
      title: 'Posterior Bridge',
      description: '3-unit zirconia bridge combining strength with natural translucency.',
      image: 'https://images.pexels.com/photos/33748060/pexels-photo-33748060.jpeg',
      featured: false
    },
    {
      id: 5,
      category: 'cosmetic',
      title: 'Smile Makeover',
      description: 'Complete anterior restoration with veneers and crowns for aesthetic perfection.',
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 6,
      category: 'implants',
      title: 'Multi-Unit Restoration',
      description: 'Full arch implant-supported restoration with individual customization.',
      image: 'https://images.pexels.com/photos/6502306/pexels-photo-6502306.jpeg',
      featured: false
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Portfolio & Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our gallery of high-quality dental restorations showcasing the precision, 
            craftsmanship, and attention to detail that defines our work.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 bg-white text-blue-600 p-3 rounded-full transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Eye size={20} />
                  </button>
                </div>
                {item.featured && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star size={14} />
                    <span>Featured</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium capitalize">
                    {item.category.replace('_', ' ')}
                  </span>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality showcase */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Our Work Stands Out
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every restoration in our portfolio represents our commitment to excellence, 
              precision, and the highest standards of dental prosthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="text-blue-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Premium Materials</h4>
              <p className="text-sm text-gray-600">Only the finest dental materials and ceramics for lasting results</p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Eye className="text-teal-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Attention to Detail</h4>
              <p className="text-sm text-gray-600">Meticulous craftsmanship in every aspect of restoration design</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="text-blue-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Proven Results</h4>
              <p className="text-sm text-gray-600">Consistently high success rates and patient satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;