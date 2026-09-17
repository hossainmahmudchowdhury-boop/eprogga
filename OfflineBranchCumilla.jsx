import React, { useEffect } from 'react';
import { MapPin, Phone, Facebook, CheckCircle2, Navigation, Building2, ExternalLink, Calendar } from 'lucide-react';

export default function OfflineBranchCumilla({ onOpenEnroll }) {
  const bingMapsUrl = "https://www.bing.com/maps/search?v=2&pc=FACEBK&mid=8100&mkt=en-GB&fbclid=IwY2xjawUWZ_VwZG9mAWV4dG4DYWVtAjEwAGJyaWQRMXQ4U1oybkRPWm9vOHJvejBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeOyQAKD-dPXQb8u2yR4RK20mvFPIhHbkk6zKH6JT0xywCpJQEmIAypjjGjSo_aem_6Yxs3PJULYhUv_uebtpGxQ&FORM=FBKPL1&q=%E0%A6%B0%E0%A6%BE%E0%A6%A8%E0%A7%80%E0%A6%B0%E0%A6%A6%E0%A6%BF%E0%A6%98%E0%A6%BF%E0%A6%B0+%E0%A6%95%E0%A7%81%E0%A6%AE%E0%A6%BF%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%BE%2C+Comilla%2C+Bangladesh%2C+3500&cp=23.466999%7E91.182999&lvl=21&style=r";

  useEffect(() => {
    // Dynamically load Leaflet interactive map script
    const loadLeaflet = async () => {
      if (window.L && document.getElementById('cumilla-map-container')) {
        initMap();
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.async = true;
      script.onload = () => initMap();
      document.head.appendChild(script);
    };

    const initMap = () => {
      const container = document.getElementById('cumilla-map-container');
      if (!container || container._leaflet_id) return;
      
      // Coordinate for Ranir Dighir Par, Cumilla: 23.467, 91.183
      const map = window.L.map('cumilla-map-container').setView([23.466999, 91.182999], 16);
      
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      window.L.marker([23.466999, 91.182999])
        .addTo(map)
        .bindPopup('<b>PROGGA Offline Batch</b><br>রাণীরদিঘির পাড়, কুমিল্লা, Bangladesh 3500')
        .openPopup();
    };

    loadLeaflet();
  }, []);

  return (
    <section id="cumilla-branch" className="py-12 bg-slate-50 dark:bg-[#0b0c16] border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Offline Batch Showcase Banner Box */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 border-2 border-brand-500/30 p-6 sm:p-10 text-white shadow-2xl overflow-hidden mb-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3.5 py-1 text-xs font-black tracking-wider uppercase rounded-full bg-emerald-500 text-slate-950 flex items-center gap-1.5 shadow-md">
                  <Building2 className="w-3.5 h-3.5" />
                  OFFLINE BATCH
                </span>
                <span className="px-3.5 py-1 text-xs font-bold rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30">
                  CUMILLA BRANCH (কুমিল্লা)
                </span>
              </div>

              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-bangla leading-tight">
                  PROGGA OFFLINE BATCH - CUMILLA
                </h2>
                <p className="text-slate-300 text-sm sm:text-base font-bangla">
                  কুমিল্লার রাণীরদিঘির পাড়ে সরাসরি অফলাইন ক্লাসে সেরা প্রস্তুতি
                </p>
              </div>

              {/* Offerings Pill Box */}
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-700/80 pb-2.5">
                  <span className="text-xs font-bold text-slate-400 font-bangla uppercase">প্রোগ্রামসমূহ (PROGRAMS OFFERED)</span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    SSC + HSC + ADMISSION
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 font-bangla">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>BANGLA VERSION (বাংলা ভার্সন)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 font-bangla">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>ENGLISH VERSION (ইংলিশ ভার্সন)</span>
                  </div>
                </div>
              </div>

              {/* Address details */}
              <div className="space-y-2 text-xs text-slate-300 font-bangla">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>ঠিকানা:</strong> রাণীরদিঘির পাড়, কুমিল্লা, Bangladesh, 3500 (Ranir Dighir Par, Cumilla)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    <strong>হটলাইন:</strong> <a href="tel:+8801739381908" className="hover:underline font-bold text-white">+8801739381908</a>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Facebook className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>
                    <strong>ফেসবুক পেজ:</strong> <a href="https://facebook.com/proggabd" target="_blank" rel="noopener noreferrer" className="hover:underline text-brand-300">facebook.com/proggabd</a>
                  </span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-3 flex items-center gap-3 flex-wrap">
                <button
                  onClick={() => onOpenEnroll('Progga Cumilla Offline Batch')}
                  className="px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg shadow-emerald-500/20 flex items-center gap-2 active:scale-95 transition-all font-bangla"
                >
                  <span>অফলাইন ব্যাচে সিট বুকিং</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>

                <a
                  href={bingMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center gap-2 transition-colors font-bangla"
                >
                  <Navigation className="w-4 h-4 text-brand-400" />
                  <span>Bing Maps-এ গুগল লোকেশন</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Banner Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl group w-full">
                <img
                  src="/assets/progga_cumilla_banner.jpg"
                  alt="Progga Offline Batch Cumilla Banner"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-semibold text-slate-200 font-bangla bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    📸 2nd Banner Reference Artwork
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Embedded Interactive Map Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-500" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-bangla">
                কুমিল্লা শাখা ম্যাপ লোকেশন (RANIR DIGHIR PAR, CUMILLA)
              </h3>
            </div>
            <a
              href={bingMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1 font-bangla"
            >
              <span>Bing Maps-এ ম্যাপ ওপেন করুন</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner">
            <div id="cumilla-map-container" className="w-full h-full" />
          </div>
        </div>

      </div>
    </section>
  );
}
