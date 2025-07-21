import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Play, Users, Award, BookOpen, Star, ArrowLeft, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Shield,
      title: 'امنیت بالا',
      description: 'سیستم امنیتی پیشرفته برای محافظت از محتوای آموزشی'
    },
    {
      icon: Play,
      title: 'پخش زنده',
      description: 'کلاس‌های آنلاین زنده با تاخیر حداقل'
    },
    {
      icon: BookOpen,
      title: 'محتوای غنی',
      description: 'دسترسی به جزوات و منابع آموزشی تکمیلی'
    },
    {
      icon: Award,
      title: 'گواهی معتبر',
      description: 'دریافت گواهی نامه معتبر پس از اتمام دوره'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'دانشجو فعال' },
    { number: '500+', label: 'دوره آموزشی' },
    { number: '100+', label: 'مدرس متخصص' },
    { number: '98%', label: 'رضایت کاربران' }
  ];

  const courses = [
    {
      id: 1,
      title: 'دوره جامع برنامه‌نویسی وب',
      instructor: 'محمد احمدی',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '2,500,000',
      rating: 4.8,
      students: 1250,
      duration: '40 ساعت'
    },
    {
      id: 2,
      title: 'امنیت سایبری پیشرفته',
      instructor: 'علی رضایی',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '3,000,000',
      rating: 4.9,
      students: 890,
      duration: '35 ساعت'
    },
    {
      id: 3,
      title: 'طراحی UI/UX حرفه‌ای',
      instructor: 'فاطمه کریمی',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '2,200,000',
      rating: 4.7,
      students: 1050,
      duration: '30 ساعت'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-emerald-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Shield className="h-24 w-24 text-blue-600 animate-pulse" />
              <div className="absolute inset-0 bg-blue-600/20 rounded-full animate-ping"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            آموزش امن و
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600"> حرفه‌ای</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            در قلعه دانش، با بالاترین استانداردهای امنیتی و کیفیت، مهارت‌های خود را توسعه دهید
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/courses"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 space-x-reverse"
            >
              <BookOpen className="h-6 w-6" />
              <span>مشاهده دوره‌ها</span>
            </Link>
            <Link
              to="/register"
              className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 border-2 border-slate-200 hover:border-blue-300 flex items-center space-x-2 space-x-reverse"
            >
              <Users className="h-6 w-6" />
              <span>ثبت‌نام رایگان</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-slate-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              چرا قلعه دانش؟
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              ویژگی‌های منحصر به فرد پلتفرم ما که تجربه یادگیری شما را متفاوت می‌کند
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-slate-600 text-center leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              دوره‌های پرطرفدار
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              دوره‌هایی که بیشترین علاقه را در بین دانشجویان داشته‌اند
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 mb-4">مدرس: {course.instructor}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="text-slate-700 font-medium">{course.rating}</span>
                      <span className="text-slate-500">({course.students} دانشجو)</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-slate-900">
                      {course.price} تومان
                    </div>
                    <Link
                      to={`/course/${course.id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center space-x-1 space-x-reverse"
                    >
                      <span>مشاهده دوره</span>
                      <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2 space-x-reverse"
            >
              <span>مشاهده همه دوره‌ها</span>
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            آماده شروع یادگیری هستید؟
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            همین حالا عضو خانواده بزرگ قلعه دانش شوید و مسیر رشد خود را آغاز کنید
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white hover:bg-slate-50 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2 space-x-reverse"
            >
              <CheckCircle className="h-6 w-6" />
              <span>ثبت‌نام رایگان</span>
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2 space-x-reverse"
            >
              <span>تماس با ما</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;