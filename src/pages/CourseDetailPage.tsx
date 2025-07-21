import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Users, Clock, CheckCircle, Play, Download, Shield, ArrowLeft, BookOpen } from 'lucide-react';

const CourseDetailPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Simulate course data (in real app, fetch from API)
  const course = {
    id: 1,
    title: 'دوره جامع برنامه‌نویسی وب',
    instructor: 'محمد احمدی',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 2500000,
    originalPrice: 3000000,
    rating: 4.8,
    students: 1250,
    duration: '40 ساعت',
    level: 'مقدماتی تا پیشرفته',
    language: 'فارسی',
    description: 'این دوره جامع برنامه‌نویسی وب، شما را از مبتدی به یک توسعه‌دهنده حرفه‌ای وب تبدیل می‌کند. در این دوره با آخرین تکنولوژی‌های وب آشنا شده و پروژه‌های واقعی انجام خواهید داد.',
    requirements: [
      'دانش پایه کامپیوتر',
      'علاقه به یادگیری برنامه‌نویسی',
      'صبر و پشتکار برای یادگیری'
    ],
    outcomes: [
      'تسلط بر HTML, CSS و JavaScript',
      'آشنایی کامل با React.js',
      'یادگیری Node.js و Express',
      'کار با دیتابیس MongoDB',
      'درک مفاهیم امنیت وب',
      'انجام پروژه نهایی کامل'
    ],
    chapters: [
      {
        id: 1,
        title: 'مقدمات توسعه وب',
        duration: '3 ساعت',
        lessons: [
          { id: 1, title: 'آشنایی با HTML', duration: '45 دقیقه', preview: true },
          { id: 2, title: 'استایل‌دهی با CSS', duration: '60 دقیقه', preview: false },
          { id: 3, title: 'JavaScript پایه', duration: '75 دقیقه', preview: true }
        ]
      },
      {
        id: 2,
        title: 'React.js پیشرفته',
        duration: '8 ساعت',
        lessons: [
          { id: 4, title: 'مقدمه React', duration: '90 دقیقه', preview: false },
          { id: 5, title: 'Components و Props', duration: '120 دقیقه', preview: false },
          { id: 6, title: 'State Management', duration: '150 دقیقه', preview: false }
        ]
      },
      {
        id: 3,
        title: 'Backend با Node.js',
        duration: '10 ساعت',
        lessons: [
          { id: 7, title: 'آشنایی با Node.js', duration: '90 دقیقه', preview: false },
          { id: 8, title: 'Express Framework', duration: '120 دقیقه', preview: false },
          { id: 9, title: 'دیتابیس و MongoDB', duration: '180 دقیقه', preview: false }
        ]
      }
    ]
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  const tabs = [
    { id: 'overview', label: 'نمای کلی' },
    { id: 'curriculum', label: 'سرفصل‌ها' },
    { id: 'instructor', label: 'مدرس' },
    { id: 'reviews', label: 'نظرات' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 space-x-reverse text-sm text-slate-600">
            <Link to="/" className="hover:text-blue-600">خانه</Link>
            <span>/</span>
            <Link to="/courses" className="hover:text-blue-600">دوره‌ها</Link>
            <span>/</span>
            <span className="text-slate-900">{course.title}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {course.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center space-x-1 space-x-reverse">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-slate-600">({course.students} دانشجو)</span>
                </div>
                
                <div className="flex items-center space-x-1 space-x-reverse text-slate-600">
                  <Clock className="h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
                
                <div className="flex items-center space-x-1 space-x-reverse text-slate-600">
                  <BookOpen className="h-5 w-5" />
                  <span>{course.level}</span>
                </div>

                <div className="flex items-center space-x-1 space-x-reverse text-slate-600">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span>پخش امن</span>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">
                {course.description}
              </p>

              <div className="text-sm text-slate-600">
                مدرس: <span className="font-semibold text-slate-900">{course.instructor}</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="border-b border-slate-200">
                <nav className="flex">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-8">
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">
                        چه چیزی یاد خواهید گرفت؟
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {course.outcomes.map((outcome, index) => (
                          <div key={index} className="flex items-start space-x-2 space-x-reverse">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">
                        پیش‌نیازهای دوره
                      </h3>
                      <div className="space-y-2">
                        {course.requirements.map((req, index) => (
                          <div key={index} className="flex items-center space-x-2 space-x-reverse">
                            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                            <span className="text-slate-700">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'curriculum' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-slate-900">
                      محتوای دوره ({course.chapters.length} فصل)
                    </h3>
                    
                    {course.chapters.map((chapter) => (
                      <div key={chapter.id} className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-50 p-4 border-b border-slate-200">
                          <div className="flex justify-between items-center">
                            <h4 className="font-semibold text-slate-900">{chapter.title}</h4>
                            <span className="text-sm text-slate-600">{chapter.duration}</span>
                          </div>
                        </div>
                        
                        <div className="divide-y divide-slate-200">
                          {chapter.lessons.map((lesson) => (
                            <div key={lesson.id} className="p-4 flex items-center justify-between hover:bg-slate-50">
                              <div className="flex items-center space-x-3 space-x-reverse">
                                <Play className="h-5 w-5 text-blue-600" />
                                <div>
                                  <div className="font-medium text-slate-900">{lesson.title}</div>
                                  <div className="text-sm text-slate-600">{lesson.duration}</div>
                                </div>
                              </div>
                              
                              {lesson.preview && (
                                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                                  پیش‌نمایش
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'instructor' && (
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                      {course.instructor.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{course.instructor}</h3>
                    <p className="text-slate-600 mb-4">توسعه‌دهنده Senior Full Stack</p>
                    <p className="text-slate-700 leading-relaxed">
                      بیش از ۸ سال تجربه در توسعه وب و آموزش برنامه‌نویسی. تخصص در React، Node.js و معماری سیستم‌های مقیاس‌پذیر.
                    </p>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-6">
                      نظرات دانشجویان ({course.students} نظر)
                    </h3>
                    <div className="text-center py-8 text-slate-600">
                      نظرات در حال بارگذاری...
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              {/* Video Preview */}
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <button className="bg-white/90 hover:bg-white text-blue-600 w-16 h-16 rounded-full flex items-center justify-center transition-colors">
                    <Play className="h-8 w-8 mr-1" />
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
                  پخش امن
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  {formatPrice(course.price)} تومان
                </div>
                {course.originalPrice > course.price && (
                  <div className="text-lg text-slate-500 line-through">
                    {formatPrice(course.originalPrice)} تومان
                  </div>
                )}
              </div>

              {/* Enroll Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg text-lg font-semibold transition-colors mb-4">
                ثبت‌نام در دوره
              </button>

              {/* Course Info */}
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">مدت زمان:</span>
                  <span className="font-semibold">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">سطح:</span>
                  <span className="font-semibold">{course.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">زبان:</span>
                  <span className="font-semibold">{course.language}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">دانشجویان:</span>
                  <span className="font-semibold">{course.students.toLocaleString('fa-IR')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">گواهی:</span>
                  <span className="font-semibold">دارد</span>
                </div>
              </div>

              {/* Features */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">این دوره شامل:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Play className="h-4 w-4 text-blue-600" />
                    <span>ویدیوهای با کیفیت HD</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Download className="h-4 w-4 text-blue-600" />
                    <span>فایل‌های تمرینی</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Shield className="h-4 w-4 text-blue-600" />
                    <span>پخش امن و محافظت شده</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>گواهی پایان دوره</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;