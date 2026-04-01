import React from 'react';

export default function Header() {
  return (
    <header className="border-b-4 border-red-600 bg-white">
      <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <span className="text-2xl font-bold text-black">Codeza</span>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <a href="#" className="text-black hover:text-red-600 font-semibold text-sm">
            الرئيسية
          </a>
          <a href="#faq" className="text-black hover:text-red-600 font-semibold text-sm">
            الأسئلة الشائعة
          </a>
          <a href="#contact" className="text-black hover:text-red-600 font-semibold text-sm">
            اتصل بنا
          </a>
        </nav>
      </div>
    </header>
  );
}
