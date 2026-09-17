import React, { useState } from 'react';
import { Compass, ChevronDown, ChevronUp, Users, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function HeroGreeting({ onOpenEnroll }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-[#0d0e19]/70 p-6 sm:p-10 text-center shadow-xl backdrop-blur-xl relative overflow-hidden">
          {/* Subtle Top Accent */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-500 via-indigo-500 to-emerald-500" />

          {/* Bengali Greeting Header */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-bangla leading-tight">
            <span className="block text-slate-900 dark:text-white">
              হ্যালো, <span className="text-brand-600 dark:text-brand-400">বাংলাদেশ!</span>
            </span>
            <span className="mt-1 block text-slate-900 dark:text-white">
              <span className="text-brand-600 dark:text-brand-400">PROGGA (প্রজ্ঞা)</span>
              -এ স্বাগতম
            </span>
          </h1>

          {/* Subtitle Description */}
          <div className="mt-5 max-w-2xl text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-bangla space-y-3">
            <p>
              স্কুল জীবনের গণ্ডি পেরিয়ে কলেজ, কলেজ থেকে বিশ্ববিদ্যালয়, আর বিশ্ববিদ্যালয় থেকে স্বপ্নের ক্যারিয়ার—তোমাদের এই সুদীর্ঘ যাত্রার একটি গুরুত্বপূর্ণ অধ্যায়ের সেরা সঙ্গী হতে পেরে আমরা গর্বিত।
            </p>

            <div className={`space-y-3 transition-all duration-300 ${expanded ? 'block' : 'hidden md:block'}`}>
              <p>
                আমাদের লক্ষ্য একটাই—তোমার স্বপ্নসারথি হয়ে তোমাকে প্রকৌশল (BUET, IUT, RUET) ও শীর্ষ বিশ্ববিদ্যালয়ে ভর্তির কাঙ্ক্ষিত লক্ষ্যে পৌঁছে দেওয়া।
              </p>
              <p className="font-semibold text-brand-600 dark:text-brand-400">
                The Joy of Learning, The Assurance of Success.
              </p>
            </div>

            {/* Mobile Expand Toggle */}
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 dark:text-brand-400 md:hidden mt-2"
            >
              {expanded ? (
                <>কম দেখুন <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>আরও দেখুন <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </div>

          {/* Key Metric Pills */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg">
            <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center">
              <Users className="w-5 h-5 text-brand-500 mb-1" />
              <span className="text-lg font-bold text-slate-900 dark:text-white">১০,০০০+</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-bangla">সফল শিক্ষার্থী</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center">
              <Award className="w-5 h-5 text-amber-500 mb-1" />
              <span className="text-lg font-bold text-slate-900 dark:text-white">BUET & IUT</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-bangla">সেরা ইন্সট্রাক্টরগণ</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 col-span-2 sm:col-span-1 flex flex-col items-center">
              <ShieldCheck className="w-5 h-5 text-emerald-500 mb-1" />
              <span className="text-lg font-bold text-slate-900 dark:text-white">১০০%</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-bangla">কোয়ালিটি কনসেপ্ট</span>
            </div>
          </div>

          {/* Action CTA */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 w-full sm:w-auto">
            <a
              href="#courses"
              className="px-8 py-3 rounded-xl text-sm font-bold text-white bg-brand-600 hover:bg-brand-500 shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2 transition-all active:translate-y-0.5"
            >
              <Compass className="w-5 h-5" />
              <span className="font-bangla">কোর্সগুলো ঘুরে দেখো</span>
            </a>
            <button
              onClick={() => onOpenEnroll('Progga Admission Batch')}
              className="px-8 py-3 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 flex items-center justify-center gap-2 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span className="font-bangla">সরাসরি ভর্তি ফরম</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
