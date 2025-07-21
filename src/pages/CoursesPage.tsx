import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Clock, Filter, Search, ArrowLeft } from 'lucide-react';

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = [
    { id: 'all', name: 'همه دسته‌ها' },
    { id: 'web', name: 'توسعه وب' },
    { id: 'security', name: 'امنیت سایبری' },
    { id: 'design', name: 'طراحی' },
    { id: 'data', name: 'علوم داده' },
    { id: 'mobile', name: 'اپلیکیشن موبایل' },
  ];

  const courses = [
    {
      id: 1,
      title: 'دوره جامع برنامه‌نویسی وب',
      instructor: 'محمد احمدی',
      category: 'web',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 2500000,
      originalPrice: 3000000,
      rating: 4.8,
      students: 1250,
      duration: '40 ساعت',
      level: 'مقدماتی تا پیشرفته',
      description: 'یادگیری کامل توسعه وب مدرن با React، Node.js و دیتابیس',
      featured: true
    },
    {
      id: 2,
      title: 'امنیت سایبری پیشرفته',
      instructor: 'علی رضایی',
      category: 'security',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 3000000,
      originalPrice: 3500000,
      rating: 4.9,
      students: 890,
      duration: '35 ساعت',
      level: 'متوسط تا پیشرفته',
      description: 'مفاهیم پیشرفته امنیت شبکه، تست نفوذ و محافظت از سیستم‌ها',
      featured: false
    },
    {
      id: 3,
      title: 'طراحی UI/UX حرفه‌ای',
      instructor: 'فاطمه کریمی',
      category: 'design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 2200000,
      originalPrice: 2700000,
      rating: 4.7,
      students: 1050,
      duration: '30 ساعت',
      level: 'مقدماتی تا متوسط',
      description: 'اصول طراحی تجربه کاربری و رابط کاربری در پروژه‌های واقعی',
      featured: true
    },
    {
      id: 4,
      title: 'علوم داده با پایتون',
      instructor: 'حسن مرادی',
      category: 'data',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 2800000,
      originalPrice: 3200000,
      rating: 4.6,
      students: 750,
      duration: '45 ساعت',
      level: 'مقدماتی تا پیشرفته',
      description: 'تحلیل داده، یادگیری ماشین و هوش مصنوعی با Python',
      featured: false
    },
    {
      id: 5,
      title: 'توسعه اپلیکیشن موبایل',
      instructor: 'مریم نوری',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 2600000,
      originalPrice: 3100000,
      rating: 4.5,
      students: 680,
      duration: '38 ساعت',
      level: 'متوسط',
      description: 'ساخت اپلیکیشن‌های موبایل کراس پلتفرم با React Native',
      featured: false
    },
    {
      id: 6,
      title: 'دوره جامع DevOps',
      instructor: 'رضا احمدی',
      category: 'web',
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 3200000,
      originalPrice: 3800000,
      rating: 4.8,
      students: 420,
      duration: '50 ساعت',
      level: 'متوسط تا پیشرفته',
      description: 'Docker، Kubernetes، CI/CD و ابزارهای مدرن DevOps',
      featured: true
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesPrice = priceRange === 'all' ||
                        (priceRange === 'under2m' && course.price < 2000000) ||
                        (priceRange === '2m-3m' && course.price >= 2000000 && course.price <= 3000000) ||
                        (priceRange === 'over3m' && course.price > 3000000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            دوره‌های آموزشی
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            از میان بیش از ۵۰۰ دوره آموزشی با کیفیت، دوره مناسب خود را انتخاب کنید
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="text"
                placeholder="جستجو در دوره‌ها..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10 pl-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* Price Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">همه قیمت‌ها</option>
              <option value="under2m">زیر ۲ میلیون تومان</option>
              <option value="2m-3m">۲ تا ۳ میلیون تومان</option>
              <option value="over3m">بالای ۳ میلیون تومان</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-slate-600">
            {filteredCourses.length} دوره پیدا شد
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border overflow-hidden ${
                course.featured ? 'border-blue-200 ring-2 ring-blue-100' : 'border-slate-100'
              }`}
            >
              {course.featured && (
                <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-center py-2">
                  <span className="text-sm font-semibold">✨ دوره ویژه</span>
                </div>
              )}
              
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {course.duration}
                </div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {course.level}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-slate-600 mb-2">مدرس: {course.instructor}</p>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-slate-700 font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 space-x-reverse text-slate-500 text-sm">
                    <Users className="h-4 w-4" />
                    <span>{course.students} دانشجو</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-slate-900">
                      {formatPrice(course.price)} تومان
                    </div>
                    {course.originalPrice > course.price && (
                      <div className="text-sm text-slate-500 line-through">
                        {formatPrice(course.originalPrice)} تومان
                      </div>
                    )}
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

        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <div className="text-slate-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              هیچ دوره‌ای یافت نشد
            </h3>
            <p className="text-slate-600">
              لطفاً فیلترهای خود را تغییر دهید یا جستجوی جدیدی انجام دهید
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;