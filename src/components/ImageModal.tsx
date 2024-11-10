import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "./types";

interface ImageModalProps {
  project: Project;
  currentImageIndex: number;
  onClose: () => void;
  onPrevImage: () => void;
  onNextImage: () => void;
  onImageSelect: (index: number) => void;
}

export default function ImageModal({
  project,
  currentImageIndex,
  onClose,
  onPrevImage,
  onNextImage,
  onImageSelect,
}: ImageModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") onPrevImage();
      if (e.key === "ArrowRight") onNextImage();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose, onPrevImage, onNextImage]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl transition-opacity duration-300
        ${isClosing ? "opacity-0" : "opacity-100"}`}>
      <div className="absolute inset-0 flex flex-col">
        {/* Header */}
        <div className="relative z-50 px-6 py-4">
          <div className="max-w-[1920px] mx-auto flex items-center justify-between">
            <div className="transform translate-y-0 opacity-100 transition-all duration-300">
              <h3 className="text-white/90 text-xl font-medium">
                {project.title}
              </h3>
              <p className="text-white/60 text-sm capitalize">
                {project.category}
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 text-white/60 hover:text-white/90 hover:bg-white/10 rounded-full transition-all duration-300"
              aria-label="Close modal">
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Main Image */}
        <div className="flex-1 relative flex items-center justify-center p-8">
          <button
            onClick={onPrevImage}
            className="absolute left-8 p-3 text-white/60 hover:text-white/90 bg-black/30 hover:bg-black/50 rounded-full transition-all duration-300 transform hover:scale-105 group"
            aria-label="Previous image">
            <ChevronLeft
              size={28}
              className="transform group-hover:-translate-x-0.5 transition-transform"
            />
          </button>

          <div className="relative max-h-full max-w-full">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-white/10 border-t-white/90 rounded-full animate-spin"></div>
              </div>
            )}
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className={`max-h-[85vh] object-contain rounded-lg transition-all duration-500
                ${isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
              onLoad={() => setIsLoading(false)}
            />
          </div>

          <button
            onClick={onNextImage}
            className="absolute right-8 p-3 text-white/60 hover:text-white/90 bg-black/30 hover:bg-black/50 rounded-full transition-all duration-300 transform hover:scale-105 group"
            aria-label="Next image">
            <ChevronRight
              size={28}
              className="transform group-hover:translate-x-0.5 transition-transform"
            />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="relative z-50 px-6 py-4 bg-black/50">
          <div className="max-w-[1920px] mx-auto">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => onImageSelect(index)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 transform
                    ${
                      currentImageIndex === index
                        ? "ring-2 ring-white/90 ring-offset-2 ring-offset-black scale-105"
                        : "opacity-40 hover:opacity-100 hover:scale-105"
                    }`}>
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-black/20 transition-opacity duration-300
                    ${
                      currentImageIndex === index ? "opacity-0" : "opacity-100"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
