import React, { useState } from 'react';
import NewsModal from './NewsModal';

// Updated article data structure
interface Article {
  img: string;
  title: string;
  excerpt: string;
  date: string;
  fullContent: string; // New field for full article
}

const NewsCard: React.FC<{ article: Article; onReadMore: () => void }> = ({ article, onReadMore }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col">
        <div className="overflow-hidden">
            <img src={article.img} alt={article.title} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" />
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


const News: React.FC = () => {
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

    const articles: Article[] = [
        {
            img: 'https://picsum.photos/400/300?random=news1',
            title: 'Siswa SMPN 7 Baubau Raih Juara 1 Olimpiade Sains Tingkat Kota',
            excerpt: 'Prestasi membanggakan kembali diukir oleh siswa kami dalam ajang kompetisi sains bergengsi...',
            date: '15 Juli 2024',
            fullContent: 'Prestasi membanggakan kembali diukir oleh siswa kami dalam ajang kompetisi sains bergengsi. Tim Olimpiade Sains SMPN 7 Baubau berhasil meraih Juara 1 dalam kompetisi tingkat kota yang diadakan pada tanggal 14 Juli 2024. Kemenangan ini merupakan hasil dari kerja keras siswa dan bimbingan intensif dari para guru. Kepala sekolah, Bapak Drs. H. La Ode Pendidikan, M.Pd., menyatakan rasa bangganya dan berharap prestasi ini dapat memotivasi siswa lain untuk terus berprestasi baik di bidang akademik maupun non-akademik.'
        },
        {
            img: 'https://picsum.photos/400/300?random=news2',
            title: 'Peringatan Hari Kemerdekaan RI ke-79 di Sekolah Berlangsung Meriah',
            excerpt: 'Seluruh warga sekolah antusias mengikuti rangkaian acara peringatan kemerdekaan...',
            date: '17 Agustus 2024',
            fullContent: 'Dalam rangka memperingati Hari Kemerdekaan Republik Indonesia yang ke-79, SMPN 7 Baubau mengadakan serangkaian acara yang berlangsung meriah dan penuh semangat. Acara dimulai dengan upacara bendera yang khidmat, diikuti oleh berbagai perlombaan tradisional seperti panjat pinang, balap karung, dan tarik tambang yang diikuti oleh siswa, guru, dan staf. Kegiatan ini bertujuan untuk menumbuhkan rasa nasionalisme dan mempererat tali persaudaraan di antara seluruh warga sekolah.'
        },
        {
            img: 'https://picsum.photos/400/300?random=news3',
            title: 'Program Adiwiyata: Menuju Sekolah Hijau dan Berkelanjutan',
            excerpt: 'SMPN 7 Baubau terus berupaya menciptakan lingkungan sekolah yang asri dan nyaman...',
            date: '05 September 2024',
            fullContent: 'Sebagai bagian dari komitmen untuk menjadi sekolah yang peduli lingkungan, SMPN 7 Baubau meluncurkan program Adiwiyata. Program ini mencakup berbagai kegiatan seperti penanaman pohon, pembuatan kompos, pengelolaan bank sampah, dan kampanye hemat energi. Diharapkan melalui program ini, kesadaran seluruh warga sekolah terhadap pentingnya menjaga kelestarian lingkungan dapat meningkat, sekaligus menciptakan lingkungan belajar yang lebih sehat, bersih, dan nyaman.'
        },
    ];

    const handleOpenModal = (article: Article) => {
        setSelectedArticle(article);
    };

    const handleCloseModal = () => {
        setSelectedArticle(null);
    };


    return (
        <>
            <section id="berita" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">Berita & Artikel Terbaru</h2>
                        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Ikuti informasi dan kegiatan terbaru dari sekolah kami.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <NewsCard key={index} article={article} onReadMore={() => handleOpenModal(article)} />
                        ))}
                    </div>
                </div>
            </section>
            {selectedArticle && <NewsModal article={selectedArticle} onClose={handleCloseModal} />}
        </>
    );
};

export default News;