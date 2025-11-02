
import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES, SlideData } from './constants';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToNextSlide = useCallback(() => {
    setCurrentSlideIndex((prevIndex) => Math.min(prevIndex + 1, SLIDES.length - 1));
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goToNextSlide();
      } else if (event.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNextSlide, goToPrevSlide]);

  const currentSlide: SlideData = SLIDES[currentSlideIndex];
  const progressPercentage = ((currentSlideIndex + 1) / SLIDES.length) * 100;

  return (
    <div className="flex flex-col h-screen text-slate-200 font-sans antialiased overflow-hidden">
      {/* Main Slide Content */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-8 md:p-12">
        <div key={currentSlideIndex} className="w-full max-w-5xl animate-fade-in">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-10 border border-slate-700">
            <h1 className="text-3xl md:text-5xl font-bold text-cyan-400 tracking-tight leading-tight">
              {currentSlide.title}
            </h1>
            {currentSlide.subtitle && (
              <h2 className="mt-2 text-xl md:text-2xl text-slate-400 font-light">
                {currentSlide.subtitle}
              </h2>
            )}
            <div className="mt-8 text-slate-300">
              {currentSlide.content}
            </div>
            {currentSlide.speech && (
                <div className="mt-6 italic text-slate-500 border-l-4 border-slate-600 pl-4 py-2">
                    <span className="font-bold">Fala:</span> “{currentSlide.speech}”
                </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="w-full p-4 bg-slate-900/80 backdrop-blur-sm border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            <button
              onClick={goToPrevSlide}
              disabled={currentSlideIndex === 0}
              className="px-4 py-2 rounded-lg text-white bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Anterior
            </button>
            <div className="text-sm font-medium text-slate-400">
              {currentSlideIndex + 1} / {SLIDES.length}
            </div>
            <button
              onClick={goToNextSlide}
              disabled={currentSlideIndex === SLIDES.length - 1}
              className="px-4 py-2 rounded-lg text-white bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Próximo
            </button>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-1.5 mt-3">
            <div
              className="bg-cyan-500 h-1.5 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
