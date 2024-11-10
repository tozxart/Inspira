import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function WorkSlider() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const swiperRef = useRef<SwiperType>();
  const timerRef = useRef<NodeJS.Timeout>();

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

  const works = [
    {
      id: 1,
      title: "Dota 2",
      description:
        "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
      image:
        "https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg",
    },
    {
      id: 2,
      title: "The Witcher 3",
      description:
        "The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
      image:
        "https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg",
    },
    {
      id: 3,
      title: "RDR 2",
      description:
        "RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
      image:
        "https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg",
    },
    {
      id: 4,
      title: "PUBG Mobile",
      description:
        "PUBG Mobile is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
      image:
        "https://www.yudiz.com/codepen/expandable-animated-card-slider/pubg.jpg",
    },
    {
      id: 5,
      title: "Fortnite",
      description:
        "Battle royale where 100 players fight to be the last person standing. which was a community-created mod for Blizzard Entertainment's Warcraft III.",
      image:
        "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg",
    },
    {
      id: 6,
      title: "The Witcher 3",
      description:
        "The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
      image:
        "https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg",
    },
    {
      id: 7,
      title: "Dota 2",
      description:
        "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
      image:
        "https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg",
    },
  ];

  return (
    <section className="featured-works py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-12 relative line-title">
          Featured Works
        </h2>

        <div className="swiper-container">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView="auto"
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            speed={600}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-primary-500",
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
              // Close expanded card when sliding
              setSelectedId(null);
            }}
            className="game-slider">
            {works.map((work, index) => (
              <SwiperSlide
                key={work.id}
                className={`game-slide ${
                  selectedId === work.id ? "expanded" : ""
                }`}
                onClick={() => handleSlideClick(work.id, index)}>
                <div
                  className={`game-card relative rounded-2xl overflow-hidden cursor-pointer
                    ${mounted ? "opacity-100" : "opacity-0"}
                    ${selectedId === work.id ? "active" : ""}
                    ${activeIndex === index ? "current" : ""}`}
                  style={{
                    backgroundImage: `url(${work.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}>
                  <div className="game-card-content">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                      <p className="text-white/80 text-sm line-clamp-3 game-description">
                        {work.description}
                      </p>
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
