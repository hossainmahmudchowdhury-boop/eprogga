import React from 'react';
import { FileText, Download, X, CheckCircle, Sparkles, BookOpen } from 'lucide-react';

export default function PracticeSheetModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-brand-500/10 text-brand-500">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white font-bangla">
              প্রজ্ঞা ইঞ্জিনিয়ারিং প্র্যাকটিস শিট স্যাম্পল (PDF PREVIEW)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-bangla">
              HSC 26 Basic to Engineering + Varsity Ka Course Material
            </p>
          </div>
        </div>

        {/* Sample Practice Sheet Mock Content */}
        <div className="p-6 rounded-2xl bg-slate-950 text-slate-100 border border-slate-800 space-y-4 font-sans text-xs">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-brand-400 font-bold">
                PROGGA :: ENGINEERING PRACTICE SHEET #01
              </span>
              <h4 className="text-sm font-bold text-white font-bangla">
                বিষয়: পদার্থবিজ্ঞান ১ম পত্র - নিউটনীয় বলবিদ্যা (Newtonian Mechanics)
              </h4>
            </div>
            <span className="px-2.5 py-1 text-[10px] font-bold rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              BUET Standard
            </span>
          </div>

          <div className="space-y-3 font-bangla text-slate-300">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-brand-400">প্রশ্ন ১ (BUET Admission Test - Conceptual):</span>
              <p>
                একটি m ভরের বস্তু v বেগে রৈখিক পথে গতিশীল থাকা অবস্থায় এটি m/2 ভরের অন্য একটি স্থির বস্তুর সাথে স্থিতিস্থাপক সংঘর্ষে লিপ্ত হয়। সংঘর্ষের পর বস্তুদ্বয়ের শেষ বেগ নির্ণয় কর।
              </p>
              <div className="text-[11px] text-amber-400 font-sans pt-1">
                Solution Formula: v1' = (m1 - m2)/(m1 + m2) * v1, v2' = 2m1/(m1 + m2) * v1
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-brand-400">প্রশ্ন ২ (Engineering Calculator Shortcut Trick):</span>
              <p>
                ক্যালকুলেটর দিয়ে মাত্র ৫ সেকেন্ডে ৩-ভেরিয়েবল বিশিষ্ট ম্যাট্রিক্স ইকুয়েশন সলভিং টেকনিক।
              </p>
            </div>
          </div>
        </div>

        {/* Practice Sheet Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300 font-bangla">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>অধ্যায়ভিত্তিক প্রিন্টেড হার্ডকপি সরাসরি হোম ডেলিভারি</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>বিগত ২০ বছরের বুয়েট ও ঢাবি প্রশ্ন ব্যাংক সমাধান</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>সাপ্তাহিক মডেল টেস্টের শতভাগ উত্তরপত্র ও এনালাইসিস</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>ক্যালকুলেটর ট্রিকস ও ওয়ানশট সমাধান নির্দেশিকা</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 font-bangla"
          >
            বন্ধ করুন
          </button>
          <a
            href="/assets/hsc26_admission_banner.jpg"
            download="Progga_Practice_Sheet_Sample.jpg"
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-brand-600 hover:bg-brand-500 shadow-md flex items-center gap-1.5 font-bangla"
          >
            <Download className="w-4 h-4" />
            <span>স্যাম্পল PDF ডাউনলোড করুন</span>
          </a>
        </div>

      </div>
    </div>
  );
}
