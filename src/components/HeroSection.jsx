// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Landing Page</h1>
      <p className="text-lg mb-8">Ini adalah Landing page buatan saya. meskipun sederhana tapi ok lah dari pada gak ada sama sekali yakan</p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
        Learn More
      </button>
    </section>
  );
};

export default HeroSection;
