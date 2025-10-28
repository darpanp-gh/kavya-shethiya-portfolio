import React from 'react';
import { Wrench, Cpu, Plane, Printer, Settings, Users, Lightbulb, Target, Zap, Heart } from 'lucide-react';

const technicalSkills = [
  { name: 'CAD Design', description: 'Fusion 360, AutoCAD', icon: Wrench },
  { name: 'Embedded Systems', description: 'Arduino, STM32', icon: Cpu },
  { name: 'UAV Integration', description: 'INAV, ArduPilot', icon: Plane },
  { name: '3D Printing', description: 'Bambu Lab Studio', icon: Printer },
  { name: 'Flight Configuration', description: 'Mission Planner', icon: Settings },
];

const softSkills = [
  { name: 'Leadership', description: 'Team management and mentoring', icon: Users },
  { name: 'Creativity', description: 'Innovative problem solving', icon: Lightbulb },
  { name: 'Adaptability', description: 'Quick learning and flexibility', icon: Target },
  { name: 'Problem Solving', description: 'Analytical thinking', icon: Zap },
  { name: 'Passion', description: 'Driven by curiosity', icon: Heart },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for bringing innovative engineering ideas to life.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-indigo-600 dark:bg-indigo-500 rounded-full"></span>
            Technical Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-500 dark:bg-blue-400 rounded-full"></span>
            Soft Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;