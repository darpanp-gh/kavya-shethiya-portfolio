import React, { useState } from 'react';
import { Award, X } from 'lucide-react';
import arnobotCertificate from '../assets/images/image.png';

const certificatesData = [
  {
    id: 5,
    title: 'Robotics Internship Certificate',
    organization: 'ARNOBOT Pvt. Ltd.',
    date: 'April 2026',
    image: arnobotCertificate,
  },
  {
    id: 1,
    title: 'Industrial Training - Industrial Robotics',
    organization: 'International Automobile Centre of Excellence (iACE)',
    date: 'September 2025',
    image: 'https://customer-assets.emergentagent.com/job_4503269c-bc48-4588-a15b-6d1861f1a41e/artifacts/b7ez1j47_WhatsApp%20Image%202025-11-12%20at%2012.34.59_3945d179.jpg',
  },
  {
    id: 2,
    title: 'GCET Robocon Team 2024',
    organization: 'G H Patel College of Engineering & Technology',
    date: 'April 2025',
    image: 'https://customer-assets.emergentagent.com/job_4503269c-bc48-4588-a15b-6d1861f1a41e/artifacts/j87ivkx8_WhatsApp%20Image%202025-11-12%20at%2013.46.45_75580ddf.jpg',
  },
  {
    id: 3,
    title: 'Robofest Gujarat 4.0 Competition',
    organization: 'Gujarat Council on Science & Technology (GUJCOST)',
    date: 'October 2024',
    image: 'https://customer-assets.emergentagent.com/job_4503269c-bc48-4588-a15b-6d1861f1a41e/artifacts/wytenboo_WhatsApp%20Image%202025-11-12%20at%2013.47.04_d1f89d75.jpg',
  },
  {
    id: 4,
    title: 'Workshop on Automation and Robotics',
    organization: 'MSME Tool Room - Indo German Tool Room',
    date: 'August 2024',
    image: 'https://customer-assets.emergentagent.com/job_4503269c-bc48-4588-a15b-6d1861f1a41e/artifacts/bh86cdbv_WhatsApp%20Image%202025-11-12%20at%2013.47.30_24b74d33.jpg',
  },
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certificates & Achievements
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition for excellence in robotics, automation, and engineering competitions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificatesData.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-200 dark:border-gray-700"
              onClick={() => setSelectedCertificate(certificate)}
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-contain bg-gray-100 dark:bg-gray-800 group-hover:scale-105 transition-transform duration-500 p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-semibold text-lg">Click to view full certificate</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                    <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {certificate.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                      {certificate.organization}
                    </p>
                    <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                      {certificate.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for viewing full certificate */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-900 dark:text-white" />
            </button>
            <div className="p-4">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-auto object-contain max-h-[80vh]"
              />
            </div>
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedCertificate.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-1">
                {selectedCertificate.organization}
              </p>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                {selectedCertificate.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
