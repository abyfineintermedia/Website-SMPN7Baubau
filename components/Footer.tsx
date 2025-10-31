
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-bold text-lg mb-2">SMP Negeri 7 Baubau</h3>
            <p className="text-gray-400">Jl. Pahlawan No. 123<br/>Kota Baubau, Sulawesi Tenggara</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Tautan Cepat</h3>
            <ul className="space-y-1">
              <li><a href="#tentang" className="text-gray-400 hover:text-white transition">Profil Sekolah</a></li>
              <li><a href="#keunggulan" className="text-gray-400 hover:text-white transition">Keunggulan</a></li>
              <li><a href="#berita" className="text-gray-400 hover:text-white transition">Berita</a></li>
              <li><a href="#kontak" className="text-gray-400 hover:text-white transition">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Ikuti Kami</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 013.45 2.525c.636-.247 1.363-.416 2.427-.465C7.901 2.013 8.256 2 10.685 2h1.63zm0 1.442h-1.63c-2.393 0-2.717.01-3.663.056-1.01.046-1.583.208-2.028.388a3.473 3.473 0 00-1.258.833 3.473 3.473 0 00-.833 1.258c-.18.445-.342 1.018-.388 2.028-.046.946-.056 1.27-.056 3.663s.01 2.717.056 3.663c.046 1.01.208 1.583.388 2.028a3.473 3.473 0 00.833 1.258 3.473 3.473 0 001.258.833c.445.18 1.018.342 2.028.388.946.046 1.27.056 3.663.056s2.717-.01 3.663-.056c1.01-.046 1.583-.208 2.028-.388a3.473 3.473 0 001.258-.833 3.473 3.473 0 00.833-1.258c.18-.445.342-1.018.388-2.028.046-.946.056-1.27.056-3.663s-.01-2.717-.056-3.663c-.046-1.01-.208-1.583-.388-2.028a3.473 3.473 0 00-.833-1.258 3.473 3.473 0 00-1.258-.833c-.445-.18-1.018-.342-2.028-.388-.946-.046-1.27-.056-3.663-.056zM12 6.845a5.155 5.155 0 100 10.31 5.155 5.155 0 000-10.31zm0 8.885a3.73 3.73 0 110-7.46 3.73 3.73 0 010 7.46zm5.25-8.885a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} SMP Negeri 7 Baubau. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
