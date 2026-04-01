import React from 'react';

export default function FeaturesSection() {
  const features = [
    {
      title: 'مجاني تماماً',
      description: 'لا توجد رسوم أو اشتراكات. استخدم الخدمة بدون أي تكاليف',
    },
    {
      title: 'جودات متعددة',
      description: 'اختر من بين HD و 2K و 4K مع الصوت الكامل',
    },
    {
      title: 'سهل الاستخدام',
      description: 'واجهة بسيطة وسريعة. لا تحتاج لأي خبرة تقنية',
    },
    {
      title: 'آمن وموثوق',
      description: 'لا نخزن أي بيانات شخصية. خدمة آمنة وموثوقة',
    },
    {
      title: 'دعم العربية',
      description: 'واجهة كاملة باللغة العربية لتجربة أفضل',
    },
    {
      title: 'متجاوب',
      description: 'يعمل على جميع الأجهزة: موبايل وتابلت وكمبيوتر',
    },
  ];

  return (
    <section className="bg-white py-16 px-4 border-t-4 border-b-4 border-red-600">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            لماذا Codeza؟
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 border-2 border-black rounded bg-white hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-black mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
