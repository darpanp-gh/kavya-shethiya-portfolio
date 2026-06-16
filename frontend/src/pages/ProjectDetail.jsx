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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const hasGallery = project.images && project.images.length > 0;

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i - 1 + project.images.length) % project.images.length);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % project.images.length);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </button>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="pt-20">
        <div className="relative h-96 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-12">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl">
                {project.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Project Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-indigo-100 dark:border-indigo-800">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Duration</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{project.duration}</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-3">
              <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Role</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{project.role}</p>
          </div>
        </div>

        {/* Full Description */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-indigo-600 dark:bg-indigo-500 rounded-full"></span>
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.fullDescription}
          </p>
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
              {project.videos.map((vid, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-black">
                  <video
                    src={vid.src}
                    controls
                    className="w-full"
                    style={{ maxHeight: '320px' }}
                  />
                  {vid.caption && (
                    <div className="px-4 py-3 bg-white dark:bg-gray-900">
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{vid.caption}</p>
                    </div>
                  )}
                </div>
              ))}
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
            Outcomes & Achievements
          </h2>
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.outcomes}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in Learning More?
          </h3>
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="px-8 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors font-medium shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {project.images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.images[lightboxIndex].src}
              alt={project.images[lightboxIndex].caption}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            {project.images[lightboxIndex].caption && (
              <p className="text-white/80 text-center mt-4 text-sm">
                {project.images[lightboxIndex].caption}
              </p>
            )}
            <p className="text-white/50 text-center mt-2 text-xs">
              {lightboxIndex + 1} / {project.images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
