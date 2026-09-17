import React from 'react';
import { 
  Award, 
  Phone, 
  Sparkles, 
  FileText, 
  BookOpen, 
  Calculator, 
  UserCheck, 
  Layers,
  ArrowRight
} from 'lucide-react';

export default function FeaturedCourseDetail({ onOpenEnroll, onOpenPractice }) {
  const courseFeatures = [
    {
      title: '70+ Engineering Standard Class',
      desc: 'BUET ও ইঞ্জিনিয়ারিং মানসম্পন্ন ইন-ডেপথ ৭০+ লাইভ ও রেকর্ডেড মাস্টারক্লাস',
      icon: Layers,
      color: 'text-brand-500 bg-brand-500/10'
    },
    {
      title: 'Dedicated Varsity Ka Foundation Classes',
      desc: 'ঢাকা বিশ্ববিদ্যালয় (DU) ও সকল ভার্সিটি ক-ইউনিট প্রস্তুতির স্পেশাল ক্লাসেস',
      icon: Award,
      color: 'text-amber-500 bg-amber-500/10'
    },
    {
      title: 'Dedicated Engineering Calculator Oneshot Class',
      desc: 'ক্যালকুলেটর শর্টকাট ও সুপারফাস্ট প্রবলেম সলভিং ট্রিকস ট্রেইনিং',
      icon: Calculator,
      color: 'text-purple-500 bg-purple-500/10'
    },
    {
      title: 'One to One Mentorship',
      desc: 'BUET/IUT মেধা তালিকার শীর্ষে থাকা মেন্টরদের সাথে সরাসরি ১-টু-১ গাইডলাইন',
      icon: UserCheck,
      color: 'text-emerald-500 bg-emerald-500/10'
    }
  ];

  const courseMaterials = [
    {
      title: 'Progga Engineering Printed Practice Sheets',
      desc: 'অধ্যায়ভিত্তিক প্রিন্টেড হার্ডকপি প্র্যাকটিস শিট সরাসরি হোম ডেলিভারি',
      badge: 'PDF + HARDCOPY'
    },
    {
      title: 'Weekly Standard Model Test',
      desc: 'ইঞ্জিনিয়ারিং ও ভার্সিটি স্ট্যান্ডার্ড সাপ্তাহিক স্পেশাল মডেল টেস্ট ও রেজাল্ট এনালিটিক্স',
      badge: 'ONLINE & OFFLINE'
    }
  ];

  return (
    <section id="hsc26-admission" className="py-12 bg-slate-100/60 dark:bg-[#0c0d18] border-y border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Course Header Banner Card */}
        <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 text-white overflow-hidden shadow-2xl mb-12">
          {/* Subtle Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Banner Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3.5 py-1 text-xs font-black tracking-wider uppercase rounded-full bg-brand-500 text-white flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  HSC 26 SPECIAL
                </span>
                <span className="px-3.5 py-1 text-xs font-bold rounded-full bg-slate-800 border border-slate-700 text-amber-400">
                  EV + BV (English & Bangla Version)
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-bangla leading-tight">
                BASIC to ENGINEERING + VARSITY Ka ADMISSION COURSE
              </h2>

              <p className="text-slate-300 text-sm sm:text-base font-bangla leading-relaxed">
                এইচএসসি এবং ভর্তি পরীক্ষার শতভাগ কনসেপ্ট ক্লিয়ারেন্স এবং ইঞ্জিনিয়ারিং স্ট্যান্ডার্ড প্রবলেম সলভিং স্কিল নিশ্চিতকরণে প্রজ্ঞা (PROGGA)-র ফ্ল্যাগশিপ কোর্স।
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/60 text-center">
                  <span className="block text-xs text-slate-400 font-bangla">কোর্স ফি</span>
                  <span className="text-base font-bold text-emerald-400">৳ ৪,৫০০</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/60 text-center">
                  <span className="block text-xs text-slate-400 font-bangla">লাইভ ক্লাস</span>
                  <span className="text-base font-bold text-white">৭০+ সেশন</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/60 text-center">
                  <span className="block text-xs text-slate-400 font-bangla">ভার্সন</span>
                  <span className="text-base font-bold text-white">BV + EV</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/60 text-center">
                  <span className="block text-xs text-slate-400 font-bangla">মেন্টরশিপ</span>
                  <span className="text-base font-bold text-amber-400">1 on 1</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center gap-3 flex-wrap">
                <button
                  onClick={() => onOpenEnroll('HSC26 BASIC to ENGINEERING + VARSITY Ka ADMISSION COURSE')}
                  className="px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-brand-500 to-blue-600 hover:from-brand-600 hover:to-blue-700 shadow-lg shadow-brand-500/30 flex items-center gap-2 active:scale-95 transition-all"
                >
                  <span>ভর্তি নিশ্চিত করুন</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+8801739381908"
                  className="px-5 py-3 rounded-full text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-400 animate-pulse" />
                  <span>+8801739381908</span>
                </a>
              </div>
            </div>

            {/* Banner Image Display */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl group">
                <img
                  src="/assets/banner_hsc26.jpg"
                  alt="HSC26 Admission Course Banner"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-semibold text-slate-200 font-bangla bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    📸 Progga HSC 26 Academic & Admission Banner
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Features Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-brand-500" />
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-bangla">
              COURSE FEATURES (কোর্স ফিচারসমূহ)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-lg transition-all space-y-3"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feat.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900 dark:text-white font-bangla leading-snug">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-bangla leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Course Materials & Practice Sheets Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="lg:col-span-7 space-y-4">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 inline-flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" />
              STUDY MATERIAL
            </span>

            <h3 className="text-2xl font-black text-slate-900 dark:text-white font-bangla">
              কোর্স ম্যাটেরিয়াল ও প্র্যাকটিস শিট (COURSE MATERIALS)
            </h3>

            <div className="space-y-4 pt-2">
              {courseMaterials.map((mat, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                  <div className="p-2 rounded-lg bg-brand-500/10 text-brand-500 shrink-0 mt-0.5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-sm font-extrabold text-slate-900 dark:text-white font-bangla">
                        {mat.title}
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-brand-600 text-white">
                        {mat.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-bangla">
                      {mat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenPractice}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-brand-700 dark:text-brand-300 bg-brand-500/10 hover:bg-brand-500/20 border border-brand-500/30 flex items-center gap-2 font-bangla transition-colors"
              >
                <BookOpen className="w-4 h-4 text-brand-500" />
                <span>প্র্যাকটিস শিট ডেমো (PDF) দেখুন</span>
              </button>
            </div>
          </div>

          {/* Practice Sheet Visual Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-brand-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden space-y-4 text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-brand-400 uppercase tracking-wider font-bangla">
                  PROGGA PRACTICE SHEET
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-amber-500 text-slate-950">
                  PDF AVAILABLE
                </span>
              </div>
              <h4 className="text-lg font-bold font-bangla">
                পদার্থবিজ্ঞান ১ম ও ২য় পত্র: ইঞ্জিনিয়ারিং প্র্যাকটিস শিট
              </h4>
              <p className="text-xs text-slate-300 font-bangla leading-relaxed">
                BUET ও IUT স্ট্যান্ডার্ড সকল কনসেপচুয়াল ম্যাথ, ক্যালকুলেটর শর্টকাট এবং বিগত ২০ বছরের ভর্তি পরীক্ষার সমাধানমালা।
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                <span className="text-xs text-slate-400">Total Pages: 140+</span>
                <button
                  onClick={onOpenPractice}
                  className="text-xs font-bold text-brand-400 hover:text-brand-300 underline font-bangla"
                >
                  স্যাম্পল শিট ডাউনলোড
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
