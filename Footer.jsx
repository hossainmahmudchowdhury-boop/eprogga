import React from 'react';
import { Mail, Phone, MapPin, BadgeCheck, Hash, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#080912] text-slate-800 dark:text-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/progga_logo.jpg"
                alt="Progga"
                className="h-12 w-12 rounded-full border-2 border-brand-500 shadow-sm"
              />
              <div>
                <div className="flex items-center gap-1.5 font-extrabold text-xl">
                  <span>PROGGA</span>
                  <span className="text-brand-500 font-bangla text-base">(প্রজ্ঞা)</span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-bangla">
                  The Joy of Learning
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-bangla max-w-sm">
              একাডেমিক ও এডমিশন প্রস্তুতির স্মার্ট এডটেক প্ল্যাটফর্ম। কনসেপ্ট, প্র্যাকটিস ও এনালাইটিক্স—সবকিছু একসাথে এক ঠিকানায়।
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com/proggabd"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-blue-600 hover:scale-110 transition-transform border border-slate-200 dark:border-slate-700"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-red-600 hover:scale-110 transition-transform border border-slate-200 dark:border-slate-700"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white font-bangla">
              কুইক লিংকস (Quick Links)
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-bangla">
              <li><a href="#hsc26-admission" className="hover:text-brand-500 transition-colors">HSC 2026 Engineering Admission</a></li>
              <li><a href="#hsc26-admission" className="hover:text-brand-500 transition-colors">Varsity Ka Foundation Batch</a></li>
              <li><a href="#cumilla-branch" className="hover:text-brand-500 transition-colors">SSC & HSC Cumilla Offline Batch</a></li>
              <li><a href="#courses" className="hover:text-brand-500 transition-colors">Bangla & English Version Masterclass</a></li>
              <li><a href="#mentors" className="hover:text-brand-500 transition-colors">BUET & IUT Instructors Panel</a></li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white font-bangla">
              তথ্য ও নীতিমালা
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-bangla">
              <li><a href="#" className="hover:text-brand-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">FAQ & Support</a></li>
            </ul>
          </div>

          {/* Contact & Branch Location */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white font-bangla">
              যোগাযোগ ও ঠিকানা
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 font-bangla">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>রাণীরদিঘির পাড়, কুমিল্লা, Bangladesh, 3500</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <a href="tel:+8801739381908" className="hover:text-brand-500 font-bold">+8801739381908</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <span>support@proggabd.com</span>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <BadgeCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Trade License: TRAD/DNCC/032434/2025</span>
              </li>
              <li className="flex items-center gap-2">
                <Hash className="w-4 h-4 text-amber-500 shrink-0" />
                <span>TIN No: 663209774087</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Payment Partner Gateway Graphic */}
        <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800 text-center space-y-3">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-bangla">
            পেমেন্ট পার্টনারস — SSLCOMMERZ SECURED GATEWAY
          </span>
          <img
            src="https://securepay.sslcommerz.com/public/image/SSLCommerz-Pay-With-logo-All-Size-01.png"
            alt="SSLCommerz Payment Methods"
            className="mx-auto h-auto max-w-4xl w-full opacity-80 hover:opacity-100 transition-opacity dark:invert"
          />
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-bangla gap-2">
          <p>© 2026 PROGGA. All rights reserved.</p>
          <p>Made with ❤️ in Cumilla & Dhaka, Bangladesh</p>
        </div>

      </div>
    </footer>
  );
}
