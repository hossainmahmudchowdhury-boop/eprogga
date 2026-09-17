# 🎓 PROGGA (প্রজ্ঞা) - Academic & Admission Web Platform

A modern, responsive EdTech web application built with **React**, **Vite**, and **Tailwind CSS**. Designed for easy customization in **VS Code**.

---

## 🚀 Quick Start (Opening in VS Code)

1. **Extract the ZIP file** to any folder on your computer.
2. Open **VS Code** (`File` -> `Open Folder...`) and select the extracted `progga-edtech` folder.
3. Open the built-in VS Code Terminal (`Ctrl + ~` or `Terminal` -> `New Terminal`).
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the local development server:
   ```bash
   npm run dev
   ```
6. Open your browser and go to `http://localhost:3000` (or the URL shown in your terminal).

---

## 📂 Project Structure Overview

```text
progga-edtech/
├── index.html                   # HTML Entry point (Fonts, Leaflet Map CSS)
├── package.json                 # Dependencies & Scripts
├── vite.config.js               # Vite build config
├── tailwind.config.js           # Tailwind theme, fonts & colors
├── postcss.config.js            # PostCSS configuration
├── public/
│   └── assets/                  # Images, logos, course banners & mentor photos
│       ├── banner_hsc26.jpg
│       ├── banner_hsc27.jpg
│       ├── banner_hsc28.jpg
│       ├── progga_cumilla_banner.jpg
│       ├── mentor_hemel.png
│       ├── mentor_joy.png
│       ├── mentor_jamil.png
│       ├── mentor_sakib.png
│       ├── mentor_dipto.png
│       └── progga_logo.jpg
└── src/
    ├── main.jsx                 # React root renderer
    ├── App.jsx                  # Main application container
    ├── index.css                # Global CSS & Tailwind imports
    └── components/
        ├── Header.jsx           # Top sticky navbar with dark/light mode toggle
        ├── HeroCarousel.jsx     # 3D interactive hero banner slider
        ├── HeroGreeting.jsx     # Bengali greeting & stats counter
        ├── CourseCategories.jsx # Course category gradient cards
        ├── FeaturedCourseDetail.jsx # HSC 26 Special course spotlight & materials
        ├── MentorsSection.jsx   # Mentors grid (Hemel, Joy, Jamil, Sakib, Dipto)
        ├── OfflineBranchCumilla.jsx # Cumilla branch info & Leaflet map
        ├── PracticeSheetModal.jsx   # PDF practice sheet preview modal
        ├── EnrollmentModal.jsx  # Student enrollment wizard & fee calculator
        └── Footer.jsx           # Footer with links, address & payment icons
```

---

## ✏️ How to Customize in VS Code

### 1. Changing Brand Name & Taglines
- Edit `src/components/Header.jsx` to change navbar title or logo.
- Edit `src/components/HeroGreeting.jsx` to change the hero greeting text or stats metrics.

### 2. Updating Mentor Names, Bios, or Photos
- Place new mentor photos inside `public/assets/`.
- Edit `src/components/MentorsSection.jsx`:
  ```javascript
  const mentors = [
    {
      id: 'hemel',
      name: 'Hemel',
      institution: 'BUET',
      subject: 'Chemistry & Engineering Specialist',
      image: '/assets/mentor_hemel.png',
      ...
    }
  ];
  ```

### 3. Updating Course Prices or Features
- Open `src/components/FeaturedCourseDetail.jsx` and modify the price, feature lists, or course specs.

### 4. Updating Branch Location or Map Address
- Open `src/components/OfflineBranchCumilla.jsx` to update address text, phone hotline, or GPS coordinates in the Leaflet map function.

---

## 🛠️ Available Scripts

- `npm run dev`: Starts local development server with hot-reload.
- `npm run build`: Compiles optimized production build to `dist/` folder.
- `npm run preview`: Previews the compiled production build locally.

---

## 📦 Deployment

To deploy to Netlify, Vercel, Cloudflare Pages, or cPanel:
1. Run `npm run build`.
2. Upload the contents of the generated `dist/` directory to your web hosting server!
