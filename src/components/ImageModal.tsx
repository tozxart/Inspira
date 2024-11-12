import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "./types";
import { useModal } from "../contexts/ModalContext";

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
  const { setIsModalOpen } = useModal();

  useEffect(() => {
    setIsModalOpen(true);
    return () => setIsModalOpen(false);
  }, [setIsModalOpen]);

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div className="relative w-full h-full flex flex-col justify-between">
        {/* Top Bar with Title and Close Button */}
        <div className="absolute top-0 left-0 right-0 z-50 p-4 flex justify-between items-center">
          {/* Title */}
          <h2 className="text-white/90 text-lg font-medium px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full">
            {project.title}
          </h2>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="p-3 text-white/80 hover:text-white bg-black/30 hover:bg-black/50 
              rounded-full transition-all duration-300 transform hover:scale-105 
              backdrop-blur-sm hover:rotate-90 group"
            aria-label="Close modal">
            <X size={24} className="transition-transform duration-300" />
          </button>
        </div>

        {/* Main Image */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="relative max-w-[90vw] max-h-[80vh]">
            <img
              src={project.images[currentImageIndex].url}
              alt={project.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white/90 text-sm">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={onPrevImage}
            className="absolute left-8 p-3 text-white/60 hover:text-white/90 bg-black/30 hover:bg-black/50 rounded-full transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm"
            aria-label="Previous image">
            <ChevronLeft
              size={28}
              className="transform group-hover:-translate-x-0.5 transition-transform"
            />
          </button>

          <button
            onClick={onNextImage}
            className="absolute right-8 p-3 text-white/60 hover:text-white/90 bg-black/30 hover:bg-black/50 rounded-full transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm"
            aria-label="Next image">
            <ChevronRight
              size={28}
              className="transform group-hover:translate-x-0.5 transition-transform"
            />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="relative z-50 px-6 py-4 bg-black/50 backdrop-blur-sm">
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
                    src={image.url}
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
