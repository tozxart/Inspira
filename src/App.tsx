import { useRef } from "react";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import { Instagram, Linkedin, Dribbble } from "lucide-react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import WorkSlider from "./components/WorkSlider";

function App() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
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
              <nav>
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
                        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-float">
                          We see what others don't
                        </h2>
                        <p className="text-xl text-neutral-700 max-w-2xl mx-auto leading-relaxed mb-10">
                          and turn ideas into unique designs
                        </p>
                        <div className="flex justify-center gap-4 mb-12">
                          <button
                            onClick={scrollToGallery}
                            className="px-8 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors">
                            View Work
                          </button>
                          <Link
                            to="/contact"
                            className="px-8 py-3 border border-primary-600 text-primary-600 rounded-full hover:bg-primary-50 transition-colors">
                            Get in Touch
                          </Link>
                        </div>
                        <div className="flex items-center justify-center space-x-6">
                          {[
                            { icon: Instagram, link: "#" },
                            { icon: Linkedin, link: "#" },
                            { icon: Dribbble, link: "#" },
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
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gradient">
                  About Inspira
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Pushing the boundaries of digital art and design, creating
                  unique visual experiences that leave lasting impressions.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gradient">
                  Get in Touch
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>hello@inspira.design</p>
                  <p>(555) 123-4567</p>
                  <p>Design Studio, Creative Valley</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gradient">Connect</h3>
                <div className="flex space-x-4">
                  {[
                    { Icon: Instagram, label: "Instagram" },
                    { Icon: Linkedin, label: "LinkedIn" },
                    { Icon: Dribbble, label: "Dribbble" },
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 hover:border-primary-600 hover:text-primary-600 transition-colors"
                      aria-label={label}>
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200/20 text-center text-gray-500">
              <p>
                &copy; {new Date().getFullYear()} ToZx. Crafted with passion.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
