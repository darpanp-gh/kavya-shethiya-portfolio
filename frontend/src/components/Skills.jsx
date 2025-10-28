import React from 'react';

const skillsData = {
  technical: [
    { name: 'CAD Design', tools: ['Fusion 360', 'AutoCAD'], level: 90 },
    { name: 'Embedded Systems', tools: ['Arduino', 'STM32'], level: 85 },
    { name: 'UAV Integration', tools: ['INAV', 'ArduPilot'], level: 88 },
    { name: '3D Printing', tools: ['Bambu Lab Studio'], level: 92 },
    { name: 'Flight Configuration', tools: ['Mission Planner'], level: 87 },
  ],
  soft: [
    { name: 'Leadership', level: 85 },
    { name: 'Creativity', level: 90 },
    { name: 'Adaptability', level: 88 },
    { name: 'Problem Solving', level: 92 },
    { name: 'Team Collaboration', level: 86 },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for bringing innovative engineering ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
              Technical Expertise
            </h3>
            <div className="space-y-6">
              {skillsData.technical.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                      <p className="text-sm text-gray-500">{skill.tools.join(', ')}</p>
                    </div>
                    <span className="text-indigo-600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
              Soft Skills
            </h3>
            <div className="space-y-6">
              {skillsData.soft.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                    <span className="text-blue-600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;