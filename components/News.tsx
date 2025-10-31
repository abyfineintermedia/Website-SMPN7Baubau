
import React from 'react';

const NewsCard: React.FC<{ img: string; title: string; excerpt: string; date: string }> = ({ img, title, excerpt, date }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
        <div className="overflow-hidden">
            <img src={img} alt={title} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">{date}</p>
            <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
            <a href="#" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Baca Selengkapnya &rarr;
            </a>
        </div>
    </div>
);


const News: React.FC = () => {
    const articles = [
        {
            img: 'https://picsum.photos/400/300?random=news1',
            title: 'Siswa SMPN 7 Baubau Raih Juara 1 Olimpiade Sains Tingkat Kota',
            excerpt: 'Prestasi membanggakan kembali diukir oleh siswa kami dalam ajang kompetisi sains bergengsi...',
            date: '15 Juli 2024'
        },
        {
            img: 'https://picsum.photos/400/300?random=news2',
            title: 'Peringatan Hari Kemerdekaan RI ke-79 di Sekolah Berlangsung Meriah',
            excerpt: 'Seluruh warga sekolah antusias mengikuti rangkaian acara peringatan kemerdekaan...',
            date: '17 Agustus 2024'
        },
        {
            img: 'https://picsum.photos/400/300?random=news3',
            title: 'Program Adiwiyata: Menuju Sekolah Hijau dan Berkelanjutan',
            excerpt: 'SMPN 7 Baubau terus berupaya menciptakan lingkungan sekolah yang asri dan nyaman...',
            date: '05 September 2024'
        },
    ];

    return (
        <section id="berita" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Berita & Artikel Terbaru</h2>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Ikuti informasi dan kegiatan terbaru dari sekolah kami.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <NewsCard key={index} {...article} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
