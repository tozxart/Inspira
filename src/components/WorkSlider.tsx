import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { getRandomProjectsForSlider } from "../helpers/randomize";
import { projects } from "./Gallery"; // Import projects from Gallery

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function WorkSlider() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const swiperRef = useRef<SwiperType>();
  const timerRef = useRef<NodeJS.Timeout>();

  // Get random works from gallery projects
  const [works] = useState(() => getRandomProjectsForSlider(projects));

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset timer when selectedId changes
  useEffect(() => {
    // Clear existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Set new timer if a slide is selected
    if (selectedId !== null) {
      timerRef.current = setTimeout(() => {
        setSelectedId(null);
      }, 10000); // 20 seconds
    }

    // Cleanup timer on unmount
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [selectedId]);

  const handleSlideClick = (id: number, index: number) => {
    // Ensure we have the swiper instance
    if (!swiperRef.current) return;

    const realIndex = swiperRef.current.realIndex;

    if (selectedId === id) {
      // If clicking the same slide, just collapse it
      setSelectedId(null);
    } else {
      // If it's not the center slide, center it first
      if (realIndex !== index) {
        swiperRef.current.slideToLoop(index, 300, false);
        // Wait for the slide transition before expanding
        setTimeout(() => {
          setSelectedId(id);
        }, 300);
      } else {
        // If it's already centered, just expand it
        setSelectedId(id);
      }
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
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-8 md:mb-12 relative line-title">
          Featured Works
        </h2>

        <div className="swiper-container -mx-4 sm:mx-0">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1.2}
            centeredSlides={true}
            centeredSlidesBounds={true}
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
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
              setSelectedId(null);
            }}
            className="game-slider">
            {works.map((work, index) => (
              <SwiperSlide
                key={work.id}
                className={`game-slide ${
                  selectedId === work.id ? "expanded" : ""
                }`}>
                <div
                  className={`game-card`}
                  style={{
                    backgroundImage: `url(${work.images[0].url})`,
                  }}
                  onClick={() => handleSlideClick(Number(work.id), index)}>
                  {/* Category Badge */}
                  <div className="absolute top-3 md:top-4 left-3 md:left-4 px-2 md:px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full z-10">
                    <span className="text-white/90 text-xs md:text-sm font-medium capitalize">
                      {work.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="game-card-content p-4 md:p-6">
                    <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-white line-clamp-2">
                      {work.title}
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm line-clamp-2">
                      {work.category}
                    </p>

                    {/* Image count indicator */}
                    <div className="mt-2 flex items-center gap-2">
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
