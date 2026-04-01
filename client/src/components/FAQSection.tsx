import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'هل الخدمة آمنة؟',
    answer: 'نعم، الخدمة آمنة تماماً. نحن لا نخزن أي بيانات شخصية أو روابط.',
  },
  {
    question: 'هل يمكن تحميل مقاطع طويلة؟',
    answer: 'نعم، يمكنك تحميل أي طول من المقاطع. لا توجد قيود على المدة.',
  },
  {
    question: 'ما هي أفضل جودة؟',
    answer: '4K هي أفضل جودة متاحة، لكنها تحتاج إلى مساحة أكبر.',
  },
  {
    question: 'هل يعمل على الموبايل؟',
    answer: 'نعم، الموقع يعمل بشكل كامل على جميع الأجهزة الذكية.',
  },
  {
    question: 'كم من الوقت يستغرق التحميل؟',
    answer: 'يعتمد على حجم الملف وسرعة الإنترنت. عادة يستغرق دقائق معدودة.',
  },
  {
    question: 'هل هناك حد أقصى للتحميلات؟',
    answer: 'لا، يمكنك تحميل عدد غير محدود من الملفات.',
  },
];

interface FAQItemComponentProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItemComponent({ item, isOpen, onToggle }: FAQItemComponentProps) {
  return (
    <div className="border-2 border-black rounded overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-100 transition-colors bg-white"
      >
        <h3 className="text-left font-bold text-black">{item.question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-black transition-transform duration-300 flex-shrink-0 ml-4 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t-2 border-black bg-gray-50">
          <p className="text-gray-700">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 px-4" id="faq">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            الأسئلة الشائعة
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <FAQItemComponent
              key={idx}
              item={item}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>

        {/* Important Notice */}
        <div className="mt-12 p-6 border-2 border-red-600 rounded bg-red-50">
          <p className="text-sm text-gray-800 text-center font-semibold">
            ⚠️ تنبيه مهم: استخدم هذه الخدمة فقط للمحتوى الذي تملك حقوق استخدامه. احترم حقوق الملكية الفكرية والقوانين المحلية. نحن لا نتحمل مسؤولية الاستخدام غير القانوني.
          </p>
        </div>
      </div>
    </section>
  );
}
