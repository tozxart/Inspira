import React, { useState, useEffect } from "react";
import ImageModal from "./ImageModal";
import { Project } from "./types";
import { ImageOff } from "lucide-react";
import PinnedProjects from "./PinnedProjects";

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
      title: "Arcava golf brand",
      category: "branding",
      pinned: true,
      showTitle: true,
      images: [
        "https://i.postimg.cc/xTKFPKgJ/1.jpg",
        "https://i.postimg.cc/dVZ3XVky/2.jpg",
        "https://i.postimg.cc/6qK1sqp5/3.jpg",
        "https://i.postimg.cc/kMtnqpM0/4.jpg",
        "https://i.postimg.cc/2yPyjsg6/5.jpg",
      ],
    },
    {
      id: 2,
      title: "Podcast Design Up Att Batt",
      category: "branding",
      pinned: true,
      showTitle: true,
      images: [
        "https://i.postimg.cc/QCXzvCfk/1-2.jpg",
        "https://i.postimg.cc/VNnH6nTW/2-2.jpg",
        "https://i.postimg.cc/Y97DmjBK/3-2.jpg",
        "https://i.postimg.cc/XYTz4Q2v/4-2.jpg",
      ],
    },
    {
      id: 3,
      title: "Blooming coffee brand design",
      category: "branding",
      pinned: true,
      showTitle: true,
      images: [
        "https://i.postimg.cc/rwmdCLLD/1-3.jpg",
        "https://i.postimg.cc/gjFRNtHf/2-3.jpg",
        "https://i.postimg.cc/28TbZSgp/3-3.jpg",
        "https://i.postimg.cc/zG57JvW9/4-3.jpg",
        "https://i.postimg.cc/SsjVwP8R/5-1.jpg",
      ],
    },
    {
      id: 4,
      title: "brand design for a game develope, 762 Interactive",
      category: "branding",
      pinned: true,
      showTitle: true,
      images: [
        "https://i.postimg.cc/XJFxjCH6/1-4.jpg",
        "https://i.postimg.cc/BvRMfgCC/2-4.jpg",
        "https://i.postimg.cc/FsxWk099/3-4.jpg",
        "https://i.postimg.cc/WzG9nkgw/4-4.jpg",
        "https://i.postimg.cc/MZVrxhNf/5-2.jpg",
      ],
    },
    {
      id: 5,
      title: "hannel identity design Trial by Fire",
      category: "branding",
      pinned: true,
      showTitle: true,
      images: [
        "https://i.postimg.cc/C156SXj9/1-1.jpg",
        "https://i.postimg.cc/bYQF8xby/2-1.jpg",
        "https://i.postimg.cc/KvWTHVzR/3-1.jpg",
        "https://i.postimg.cc/pdRLGYDm/4-1.jpg",
      ],
    },
    {
      id: 6,
      title: "Cover design for the book Educational Psychology",
      category: "books",
      pinned: true,
      showTitle: true,
      images: [
        "https://i.postimg.cc/L8vgK8m4/1-5.jpg",
        "https://i.postimg.cc/XYnBzCSD/2-5.jpg",
        "https://i.postimg.cc/NGrX9tkb/3-5.jpg",
        "https://i.postimg.cc/GmjGLjxC/4-5.jpg",
      ],
    },
    {
      id: 7,
      title: "Otaku Magazine, first issue",
      category: "magazine",
      pinned: true,
      showTitle: true,
      layout: {
        vertical: true,
      },
      images: [
        "https://i.postimg.cc/x8Wq5XGg/waershtgthhtht.jpg",
        "https://i.postimg.cc/qv26mx5K/Photorealistic-Magazine-Mock-Up.jpg",
        "https://i.postimg.cc/B6n8n9Q5/pixelcut-export-11.png",
        "https://i.postimg.cc/PxVCL3Pg/dyvu6gi7h8ojpk9.jpg",
      ],
    },
    {
      id: 8,
      title: "Logo design for a new startup",
      category: "logos",
      pinned: true,
      layout: {
        horizontal: true,
      },
      images: [
        "https://i.postimg.cc/02MwSsGc/logo-Lending-Hands-to-Local-Brands-Mesa-de-trabajo-1.jpg",
        "https://i.postimg.cc/7hcJRs43/LOGO-Meigs-Creek-Hideaway-Mesa-de-trabajo-1.jpg",
        "https://i.postimg.cc/PqzZqQbH/logo-post-Mesa-de-trabajo-1-copia.jpg",
        "https://i.postimg.cc/7PQzb6z5/LOGO-The-Problem-Solver-Mesa-de-trabajo-1.jpg",
      ],
    },
    {
      id: 8,
      title: "T-shirt design for a new startup",
      category: "t-shirts",
      pinned: true,
      layout: {
        banner: true,
      },
      images: [
        "https://mohammedbensaad.my.canva.site/copia-de-portafolio/media/ab9c7c09512ebc3de45a9ef61ddfa8af.jpg",
      ],
    },
    {
      id: 9,
      title: "T-shirt design for a new startup",
      category: "t-shirts",
      pinned: true,
      images: [
        "https://mohammedbensaad.my.canva.site/copia-de-portafolio/media/e0664dc1d0a12a1c4c9bee21baf0289a.jpg",
        "https://mohammedbensaad.my.canva.site/copia-de-portafolio/media/d592eb2ea2539da40c9d263fc22a6ebb.jpg",
        "https://mohammedbensaad.my.canva.site/copia-de-portafolio/media/f77b0e756e44de71d7a3a0fdc7fba5ae.jpg",
      ],
    },
  ];

  const categories = [
    "all",
    "branding",
    "thumbnail",
    "books",
    "banners",
    "magazine",
    "t-shirts",
    "logos",
  ];

  const sortedProjects = [...projects].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return 0;
  });

  const filteredProjects = sortedProjects.filter((project) =>
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

  const pinnedProjects = projects.filter((project) => project.pinned);
  const nonPinnedProjects = projects.filter((project) => !project.pinned);

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

      {/* Filter Buttons */}
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

      {/* Pinned Projects Row - Only show for "all" filter */}
      {filter === "all" && (
        <PinnedProjects
          projects={pinnedProjects}
          onProjectClick={setSelectedProject}
        />
      )}

      {/* Regular Grid */}
      <div className="container mx-auto px-4">
        <div className="masonry-grid">
          {filteredProjects
            .filter((project) => !project.pinned || filter !== "all")
            .map((project, index) => (
              <div
                key={project.id}
                className={`masonry-item
                ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }
              `}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}>
                <div
                  className={`glass-card hover-card rounded-xl overflow-hidden cursor-pointer
                  ${project.pinned ? "border-2 border-primary-500" : ""}
                `}
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentImageIndex(0);
                  }}>
                  <div className="relative">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className={`w-full h-auto object-cover transition-transform duration-700 hover:scale-110
                      ${
                        loadedImages[project.images[0]] === false
                          ? "hidden"
                          : ""
                      }`}
                      onLoad={() => handleImageLoad(project.images[0])}
                      onError={() => handleImageError(project.images[0])}
                      loading="lazy"
                    />
                    {loadedImages[project.images[0]] === false && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 min-h-[300px]">
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
                        {project.pinned && (
                          <span className="inline-block px-2 py-1 bg-primary-600 text-white text-xs rounded-full mt-2">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                    {project.images.length > 1 && (
                      <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full text-xs">
                        {project.images.length} images
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
