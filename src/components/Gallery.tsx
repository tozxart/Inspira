import React, { useState, useEffect } from "react";
import ImageModal from "./ImageModal";
import { Project } from "./types";
import { ImageOff } from "lucide-react";
import PinnedProjects from "./PinnedProjects";

export const projects: Project[] = [
  {
    id: 1,
    title: "Arcava golf brand",
    category: "branding",
    pinned: true,
    showTitle: true,
    images: [
      {
        url: "https://i.postimg.cc/xTKFPKgJ/1.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/dVZ3XVky/2.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/6qK1sqp5/3.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/kMtnqpM0/4.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/2yPyjsg6/5.jpg",
        displaySeparately: false,
      },
    ],
  },
  {
    id: 2,
    title: "Podcast Design Up Att Batt",
    category: "branding",
    pinned: true,
    showTitle: true,
    images: [
      {
        url: "https://i.postimg.cc/QCXzvCfk/1-2.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/VNnH6nTW/2-2.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/Y97DmjBK/3-2.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/XYTz4Q2v/4-2.jpg",
        displaySeparately: false,
      },
    ],
  },
  {
    id: 3,
    title: "Blooming coffee brand design",
    category: "branding",
    pinned: true,
    showTitle: true,
    images: [
      {
        url: "https://i.postimg.cc/rwmdCLLD/1-3.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/gjFRNtHf/2-3.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/28TbZSgp/3-3.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/zG57JvW9/4-3.jpg",
        displaySeparately: false,
      },
    ],
  },
  {
    id: 4,
    title: "brand design for a game develope, 762 Interactive",
    category: "branding",
    pinned: true,
    showTitle: true,
    images: [
      {
        url: "https://i.postimg.cc/XJFxjCH6/1-4.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/BvRMfgCC/2-4.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/FsxWk099/3-4.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/WzG9nkgw/4-4.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/MZVrxhNf/5-2.jpg",
        displaySeparately: false,
      },
    ],
  },
  {
    id: 5,
    title: "brand design for a game develope, 762 Interactive",
    category: "branding",
    pinned: true,
    showTitle: true,
    images: [
      {
        url: "https://i.postimg.cc/C156SXj9/1-1.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/bYQF8xby/2-1.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/KvWTHVzR/3-1.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/pdRLGYDm/4-1.jpg",
        displaySeparately: false,
      },
    ],
  },
  {
    id: 6,
    title: "Cover design for the book Educational Psychology",
    category: "books",
    pinned: true,
    showTitle: true,
    images: [
      {
        url: "https://i.postimg.cc/L8vgK8m4/1-5.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/XYnBzCSD/2-5.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/NGrX9tkb/3-5.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/GmjGLjxC/4-5.jpg",
        displaySeparately: false,
      },
    ],
  },
  {
    id: 7,
    title: "Cover Book",
    category: "books",
    pinned: true,
    layout: {
      grid: true,
    },
    images: [
      {
        url: "https://i.postimg.cc/9F2nPkNH/Cover-Book.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/9FBNLBvR/libro-n.jpg",
        displaySeparately: false,
      },
    ],
  },
  {
    id: 8,
    title: "Otaku Magazine, first issue",
    category: "magazine",
    pinned: true,
    showTitle: true,
    layout: {
      vertical: true,
    },
    images: [
      {
        url: "https://i.postimg.cc/x8Wq5XGg/waershtgthhtht.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/qv26mx5K/Photorealistic-Magazine-Mock-Up.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/B6n8n9Q5/pixelcut-export-11.png",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/PxVCL3Pg/dyvu6gi7h8ojpk9.jpg",
        displaySeparately: false,
      },
    ],
  },
  {
    id: 9,
    title: "Logo Collection",
    category: "logos",
    pinned: true,
    layout: {
      horizontal: true,
    },
    images: [
      {
        url: "https://i.postimg.cc/02MwSsGc/logo-Lending-Hands-to-Local-Brands-Mesa-de-trabajo-1.jpg",
        displaySeparately: true,
        title: "Lending Hands to Local Brands",
      },
      {
        url: "https://i.postimg.cc/7hcJRs43/LOGO-Meigs-Creek-Hideaway-Mesa-de-trabajo-1.jpg",
        displaySeparately: true,
        title: "Meigs Creek Hideaway",
      },
      {
        url: "https://i.postimg.cc/PqzZqQbH/logo-post-Mesa-de-trabajo-1-copia.jpg",
        displaySeparately: true,
        title: "Post Logo",
      },
      {
        url: "https://i.postimg.cc/7PQzb6z5/LOGO-The-Problem-Solver-Mesa-de-trabajo-1.jpg",
        displaySeparately: true,
        title: "The Problem Solver",
      },
      {
        url: "https://i.postimg.cc/YS47cVHy/smart-big-box-logo-Mesa-de-trabajo-1.jpg",
        displaySeparately: false,
        title: "Smart Big Box",
      },
    ],
  },
  {
    id: 10,
    title: "T-shirt design for a new startup",
    category: "t-shirts",
    pinned: true,
    showTitle: true,
    images: [
      {
        url: "https://i.postimg.cc/MTQzBL3j/post-2-04.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/gjydSZWz/post-2-05.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/Df12ytb9/post-2-06.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/SNqmXD6J/post-2-07.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/xTRnLM5g/post-2-08.jpg",
        displaySeparately: false,
      },
    ],
  },
  {
    id: 11,
    title: "ALMANGA brand",
    category: "t-shirts",
    pinned: true,
    showTitle: true,
    images: [
      {
        url: "https://i.postimg.cc/g279KDZy/Sin-t-tulo-2-Mesa-de-trabajo-1.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/zfHs2gCs/Sin-t-tulo-2-Mesa-de-trabajo-1-copia.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/prR3dcwv/Sin-t-tulo-2-Mesa-de-trabajo-1-copia-2.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/sxmqG9zh/Sin-t-tulo-2-Mesa-de-trabajo-1-copia-3.jpg",
        displaySeparately: false,
      },
      {
        url: "https://i.postimg.cc/44Qr0Zcx/Sin-t-tulo-2-Mesa-de-trabajo-1-copia-4.jpg",
        displaySeparately: false,
      },
    ],
  },
  {
    id: 12,
    title: "T-shirt design for a new startup",
    category: "t-shirts",
    pinned: true,
    layout: {
      grid: true,
    },
    images: [
      {
        url: "https://i.postimg.cc/c4M4TVxR/WERTTRTT.png",
        displaySeparately: true,
        title: "Thin air apparel t-shirt:",
      },
      {
        url: "https://i.postimg.cc/SxSQPDRw/Srgtfe.jpg",
        displaySeparately: true,
        title: "Leon design t-shirt",
      },
    ],
  },
  {
    id: 13,
    title: "Banners",
    category: "Banners",
    pinned: true,
    layout: {
      vertical: true,
    },
    images: [
      {
        url: "https://i.postimg.cc/WpQMXz1Q/plantilla-BANNERS-Mesa-de-trabajo-1-copia-2.jpg",
        displaySeparately: true,
        title: "Banner 1",
      },
      {
        url: "https://i.postimg.cc/T3xnvsm0/plantilla-BANNERS-Mesa-de-trabajo-1-copia.jpg",
        displaySeparately: true,
        title: "Banner 2",
      },
      {
        url: "https://i.postimg.cc/ydxdzmvv/plantilla-BANNERS-Mesa-de-trabajo-1-copia-3.jpg",
        displaySeparately: true,
        title: "Banner 3",
      },
      {
        url: "https://i.postimg.cc/Ghy42jrf/plantilla-BANNERS-Mesa-de-trabajo-1-copia-4.jpg",
        displaySeparately: true,
        title: "Banner 4",
      },
    ],
  },
  {
    id: 14,
    title: "Thumbnails",
    category: "Thumbnail",
    pinned: true,
    layout: {
      masonry: true,
    },
    images: [
      {
        url: "https://i.postimg.cc/yYmSjT5Z/mini-1.jpg",
        displaySeparately: true,
        title: "Mini 1",
      },
      {
        url: "https://i.postimg.cc/15hqDdWS/mini-2.jpg",
        displaySeparately: true,
        title: "Mini 2",
      },
      {
        url: "https://i.postimg.cc/yx93wh82/mini-3.jpg",
        displaySeparately: true,
        title: "Mini 3",
      },
      {
        url: "https://i.postimg.cc/9Msq8gCG/mini-4.jpg",
        displaySeparately: true,
        title: "Mini 4",
      },
      {
        url: "https://i.postimg.cc/50XCmWd4/mini-5.jpg",
        displaySeparately: true,
        title: "Mini 5",
      },
    ],
  },
  {
    id: 15,
    title: "Posters",
    category: "Posters",
    pinned: true,
    layout: {
      masonry: true,
    },
    images: [
      {
        url: "https://i.postimg.cc/rp96xkMb/Banquete-global.jpg",
        displaySeparately: true,
        title: "Global Banquet",
      },
      {
        url: "https://i.postimg.cc/C1vWrsZs/Gira-el-destino.jpg",
        displaySeparately: true,
        title: "Turn the fate",
      },
      {
        url: "https://i.postimg.cc/SR9bXzsL/Dulce-avaricia.jpg",
        displaySeparately: true,
        title: "Sweet Greed",
      },
      {
        url: "https://i.postimg.cc/rsx7yXnQ/El-actor-feliz-Mohamed-Bensaad.jpg",
        displaySeparately: true,
        title: "The Happy Actor",
      },
      {
        url: "https://i.postimg.cc/2jZs7hkh/Tic-tac.jpg",
        displaySeparately: true,
        title: "Tic tak",
      },
      {
        url: "https://i.postimg.cc/hPRHyvvw/EcoBingo.jpg",
        displaySeparately: true,
        title: "EcoBingo",
      },
      {
        url: "https://i.postimg.cc/Kv7CdbgY/Efecto-domino.jpg",
        displaySeparately: true,
        title: "Domino Effect",
      },
      {
        url: "https://i.postimg.cc/P5t0H7mQ/03-scaled.jpg",
        displaySeparately: true,
        title: "Game over",
      },
      {
        url: "https://i.postimg.cc/MHqmBCZs/wert.jpg",
        displaySeparately: true,
        title: "Orihuela festival poster",
      },
    ],
  },
  {
    id: 16,
    title: "Business cards",
    category: "Extra",
    pinned: true,
    layout: {
      grid: true,
    },
    images: [
      {
        url: "https://i.postimg.cc/PqJcp8VL/tarjetas-mochap.jpg",
        displaySeparately: true,
        title: "Business card for DAMAR",
      },
      {
        url: "https://i.postimg.cc/HkhzNv3x/instam.jpg",
        displaySeparately: true,
        title: "Instagram post",
      },
    ],
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  const categories = [
    "All",
    "Branding",
    "Thumbnail",
    "Banners",
    "Books",
    "Posters",
    "Magazine",
    "T-shirts",
    "Logos",
    "Extra",
  ];

  const sortedProjects = [...projects].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return 0;
  });

  const getFilteredProjects = () => {
    const filtered = sortedProjects.filter((project) =>
      filter.toLowerCase() === "all"
        ? true
        : project.category.toLowerCase() === filter.toLowerCase()
    );

    return filtered.flatMap((project) => {
      if (
        filter !== "all" &&
        project.images.some((img) => img.displaySeparately)
      ) {
        return project.images
          .filter((img) => img.displaySeparately)
          .map((img, index) => ({
            ...project,
            id: `${project.id}-${index}`,
            title: img.title || project.title,
            images: [{ url: img.url }],
          }));
      }
      return [project];
    });
  };

  const displayedProjects = getFilteredProjects();

  const getImageUrl = (project: Project, index: number) => {
    try {
      return project.images[index]?.url || "";
    } catch (error) {
      console.error("Error getting image URL:", error);
      return "";
    }
  };

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

  return (
    <section className="py-12 md:py-20">
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

      {/* Filter Buttons - Make scrollable on mobile */}
      <div className="w-full mb-8 md:mb-16 px-4">
        <div className="flex justify-start md:justify-center overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
          <div className="inline-flex bg-white rounded-full shadow-lg p-1.5 whitespace-nowrap">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setFilter(category.toLowerCase())}
                className={`relative px-4 md:px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full
                  ${
                    mounted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }
                  ${
                    filter === category.toLowerCase()
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
        <div className="mb-8 md:mb-16">
          <PinnedProjects
            projects={pinnedProjects}
            onProjectClick={setSelectedProject}
          />
        </div>
      )}

      {/* Regular Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {displayedProjects
            .filter((project) => (filter === "all" ? !project.pinned : true))
            .map((project: Project, index) => (
              <div
                key={project.id}
                className={`transform transition-all duration-300 ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}>
                <div
                  className={`glass-card hover-card rounded-xl overflow-hidden cursor-pointer h-[300px] md:h-[400px]
                    ${project.pinned ? "border-2 border-primary-500" : ""}`}
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentImageIndex(0);
                  }}>
                  <div className="relative h-full">
                    <img
                      src={getImageUrl(project, 0)}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-700 hover:scale-110
                        ${
                          loadedImages[getImageUrl(project, 0)] === false
                            ? "hidden"
                            : ""
                        }`}
                      onLoad={() => handleImageLoad(getImageUrl(project, 0))}
                      onError={() => handleImageError(getImageUrl(project, 0))}
                      loading="lazy"
                    />
                    {loadedImages[getImageUrl(project, 0)] === false && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <ImageOff className="w-8 h-8 md:w-12 md:h-12 text-gray-400" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 md:opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-0 md:translate-y-2 hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-semibold text-lg md:text-xl mb-1 line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-white/80 text-xs md:text-sm capitalize">
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
                      <div className="absolute top-4 right-4 glass-card px-2 md:px-3 py-1 rounded-full text-xs">
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
