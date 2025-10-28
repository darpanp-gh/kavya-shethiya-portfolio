import React from 'react';
import { Award, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate B.Tech Mechatronics student with a deep fascination for UAV design, 
              embedded systems, and 3D printing technologies. My journey in engineering is driven by 
              curiosity and the desire to build innovative solutions that push the boundaries of what's possible.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With hands-on experience in aerodynamic design, flight control systems, and robotic platforms, 
              I've participated in prestigious national competitions including <span className="font-semibold text-indigo-600">Robocon</span> and <span className="font-semibold text-indigo-600">Robofest</span>. 
              My work spans from designing tandem-wing UAV configurations to developing hybrid VTOL systems and marine exploration robots.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond academics, I run a 3D printing business where I design and produce custom decor, 
              functional organizers, and innovative products using cutting-edge Bambu Lab printers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-600 rounded-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation-Driven</h3>
                  <p className="text-gray-600">
                    Constantly exploring new technologies and pushing the limits of UAV and robotics design.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Competition Veteran</h3>
                  <p className="text-gray-600">
                    Participated in Robocon and Robofest, gaining invaluable experience in team robotics.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-600 rounded-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Hands-On Builder</h3>
                  <p className="text-gray-600">
                    From CAD design to flight testing, I bring ideas to life through practical engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;