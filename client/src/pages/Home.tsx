import React from 'react';
import HeroHome from '../components/Home/HeroHome';
import WhatWeDo from '../components/Home/WhatWeDo';
import About from '../components/Home/About';

const Home: React.FC = () => {
  return (
    <div className="pt-24">
      <HeroHome/>
      <WhatWeDo />
      <About />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Mission</h2>
          <p className="text-gray-600 text-lg mb-8">
            Together, we can make a difference in the lives of many. Explore our programs and see how you can contribute.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
            Learn More
          </button>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Education</h3>
              <p className="text-gray-600">Providing quality education to children and adults, empowering them with knowledge and skills.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Healthcare</h3>
              <p className="text-gray-600">Ensuring access to essential healthcare services and promoting well-being in communities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Sustainable Livelihood</h3>
              <p className="text-gray-600">Creating opportunities for economic independence through skill development and vocational training.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 