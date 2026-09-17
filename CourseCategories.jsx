import React, { useState } from 'react';
import { Backpack, ArrowRight, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

const categories = [
  {
    id: 'hsc26',
    title: 'HSC 26 ADMISSION',
    subtitle: 'Basic to Engineering + Varsity Ka',
    tag: 'MOST POPULAR',
    bg: 'from-sky-500 via-blue-600 to-indigo-700',
    count: '70+ Classes',
    link: '#hsc26-admission',
    icon: '🚀'
  },
  {
    id: 'ssc',
    title: 'SSC ACADEMIC',
    subtitle: 'Bangla & English Version Foundation',
    tag: 'CLASS 9 & 10',
    bg: 'from-blue-600 via-indigo-600 to-purple-700',
    count: 'Full Syllabus',
    link: '#cumilla-branch',
    icon: '📚'
  },
  {
    id: 'hsc',
    title: 'HSC ACADEMIC',
    subtitle: 'Physics, Chemistry, Math & Biology Cycle',
    tag: 'CLASS 11 & 12',
    bg: 'from-indigo-600 via-purple-600 to-pink-700',
    count: 'Board + Foundation',
    link: '#courses',
    icon: '🎓'
  },
  {
    id: 'engineering',
    title: 'ENGINEERING ADMISSION',
    subtitle: 'BUET, IUT, RUET, KUET, CUET Preparation',
    tag: 'ADVANCED PRO',
    bg: 'from-emerald-600 via-teal-600 to-cyan-700',
    count: 'Calculator Oneshot',
    link: '#hsc26-admission',
    icon: '⚡'
  },
  {
    id: 'varsity',
    title: 'VARSITY KA ADMISSION',
    subtitle: 'DU, RU, CU, JU & GST Special Batch',
    tag: 'UNIVERSITY KA',
    bg: 'from-amber-600 via-orange-600 to-red-700',
    count: 'Printed Sheets',
    link: '#hsc26-admission',
    icon: '🏆'
  }
];

export default function CourseCategories({ onOpenEnroll }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all' 
    ? categories 
    : categories.filter(c => c.id === activeTab || (activeTab === 'admission' && (c.id === 'hsc26' || c.id === 'engineering' || c.id === 'varsity')));

  return (
    <section id="courses" className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white font-bangla">
            Explore Our Course Categories
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 font-bangla">
            তোমার লক্ষ্য অনুযায়ী সঠিক কোর্স ক্যাটাগরি বেছে নাও
          </p>

          {/* Filter Tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'সকল কোর্স' },
              { id: 'hsc26', label: 'HSC 26 Admission' },
              { id: 'admission', label: 'Engineering & Varsity' },
              { id: 'ssc', label: 'SSC Academic' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold font-bangla transition-all ${
                  activeTab === tab.id
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className={`group relative isolate flex flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-7 bg-gradient-to-br ${cat.bg} text-white shadow-xl transform hover:-translate-y-1.5 transition-all duration-300`}
            >
              {/* Decorative Background Icon */}
              <div className="absolute -top-6 -right-6 text-7xl opacity-15 pointer-events-none select-none group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>

              {/* Top Tag & Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white">
                  {cat.tag}
                </span>
                <span className="text-xs font-semibold bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-white/90">
                  {cat.count}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-2 mb-8">
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight font-bangla">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-bangla">
                  {cat.subtitle}
                </p>
              </div>

              {/* Card Footer Button */}
              <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                <button
                  onClick={() => onOpenEnroll(cat.title)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-md font-bangla flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
                  <span>কোর্সে যুক্ত হও</span>
                </button>

                <a
                  href={cat.link}
                  className="inline-flex items-center gap-1 text-xs font-bold text-white hover:underline group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
