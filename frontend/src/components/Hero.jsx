import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Kavya Shethiya
          </h1>
          <p className="text-2xl text-indigo-600 dark:text-indigo-400 font-medium">
            Building UAVs, Robots, and Systems that Move
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            B.Tech Mechatronics Student passionate about aerospace engineering, robotics, and innovation. 
            Designing the future of autonomous systems.
          </p>
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors font-medium shadow-lg hover:shadow-xl"
            >
              View Projects
            </button>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              Get in Touch
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://customer-assets.emergentagent.com/job_ecf6f676-0158-4799-b857-6c13e6bfed78/artifacts/8aqqjcsz_Kavya.jpg"
              alt="Kavya Shethiya"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-600 dark:bg-indigo-500 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500 dark:bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;