import React from 'react';
import { Briefcase, CircleCheck as CheckCircle, Lightbulb } from 'lucide-react';
import arnobotTeam from '../assets/images/WhatsApp_Image_2026-06-13_at_15.44.39.jpeg';

const keyContributions = [
  'Worked on rapid prototyping and iterative product development for robotics applications.',
  'Designed and refined functional 3D models and application-based components.',
  'Focused on tolerances, wall thickness, fillets, structural strength, print orientation, and print efficiency to improve real-world usability.',
  'Performed multiple 3D printing and testing iterations, improving design practicality and reliability.',
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world engineering experience in robotics R&D and product development.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-950 dark:to-gray-800 p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="p-4 bg-white/10 rounded-xl w-fit">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Robotics Design Intern</h3>
                <p className="text-gray-300 text-lg font-medium mt-1">ARNOBOT Pvt. Ltd.</p>
                <p className="text-gray-400 text-sm mt-1">December 2025 – April 2026 · Ahmedabad, Gujarat</p>
              </div>
            </div>
          </div>

          <div className="p-8 grid md:grid-cols-2 gap-10">
            {/* Left: Description + Contributions */}
            <div className="space-y-8">
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  At <span className="font-semibold text-gray-900 dark:text-white">ARNOBOT Pvt. Ltd.</span>, I worked in a startup-driven robotics R&D environment where I gained experience beyond technical work, including teamwork, work management, idea discussions, and cross-functional responsibilities.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-3">
                  <span className="w-2 h-7 bg-blue-600 dark:bg-blue-500 rounded-full"></span>
                  Key Contributions
                </h4>
                <ul className="space-y-4">
                  {keyContributions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Key Learning</h5>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      This internship strengthened my understanding of prototype development, product design, 3D printing optimization, and practical engineering problem-solving in a fast-paced startup environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Team Photo */}
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-7 bg-gray-600 dark:bg-gray-400 rounded-full"></span>
                  The Team
                </h4>
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                  <img
                    src={arnobotTeam}
                    alt="ARNOBOT Team"
                    className="w-full h-72 object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
                  ARNOBOT R&D Team with ground robots
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {['Rapid Prototyping', '3D Printing', 'CAD Design', 'Product Design', 'Robotics R&D', 'Startup Culture'].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium text-center border border-gray-200 dark:border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
