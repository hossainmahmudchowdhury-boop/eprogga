import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, BookOpen, ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'HSC 26 Academic & Admission Course',
    subtitle: 'BUET & IUT সেরা মেন্টরদের সাথে ইনটেন্সিভ এডমিশন ও বোর্ড প্রস্তুতি',
    badge: 'EV + BV (English & Bangla Version)',
    image: '/assets/banner_hsc26.jpg',
    target: '#hsc26-admission',
    tag: 'HSC 26 SPECIAL',
    color: 'from-blue-600 to-indigo-700'
  },
  {
    id: 2,
    title: 'HSC 27 Academic & Admission Course',
    subtitle: 'কনসেপ্ট ক্লিয়ারেন্স, প্র্যাকটিস শিট ও টেস্ট পেপার সলভিং সেশন',
    badge: 'HSC 27 Masterclass',
    image: '/assets/banner_hsc27.jpg',
    target: '#courses',
    tag: 'HSC 27 BATCH',
    color: 'from-amber-600 to-orange-700'
  },
  {
    id: 3,
    title: 'HSC 28 Academic & Admission Course',
    subtitle: 'এসএসসি পরবর্তী প্রথম বর্ষের সেরা একাডেমিক ও ভর্তি প্রস্তুতি',
    badge: 'Foundation & Advance',
    image: '/assets/banner_hsc28.jpg',
    target: '#courses',
    tag: 'HSC 28 BATCH',
    color: 'from-emerald-600 to-teal-700'
  },
  {
    id: 4,
    title: 'PROGGA OFFLINE BATCH - CUMILLA',
    subtitle: 'রাণীরদিঘির পাড়, কুমিল্লা | SSC + HSC + ADMISSION',
    badge: 'বাংলা ভার্সন ও ইংলিশ ভার্সন',
    image: '/assets/progga_cumilla_banner.jpg',
    target: '#cumilla-branch',
    tag: 'OFFLINE BRANCH',
    color: 'from-purple-600 to-indigo-800'
  }
];

export default function HeroCarousel({ onOpenEnroll }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="hero" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
        {/* Carousel Backdrop Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 via-indigo-600/15 to-purple-600/20 pointer-events-none" />

        {/* Carousel Content Container */}
        <div className="relative min-h-[380px] sm:min-h-[420px] md:min-h-[460px] flex items-center">
          {slides.map((slide, idx) => {
            const isActive = idx === current;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 lg:p-12 gap-8 ${
                  isActive ? 'opacity-100 scale-100 z-10 pointer-events-auto' : 'opacity-0 scale-95 z-0 pointer-events-none'
                }`}
              >
                {/* Left Text Block */}
                <div className="flex-1 max-w-2xl text-left space-y-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-brand-500 text-white shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {slide.tag}
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {slide.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight font-bangla">
                    {slide.title}
                  </h2>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-bangla">
                    {slide.subtitle}
                  </p>

                  <div className="pt-2 flex items-center gap-3 flex-wrap">
                    <button
                      onClick={() => onOpenEnroll(slide.title)}
                      className="px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-brand-500 to-blue-600 hover:from-brand-600 hover:to-blue-700 shadow-lg shadow-brand-500/30 flex items-center gap-2 transition-all active:scale-95"
                    >
                      <span>এখনই ভর্তি হও</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href={slide.target}
                      className="px-5 py-3 rounded-full text-sm font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center gap-1.5"
                    >
                      <BookOpen className="w-4 h-4 text-brand-400" />
                      <span>বিস্তারিত দেখুন</span>
                    </a>
                  </div>
                </div>

                {/* Right Image Banner Preview */}
                <div className="relative w-full md:w-1/2 flex items-center justify-center">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700/60 max-h-[260px] sm:max-h-[300px] transform hover:scale-[1.02] transition-transform duration-300">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-900/70 text-slate-200 hover:bg-brand-600 hover:text-white border border-slate-700 backdrop-blur-md transition-all shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-900/70 text-slate-200 hover:bg-brand-600 hover:text-white border border-slate-700 backdrop-blur-md transition-all shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Carousel Slide Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === current ? 'w-8 bg-brand-500' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
