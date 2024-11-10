import React, { useState, useEffect } from "react";
import ImageModal from "./ImageModal";
import { Project } from "./types";
import { ImageOff } from "lucide-react";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Brand Identity",
      category: "logos",
      images: [
        "https://i.postimg.cc/RVnVyPCQ/d5wiyshkaetaeubekfrt.jpg",
        "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1636633762833-5d1658f1a3f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      ],
    },
    {
      id: 2,
      title: "Album Artwork Collection",
      category: "covers",
      images: [
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      ],
    },
    {
      id: 3,
      title: "Digital Art Series",
      category: "arts",
      images: [
        "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      ],
    },
    {
      id: 4,
      title: "Social Media Designs",
      category: "thumbnails",
      images: [
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      ],
    },
  ];

  const categories = ["all", "logos", "covers", "arts", "thumbnails"];

  const filteredProjects = projects.filter((project) =>
    filter === "all" ? true : project.category === filter
  );

  const handleImageLoad = (imageUrl: string) => {
    setLoadedImages((prev) => ({ ...prev, [imageUrl]: true }));
  };

  const handleImageError = (imageUrl: string) => {
    setLoadedImages((prev) => ({ ...prev, [imageUrl]: false }));
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <section className="py-20">
      {selectedProject && (
        <ImageModal
          project={selectedProject}
          currentImageIndex={currentImageIndex}
          onClose={() => {
            setSelectedProject(null);
            setCurrentImageIndex(0);
          }}
          onPrevImage={handlePrevImage}
          onNextImage={handleNextImage}
          onImageSelect={setCurrentImageIndex}
        />
      )}

      <div className="w-full mb-16">
        <div className="flex justify-center">
          <div className="inline-flex bg-white rounded-full shadow-lg p-1.5">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`relative px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full
                  ${
                    mounted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }
                  ${
                    filter === category
                      ? "text-white bg-primary-600 shadow-md"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }
                `}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}>
                <span className="relative z-10">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-card hover-card rounded-xl overflow-hidden cursor-pointer
                ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}>
              <div className="relative aspect-[4/3] bg-gray-100">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 hover:scale-110
                    ${
                      loadedImages[project.images[0]] === false ? "hidden" : ""
                    }`}
                  onLoad={() => handleImageLoad(project.images[0])}
                  onError={() => handleImageError(project.images[0])}
                  loading="lazy"
                />
                {loadedImages[project.images[0]] === false && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <ImageOff className="w-12 h-12 text-gray-400" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-xl mb-1">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm capitalize">
                      {project.category}
                    </p>
                  </div>
                </div>
                {project.images.length > 1 && (
                  <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full text-xs">
                    {project.images.length} images
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
