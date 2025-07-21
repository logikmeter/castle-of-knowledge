import React from 'react';
import { Shield, Users, Award, Target, CheckCircle, Heart } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: 'محمد احمدی',
      role: 'مدیرعامل و بنیانگذار',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'بیش از ۱۰ سال تجربه در حوزه آموزش و تکنولوژی'
    },
    {
      name: 'فاطمه کریمی',
      role: 'مدیر آموزش و محتوا',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'متخصص طراحی UI/UX و تجربه کاربری'
    },
    {
      name: 'علی رضایی',
      role: 'مدیر امنیت و فناوری',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'خبره امنیت سایبری و معماری سیستم'
    },
    {
      name: 'رضا احمدی',
      role: 'مدیر توسعه محصول',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'متخصص DevOps و توسعه نرم‌افزار'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'امنیت',
      description: 'محافظت از حقوق مالکیت فکری و اطلاعات کاربران با بالاترین استانداردها'
    },
    {
      icon: Users,
      title: 'کیفیت',
      description: 'ارائه محتوای آموزشی با بالاترین کیفیت توسط اساتید مجرب'
    },
    {
      icon: Award,
      title: 'تعهد',
      description: 'تعهد به ارائه بهترین تجربه یادگیری برای تمام دانشجویان'
    },
    {
      icon: Target,
      title: 'نوآوری',
      description: 'استفاده از آخرین تکنولوژی‌ها برای بهبود فرآیند یادگیری'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'دانشجوی فعال', color: 'text-blue-600' },
    { number: '500+', label: 'دوره آموزشی', color: 'text-emerald-600' },
    { number: '100+', label: 'مدرس متخصص', color: 'text-purple-600' },
    { number: '98%', label: 'رضایت کاربران', color: 'text-orange-600' }
  ];

  const achievements = [
    'رتبه یک پلتفرم آموزشی امن در ایران',
    'بیش از ۵۰ هزار فارغ‌التحصیل موفق',
    'همکاری با بیش از ۲۰۰ شرکت معتبر',
    'دریافت گواهی‌نامه‌های بین‌المللی امنیت'
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Shield className="h-20 w-20 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">درباره قلعه دانش</h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            پیشگام در ارائه آموزش آنلاین امن و با کیفیت در ایران
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">ماموریت ما</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                قلعه دانش با هدف ایجاد یک پلتفرم آموزشی کاملاً امن و حرفه‌ای تأسیس شده است. 
                ما معتقدیم که آموزش با کیفیت حق همه افراد است و باید در محیطی امن و قابل اعتماد ارائه شود.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                با استفاده از پیشرفته‌ترین تکنولوژی‌های امنیتی، ما تضمین می‌کنیم که محتوای آموزشی 
                شما در امان باشد و حقوق مالکیت فکری مدرسین محفوظ بماند.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-slate-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="تیم قلعه دانش"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-blue-600/10 rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              ارزش‌های ما
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              اصول و ارزش‌هایی که در تمام فعالیت‌هایمان رعایت می‌کنیم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              تیم ما
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              تیمی از متخصصان مجرب که برای موفقیت شما تلاش می‌کنند
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                دستاوردهای ما
              </h2>
              <p className="text-xl text-slate-600">
                نتایج تلاش‌های مستمر تیم قلعه دانش
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 text-lg">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
            <Heart className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              بخشی از خانواده ما شوید
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              آماده هستید تا مسیر یادگیری خود را در محیطی امن و حرفه‌ای آغاز کنید؟
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                ثبت‌نام رایگان
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                تماس با ما
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;