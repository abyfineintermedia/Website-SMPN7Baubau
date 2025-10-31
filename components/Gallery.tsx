import React, { useState, useEffect, useRef } from 'react';

const GalleryImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Animate when 10% of the image is visible
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-lg shadow-lg group transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
    </div>
  );
};


const Gallery: React.FC = () => {
  const images = [
    { src: 'https://picsum.photos/600/400?random=1', alt: 'Kegiatan Olahraga' },
    { src: 'https://picsum.photos/600/400?random=2', alt: 'Kegiatan Belajar' },
    { src: 'https://picsum.photos/600/400?random=3', alt: 'Upacara Bendera' },
    { src: 'https://picsum.photos/600/400?random=4', alt: 'Pramuka' },
    { src: 'https://picsum.photos/600/400?random=5', alt: 'Lomba Cerdas Cermat' },
    { src: 'https://picsum.photos/600/400?random=6', alt: 'Studi Tur' },
  ];

  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Galeri Kegiatan Sekolah</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Momen-momen berharga dari berbagai aktivitas siswa dan sekolah.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <GalleryImage key={index} {...image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;