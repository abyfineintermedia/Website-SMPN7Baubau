import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    // This will make the background move at half the speed of the scroll
    setOffsetY(window.scrollY * 0.5);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="beranda" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://picsum.photos/1920/1080?random=school&blur=1')",
          transform: `translateY(${offsetY}px)`,
        }}
      ></div>
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
          Selamat Datang di SMP N 17 Baubau
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
          Mencetak Generasi Unggul, Berkarakter, dan Berprestasi
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#kontak"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Daftar Sekarang
          </a>
          <a
            href="#tentang"
            className="bg-white hover:bg-gray-200 text-blue-600 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;