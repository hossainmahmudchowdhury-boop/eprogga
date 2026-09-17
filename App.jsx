import React, { useState } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import HeroGreeting from './components/HeroGreeting';
import CourseCategories from './components/CourseCategories';
import FeaturedCourseDetail from './components/FeaturedCourseDetail';
import MentorsSection from './components/MentorsSection';
import OfflineBranchCumilla from './components/OfflineBranchCumilla';
import PracticeSheetModal from './components/PracticeSheetModal';
import EnrollmentModal from './components/EnrollmentModal';
import Footer from './components/Footer';

export default function App() {
  const [enrollModal, setEnrollModal] = useState({ open: false, title: '' });
  const [practiceModal, setPracticeModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const handleOpenEnroll = (title = 'HSC26 BASIC to ENGINEERING ADMISSION COURSE') => {
    setEnrollModal({ open: true, title });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] dark:bg-[#0a0b14] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      {/* Sticky Glass Navbar */}
      <Header
        onOpenEnroll={handleOpenEnroll}
        onOpenLogin={() => setLoginModal(true)}
        onOpenPractice={() => setPracticeModal(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 space-y-4">
        {/* 3D Featured Banner Carousel */}
        <HeroCarousel onOpenEnroll={handleOpenEnroll} />

        {/* Hello Bangladesh Hero Greeting */}
        <HeroGreeting onOpenEnroll={handleOpenEnroll} />

        {/* Explore Categories */}
        <CourseCategories onOpenEnroll={handleOpenEnroll} />

        {/* HSC26 Basic to Engineering Special Course Spotlight */}
        <FeaturedCourseDetail
          onOpenEnroll={handleOpenEnroll}
          onOpenPractice={() => setPracticeModal(true)}
        />

        {/* Top Instructors & Mentors Showcase */}
        <MentorsSection />

        {/* Offline Branch Cumilla Section with Leaflet Map & Bing Link */}
        <OfflineBranchCumilla onOpenEnroll={handleOpenEnroll} />
      </main>

      {/* ACS Style Footer */}
      <Footer />

      {/* Modals */}
      <PracticeSheetModal
        isOpen={practiceModal}
        onClose={() => setPracticeModal(false)}
      />

      <EnrollmentModal
        isOpen={enrollModal.open}
        courseTitle={enrollModal.title}
        onClose={() => setEnrollModal({ open: false, title: '' })}
      />

      {/* Simple Login Modal Mock */}
      {loginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4 font-bangla text-center">
            <button
              onClick={() => setLoginModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              শিক্ষার্থী লগইন
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              আপনার নিবন্ধিত মোবাইল নম্বর বা স্টুডেন্ট আইডি দিয়ে লগইন করুন
            </p>
            <input
              type="tel"
              placeholder="017XXXXXXXX"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs"
            />
            <button
              onClick={() => { alert('লগইন ওটিপি প্রেরিত হয়েছে!'); setLoginModal(false); }}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-brand-600 hover:bg-brand-500"
            >
              OTP পাঠান
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
