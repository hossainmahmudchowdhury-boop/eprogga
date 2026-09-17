import React, { useState } from 'react';
import { Award, Sparkles } from 'lucide-react';

const mentors = [
  {
    id: 'hemel',
    name: 'Hemel',
    institution: 'BUET',
    subject: 'Chemistry & Engineering Specialist',
    image: '/assets/mentor_hemel.png',
    experience: 'কেমিস্ট্রি রিয়েকশন ও ইঞ্জিনিয়ারিং ম্যাথ গুরু',
    bio: 'BUET ক্যামিক্যাল ইঞ্জিনিয়ারিং ব্যাকগ্রাউন্ড। রসায়নের জটিল বিক্রিয়া এবং জৈব রসায়ন পানির মতো সহজ করার জন্য পরিচিত।',
    featured: true
  },
  {
    id: 'joy',
    name: 'Joy Dey',
    institution: 'BUET',
    subject: 'Physics & Admission Expert',
    image: '/assets/mentor_joy.png',
    experience: 'BUET ভর্তি পরীক্ষায় শীর্ষ স্থান অর্জনকারী',
    bio: 'পদার্থবিজ্ঞানের কঠিন কনসেপ্ট সহজে বোঝাতে অত্যন্ত জনপ্রিয়। প্রজ্ঞা (Progga)-এর ফিজিক্স অলিম্পিয়াড ও ইঞ্জিনিয়ারিং উইং প্রধান।',
    featured: true
  },
  {
    id: 'jamil',
    name: 'Kazi Jamil',
    institution: 'BUET',
    subject: 'Lead Engineering & Higher Math Specialist',
    image: '/assets/mentor_jamil.png',
    experience: '৫+ বছরের ইঞ্জিনিয়ারিং ভর্তি মেন্টরিং অভিজ্ঞতা',
    bio: 'BUET থেকে গ্র্যাজুয়েট। উচ্চতর গণিত এবং ইঞ্জিনিয়ারিং কনসেপ্ট ক্লিয়ারিং-এ বিশেষ পারদর্শী। হাজার হাজার শিক্ষার্থীকে BUET ভর্তি পরীক্ষায় সফল হতে পথ দেখিয়েছেন।',
    featured: true
  },
  {
    id: 'sakib',
    name: 'Sakibul Hasan',
    institution: 'IUT',
    subject: 'Higher Math & Varsity Ka Specialist',
    image: '/assets/mentor_sakib.png',
    experience: 'IUT & DU Varsity Ka Specialist',
    bio: 'IUT থেকে ইঞ্জিনিয়ারিং। ভার্সিটি ক-ইউনিটের শর্টকাট টেকনিক ও ডিইউ এডমিশন ম্যাথ স্পেশালিস্ট।',
    featured: false
  },
  {
    id: 'dipto',
    name: 'Dipto',
    institution: 'BUET',
    subject: 'Problem Solving & Calculator Oneshot Mentor',
    image: '/assets/mentor_dipto.png',
    experience: 'ক্যালকুলেটর ট্রিকস ও ওয়ানশট মাস্টারকোর্স ট্রেইনার',
    bio: 'BUET ইঞ্জিনিয়ার। ক্যালকুলেটরের অবিশ্বাস্য শর্টকাট ব্যবহারে সময় বাঁচানোর কৌশল শেখাতে বিশেষজ্ঞ।',
    featured: false
  }
];

export default function MentorsSection() {
  const [selectedMentor, setSelectedMentor] = useState(null);

  return (
    <section id="mentors" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 inline-flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-brand-500" />
            TOP INSTRUCTORS & MENTORS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white font-bangla mt-3">
            আমাদের অভিজ্ঞ মেন্টরবৃন্দ (MEET OUR MENTORS)
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 font-bangla">
            BUET ও IUT থেকে উঠে আসা দেশের সেরা মেন্টরদের সুনির্দিষ্ট দিকনির্দেশনায় প্রস্তুতি নাও
          </p>
        </div>

        {/* Mentors Grid - Exact Sequence: Hemel, Joy Dey, Kazi Jamil, Sakibul Hasan, Dipto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              onClick={() => setSelectedMentor(mentor)}
              className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-lg hover:shadow-xl hover:border-brand-500/50 transition-all duration-300 cursor-pointer overflow-hidden text-center"
            >
              {/* Institution Badge */}
              <div className="absolute top-3 right-3 z-10">
                <span className="px-2.5 py-1 text-[11px] font-extrabold rounded-full bg-slate-950/80 backdrop-blur-md text-amber-400 border border-amber-400/30">
                  {mentor.institution}
                </span>
              </div>

              {/* Instructor Photo */}
              <div className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-brand-500/30 group-hover:border-brand-500 shadow-lg mb-4 bg-slate-100 dark:bg-slate-800 p-1 flex items-center justify-center">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Mentor Details */}
              <div className="space-y-1 mb-4 flex-1">
                <h3 className="text-lg font-black text-slate-900 dark:text-white font-bangla">
                  {mentor.name}
                </h3>
                <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  ({mentor.institution})
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-bangla line-clamp-2 mt-1">
                  {mentor.subject}
                </p>
              </div>

              {/* Bio Details Trigger */}
              <button
                type="button"
                className="w-full py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 group-hover:bg-brand-600 group-hover:text-white transition-colors font-bangla flex items-center justify-center gap-1"
              >
                <span>প্রোফাইল দেখুন</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Mentor Detail Drawer Modal */}
        {selectedMentor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              <button
                onClick={() => setSelectedMentor(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800"
              >
                ✕
              </button>

              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-brand-500 shadow-md shrink-0">
                  <img
                    src={selectedMentor.image}
                    alt={selectedMentor.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white font-bangla">
                    {selectedMentor.name}
                  </h3>
                  <span className="inline-block px-2.5 py-0.5 text-xs font-bold rounded bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                    {selectedMentor.institution} Graduate
                  </span>
                  <p className="text-xs text-brand-600 dark:text-brand-400 font-semibold font-bangla mt-1">
                    {selectedMentor.subject}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-2 text-xs text-slate-700 dark:text-slate-300 font-bangla">
                <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>অভিজ্ঞতা ও সাফল্য</span>
                </div>
                <p>{selectedMentor.experience}</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white font-bangla uppercase tracking-wider">
                  বায়োগ্রাফি ও গাইডলাইন উইং
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-bangla leading-relaxed">
                  {selectedMentor.bio}
                </p>
              </div>

              <button
                onClick={() => setSelectedMentor(null)}
                className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-brand-600 hover:bg-brand-500 font-bangla"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
