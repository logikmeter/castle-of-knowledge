import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Users } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form data:', formData);
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'تلفن',
      details: ['+98 21 1234 5678', '+98 21 8765 4321'],
      description: 'پاسخگویی: شنبه تا چهارشنبه ۹ الی ۱۸'
    },
    {
      icon: Mail,
      title: 'ایمیل',
      details: ['info@ghaledanesh.com', 'support@ghaledanesh.com'],
      description: 'پاسخ در کمتر از ۲۴ ساعت'
    },
    {
      icon: MapPin,
      title: 'آدرس',
      details: ['تهران، خیابان آزادی، پلاک ۱۲۳'],
      description: 'ساختمان تجاری قلعه دانش، طبقه ۵'
    }
  ];

  const faqItems = [
    {
      question: 'چگونه می‌توانم در دوره‌ها ثبت‌نام کنم؟',
      answer: 'برای ثبت‌نام در دوره‌ها، ابتدا حساب کاربری ایجاد کنید، سپس دوره مورد نظر را انتخاب و مراحل پرداخت را تکمیل کنید.'
    },
    {
      question: 'آیا امکان بازگشت وجه وجود دارد؟',
      answer: 'بله، تا ۷ روز پس از خرید می‌توانید درخواست بازگشت وجه دهید. شرایط کامل در قسمت قوانین و مقررات موجود است.'
    },
    {
      question: 'محتوای دوره‌ها چقدر به‌روز است؟',
      answer: 'تمام دوره‌های ما به‌طور مستمر به‌روزرسانی می‌شوند و محتوای جدید بر اساس آخرین تکنولوژی‌ها اضافه می‌شود.'
    },
    {
      question: 'آیا گواهی‌نامه معتبر است؟',
      answer: 'بله، گواهی‌نامه‌های صادر شده توسط قلعه دانش معتبر بوده و توسط بسیاری از شرکت‌ها پذیرفته می‌شود.'
    }
  ];

  const subjects = [
    'سوال عمومی',
    'پشتیبانی فنی',
    'مشکل پرداخت',
    'درخواست بازگشت وجه',
    'پیشنهاد همکاری',
    'سایر موارد'
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            تماس با ما
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            سوالی دارید؟ مشکلی پیش آمده؟ ما آماده کمک به شما هستیم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Methods */}
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                  <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                </div>
                
                <div className="space-y-2 mb-3">
                  {item.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-slate-700 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                
                <p className="text-sm text-slate-500">{item.description}</p>
              </div>
            ))}

            {/* Working Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-3 space-x-reverse mb-4">
                <div className="bg-green-50 w-12 h-12 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">ساعات کاری</h3>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-600">شنبه - چهارشنبه</span>
                  <span className="font-medium text-slate-900">۹:۰۰ - ۱۸:۰۰</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">پنج‌شنبه</span>
                  <span className="font-medium text-slate-900">۹:۰۰ - ۱۳:۰۰</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">جمعه</span>
                  <span className="font-medium text-red-600">تعطیل</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <MessageSquare className="h-8 w-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900">پیام خود را ارسال کنید</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      نام و نام خانوادگی *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="نام خود را وارد کنید"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      ایمیل *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="آدرس ایمیل خود را وارد کنید"
                    />
                  </div>
                </div>

                {/* Phone and Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      شماره تلفن
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="شماره تلفن خود را وارد کنید"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      موضوع *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">انتخاب کنید</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    پیام *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="پیام خود را اینجا بنویسید..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center space-x-2 space-x-reverse"
                >
                  <Send className="h-5 w-5" />
                  <span>ارسال پیام</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              سوالات متداول
            </h2>
            <p className="text-xl text-slate-600">
              شاید جواب سوال شما اینجا باشد
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-slate-200 last:border-b-0 pb-6 last:pb-0">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section (Placeholder) */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">موقعیت ما</h2>
            <div className="bg-slate-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-slate-500">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p>نقشه در اینجا نمایش داده خواهد شد</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;