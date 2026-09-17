import React, { useState, useEffect } from 'react';
import { Sun, Moon, GraduationCap, LogIn, Phone, Menu, X, MapPin } from 'lucide-react';

export default function Header({ onOpenEnroll, onOpenLogin, onOpenPractice }) {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-[#0a0b14]/85 border-b border-slate-200 dark:border-slate-800/80 shadow-md glass-header' 
        : 'bg-white/60 dark:bg-[#0a0b14]/60 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo - Progga */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center">
            <img 
              src="/assets/progga_logo.jpg" 
              alt="Progga Logo" 
              className="h-10 w-10 rounded-full object-cover border-2 border-brand-500 shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-extrabold text-xl tracking-tight">
              <span className="text-slate-900 dark:text-white">PROGGA</span>
              <span className="text-brand-500 font-bangla">
                (প্রজ্ঞা)
              </span>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-bangla -mt-0.5">
              The Joy of Learning
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-300">
          <a href="#hero" className="hover:text-brand-500 transition-colors">হোম</a>
          <a href="#courses" className="hover:text-brand-500 transition-colors flex items-center gap-1">
            <GraduationCap className="w-4 h-4 text-brand-500" />
            <span>কোর্সসমূহ</span>
          </a>
          <a href="#hsc26-admission" className="hover:text-brand-500 transition-colors">HSC 26 Admission</a>
          <a href="#mentors" className="hover:text-brand-500 transition-colors">মেন্টরবৃন্দ</a>
          <a href="#cumilla-branch" className="hover:text-brand-500 transition-colors flex items-center gap-1 text-emerald-500 font-semibold">
            <MapPin className="w-4 h-4" />
            <span>কুমিল্লা শাখা</span>
          </a>
          <button 
            onClick={onOpenPractice}
            className="hover:text-brand-500 transition-colors text-amber-500 font-medium"
          >
            প্র্যাকটিস শিট
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Direct Phone Call Button */}
          <a 
            href="tel:+8801739381908" 
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-brand-500 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-500 animate-pulse" />
            <span>+8801739381908</span>
          </a>

          {/* Theme Switcher Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Login Button */}
          <button
            onClick={onOpenLogin}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <LogIn className="w-4 h-4 text-brand-500" />
            <span>লগইন</span>
          </button>

          {/* Primary CTA Enroll */}
          <button
            onClick={() => onOpenEnroll('HSC26 Admission Course')}
            className="px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-brand-500 shadow-md shadow-brand-500/20 hover:from-brand-500 hover:to-brand-400 active:scale-95 transition-all"
          >
            ভর্তি চলছে
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenu && (
        <div className="md:hidden bg-white dark:bg-[#0f111e] border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-3">
          <a 
            href="#hero" 
            onClick={() => setMobileMenu(false)} 
            className="block text-sm font-medium text-slate-700 dark:text-slate-200 py-1.5"
          >
            হোম
          </a>
          <a 
            href="#courses" 
            onClick={() => setMobileMenu(false)} 
            className="block text-sm font-medium text-slate-700 dark:text-slate-200 py-1.5"
          >
            কোর্সসমূহ
          </a>
          <a 
            href="#hsc26-admission" 
            onClick={() => setMobileMenu(false)} 
            className="block text-sm font-medium text-slate-700 dark:text-slate-200 py-1.5"
          >
            HSC 26 Admission Course
          </a>
          <a 
            href="#mentors" 
            onClick={() => setMobileMenu(false)} 
            className="block text-sm font-medium text-slate-700 dark:text-slate-200 py-1.5"
          >
            আমাদের মেন্টরবৃন্দ
          </a>
          <a 
            href="#cumilla-branch" 
            onClick={() => setMobileMenu(false)} 
            className="block text-sm font-semibold text-emerald-500 py-1.5"
          >
            কুমিল্লা অফলাইন শাখা
          </a>
          <button 
            onClick={() => { setMobileMenu(false); onOpenPractice(); }} 
            className="block text-left w-full text-sm font-medium text-amber-500 py-1.5"
          >
            প্র্যাকটিস শিট ডাউনলোড
          </button>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <a href="tel:+8801739381908" className="text-xs font-bold text-brand-500 flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> +8801739381908
            </a>
            <button 
              onClick={() => { setMobileMenu(false); onOpenLogin(); }}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-700"
            >
              লগইন
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
