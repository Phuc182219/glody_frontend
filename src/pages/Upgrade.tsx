import React from 'react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'Cơ Bản',
    price: 'Miễn Phí',
    features: [
      'Truy cập thư viện tài liệu, tin tức du học',
      'Giải đáp nhanh chóng với Chatbot AI - GloChat',
      'Kết nối cộng đồng du học sinh',
      'Nhận thông báo & cập nhật học bổng mới nhất.',
    ],
    button: 'Tiếp tục sử dụng',
    highlight: false,
  },
  {
    name: 'Nâng Cao',
    price: '99.000/tháng',
    features: [
      'Toàn bộ tính năng của Gói Cơ bản',
      'AI Profile Analysis & Matching.',
      'AI Writing Assistant - Hỗ trợ viết SOP, Studyplan...',
      'Tư vấn qua tin nhắn cùng đội ngũ chuyên gia.',
    ],
    button: 'Thanh Toán',
    highlight: true,
  },
  {
    name: 'Toàn Diện',
    price: '199.000/tháng',
    features: [
      'Toàn bộ tính năng của Gói Cơ bản & Nâng Cao',
      'Tư vấn 1:1 trực tiếp với chuyên gia.',
      'Hỗ trợ luyện phỏng vấn học bổng & visa.',
      'Ưu tiên phản hồi nhanh trong vòng 30 phút.',
    ],
    button: 'Thanh Toán',
    highlight: true,
  },
];

const socialLinks = [
  { label: 'YouTube', href: '#', svg: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.11-2.116C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.388.57A2.994 2.994 0 0 0 .502 6.186C0 8.347 0 12 0 12s0 3.653.502 5.814a2.994 2.994 0 0 0 2.11 2.116C4.772 20.5 12 20.5 12 20.5s7.228 0 9.388-.57a2.994 2.994 0 0 0 2.11-2.116C24 15.653 24 12 24 12s0-3.653-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> },
  { label: 'Facebook', href: '#', svg: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0" /></svg> },
  { label: 'Twitter', href: '#', svg: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" /></svg> },
  { label: 'Instagram', href: '#', svg: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.98.98-1.274 2.092-1.334 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.06 1.282.354 2.394 1.334 3.374.98.98 2.092 1.274 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.06 2.394-.354 3.374-1.334.98-.98 1.274-2.092 1.334-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.06-1.282-.354-2.394-1.334-3.374-.98-.98-2.092-1.274-3.374-1.334C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg> },
  { label: 'LinkedIn', href: '#', svg: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" /></svg> },
];

const Upgrade: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 pt-12 pb-2">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-black">
          Chọn gói <span className="text-purple-600 italic">Nâng Cấp</span>
        </h1>
        <div className="text-2xl md:text-3xl font-semibold text-purple-500 mb-2">Cùng Glody</div>
        <div className="text-xl md:text-2xl font-medium text-black mb-8">chinh phục hành trình du học</div>
      </header>

      {/* Pricing Cards */}
      <main className="container mx-auto px-4 flex-1 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-16">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`flex flex-col border-2 ${plan.highlight ? 'border-purple-300' : 'border-gray-200'} rounded-2xl bg-white shadow-sm p-8 items-center transition-all`}
            >
              <div className="text-2xl font-bold mb-2 text-black">{plan.name}</div>
              <div className={`text-3xl font-extrabold mb-4 ${plan.price === 'Miễn Phí' ? 'text-purple-500' : 'text-purple-600'}`}>{plan.price}</div>
              <ul className="mb-8 space-y-4 w-full">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-black">
                    <span className="mt-1">
                      <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              {plan.button === 'Tiếp tục sử dụng' ? (
                <button onClick={() => navigate('/about')} className="w-full py-3 rounded-lg font-bold text-lg transition bg-purple-500 text-white hover:bg-purple-600">{plan.button}</button>
              ) : (
                <button onClick={() => navigate('/payment')} className="w-full py-3 rounded-lg font-bold text-lg transition bg-purple-500 text-white hover:bg-purple-600">{plan.button}</button>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Upgrade; 