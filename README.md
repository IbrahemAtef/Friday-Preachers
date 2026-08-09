# 🕌 Friday Preachers Schedule - Khan Younis | جدول خطباء الجمعة - مديرية أوقاف خانيونس

[![Live Demo](https://img.shields.io/badge/Live%20Demo-friday--preachers.web.app-064e3b?style=for-the-badge&logo=firebase&logoColor=white)](https://friday-preachers.web.app)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-blue?style=for-the-badge&logo=pwa&logoColor=white)](https://friday-preachers.web.app)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

[🌐 Arabic Details / التفاصيل بالعربية](#-التفاصيل-باللغة-العربية) | [🇬🇧 English Details](#-english-documentation) | [🚀 Live Website](https://friday-preachers.web.app)

---

## 🇸🇦 التفاصيل باللغة العربية

تطبيق ويب تقدمي (PWA) مخصص لعرض وإدارة جدول خطباء الجمعة في مساجد مديرية أوقاف خانيونس. يهدف التطبيق إلى التسهيل على المواطنين والخطباء والمشايخ لمعرفة توزيع الخطباء أسبوعياً مع إمكانية التثبيت كـ تطبيق على الهواتف واللوحات الذكية.

🔗 **الرابط الحي للمشروع**: [https://friday-preachers.web.app](https://friday-preachers.web.app)

### ✨ المميزات الرئيسية
- 📅 **اختيار تلقائي للجدول الأسبوعي**: يتعرف التطبيق على تاريخ اليوم ويُظهر جدول الجمعة القادمة مباشرة.
- 🔍 **البحث والتصفية السريعة**: تصفية فورية حسب اسم المسجد أو اسم الخطيب.
- 📱 **تطبيق ويب تقدمي (PWA)**: إمكانية تثبيت التطبيق على الشاشة الرئيسية للآيفون والأندرويد مع العمل بدون إنترنت (Offline Caching).
- ⚙️ **لوحة تحكم إدارية متكاملة (`admin.html`)**:
  - إنشاء وتحديث جداول التوزيع لجميع الأسابيع.
  - إمكانية الترتيب بالسحب والإفلات (Drag & Drop).
  - مزامنة فورية ومباشرة عبر Firebase Realtime Database.
- 🎨 **تصميم عصري متجاوب**: دعم كامل للغة العربية ونمط Glassmorphism مريح للعين على جميع الشاشات.

---

## 🇬🇧 English Documentation

A modern Progressive Web Application (PWA) designed to manage and display weekly Friday Preachers (Khutba) assignments across mosques in Khan Younis. Powered by Firebase Realtime Database and styled with modern Glassmorphism aesthetics.

🔗 **Live Web Application**: [https://friday-preachers.web.app](https://friday-preachers.web.app)

### ✨ Key Features
- 📅 **Date-Driven Friday Selector**: Automatically identifies upcoming Fridays and presents the current schedule.
- 🔍 **Realtime Search & Filter**: Instantly search schedules by preacher name or mosque name.
- 📱 **PWA & Offline Support**: Installable on iOS and Android devices with offline caching via Service Worker.
- ⚙️ **Realtime Admin Dashboard (`admin.html`)**:
  - Full CRUD operations for weekly and default schedules.
  - Interactive Drag & Drop row reordering.
  - Instant synchronization backed by Firebase Realtime Database.
- 🎨 **Modern Arabic UI**: Optimized typography (Tajawal font), responsive layout, and dark/emerald glassmorphic visual presentation.

---

## 🛠️ Tech Stack / التقنيات المستخدمة

- **Frontend**: HTML5, Vanilla CSS3 (Glassmorphism design system), JavaScript (ES Modules).
- **Backend / Database**: Firebase Realtime Database.
- **Hosting**: Firebase Hosting.
- **PWA**: Service Worker API, Web App Manifest.

---

## 🚀 Local Development Setup / التشغيل المحلي

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/IbrahemAtef/Friday-Preachers.git
   cd Friday-Preachers
   ```

2. **Configure Firebase Credentials**:
   Copy `firebase-config.example.js` to create your local `firebase-config.js`:
   ```bash
   cp firebase-config.example.js firebase-config.js
   ```
   Open `firebase-config.js` and replace the placeholder values with your Firebase project credentials:
   ```javascript
   window.firebaseConfig = {
       apiKey: "YOUR_FIREBASE_API_KEY",
       authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
       databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_PROJECT_ID.appspot.com",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
   };
   ```

3. **Run Locally**:
   Serve the directory using any HTTP server (e.g. VS Code Live Server, `npx serve`, or `firebase serve`):
   ```bash
   npx serve .
   ```
   Open `http://localhost:3000` (or `index.html`) in your web browser.

---

## 📦 Deployment / النشر

To deploy updates to Firebase Hosting:

```bash
firebase deploy --only hosting
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
