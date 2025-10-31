import React, { useState, useEffect, useRef } from 'react';

// A reusable component for the count-up animation
const AnimatedCounter: React.FC<{ endValue: number; duration?: number }> = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const frameRate = 1000 / 60; // 60fps
  const totalFrames = Math.round(duration / frameRate);

  useEffect(() => {
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Use an easing function for a smoother effect
      const easedProgress = 1 - Math.pow(1 - progress, 3); 
      const newCount = Math.round(endValue * easedProgress);
      
      setCount(newCount);

      if (frame === totalFrames) {
        clearInterval(counter);
        // Ensure final value is exact
        setCount(endValue);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [endValue, duration, totalFrames]);

  return <>{count}</>;
};

const AchievementCard: React.FC<{ icon: React.ReactNode; title: string; year: string; description: string }> = ({ icon, title, year, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const yearNumber = parseInt(year);
  const isNumericYear = !isNaN(yearNumber);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // Start animation when 20% of the card is visible
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
    <div ref={ref} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 flex items-start space-x-4 transform hover:-translate-y-2 transition-transform duration-300">
      <div className="flex-shrink-0 bg-yellow-100 text-yellow-600 p-3 rounded-full">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-500 min-h-[20px]">
          {isVisible && isNumericYear ? (
            <AnimatedCounter endValue={yearNumber} />
          ) : (
            year
          )}
        </p>
        <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};


const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: 'Juara 1 Lomba Cerdas Cermat Nasional',
      year: '2023',
      description: 'Tim Cerdas Cermat kami berhasil meraih predikat terbaik di tingkat nasional, mengalahkan puluhan sekolah lain.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.539 1.118l-3.975-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.783.57-1.838-.196-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
      title: 'Sekolah Adiwiyata Mandiri',
      year: '2022',
      description: 'Mendapatkan penghargaan tertinggi sebagai sekolah peduli dan berbudaya lingkungan dari Kementerian Lingkungan Hidup.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.747h18" /></svg>,
      title: 'Alumni Diterima di SMA Unggulan',
      year: 'Setiap Tahun',
      description: 'Lulusan kami secara konsisten diterima di berbagai SMA/SMK favorit dan unggulan di tingkat provinsi maupun nasional.'
    },
  ];

  return (
    <section id="prestasi" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Prestasi Sekolah</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Komitmen kami terhadap keunggulan tercermin dalam berbagai pencapaian gemilang.</p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;