import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-black bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-2">Codeza</h3>
            <p className="text-gray-700 text-sm">Download Anything. Anytime.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-black font-bold mb-4">الخدمات</h4>
            <ul className="space-y-2">
              {['الرئيسية', 'الأسئلة الشائعة', 'اتصل بنا'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-700 hover:text-red-600 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-black font-bold mb-4">القانوني</h4>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="text-gray-700 hover:text-red-600 transition-colors text-sm">
                  شروط الخدمة
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-700 hover:text-red-600 transition-colors text-sm">
                  سياسة الخصوصية
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-black font-bold mb-4">التواصل</h4>
            <a href="mailto:support@codeza.com" className="text-gray-700 hover:text-red-600 transition-colors text-sm">
              al2825615@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-black pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-700 text-sm">
              © {currentYear} Codeza. جميع الحقوق محفوظة.
            </p>
            <p className="text-gray-700 text-sm">
              Made with Manus
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
