
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <img
              src="https://picsum.photos/800/600?random=classroom"
              alt="Suasana belajar di salah satu ruang kelas SMP N 17 Baubau"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="wow fadeInUp" data-wow-delay="0.4s">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Profil SMP N 17 Baubau</h2>
            <p className="text-gray-600 mb-6">
              SMP N 17 Baubau berkomitmen untuk menyediakan pendidikan berkualitas yang seimbang antara akademik, karakter, dan pengembangan minat bakat. Dengan dukungan tenaga pendidik profesional dan fasilitas yang memadai, kami siap mengantarkan siswa-siswi menjadi pribadi yang cerdas, kreatif, dan berakhlak mulia.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Visi</h3>
                <p className="text-gray-600">Terwujudnya sekolah yang unggul dalam prestasi, berkarakter Pancasila, dan berwawasan lingkungan.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Misi</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Meningkatkan kualitas pembelajaran yang aktif, inovatif, dan menyenangkan.</li>
                  <li>Mengembangkan potensi siswa di bidang akademik dan non-akademik.</li>
                  <li>Membentuk karakter siswa yang religius, nasionalis, dan mandiri.</li>
                  <li>Menciptakan lingkungan sekolah yang bersih, sehat, dan asri.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;