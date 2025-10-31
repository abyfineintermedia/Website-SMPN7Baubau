import React, { useState, useEffect, useRef } from 'react';
import NewsModal from './NewsModal';

// Updated article data structure
interface Article {
  img: string;
  title: string;
  excerpt: string;
  date: string;
  fullContent: string;
  category: 'Prestasi' | 'Kegiatan Sekolah' | 'Akademik';
}

const NewsCard: React.FC<{ article: Article; onReadMore: () => void }> = ({ article, onReadMore }) => {
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
            { threshold: 0.1 }
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
        <div ref={ref} className={`bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="overflow-hidden relative">
                <img src={article.img} alt={article.title} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">{article.category}</span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-lg font-bold mb-2 text-gray-800 flex-grow">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                <button onClick={onReadMore} className="font-semibold text-blue-600 hover:text-blue-700 transition-colors self-start">
                    Baca Selengkapnya &rarr;
                </button>
            </div>
        </div>
    );
};


const News: React.FC = () => {
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
    const [activeCategory, setActiveCategory] = useState('Semua');
    const ARTICLES_TO_LOAD = 3;
    const [visibleCount, setVisibleCount] = useState(ARTICLES_TO_LOAD);

    const categories = ['Semua', 'Prestasi', 'Kegiatan Sekolah', 'Akademik'];

    const articles: Article[] = [
        {
            img: 'https://picsum.photos/400/300?random=news1',
            title: 'Siswa SMPN 7 Baubau Raih Juara 1 Olimpiade Sains Tingkat Kota',
            excerpt: 'Prestasi membanggakan kembali diukir oleh siswa kami dalam ajang kompetisi sains bergengsi...',
            date: '15 Juli 2024',
            fullContent: 'Prestasi membanggakan kembali diukir oleh siswa kami dalam ajang kompetisi sains bergengsi. Tim Olimpiade Sains SMPN 7 Baubau berhasil meraih Juara 1 dalam kompetisi tingkat kota yang diadakan pada tanggal 14 Juli 2024. Kemenangan ini merupakan hasil dari kerja keras siswa dan bimbingan intensif dari para guru. Kepala sekolah, Bapak Drs. H. La Ode Pendidikan, M.Pd., menyatakan rasa bangganya dan berharap prestasi ini dapat memotivasi siswa lain untuk terus berprestasi baik di bidang akademik maupun non-akademik.',
            category: 'Prestasi'
        },
        {
            img: 'https://picsum.photos/400/300?random=news2',
            title: 'Peringatan Hari Kemerdekaan RI ke-79 di Sekolah Berlangsung Meriah',
            excerpt: 'Seluruh warga sekolah antusias mengikuti rangkaian acara peringatan kemerdekaan...',
            date: '17 Agustus 2024',
            fullContent: 'Dalam rangka memperingati Hari Kemerdekaan Republik Indonesia yang ke-79, SMPN 7 Baubau mengadakan serangkaian acara yang berlangsung meriah dan penuh semangat. Acara dimulai dengan upacara bendera yang khidmat, diikuti oleh berbagai perlombaan tradisional seperti panjat pinang, balap karung, dan tarik tambang yang diikuti oleh siswa, guru, dan staf. Kegiatan ini bertujuan untuk menumbuhkan rasa nasionalisme dan mempererat tali persaudaraan di antara seluruh warga sekolah.',
            category: 'Kegiatan Sekolah'
        },
        {
            img: 'https://picsum.photos/400/300?random=news3',
            title: 'Program Adiwiyata: Menuju Sekolah Hijau dan Berkelanjutan',
            excerpt: 'SMPN 7 Baubau terus berupaya menciptakan lingkungan sekolah yang asri dan nyaman...',
            date: '05 September 2024',
            fullContent: 'Sebagai bagian dari komitmen untuk menjadi sekolah yang peduli lingkungan, SMPN 7 Baubau meluncurkan program Adiwiyata. Program ini mencakup berbagai kegiatan seperti penanaman pohon, pembuatan kompos, pengelolaan bank sampah, dan kampanye hemat energi. Diharapkan melalui program ini, kesadaran seluruh warga sekolah terhadap pentingnya menjaga kelestarian lingkungan dapat meningkat, sekaligus menciptakan lingkungan belajar yang lebih sehat, bersih, dan nyaman.',
            category: 'Kegiatan Sekolah'
        },
        {
            img: 'https://picsum.photos/400/300?random=news4',
            title: 'Gelar Karya P5: Siswa Pamerkan Proyek Inovatif',
            excerpt: 'Siswa-siswi menampilkan kreativitas mereka dalam acara Gelar Karya Proyek Penguatan Profil Pelajar Pancasila...',
            date: '20 Oktober 2024',
            fullContent: 'Acara Gelar Karya Proyek Penguatan Profil Pelajar Pancasila (P5) sukses diselenggarakan di halaman SMPN 7 Baubau. Dalam acara ini, siswa-siswi dari kelas 7 hingga 9 memamerkan berbagai proyek inovatif hasil pembelajaran mereka selama satu semester. Proyek-proyek tersebut mencakup tema-tema seperti kearifan lokal, gaya hidup berkelanjutan, dan rekayasa teknologi. Para orang tua dan tamu undangan yang hadir memberikan apresiasi tinggi terhadap kreativitas dan kemampuan presentasi para siswa.',
            category: 'Akademik'
        },
        {
            img: 'https://picsum.photos/400/300?random=news5',
            title: 'Pelatihan Literasi Digital untuk Guru dan Siswa',
            excerpt: 'Bekerja sama dengan dinas pendidikan, sekolah mengadakan pelatihan untuk meningkatkan kecakapan digital...',
            date: '11 November 2024',
            fullContent: 'Dalam menghadapi tantangan era digital, SMPN 7 Baubau mengadakan pelatihan literasi digital yang diikuti oleh seluruh guru dan perwakilan siswa. Pelatihan ini bertujuan untuk meningkatkan pemahaman dan keterampilan dalam memanfaatkan teknologi secara positif dan aman. Materi yang disampaikan meliputi etika berinternet, cara mengidentifikasi berita hoaks, dan pemanfaatan platform pembelajaran online. Diharapkan kegiatan ini dapat menciptakan ekosistem digital yang sehat di lingkungan sekolah.',
            category: 'Akademik'
        },
        {
            img: 'https://picsum.photos/400/300?random=news6',
            title: 'Tim Futsal SMPN 7 Baubau Juarai Turnamen Antar-Sekolah',
            excerpt: 'Tim futsal kebanggaan sekolah berhasil membawa pulang trofi juara setelah mengalahkan lawan-lawannya...',
            date: '02 Desember 2024',
            fullContent: 'Kabar gembira datang dari lapangan hijau. Tim Futsal SMPN 7 Baubau berhasil menjuarai turnamen futsal antar-sekolah se-Kota Baubau. Dalam pertandingan final yang sengit, tim kami berhasil mengalahkan SMPN 1 Baubau dengan skor tipis 3-2. Kemenangan ini adalah buah dari latihan rutin, disiplin, dan kerja sama tim yang solid. Sang kapten tim, Ahmad, dinobatkan sebagai pemain terbaik turnamen.',
            category: 'Prestasi'
        },
    ];

    const handleOpenModal = (article: Article) => {
        setSelectedArticle(article);
    };

    const handleCloseModal = () => {
        setSelectedArticle(null);
    };

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setVisibleCount(ARTICLES_TO_LOAD); // Reset count when category changes
    };

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + ARTICLES_TO_LOAD);
    };

    const filteredArticles = articles.filter(article =>
        activeCategory === 'Semua' ? true : article.category === activeCategory
    );


    return (
        <>
            <section id="berita" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">Berita & Artikel Terbaru</h2>
                        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Ikuti informasi dan kegiatan terbaru dari sekolah kami.</p>
                    </div>

                    <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-10">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                                    activeCategory === category 
                                        ? 'bg-blue-600 text-white shadow' 
                                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {filteredArticles.slice(0, visibleCount).map((article, index) => (
                            <NewsCard key={index} article={article} onReadMore={() => handleOpenModal(article)} />
                        ))}
                    </div>

                    {filteredArticles.length === 0 && (
                      <div className="text-center mt-12 text-gray-500">
                        <p>Tidak ada berita dalam kategori ini.</p>
                      </div>
                    )}
                    
                    {visibleCount < filteredArticles.length && (
                        <div className="text-center mt-12">
                            <button
                                onClick={handleLoadMore}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                aria-label="Muat lebih banyak berita"
                            >
                                Muat Lebih Banyak
                            </button>
                        </div>
                    )}
                </div>
            </section>
            {selectedArticle && <NewsModal article={selectedArticle} onClose={handleCloseModal} />}
        </>
    );
};

export default News;