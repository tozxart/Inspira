import { useRef, useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import { Instagram, Twitter } from "lucide-react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import WorkSlider from "./components/WorkSlider";
import ScrollToTop from "./components/ScrollToTop";
import { X, Menu } from "lucide-react";
import { Toaster } from "./components/ui/toaster";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu after clicking
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <ModalProvider>
      <div className="min-h-screen bg-neutral-50 flex flex-col">
        {/* Header */}
        <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-3">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-primary-500/20 rounded-full blur animate-pulse"></div>
                  <img
                    src="https://i.postimg.cc/Mp9fkFtC/logo-version-1-8.png"
                    alt="Inspira Logo"
                    className="w-full h-full object-contain relative scale-150"
                  />
                </div>
                <h1 className="text-2xl font-bold text-gradient">Inspira</h1>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden md:block">
                <ul className="flex space-x-8">
                  {[
                    { name: "Gallery", path: "/" },
                    { name: "About", path: "/about" },
                    { name: "Contact", path: "/contact" },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="text-gray-600 hover:text-primary-600 transition-colors relative group">
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Mobile Navigation */}
            <div
              className={`md:hidden ${isMenuOpen ? "block" : "hidden"} pt-4`}>
              <ul className="flex flex-col space-y-4">
                {[
                  { name: "Gallery", path: "/" },
                  { name: "About", path: "/about" },
                  { name: "Contact", path: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-gray-600 hover:text-primary-600 transition-colors py-2">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Hero Section */}
                  <section className="pt-32 pb-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5"></div>
                    <div className="container mx-auto px-4 relative">
                      <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-7xl font-bold mb-6 text-gradient animate-float">
                          We see what others don't
                        </h2>
                        <p className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto leading-relaxed mb-10">
                          and turn ideas into unique designs
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                          <button
                            onClick={scrollToGallery}
                            className="w-full sm:w-auto px-8 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors">
                            View Work
                          </button>
                          <Link
                            to="/contact"
                            className="w-full sm:w-auto px-8 py-3 border border-primary-600 text-primary-600 rounded-full hover:bg-primary-50 transition-colors text-center">
                            Get in Touch
                          </Link>
                        </div>
                        <div className="flex items-center justify-center space-x-6">
                          {[
                            {
                              icon: Instagram,
                              link: "https://www.instagram.com/insp_ira27/",
                            },
                            { icon: Twitter, link: "https://x.com/inspira128" },
                          ].map((social, index) => (
                            <a
                              key={index}
                              href={social.link}
                              className="text-gray-600 hover:text-primary-600 transition-colors"
                              target="_blank"
                              rel="noopener noreferrer">
                              <social.icon size={24} />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                  <WorkSlider />
                  <div ref={galleryRef}>
                    <Gallery />
                  </div>
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-neutral-200">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-gradient">
                  About Inspira
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Pushing the boundaries of digital art and design, creating
                  unique visual experiences that leave lasting impressions.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-gradient">
                  Get in Touch
                </h3>
                <div className="space-y-2 text-sm md:text-base text-gray-600">
                  <p>inspiradesign72@gmail.com</p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://www.instagram.com/insp_ira27/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 transition-colors">
                      Instagram
                    </a>
                    <a
                      href="https://x.com/inspira128"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 transition-colors">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200/20 text-center text-gray-500">
              <p className="flex flex-wrap items-center justify-center gap-2 text-sm">
                <span>&copy; {new Date().getFullYear()}</span>
                <a
                  href="https://github.com/tozxart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                  ToZx
                </a>
                <span className="text-xs md:text-sm">
                  | Crafted with 💖 & ☕
                </span>
              </p>
            </div>
          </div>
        </footer>
        <ScrollToTop />
        <Toaster />
      </div>
    </ModalProvider>
  );
}

export default App;
