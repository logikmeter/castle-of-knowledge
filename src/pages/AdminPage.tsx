import React, { useState } from 'react';
import { BarChart3, Users, BookOpen, DollarSign, Play, Settings, Upload, Edit, Trash2, Eye } from 'lucide-react';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const sidebarItems = [
    { id: 'dashboard', label: 'داشبورد', icon: BarChart3 },
    { id: 'courses', label: 'مدیریت دوره‌ها', icon: BookOpen },
    { id: 'users', label: 'مدیریت کاربران', icon: Users },
    { id: 'videos', label: 'مدیریت ویدیوها', icon: Play },
    { id: 'revenue', label: 'گزارش مالی', icon: DollarSign },
    { id: 'settings', label: 'تنظیمات', icon: Settings },
  ];

  const stats = [
    { label: 'کل کاربران', value: '10,247', change: '+12%', color: 'text-blue-600' },
    { label: 'دوره‌های فعال', value: '542', change: '+8%', color: 'text-emerald-600' },
    { label: 'درآمد ماه جاری', value: '425M تومان', change: '+23%', color: 'text-purple-600' },
    { label: 'ویدیوهای آپلود شده', value: '1,856', change: '+15%', color: 'text-orange-600' }
  ];

  const courses = [
    {
      id: 1,
      title: 'دوره جامع برنامه‌نویسی وب',
      instructor: 'محمد احمدی',
      students: 1250,
      status: 'فعال',
      lastUpdate: '۱۴۰۳/۰۱/۲۰',
      revenue: '125M تومان'
    },
    {
      id: 2,
      title: 'امنیت سایبری پیشرفته',
      instructor: 'علی رضایی',
      students: 890,
      status: 'فعال',
      lastUpdate: '۱۴۰۳/۰۱/۱۸',
      revenue: '89M تومان'
    },
    {
      id: 3,
      title: 'طراحی UI/UX حرفه‌ای',
      instructor: 'فاطمه کریمی',
      students: 1050,
      status: 'در حال ویرایش',
      lastUpdate: '۱۴۰۳/۰۱/۱۵',
      revenue: '78M تومان'
    }
  ];

  const users = [
    {
      id: 1,
      name: 'احمد محمدی',
      email: 'ahmad@example.com',
      phone: '09123456789',
      joinDate: '۱۴۰۲/۱۰/۱۵',
      status: 'فعال',
      courses: 3,
      totalSpent: '7.5M تومان'
    },
    {
      id: 2,
      name: 'فاطمه رضایی',
      email: 'fateme@example.com',
      phone: '09987654321',
      joinDate: '۱۴۰۲/۱۱/۲۰',
      status: 'فعال',
      courses: 2,
      totalSpent: '5.2M تومان'
    },
    {
      id: 3,
      name: 'علی احمدی',
      email: 'ali@example.com',
      phone: '09111111111',
      joinDate: '۱۴۰۳/۰۱/۰۵',
      status: 'غیرفعال',
      courses: 1,
      totalSpent: '2.8M تومان'
    }
  ];

  const videos = [
    {
      id: 1,
      title: 'مقدمه React.js',
      course: 'دوره برنامه‌نویسی وب',
      duration: '45:30',
      uploadDate: '۱۴۰۳/۰۱/۲۰',
      views: 1250,
      status: 'منتشر شده',
      security: 'فعال'
    },
    {
      id: 2,
      title: 'مفاهیم امنیت شبکه',
      course: 'امنیت سایبری',
      duration: '62:15',
      uploadDate: '۱۴۰۳/۰۱/۱۸',
      views: 890,
      status: 'در حال پردازش',
      security: 'فعال'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="text-center mb-6 pb-6 border-b border-slate-200">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  ادمین
                </div>
                <h3 className="text-lg font-semibold text-slate-900">پنل مدیریت</h3>
                <p className="text-slate-600 text-sm">قلعه دانش</p>
              </div>

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
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-slate-900">داشبورد مدیریت</h2>
                  <div className="text-slate-600">به‌روزرسانی: ۱۴۰۳/۰۱/۲۰</div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                          {stat.value}
                        </div>
                        <div className="text-slate-600 text-sm mb-2">{stat.label}</div>
                        <div className="text-green-600 text-xs font-semibold">
                          {stat.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-6">
                    فعالیت‌های اخیر
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div>
                        <div className="font-medium text-slate-900">ثبت‌نام کاربر جدید</div>
                        <div className="text-sm text-slate-600">احمد محمدی در دوره React ثبت‌نام کرد</div>
                      </div>
                      <div className="text-sm text-slate-500">۲ ساعت پیش</div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div>
                        <div className="font-medium text-slate-900">آپلود ویدیو جدید</div>
                        <div className="text-sm text-slate-600">ویدیو "مقدمه Node.js" آپلود شد</div>
                      </div>
                      <div className="text-sm text-slate-500">۴ ساعت پیش</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'courses' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-slate-900">مدیریت دوره‌ها</h2>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 space-x-reverse transition-colors">
                    <Upload className="h-4 w-4" />
                    <span>دوره جدید</span>
                  </button>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                            عنوان دوره
                          </th>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                            مدرس
                          </th>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                            دانشجو
                          </th>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                            وضعیت
                          </th>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                            درآمد
                          </th>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                            عملیات
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {courses.map((course) => (
                          <tr key={course.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4">
                              <div className="font-medium text-slate-900">{course.title}</div>
                              <div className="text-sm text-slate-500">به‌روزرسانی: {course.lastUpdate}</div>
                            </td>
                            <td className="px-6 py-4 text-slate-700">{course.instructor}</td>
                            <td className="px-6 py-4 text-slate-700">{course.students.toLocaleString('fa-IR')}</td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                course.status === 'فعال' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {course.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-slate-700">{course.revenue}</td>
                            <td className="px-6 py-4">
                              <div className="flex items-center space-x-2 space-x-reverse">
                                <button className="text-blue-600 hover:text-blue-700">
                                  <Eye className="h-4 w-4" />
                                </button>
                                <button className="text-green-600 hover:text-green-700">
                                  <Edit className="h-4 w-4" />
                                </button>
                                <button className="text-red-600 hover:text-red-700">
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-slate-900">مدیریت کاربران</h2>
                  <div className="text-slate-600">{users.length.toLocaleString('fa-IR')} کاربر</div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                            کاربر
                          </th>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                            تاریخ عضویت
                          </th>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                            دوره‌ها
                          </th>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                            کل خرید
                          </th>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                            وضعیت
                          </th>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                            عملیات
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {users.map((user) => (
                          <tr key={user.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4">
                              <div className="font-medium text-slate-900">{user.name}</div>
                              <div className="text-sm text-slate-500">{user.email}</div>
                              <div className="text-sm text-slate-500">{user.phone}</div>
                            </td>
                            <td className="px-6 py-4 text-slate-700">{user.joinDate}</td>
                            <td className="px-6 py-4 text-slate-700">{user.courses}</td>
                            <td className="px-6 py-4 text-slate-700">{user.totalSpent}</td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                user.status === 'فعال' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {user.status}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center space-x-2 space-x-reverse">
                                <button className="text-blue-600 hover:text-blue-700">
                                  <Eye className="h-4 w-4" />
                                </button>
                                <button className="text-green-600 hover:text-green-700">
                                  <Edit className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'videos' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-slate-900">مدیریت ویدیوها</h2>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 space-x-reverse transition-colors">
                    <Upload className="h-4 w-4" />
                    <span>آپلود ویدیو</span>
                  </button>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                            عنوان ویدیو
                          </th>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                            مدت زمان
                          </th>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                            بازدید
                          </th>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                            وضعیت
                          </th>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                            امنیت
                          </th>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                            عملیات
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {videos.map((video) => (
                          <tr key={video.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4">
                              <div className="font-medium text-slate-900">{video.title}</div>
                              <div className="text-sm text-slate-500">{video.course}</div>
                              <div className="text-sm text-slate-500">آپلود: {video.uploadDate}</div>
                            </td>
                            <td className="px-6 py-4 text-slate-700">{video.duration}</td>
                            <td className="px-6 py-4 text-slate-700">{video.views.toLocaleString('fa-IR')}</td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                video.status === 'منتشر شده' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {video.status}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                                {video.security}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center space-x-2 space-x-reverse">
                                <button className="text-blue-600 hover:text-blue-700">
                                  <Play className="h-4 w-4" />
                                </button>
                                <button className="text-green-600 hover:text-green-700">
                                  <Edit className="h-4 w-4" />
                                </button>
                                <button className="text-red-600 hover:text-red-700">
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {['revenue', 'settings'].includes(activeTab) && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {activeTab === 'revenue' ? 'گزارش مالی' : 'تنظیمات سیستم'}
                </h2>
                <div className="text-center py-8 text-slate-600">
                  این بخش در حال توسعه است...
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;