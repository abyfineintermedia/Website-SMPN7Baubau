import React, { useEffect } from 'react';

interface Article {
  img: string;
  title: string;
  date: string;
  fullContent: string;
}

interface NewsModalProps {
  article: Article;
  onClose: () => void;
}

const NewsModal: React.FC<NewsModalProps> = ({ article, onClose }) => {
  // Effect to handle Escape key press and disable body scroll
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="news-modal-title"
    >
      <div
        className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto flex flex-col animate-slide-up"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <img src={article.img} alt={article.title} className="w-full h-64 object-cover rounded-t-lg" />
        <div className="p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <p className="text-sm text-gray-500 mb-2">{article.date}</p>
          <h2 id="news-modal-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{article.title}</h2>
          <div className="prose max-w-none text-gray-600">
            {article.fullContent.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-slide-up {
            animation: slide-up 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default NewsModal;