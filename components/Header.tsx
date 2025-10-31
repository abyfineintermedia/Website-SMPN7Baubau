import React, { useState, useEffect, useRef } from 'react';

const navLinks = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#tentang', label: 'Profil' },
  { href: '#keunggulan', label: 'Keunggulan' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#prestasi', label: 'Prestasi' },
  { href: '#berita', label: 'Berita' },
  { href: '#kontak', label: 'Kontak' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#beranda');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );

    const { current: currentObserver } = observer;
    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) {
        currentObserver.observe(element);
      }
    });

    return () => currentObserver.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => handleNavClick(e, '#beranda')} className={`font-bold text-xl transition-colors duration-300 ${isScrolled || isMenuOpen ? 'text-blue-600' : 'text-white'}`}>
              SMP N 17 Baubau
            </a>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`font-medium transition-colors duration-300 relative group py-2 ${
                        isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-gray-200'
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 ${
                          isScrolled ? 'bg-blue-600' : 'bg-white'
                        } transform transition-transform duration-300 ease-out ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        } group-hover:scale-x-100`}
                      ></span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    activeSection === link.href ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;