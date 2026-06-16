import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/mockData';
import { ArrowLeft, Clock, User, Wrench, Target, TrendingUp, Images, MapPin, ChevronLeft, ChevronRight, X, Video } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === id);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const hasGallery = project.images && project.images.length > 0;

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <img
            src={project.images[lightboxIndex].src}
            alt={project.images[lightboxIndex].caption}
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {lightboxIndex + 1} / {project.images.length}
          </div>
        </div>
      )}

      {/* Hero */}
      <div className="relative h-80 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{project.shortDescription}</p>
          </div>
        </div>
        <button
          onClick={() => navigate('/')}
          className="absolute top-6 left-6 flex items-center gap-2 text-white hover:text-gray-300 transition-colors bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Overview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{project.fullDescription}</p>
        </div>

        {/* Meta Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="font-semibold text-gray-900 dark:text-white">Duration</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{project.duration}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="font-semibold text-gray-900 dark:text-white">Role</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{project.role}</p>
          </div>
        </div>

        {/* Applications */}
        {project.applications && project.applications.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              Applications
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.applications.map((app, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg font-medium border border-blue-200 dark:border-blue-800"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Technologies / Skills */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Wrench className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            Skills Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg font-medium hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        {hasGallery && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Images className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              Project Images
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.map((img, index) => (
                <div
                  key={index}
                  className="group cursor-pointer rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-contain bg-gray-50 dark:bg-gray-800 group-hover:scale-105 transition-transform duration-500 p-2"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-semibold bg-black/60 px-4 py-2 rounded-lg">
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                  {img.caption && (
                    <div className="px-4 py-3 bg-white dark:bg-gray-900">
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{img.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Video Gallery */}
        {project.videos && project.videos.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Video className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              Project Videos
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.videos.map((vid, index) => {
                const isGoogleDrive = vid.src.includes('drive.google.com');
                const videoId = isGoogleDrive
                  ? vid.src.match(/\/d\/([a-zA-Z0-9_-]+)/)?.[1]
                  : null;
                const embedUrl = videoId
                  ? `https://drive.google.com/file/d/${videoId}/preview`
                  : null;

                return (
                  <div key={index} className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-black">
                    {isGoogleDrive ? (
                      <iframe
                        src={embedUrl}
                        width="100%"
                        height="320"
                        allow="autoplay; fullscreen"
                        className="w-full"
                        style={{ border: 'none' }}
                        title={vid.caption || `Video ${index + 1}`}
                      />
                    ) : (
                      <video
                        src={vid.src}
                        controls
                        className="w-full"
                        style={{ maxHeight: '320px' }}
                      />
                    )}
                    {vid.caption && (
                      <div className="px-4 py-3 bg-white dark:bg-gray-900">
                        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{vid.caption}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Challenges */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            Challenges
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.challenges}
            </p>
          </div>
        </div>

        {/* Outcomes */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />
            Outcomes
          </h2>
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.outcomes}
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Back to All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
