import React from 'react';
import { FileText, CheckCircle, AlertTriangle, Users, CreditCard, Shield } from 'lucide-react';

const TermsPage = () => {
  const sections = [
    {
      icon: Users,
      title: 'کاربران و حساب‌ها',
      content: `
        • ثبت‌نام در سایت برای افراد بالای ۱۶ سال مجاز است
        • اطلاعات ثبت‌نامی باید صحیح و کامل باشد
        • هر کاربر مسئول حفظ امنیت حساب خود است
        • استفاده از حساب توسط دیگران ممنوع است
        • در صورت نقض قوانین، حساب کاربری مسدود خواهد شد
        
        مسئولیت حفظ رمز عبور و امنیت حساب بر عهده کاربر است.
      `
    },
    {
      icon: CreditCard,
      title: 'خرید و پرداخت',
      content: `
        • تمام قیمت‌ها به تومان و شامل مالیات می‌باشد
        • پرداخت از طریق درگاه‌های معتبر انجام می‌شود
        • پس از پرداخت، دسترسی به دوره فوراً فعال می‌شود
        • امکان بازگشت وجه تا ۷ روز پس از خرید وجود دارد
        • در صورت مشکل فنی، وجه بازگردانده خواهد شد
        
        تمام تراکنش‌ها توسط سیستم‌های امن پردازش می‌شوند.
      `
    },
    {
      icon: Shield,
      title: 'حقوق مالکیت فکری',
      content: `
        • تمام محتوای سایت دارای حق کپی‌رایت است
        • دانلود، کپی یا توزیع محتوا بدون اجازه ممنوع است
        • ضبط یا اسکرین‌شات از ویدیوها ممنوع است
        • نقض حقوق مالکیت فکری پیگرد قانونی دارد
        • محتوا فقط برای استفاده شخصی و آموزشی است
        
        ما از پیشرفته‌ترین تکنولوژی‌ها برای محافظت از محتوا استفاده می‌کنیم.
      `
    },
    {
      icon: CheckCircle,
      title: 'استفاده مجاز',
      content: `
        • دسترسی به محتوا فقط توسط خریدار مجاز است
        • استفاده تجاری از محتوا ممنوع است
        • به اشتراک گذاری حساب کاربری ممنوع است
        • فعالیت‌های مخرب یا غیرقانونی ممنوع است
        • احترام به سایر کاربران الزامی است
        
        نقض این قوانین منجر به تعلیق یا لغو حساب خواهد شد.
      `
    },
    {
      icon: AlertTriangle,
      title: 'محدودیت مسئولیت',
      content: `
        • خدمات "همان‌طور که هست" ارائه می‌شود
        • ما تضمین دسترسی ۱۰۰٪ به سرویس نمی‌دهیم
        • مسئولیت ما محدود به مبلغ پرداختی است
        • خسارات غیرمستقیم پوشش داده نمی‌شود
        • کاربر مسئول استفاده صحیح از خدمات است
        
        ما تلاش می‌کنیم بهترین خدمات را ارائه دهیم اما محدودیت‌هایی وجود دارد.
      `
    }
  ];

  const importantPoints = [
    'این قوانین قابل تغییر است و کاربران باید آن‌ها را پیگیری کنند',
    'استفاده از سایت به منزله پذیرش این قوانین است',
    'تفسیر قوانین با قلعه دانش است',
    'دادگاه‌های تهران صالح رسیدگی به اختلافات هستند',
    'قوانین ایران بر این توافقنامه حاکم است'
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <FileText className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            قوانین و شرایط استفاده
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            لطفاً قبل از استفاده از خدمات قلعه دانش، این قوانین را به دقت مطالعه کنید
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
            به پلتفرم آموزشی قلعه دانش خوش آمدید. با دسترسی و استفاده از خدمات ما، شما با 
            قوانین و شرایط زیر موافقت می‌کنید.
          </p>
          <p className="text-slate-700 leading-relaxed">
            این قوانین بین شما (کاربر) و شرکت قلعه دانش قابل اجرا است. در صورت عدم موافقت 
            با هر قسمت از این قوانین، لطفاً از خدمات ما استفاده نکنید.
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

        {/* Refund Policy */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">سیاست بازگشت وجه</h2>
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">✅ موارد قابل بازگشت</h3>
              <ul className="text-green-700 space-y-1">
                <li>• عدم دسترسی به محتوای خریداری شده</li>
                <li>• مشکلات فنی حل‌نشدنی</li>
                <li>• عدم تطابق محتوا با توضیحات ارائه شده</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 mb-2">❌ موارد غیرقابل بازگشت</h3>
              <ul className="text-red-700 space-y-1">
                <li>• گذشت بیش از ۷ روز از زمان خرید</li>
                <li>• مشاهده بیش از ۳۰٪ محتوای دوره</li>
                <li>• تغییر نظر شخصی کاربر</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">ℹ️ فرآیند بازگشت وجه</h3>
              <p className="text-blue-700">
                درخواست بازگشت وجه از طریق تماس با پشتیبانی و حداکثر ظرف ۱۴ روز کاری پردازش می‌شود.
              </p>
            </div>
          </div>
        </div>

        {/* Service Availability */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">دسترسی به خدمات</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            ما تلاش می‌کنیم خدمات را ۲۴ ساعته در دسترس قرار دهیم، اما ممکن است در موارد زیر 
            خدمات موقتاً قطع شود:
          </p>
          
          <ul className="text-slate-700 space-y-2 mb-4">
            <li>• نگهداری و به‌روزرسانی سیستم</li>
            <li>• مشکلات فنی غیرقابل پیش‌بینی</li>
            <li>• قوانین و مقررات دولتی</li>
            <li>• حوادث طبیعی یا فورس ماژور</li>
          </ul>
          
          <p className="text-slate-700 leading-relaxed">
            در چنین مواردی، ما در اسرع وقت خدمات را بازگردانی خواهیم کرد و کاربران را مطلع خواهیم کرد.
          </p>
        </div>

        {/* Important Notes */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">نکات مهم</h2>
          <div className="space-y-3">
            {importantPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-3 space-x-reverse">
                <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">تماس با ما</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            در صورت داشتن سوال درباره این قوانین و شرایط، با ما تماس بگیرید:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <h3 className="font-semibold text-slate-900 mb-2">ایمیل</h3>
              <p className="text-slate-700">legal@ghaledanesh.com</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <h3 className="font-semibold text-slate-900 mb-2">تلفن</h3>
              <p className="text-slate-700">+98 21 1234 5678</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <h3 className="font-semibold text-slate-900 mb-2">آدرس</h3>
              <p className="text-slate-700">تهران، خیابان آزادی، پلاک ۱۲۳</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;