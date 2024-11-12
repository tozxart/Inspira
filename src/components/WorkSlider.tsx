import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { getRandomProjectsForSlider } from "../helpers/randomize";
import { projects } from "./Gallery";
import ImageModal from "./ImageModal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function WorkSlider() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const swiperRef = useRef<SwiperType>();
  const timerRef = useRef<NodeJS.Timeout>();

  // Get random works from gallery projects
  const [works] = useState(() => getRandomProjectsForSlider(projects));

  // Reset timer when selectedId changes
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (selectedId !== null) {
      timerRef.current = setTimeout(() => {
        setSelectedId(null);
      }, 10000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [selectedId]);

  const handleSlideClick = (work: (typeof projects)[0]) => {
    setSelectedProject(work);
    setCurrentImageIndex(0);
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

  // Disable autoplay when a slide is selected
  useEffect(() => {
    if (!swiperRef.current) return;

    if (selectedId !== null) {
      swiperRef.current.autoplay.stop();
    } else {
      swiperRef.current.autoplay.start();
    }
  }, [selectedId]);

  return (
    <section className="featured-works py-12 md:py-20">
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

      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-8 md:mb-12 relative line-title">
          Featured Works
        </h2>

        <div className="swiper-container -mx-4 sm:mx-0">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            speed={800}
            spaceBetween={16}
            slideToClickedSlide={true}
            watchSlidesProgress={true}
            updateOnWindowResize={true}
            observer={true}
            observeParents={true}
            loopAdditionalSlides={4}
            roundLengths={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-primary-500",
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 30,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              swiper.update();
            }}
            className="game-slider">
            {works.map((work) => (
              <SwiperSlide key={work.id} className="game-slide">
                <div
                  className="game-card group relative overflow-hidden rounded-xl"
                  onClick={() => handleSlideClick(work)}>
                  {/* Background Image */}
                  <div
                    className="bg-image absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${work.images[0].url})`,
                    }}
                  />
                  {/* Overlay */}
                  <div className="overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-3 md:top-4 left-3 md:left-4 px-2 md:px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full z-10">
                    <span className="text-white/90 text-xs md:text-sm font-medium capitalize">
                      {work.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="game-card-content absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-white line-clamp-2">
                      {work.title}
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm line-clamp-2 transform transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                      {work.category}
                    </p>
                    <div className="mt-2 flex items-center gap-2 transform transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                      <span className="text-white/60 text-xs">
                        {work.images.length} images
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
