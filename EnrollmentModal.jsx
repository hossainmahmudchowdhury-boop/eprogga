import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, User, Phone, BookOpen, ShieldCheck, Tag } from 'lucide-react';

export default function EnrollmentModal({ isOpen, onClose, courseTitle = 'HSC26 BASIC to ENGINEERING ADMISSION COURSE' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    college: '',
    version: 'Bangla Version',
    mode: 'Online + Printed Sheets',
    coupon: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [discount, setDiscount] = useState(0);

  if (!isOpen) return null;

  const basePrice = 4500;
  const finalPrice = Math.max(0, basePrice - discount);

  const handleApplyCoupon = () => {
    if (formData.coupon.trim().toUpperCase() === 'PROGGA500' || formData.coupon.trim().toUpperCase() === 'PROGGA') {
      setDiscount(500);
    } else {
      alert('অবৈধ কুপন কোড! চেষ্টা করুন: PROGGA500');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('দয়া করে আপনার নাম এবং মোবাইল নম্বর প্রদান করুন');
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', phone: '', college: '', version: 'Bangla Version', mode: 'Online + Printed Sheets', coupon: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation State */
          <div className="text-center py-6 space-y-4 font-bangla">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center border-2 border-emerald-500/30">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
              অভিনন্দন {formData.name}!
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              আপনার ভর্তি নিবন্ধন সফলভাবে গৃহীত হয়েছে। আমাদের টিম খুব শীঘ্রই আপনার নাম্বারে (<strong>{formData.phone}</strong>) যোগাযোগ করবে।
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2 text-left text-xs">
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-1.5">
                <span className="text-slate-500">কোর্স নাম:</span>
                <span className="font-bold text-slate-900 dark:text-white">{courseTitle}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-1.5">
                <span className="text-slate-500">ভার্সন:</span>
                <span className="font-bold text-brand-600 dark:text-brand-400">{formData.version}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">পরিশোধযোগ্য ফি:</span>
                <span className="font-bold text-emerald-500">৳ {finalPrice}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-xl text-sm font-bold text-white bg-brand-600 hover:bg-brand-500 shadow-md font-bangla"
            >
              ড্যাশবোর্ডে যান
            </button>
          </div>
        ) : (
          /* Form State */
          <form onSubmit={handleSubmit} className="space-y-4 font-bangla">
            <div className="space-y-1">
              <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded bg-brand-500/10 text-brand-500">
                PROGGA ADMISSION ENROLLMENT
              </span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                কোর্স ভর্তি ফরম
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {courseTitle}
              </p>
            </div>

            {/* Student Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                শিক্ষার্থীর পূর্ণ নাম *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="যেমন: তানভীর আহমেদ"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>

            {/* Student Phone */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                মোবাইল নম্বর *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  placeholder="017XXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>

            {/* Version Selection */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  ভার্সন সিলেক্ট করুন
                </label>
                <select
                  value={formData.version}
                  onChange={(e) => setFormData({ ...formData, version: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none"
                >
                  <option value="Bangla Version">বাংলা ভার্সন (BV)</option>
                  <option value="English Version">ইংলিশ ভার্সন (EV)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  ব্যাচ মোড
                </label>
                <select
                  value={formData.mode}
                  onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none"
                >
                  <option value="Online + Printed Sheets">অনলাইন + হার্ডকপি শিট</option>
                  <option value="Cumilla Offline Batch">কুমিল্লা অফলাইন শাখা</option>
                </select>
              </div>
            </div>

            {/* Coupon Code Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                কুপন কোড (ঐচ্ছিক)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="PROGGA500"
                  value={formData.coupon}
                  onChange={(e) => setFormData({ ...formData, coupon: e.target.value })}
                  className="flex-1 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white uppercase"
                />
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold hover:bg-brand-600 hover:text-white transition-colors"
                >
                  প্রয়োগ
                </button>
              </div>
            </div>

            {/* Price Summary */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
              <div>
                <span className="block text-xs text-slate-500 dark:text-slate-400">সর্বমোট কোর্স ফি</span>
                {discount > 0 && <span className="text-[10px] text-emerald-500 font-bold">৳ ৫০০ কুপন ডিসকাউন্ট প্রযোজ্য!</span>}
              </div>
              <div className="text-right">
                {discount > 0 && <span className="line-through text-xs text-slate-400 mr-2">৳ {basePrice}</span>}
                <span className="text-xl font-black text-brand-600 dark:text-brand-400">৳ {finalPrice}</span>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 shadow-lg shadow-brand-500/30 transition-all font-bangla"
            >
              ভর্তি আবেদন কনফার্ম করুন
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
