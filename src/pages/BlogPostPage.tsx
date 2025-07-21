import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, Clock, Share2, ArrowLeft } from 'lucide-react';

const BlogPostPage = () => {
  const { id } = useParams();

  // Simulate blog post data (in real app, fetch from API)
  const post = {
    id: 1,
    title: 'راهنمای کامل یادگیری React.js در سال ۲۰۲۵',
    content: `
      <p>React.js یکی از محبوب‌ترین و قدرتمندترین کتابخانه‌های JavaScript برای ساخت رابط‌های کاربری مدرن است. این کتابخانه که توسط Facebook توسعه یافته، امروزه استاندارد طلایی برای توسعه اپلیکیشن‌های وب محسوب می‌شود.</p>

      <h2>چرا React.js؟</h2>
      <p>React دارای ویژگی‌های منحصر به فردی است که آن را از سایر کتابخانه‌ها متمایز می‌کند:</p>
      <ul>
        <li><strong>Virtual DOM:</strong> بهبود عملکرد با استفاده از DOM مجازی</li>
        <li><strong>Component-Based:</strong> ساختار قابل استفاده مجدد</li>
        <li><strong>Declarative:</strong> کد قابل پیش‌بینی و قابل اتکا</li>
        <li><strong>Large Community:</strong> جامعه بزرگ و فعال توسعه‌دهندگان</li>
      </ul>

      <h2>مسیر یادگیری React</h2>
      <p>برای یادگیری موثر React، پیشنهاد می‌کنیم این مسیر را دنبال کنید:</p>

      <h3>۱. پیش‌نیازها</h3>
      <p>قبل از شروع یادگیری React، باید با این تکنولوژی‌ها آشنا باشید:</p>
      <ul>
        <li>HTML و CSS</li>
        <li>JavaScript (ES6+)</li>
        <li>DOM و Event Handling</li>
        <li>مفاهیم Asynchronous Programming</li>
      </ul>

      <h3>۲. مفاهیم پایه React</h3>
      <p>شروع یادگیری React با این مفاهیم:</p>
      <ul>
        <li>JSX و تفاوت آن با HTML</li>
        <li>Components (Function و Class)</li>
        <li>Props و State</li>
        <li>Event Handling در React</li>
        <li>Conditional Rendering</li>
        <li>Lists و Keys</li>
      </ul>

      <h3>۳. مفاهیم پیشرفته</h3>
      <p>پس از تسلط بر مفاهیم پایه:</p>
      <ul>
        <li>React Hooks (useState, useEffect, useContext و ...)</li>
        <li>State Management (Context API, Redux)</li>
        <li>React Router</li>
        <li>Performance Optimization</li>
        <li>Testing (Jest, React Testing Library)</li>
      </ul>

      <h2>بهترین منابع یادگیری</h2>
      <p>برای یادگیری React منابع زیادی در دسترس است:</p>
      <ul>
        <li><strong>مستندات رسمی React:</strong> جامع‌ترین منبع</li>
        <li><strong>دوره‌های آنلاین:</strong> قلعه دانش دوره‌های عملی ارائه می‌دهد</li>
        <li><strong>پروژه‌های عملی:</strong> بهترین راه تثبیت یادگیری</li>
        <li><strong>جامعه توسعه‌دهندگان:</strong> Stack Overflow و GitHub</li>
      </ul>

      <h2>نکات مهم برای یادگیری موثر</h2>
      <p>برای یادگیری بهتر React توصیه می‌کنیم:</p>
      <ul>
        <li>تمرین روزانه و پیوسته داشته باشید</li>
        <li>پروژه‌های واقعی انجام دهید</li>
        <li>کد دیگران را مطالعه کنید</li>
        <li>در جامعه توسعه‌دهندگان مشارکت کنید</li>
        <li>همیشه به‌روزرسانی خود را ادامه دهید</li>
      </ul>

      <h2>نتیجه‌گیری</h2>
      <p>React.js ابزاری قدرتمند برای توسعه رابط‌های کاربری مدرن است. با یادگیری صحیح و تمرین مستمر، می‌توانید به یک توسعه‌دهنده حرفه‌ای React تبدیل شوید. مهم‌ترین نکته، صبر و پشتکار در یادگیری است.</p>
    `,
    author: 'محمد احمدی',
    date: '۱۴۰۳/۰۱/۲۰',
    category: 'web',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '۸ دقیقه',
    tags: ['React', 'JavaScript', 'Frontend', 'Tutorial']
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'نکات امنیتی مهم در توسعه وب',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'اصول طراحی UI/UX برای تجربه کاربری بهتر',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'معرفی Node.js و کاربردهای آن',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 space-x-reverse text-sm text-slate-600">
            <Link to="/" className="hover:text-blue-600">خانه</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-blue-600">بلاگ</Link>
            <span>/</span>
            <span className="text-slate-900">مقاله</span>
          </div>
        </nav>

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-blue-100">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <User className="h-5 w-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Calendar className="h-5 w-5" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Clock className="h-5 w-5" />
                  <span>{post.readTime} مطالعه</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Tag className="h-5 w-5" />
                  <span>توسعه وب</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none prose-slate prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-700 prose-p:leading-relaxed prose-ul:text-slate-700 prose-li:text-slate-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share Buttons */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">اشتراک‌گذاری مقاله</h3>
                <div className="flex items-center space-x-4 space-x-reverse">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 space-x-reverse transition-colors">
                    <Share2 className="h-4 w-4" />
                    <span>اشتراک</span>
                  </button>
                  <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg transition-colors">
                    تلگرام
                  </button>
                  <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg transition-colors">
                    توئیتر
                  </button>
                  <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg transition-colors">
                    لینکدین
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Author Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">درباره نویسنده</h3>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{post.author}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  توسعه‌دهنده Full Stack با بیش از ۸ سال تجربه در حوزه React و JavaScript.
                </p>
              </div>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">مقالات مرتبط</h3>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="flex items-center space-x-3 space-x-reverse hover:bg-slate-50 p-2 rounded-lg transition-colors"
                  >
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-slate-900 line-clamp-2">
                        {relatedPost.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 space-x-reverse text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="h-5 w-5 rotate-180" />
            <span>بازگشت به بلاگ</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;