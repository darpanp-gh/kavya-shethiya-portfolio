import React, { useState } from 'react';
import { certificatesData } from '../data/mockData';
import { Award, Calendar, MapPin, X } from 'lucide-react';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Group certificates by category
  const categories = {};
  certificatesData.forEach((cert) => {
    if (!categories[cert.category]) {
      categories[cert.category] = [];
    }
    categories[cert.category].push(cert);
  });

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certificates & Achievements
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional credentials and recognition from industry-leading organizations and prestigious competitions.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificatesData.map((certificate) => (
            <div
              key={certificate.id}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
              onClick={() => setSelectedCertificate(certificate)}
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden h-80">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {certificate.title}
                    </h3>
                    {certificate.subtitle && (
                      <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                        {certificate.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                    <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {certificate.issuer}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{certificate.issueDate}</span>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCertificate(certificate);
                    }}
                  >
                    View Certificate →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Tags */}
        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(categories).map((category) => (
              <div
                key={category}
                className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-full text-sm font-semibold text-indigo-700 dark:text-indigo-300 flex items-center gap-2"
              >
                <Award className="w-4 h-4" />
                {category} ({categories[category].length})
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Full Certificate View */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedCertificate.title}
                </h3>
                {selectedCertificate.subtitle && (
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
                    {selectedCertificate.subtitle}
                  </p>
                )}
              </div>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Full Certificate Image */}
              <div className="mb-8 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-auto"
                />
              </div>

              {/* Certificate Details */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                      Issuing Organization
                    </h4>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {selectedCertificate.issuer}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                      Issue Date
                    </h4>
                    <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                      <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      <span className="font-semibold">{selectedCertificate.issueDate}</span>
                    </div>
                  </div>

                  {selectedCertificate.location && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                        Location
                      </h4>
                      <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                        <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        <span className="font-semibold">{selectedCertificate.location}</span>
                      </div>
                    </div>
                  )}

                  {selectedCertificate.certificateNumber && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                        Certificate Number
                      </h4>
                      <p className="text-gray-900 dark:text-white font-mono">
                        {selectedCertificate.certificateNumber}
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                      Category
                    </h4>
                    <span className="inline-block px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-full text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                      {selectedCertificate.category}
                    </span>
                  </div>

                  {selectedCertificate.description && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                        Description
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {selectedCertificate.description}
                      </p>
                    </div>
                  )}

                  {selectedCertificate.institution && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                        Institution
                      </h4>
                      <p className="text-gray-900 dark:text-white">
                        {selectedCertificate.institution}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
