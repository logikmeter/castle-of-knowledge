import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 space-x-reverse mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">قلعه دانش</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              پلتفرم آموزشی پیشرفته با بالاترین استانداردهای امنیتی برای ارائه دوره‌های آنلاین با کیفیت.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-slate-400 hover:text-white transition-colors">دوره‌ها</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-white transition-colors">بلاگ</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">درباره ما</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">تماس با ما</Link></li>
              <li><Link to="/dashboard" className="text-slate-400 hover:text-white transition-colors">پنل کاربری</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">قوانین و مقررات</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-slate-400 hover:text-white transition-colors">شرایط استفاده</Link></li>
              <li><Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">حریم خصوصی</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">سیاست بازگشت</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">راهنمای خرید</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">پشتیبانی</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">اطلاعات تماس</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-400">info@ghaledanesh.com</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-400">+98 21 1234 5678</span>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">تهران، خیابان آزادی، پلاک ۱۲۳</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © ۲۰۲۵ قلعه دانش. تمام حقوق محفوظ است.
            </p>
            <div className="flex items-center space-x-4 space-x-reverse mt-4 md:mt-0">
              <span className="text-sm text-slate-400">طراحی و توسعه با</span>
              <span className="text-red-400">❤</span>
              <span className="text-sm text-slate-400">توسط تیم قلعه دانش</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;