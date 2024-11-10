import React from "react";
import { Project } from "./types";

interface PinnedProjectsProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export default function PinnedProjects({
  projects,
  onProjectClick,
}: PinnedProjectsProps) {
  const renderProjectImages = (project: Project) => {
    if (project.layout?.banner) {
      return (
        <div className="w-full -mx-4">
          <div
            className="relative w-full h-[300px]"
            onClick={() => onProjectClick(project)}>
            {/* Added rounded-[2rem] to match other layouts */}
            <div className="glass-card cursor-pointer h-full rounded-[2rem]">
              <img
                src={project.images[0]}
                alt={project.title}
                // Added rounded-[2rem] to the image as well
                className="w-full h-full object-cover object-center rounded-[2rem]"
              />
              {project.images.length > 1 && (
                <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full text-xs text-white bg-black/50">
                  {project.images.length} images
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Default horizontal layout if no layout is specified
    if (!project.layout || project.layout.horizontal) {
      return (
        <div className="flex -space-x-[2px]">
          {project.images.map((image, imageIndex) => (
            <div
              key={imageIndex}
              className="w-[400px]"
              onClick={() => onProjectClick(project)}>
              <div
                className={`glass-card cursor-pointer h-[300px] relative
                ${imageIndex === 0 ? "rounded-l-[2rem]" : ""} 
                ${
                  imageIndex === project.images.length - 1
                    ? "rounded-r-[2rem]"
                    : ""
                }
                ${imageIndex !== 0 ? "border-l-0" : ""}`}
                style={{ marginLeft: imageIndex === 0 ? "0" : "-1px" }}>
                <img
                  src={image}
                  alt={`${project.title} - Image ${imageIndex + 1}`}
                  className={`w-full h-full object-cover
                  ${imageIndex === 0 ? "rounded-l-[2rem]" : ""} 
                  ${
                    imageIndex === project.images.length - 1
                      ? "rounded-r-[2rem]"
                      : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (project.layout.vertical) {
      return (
        <div className="flex gap-4">
          <div className="w-2/3" onClick={() => onProjectClick(project)}>
            <div className="glass-card cursor-pointer h-[600px] rounded-[2rem]">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-4">
            {project.images.slice(1, 4).map((image, index) => (
              <div
                key={index}
                className="h-[190px]"
                onClick={() => onProjectClick(project)}>
                <div className="glass-card cursor-pointer h-full rounded-[2rem]">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 2}`}
                    className="w-full h-full object-cover rounded-[2rem]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (project.layout.grid) {
      return (
        <div className="grid grid-cols-2 gap-4">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="h-[300px]"
              onClick={() => onProjectClick(project)}>
              <div className="glass-card cursor-pointer h-full rounded-[2rem]">
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-[2rem]"
                />
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="w-full">
      <div className="container mx-auto px-4">
        {projects
          .filter((project) => project.pinned)
          .map((project) => (
            <div key={project.id} className="mb-8 relative">
              {project.showTitle && !project.layout?.banner && (
                <div className="absolute -top-4 left-4 z-10">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-2xl border border-neutral-200">
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                  </div>
                </div>
              )}
              <div className="relative">
                <div
                  className={`overflow-x-auto hide-scrollbar ${
                    project.layout?.banner ? "overflow-visible" : ""
                  }`}>
                  {renderProjectImages(project)}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
