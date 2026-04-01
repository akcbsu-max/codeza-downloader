import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <div className="container max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">سياسة الخصوصية</h1>

        <div className="space-y-8 text-gray-800 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">1. مقدمة</h2>
            <p>
              نحن في Codeza نلتزم بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع واستخدام ومعالجة بيانات المستخدمين.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">2. البيانات التي نجمعها</h2>
            <p>نحن لا نجمع أي بيانات شخصية من المستخدمين. عند استخدام Codeza:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>لا نطلب أي معلومات شخصية (الاسم، البريد الإلكتروني، إلخ)</li>
              <li>لا نقوم بتسجيل أو تخزين الروابط المرسلة</li>
              <li>لا نقوم بتتبع سلوك المستخدمين</li>
              <li>لا نستخدم ملفات تعريف الارتباط (Cookies) للتتبع</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">3. سجلات الخادم</h2>
            <p>
              قد نحتفظ بسجلات خادم عامة لأغراض الصيانة والأمان فقط. هذه السجلات قد تتضمن:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>عناوين IP (لأغراض أمنية فقط)</li>
              <li>وقت الطلب</li>
              <li>نوع المتصفح</li>
            </ul>
            <p className="mt-2">
              لا نستخدم هذه المعلومات لتحديد هويتك أو تتبعك شخصياً.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">4. استخدام البيانات</h2>
            <p>
              نحن لا نستخدم أي بيانات شخصية لأن لا نجمعها. الخدمة تعمل بشكل مجهول تماماً.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">5. الأمان</h2>
            <p>
              نحن نستخدم بروتوكول HTTPS لتشفير جميع الاتصالات. ومع ذلك، لا يمكن ضمان الأمان الكامل على الإنترنت.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">6. الخدمات الخارجية</h2>
            <p>
              Codeza تتصل بـ API خارجي لاستخراج الروابط. لا نتحكم في سياسات الخصوصية الخاصة بهذه الخدمات الخارجية. يرجى مراجعة سياسات الخصوصية الخاصة بهم.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">7. حقوق المستخدم</h2>
            <p>
              بما أننا لا نجمع أي بيانات شخصية، لا توجد بيانات شخصية للوصول إليها أو حذفها. ومع ذلك، إذا كان لديك أي استفسارات، يرجى التواصل معنا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">8. تعديلات السياسة</h2>
            <p>
              قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">9. التواصل</h2>
            <p>
              إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا على: al2825615@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">10. الامتثال للقوانين</h2>
            <p>
              نحن نلتزم بجميع القوانين المعمول بها المتعلقة بحماية البيانات والخصوصية، بما في ذلك GDPR وقوانين الخصوصية الأخرى.
            </p>
          </section>

          <div className="bg-red-50 border-2 border-red-600 p-6 rounded mt-8">
            <p className="text-sm font-semibold">
              ℹ️ معلومة: نحن نقدر خصوصيتك ونلتزم بعدم جمع أو مشاركة أي بيانات شخصية. الخدمة مجهولة تماماً وآمنة.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
