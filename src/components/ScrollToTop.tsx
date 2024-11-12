import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useModal } from "../contexts/ModalContext";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { isModalOpen } = useModal();

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isModalOpen) return null;

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 bg-primary-600 hover:bg-primary-700 
            text-white rounded-full shadow-lg cursor-pointer transition-all duration-300 
            ease-in-out hover:scale-110 hover:shadow-xl z-40 group
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }
          `}
          aria-label="Scroll to top">
          <ArrowUp
            size={24}
            className="transform group-hover:-translate-y-1 transition-transform duration-300"
          />
        </button>
      )}
    </>
  );
}
