import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <div className="container max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">شروط الخدمة</h1>

        <div className="space-y-8 text-gray-800 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">1. قبول الشروط</h2>
            <p>
              باستخدامك لموقع Codeza، فإنك توافق على الالتزام بجميع شروط الخدمة هذه. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الخدمة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">2. وصف الخدمة</h2>
            <p>
              Codeza هي أداة مجانية لتحميل الوسائط من منصات متعددة. نحن نوفر خدمة استخراج الروابط المباشرة للوسائط فقط، ولا نقوم بتخزين أو استضافة أي محتوى على خوادمنا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">3. الاستخدام المسموح به</h2>
            <p>يُسمح لك باستخدام Codeza فقط للأغراض القانونية والمشروعة:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>تحميل المحتوى الذي تملك حقوق استخدامه</li>
              <li>تحميل المحتوى العام المتاح للاستخدام الشخصي</li>
              <li>الالتزام بقوانين حقوق الملكية الفكرية</li>
              <li>عدم استخدام الخدمة لأغراض غير قانونية</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">4. الاستخدام غير المسموح به</h2>
            <p>يُحظر عليك:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>تحميل محتوى محمي بحقوق الملكية الفكرية بدون إذن</li>
              <li>استخدام الخدمة لأغراض تجارية غير مصرح بها</li>
              <li>محاولة اختراق أو إساءة استخدام الخدمة</li>
              <li>نشر محتوى مخالف للقوانين</li>
              <li>استخدام الخدمة بطرق قد تضر بالآخرين</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">5. عدم تحمل المسؤولية</h2>
            <p>
              نحن لا نتحمل أي مسؤولية عن الاستخدام غير القانوني أو المخالف لحقوق الملكية الفكرية. المستخدم هو المسؤول الوحيد عن محتوى التحميل والاستخدام.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">6. حقوق الملكية الفكرية</h2>
            <p>
              جميع محتويات Codeza، بما في ذلك التصميم والشعار والنصوص، محمية بحقوق الملكية الفكرية. لا يُسمح بنسخ أو إعادة إنتاج أي محتوى بدون إذن صريح.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">7. تعديل الخدمة</h2>
            <p>
              نحتفظ بالحق في تعديل أو إيقاف الخدمة في أي وقت دون إشعار مسبق. نحن لا نتحمل أي مسؤولية عن أي خسائر ناتجة عن هذه التعديلات.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">8. الحد من المسؤولية</h2>
            <p>
              في أي حال من الأحوال، لا تكون Codeza مسؤولة عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة ناتجة عن استخدام أو عدم القدرة على استخدام الخدمة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">9. القانون الحاكم</h2>
            <p>
              تخضع هذه الشروط للقوانين المعمول بها. أي نزاع يتعلق بهذه الشروط يجب أن يتم حله من خلال الوسائل القانونية المناسبة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">10. التواصل</h2>
            <p>
              إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا على البريد الإلكتروني: al2825615@gmail.com
            </p>
          </section>

          <div className="bg-red-50 border-2 border-red-600 p-6 rounded mt-8">
            <p className="text-sm font-semibold">
              ⚠️ تنبيه: بآستخدامك لهذه الخدمة، فإنك تقبل جميع الشروط والأحكام المذكورة أعلاه. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الخدمة.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
