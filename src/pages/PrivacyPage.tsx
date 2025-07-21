import React from 'react';
import { Shield, Lock, Eye, UserCheck, Database, FileText } from 'lucide-react';

const PrivacyPage = () => {
  const sections = [
    {
      icon: UserCheck,
      title: 'جمع‌آوری اطلاعات',
      content: `
        ما اطلاعات شما را در موارد زیر جمع‌آوری می‌کنیم:
        • هنگام ثبت‌نام در سایت
        • هنگام خرید دوره‌ها
        • استفاده از خدمات ما
        • ارتباط با پشتیبانی
        
        اطلاعات جمع‌آوری شده شامل نام، ایمیل، شماره تلفن و اطلاعات پرداخت می‌شود.
      `
    },
    {
      icon: Database,
      title: 'استفاده از اطلاعات',
      content: `
        اطلاعات شما برای موارد زیر استفاده می‌شود:
        • ارائه خدمات آموزشی
        • پردازش پرداخت‌ها
        • پشتیبانی کاربران
        • بهبود خدمات
        • ارسال اطلاعات مهم
        
        ما هرگز اطلاعات شما را بدون اجازه به اشخاص ثالث نمی‌دهیم.
      `
    },
    {
      icon: Lock,
      title: 'امنیت اطلاعات',
      content: `
        امنیت اطلاعات شما برای ما بسیار مهم است:
        • استفاده از رمزنگاری SSL
        • سرورهای امن و محافظت شده
        • دسترسی محدود به اطلاعات
        • نظارت مستمر بر امنیت
        • بک‌آپ منظم اطلاعات
        
        تمام اطلاعات با بالاترین استانداردهای امنیتی محافظت می‌شوند.
      `
    },
    {
      icon: Eye,
      title: 'حقوق کاربران',
      content: `
        شما حقوق زیر را در رابطه با اطلاعات خود دارید:
        • دسترسی به اطلاعات شخصی
        • تصحیح اطلاعات نادرست
        • حذف اطلاعات
        • انتقال اطلاعات
        • شکایت از نقض حریم خصوصی
        
        برای اعمال این حقوق با ما تماس بگیرید.
      `
    },
    {
      icon: FileText,
      title: 'کوکی‌ها',
      content: `
        ما از کوکی‌ها برای بهبود تجربه کاربری استفاده می‌کنیم:
        • کوکی‌های ضروری برای عملکرد سایت
        • کوکی‌های تحلیلی برای درک رفتار کاربران
        • کوکی‌های تبلیغاتی برای نمایش محتوای مرتبط
        
        شما می‌توانید تنظیمات کوکی‌ها را در مرورگر خود تغییر دهید.
      `
    }
  ];

  const contactInfo = [
    { label: 'ایمیل', value: 'privacy@ghaledanesh.com' },
    { label: 'تلفن', value: '+98 21 1234 5678' },
    { label: 'آدرس', value: 'تهران، خیابان آزادی، پلاک ۱۲۳' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            سیاست حریم خصوصی
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            حفظ حریم خصوصی و امنیت اطلاعات شما اولویت اصلی ماست
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-blue-50 rounded-lg p-4 mb-8 text-center">
          <p className="text-blue-800">
            آخرین بروزرسانی: ۱۴۰۳/۰۱/۰۱
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">مقدمه</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            قلعه دانش متعهد به حفظ حریم خصوصی کاربران خود است. این سیاست توضیح می‌دهد که چگونه 
            اطلاعات شخصی شما را جمع‌آوری، استفاده، محافظت و به اشتراک می‌گذاریم.
          </p>
          <p className="text-slate-700 leading-relaxed">
            با استفاده از خدمات ما، شما با شرایط این سیاست موافقت می‌کنید. لطفاً این متن را 
            به دقت مطالعه کنید.
          </p>
        </div>

        {/* Main Sections */}
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-4 space-x-reverse mb-6">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center">
                <section.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
            </div>
            
            <div className="text-slate-700 leading-relaxed whitespace-pre-line">
              {section.content}
            </div>
          </div>
        ))}

        {/* Data Retention */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">مدت نگهداری اطلاعات</h2>
          <div className="space-y-4">
            <div className="border-r-4 border-blue-500 pr-4">
              <h3 className="font-semibold text-slate-900 mb-2">اطلاعات حساب کاربری</h3>
              <p className="text-slate-700">
                تا زمانی که حساب شما فعال است یا به منظور ارائه خدمات نگهداری می‌شود.
              </p>
            </div>
            
            <div className="border-r-4 border-green-500 pr-4">
              <h3 className="font-semibold text-slate-900 mb-2">اطلاعات پرداخت</h3>
              <p className="text-slate-700">
                به مدت ۷ سال طبق قوانین مالیاتی نگهداری می‌شود.
              </p>
            </div>
            
            <div className="border-r-4 border-purple-500 pr-4">
              <h3 className="font-semibold text-slate-900 mb-2">لاگ‌های سیستم</h3>
              <p className="text-slate-700">
                به مدت ۱ سال برای اهداف امنیتی و رفع مشکل نگهداری می‌شود.
              </p>
            </div>
          </div>
        </div>

        {/* Changes to Policy */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">تغییرات در سیاست</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            ما ممکن است این سیاست حریم خصوصی را هر از گاهی به‌روزرسانی کنیم. تغییرات مهم 
            از طریق ایمیل یا اعلان در سایت به اطلاع شما خواهد رسید.
          </p>
          <p className="text-slate-700 leading-relaxed">
            ادامه استفاده از خدمات پس از اعلام تغییرات، به منزله پذیرش سیاست جدید است.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">تماس با ما</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            در صورت داشتن سوال درباره این سیاست حریم خصوصی، با ما تماس بگیرید:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-2">{info.label}</h3>
                <p className="text-slate-700">{info.value}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg">
            <p className="text-center text-slate-700">
              <strong>مسئول حفاظت از داده‌ها:</strong> تیم امنیت قلعه دانش
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;