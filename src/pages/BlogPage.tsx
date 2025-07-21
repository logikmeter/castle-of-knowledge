import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, Search, ArrowLeft } from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'همه مقالات' },
    { id: 'web', name: 'توسعه وب' },
    { id: 'security', name: 'امنیت' },
    { id: 'design', name: 'طراحی' },
    { id: 'ai', name: 'هوش مصنوعی' },
    { id: 'tips', name: 'نکات و ترفندها' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'راهنمای کامل یادگیری React.js در سال ۲۰۲۵',
      excerpt: 'React.js یکی از محبوب‌ترین کتابخانه‌های JavaScript برای ساخت رابط کاربری است. در این مقاله راهنمای کاملی برای یادگیری React ارائه می‌دهیم.',
      author: 'محمد احمدی',
      date: '۱۴۰۳/۰۱/۲۰',
      category: 'web',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '۸ دقیقه',
      featured: true,
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      id: 2,
      title: 'نکات امنیتی مهم در توسعه وب',
      excerpt: 'امنیت یکی از مهم‌ترین جنبه‌های توسعه وب است. در این مقاله به بررسی مهم‌ترین نکات امنیتی و راه‌های محافظت از وب‌سایت می‌پردازیم.',
      author: 'علی رضایی',
      date: '۱۴۰۳/۰۱/۱۸',
      category: 'security',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '۱۲ دقیقه',
      featured: false,
      tags: ['Security', 'Web', 'HTTPS']
    },
    {
      id: 3,
      title: 'اصول طراحی UI/UX برای تجربه کاربری بهتر',
      excerpt: 'طراحی رابط و تجربه کاربری نقش حیاتی در موفقیت محصولات دیجیتال دارد. اصول و قوانین طراحی UI/UX را بیاموزید.',
      author: 'فاطمه کریمی',
      date: '۱۴۰۳/۰۱/۱۵',
      category: 'design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '۱۰ دقیقه',
      featured: true,
      tags: ['UI', 'UX', 'Design']
    },
    {
      id: 4,
      title: 'آینده هوش مصنوعی در توسعه نرم‌افزار',
      excerpt: 'هوش مصنوعی دنیای برنامه‌نویسی را تغییر داده است. نگاهی به آینده و تأثیر AI بر توسعه نرم‌افزار بیندازیم.',
      author: 'حسن مرادی',
      date: '۱۴۰۳/۰۱/۱۲',
      category: 'ai',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '۱۵ دقیقه',
      featured: false,
      tags: ['AI', 'Machine Learning', 'Future']
    },
    {
      id: 5,
      title: 'بهینه‌سازی سرعت وب‌سایت: نکات عملی',
      excerpt: 'سرعت وب‌سایت یکی از مهم‌ترین عوامل تجربه کاربری و سئو است. راه‌های عملی برای افزایش سرعت سایت را بیاموزید.',
      author: 'رضا احمدی',
      date: '۱۴۰۳/۰۱/۱۰',
      category: 'tips',
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '۷ دقیقه',
      featured: false,
      tags: ['Performance', 'SEO', 'Tips']
    },
    {
      id: 6,
      title: 'معرفی Node.js و کاربردهای آن',
      excerpt: 'Node.js امکان اجرای JavaScript در سمت سرور را فراهم کرده است. آشنایی کامل با Node.js و کاربردهای آن در توسعه وب.',
      author: 'مریم نوری',
      date: '۱۴۰۳/۰۱/۰۸',
      category: 'web',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: '۹ دقیقه',
      featured: false,
      tags: ['Node.js', 'JavaScript', 'Backend']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            بلاگ قلعه دانش
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            آخرین مقالات، راهنماها و نکات مفید در حوزه تکنولوژی و برنامه‌نویسی
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="text"
                placeholder="جستجو در مقالات..."
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
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && selectedCategory === 'all' && !searchTerm && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">مقالات ویژه</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      ویژه
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 space-x-reverse text-sm text-slate-500 mb-3">
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 space-x-reverse"
                      >
                        <span>ادامه مطلب</span>
                        <ArrowLeft className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            {selectedCategory === 'all' ? 'همه مقالات' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <p className="text-slate-600">
            {filteredPosts.length} مقاله پیدا شد
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {post.readTime}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 space-x-reverse text-sm text-slate-500 mb-3">
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Tag className="h-4 w-4 text-slate-400" />
                    <span className="text-sm text-slate-500">
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 space-x-reverse"
                  >
                    <span>ادامه</span>
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-slate-400 text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              هیچ مقاله‌ای یافت نشد
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

export default BlogPage;