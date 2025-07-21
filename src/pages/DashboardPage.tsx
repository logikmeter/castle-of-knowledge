import React, { useState } from 'react';
import { BookOpen, Play, Clock, Award, Cross as Progress, User, Settings, LogOut, BarChart3, Download } from 'lucide-react';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { id: 'overview', label: 'نمای کلی', icon: BarChart3 },
    { id: 'courses', label: 'دوره‌های من', icon: BookOpen },
    { id: 'progress', label: 'پیشرفت', icon: Progress },
    { id: 'certificates', label: 'گواهی‌نامه‌ها', icon: Award },
    { id: 'profile', label: 'پروفایل', icon: User },
    { id: 'settings', label: 'تنظیمات', icon: Settings },
  ];

  const myCourses = [
    {
      id: 1,
      title: 'دوره جامع برنامه‌نویسی وب',
      instructor: 'محمد احمدی',
      progress: 75,
      lastWatched: '۲ روز پیش',
      totalLessons: 45,
      completedLessons: 34,
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'امنیت سایبری پیشرفته',
      instructor: 'علی رضایی',
      progress: 45,
      lastWatched: '۵ روز پیش',
      totalLessons: 32,
      completedLessons: 14,
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'طراحی UI/UX حرفه‌ای',
      instructor: 'فاطمه کریمی',
      progress: 90,
      lastWatched: '۱ روز پیش',
      totalLessons: 28,
      completedLessons: 25,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const stats = [
    { label: 'دوره‌های ثبت‌نام شده', value: '3', icon: BookOpen },
    { label: 'ساعت مطالعه', value: '127', icon: Clock },
    { label: 'گواهی‌نامه دریافتی', value: '1', icon: Award },
    { label: 'امتیاز کسب شده', value: '2,450', icon: Progress }
  ];

  const recentActivities = [
    { action: 'تکمیل درس', course: 'دوره برنامه‌نویسی وب', time: '۲ ساعت پیش' },
    { action: 'دریافت گواهی', course: 'طراحی UI/UX', time: '۱ روز پیش' },
    { action: 'شروع درس جدید', course: 'امنیت سایبری', time: '۳ روز پیش' },
    { action: 'تکمیل آزمون', course: 'دوره برنامه‌نویسی وب', time: '۵ روز پیش' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              {/* User Profile */}
              <div className="text-center mb-6 pb-6 border-b border-slate-200">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  کا
                </div>
                <h3 className="text-xl font-semibold text-slate-900">کاربر آزمایشی</h3>
                <p className="text-slate-600">دانشجو فعال</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>

              <button className="w-full flex items-center space-x-3 space-x-reverse px-4 py-3 mt-6 text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors">
                <LogOut className="h-5 w-5" />
                <span>خروج</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Welcome Message */}
                <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-2">خوش آمدید! 👋</h2>
                  <p className="text-blue-100">
                    آماده ادامه مسیر یادگیری خود هستید؟ دوره‌های شما منتظرتان هستند.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                      <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <stat.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-6">فعالیت‌های اخیر</h3>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                        <div>
                          <div className="font-medium text-slate-900">{activity.action}</div>
                          <div className="text-sm text-slate-600">{activity.course}</div>
                        </div>
                        <div className="text-sm text-slate-500">{activity.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'courses' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-slate-900">دوره‌های من</h2>
                  <div className="text-slate-600">{myCourses.length} دوره</div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {myCourses.map((course) => (
                    <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-48">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                {course.title}
                              </h3>
                              <p className="text-slate-600">مدرس: {course.instructor}</p>
                            </div>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 space-x-reverse transition-colors">
                              <Play className="h-4 w-4" />
                              <span>ادامه</span>
                            </button>
                          </div>

                          <div className="mb-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm text-slate-600">پیشرفت</span>
                              <span className="text-sm font-medium text-slate-900">
                                {course.progress}% ({course.completedLessons}/{course.totalLessons} درس)
                              </span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-sm text-slate-500">
                            <span>آخرین مشاهده: {course.lastWatched}</span>
                            {course.progress === 100 && (
                              <div className="flex items-center space-x-1 space-x-reverse text-green-600">
                                <Award className="h-4 w-4" />
                                <span>تکمیل شده</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'progress' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">گزارش پیشرفت</h2>
                <div className="text-center py-8 text-slate-600">
                  چارت‌های پیشرفت در حال توسعه...
                </div>
              </div>
            )}

            {activeTab === 'certificates' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-slate-900">گواهی‌نامه‌ها</h2>
                  <div className="text-slate-600">1 گواهی</div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 text-center">
                    <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      گواهی طراحی UI/UX حرفه‌ای
                    </h3>
                    <p className="text-slate-600 mb-4">صادر شده در تاریخ ۱۴۰۳/۰۱/۱۵</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 space-x-reverse mx-auto transition-colors">
                      <Download className="h-4 w-4" />
                      <span>دانلود گواهی</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">اطلاعات پروفایل</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">نام</label>
                      <input
                        type="text"
                        defaultValue="کاربر"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">نام خانوادگی</label>
                      <input
                        type="text"
                        defaultValue="آزمایشی"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">ایمیل</label>
                    <input
                      type="email"
                      defaultValue="test@example.com"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">شماره تلفن</label>
                    <input
                      type="tel"
                      defaultValue="09123456789"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                    ذخیره تغییرات
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">تنظیمات</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-slate-900">اعلان‌ها</div>
                      <div className="text-sm text-slate-600">دریافت اعلان‌های دوره‌ها</div>
                    </div>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-slate-900">ایمیل‌های خبرنامه</div>
                      <div className="text-sm text-slate-600">دریافت آخرین اخبار و بروزرسانی‌ها</div>
                    </div>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-slate-900">پخش خودکار</div>
                      <div className="text-sm text-slate-600">پخش خودکار ویدئوهای بعدی</div>
                    </div>
                    <input type="checkbox" className="toggle" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;