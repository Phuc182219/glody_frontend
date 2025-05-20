import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const benefits = [
  {
    title: 'Kinh nghiệm thực tiễn',
    color: 'text-blue-700',
    desc: 'Được dẫn dắt bởi các chuyên gia đã từng du học và làm việc quốc tế, am hiểu quy trình xét tuyển, học bổng và visa.'
  },
  {
    title: 'Hỗ trợ Cá Nhân Hoá',
    color: 'text-purple-600',
    desc: 'Phân tích hồ sơ chi tiết, tư vấn lộ trình phù hợp để tối đa hóa cơ hội trúng tuyển và săn học bổng.'
  },
  {
    title: 'Tư vấn nhanh & chuyên sâu',
    color: 'text-green-600',
    desc: 'Giải đáp kịp thời, cập nhật thông tin tuyển sinh, học bổng, visa và hỗ trợ toàn diện từ hồ sơ đến định hướng nghề nghiệp.'
  },
];

const experts = [
  {
    name: 'Trần Đức Anh',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    desc: 'Chuyên gia tư vấn du học Nhật Bản, Đài Loan',
    exp: 5,
    countries: 'Nhật Bản, Đài Loan',
  },
  {
    name: 'Nguyễn Bảo Hạnh',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    desc: 'Chuyên gia tư vấn du học Mỹ, Anh, Đức',
    exp: 5,
    countries: 'Mỹ, Anh, Đức',
  },
  {
    name: 'Trần Mỹ Ngọc',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    desc: 'Chuyên gia tư vấn du học Trung Quốc, Hàn Quốc',
    exp: 5,
    countries: 'Trung Quốc, Hàn Quốc',
  },
  {
    name: 'Nguyễn Huy',
    avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
    desc: 'Chuyên gia tư vấn du học Singapore, Thụy Điển',
    exp: 5,
    countries: 'Singapore, Thụy Điển',
  },
  {
    name: 'Trịnh Gia Bảo',
    avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
    desc: 'Chuyên gia tư vấn du học Nhật Bản, Đài Loan',
    exp: 5,
    countries: 'Nhật Bản, Đài Loan',
  },
  {
    name: 'Lâm Gia Hân',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    desc: 'Chuyên gia tư vấn du học Nhật Bản, Đài Loan',
    exp: 5,
    countries: 'Nhật Bản, Đài Loan',
  },
];

const chatList = [
  {
    name: 'Glody AI Chatbot',
    avatar: 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png',
    lastMsg: 'Bạn có thể bắt đầu b...',
    time: '19:48',
    unread: 1,
    verified: true,
  },
  {
    name: 'Nguyễn Bảo Hạnh',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    lastMsg: 'Ok em nè',
    time: '19:48',
    unread: 1,
    verified: true,
  },
  {
    name: 'Trần Đức Anh',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    lastMsg: 'Bạn: Dạ, may quá...',
    time: '19:48',
    unread: 0,
    verified: false,
  },
];

const chatMessages = [
  { from: 'me', text: 'Tôi muốn biết về qui trình nộp hồ sơ du học Đài Loan', time: '18:16' },
  { from: 'other', text: 'Quy trình du học Đài Loan gồm chọn trường, chuẩn bị hồ sơ, nộp đơn nhập học, xin học bổng (nếu có), xin visa và sắp xếp chỗ ở. Bạn đang ở bước nào rồi?', time: '18:12', liked: true },
  { from: 'me', text: 'Tôi mới bắt đầu thôi, chưa biết nên chọn trường nào.', time: '18:16' },
  { from: 'other', text: 'Bạn có thể bắt đầu bằng cách truy cập vào Glody AI profile analysis & matching để mình phân tích hồ sơ của bạn và giúp bạn chọn được trường và học bổng phù hợp nhất với hồ sơ và mong muốn của bạn', time: '18:12', liked: true },
];

const Services: React.FC = () => {
  const services = [
    {
      title: 'Tư vấn chiến lược',
      description: 'Chúng tôi cung cấp dịch vụ tư vấn chiến lược phát triển doanh nghiệp trong thời đại số.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Phát triển phần mềm',
      description: 'Phát triển các giải pháp phần mềm tùy chỉnh theo yêu cầu của doanh nghiệp.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Marketing số',
      description: 'Xây dựng và triển khai chiến lược marketing số hiệu quả.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const pricingPlans = [
    {
      name: 'Cơ bản',
      price: '999.000',
      description: 'Phù hợp cho doanh nghiệp nhỏ',
      features: [
        'Tư vấn cơ bản',
        'Hỗ trợ qua email',
        'Cập nhật hàng tháng',
        'Bảo mật cơ bản'
      ]
    },
    {
      name: 'Chuyên nghiệp',
      price: '2.999.000',
      description: 'Giải pháp tốt nhất cho doanh nghiệp vừa',
      features: [
        'Tất cả tính năng Cơ bản',
        'Hỗ trợ 24/7',
        'Tùy chỉnh theo yêu cầu',
        'Bảo mật nâng cao'
      ]
    },
    {
      name: 'Doanh nghiệp',
      price: 'Liên hệ',
      description: 'Dành cho doanh nghiệp lớn',
      features: [
        'Tất cả tính năng Chuyên nghiệp',
        'Giải pháp tùy chỉnh hoàn toàn',
        'Quản lý tài khoản chuyên biệt',
        'SLA đảm bảo'
      ]
    }
  ];

  const scrollToExperts = () => {
    const expertsSection = document.getElementById('experts-section');
    if (expertsSection) {
      expertsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [showBooking, setShowBooking] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showChat, setShowChat] = useState(false);

  if (showChat) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header Chat Only */}
        <div className="flex flex-1 min-h-0">
          {/* Sidebar */}
          <aside className="w-[340px] bg-white border-r border-gray-200 flex flex-col">
            <div className="flex items-center gap-3 px-6 py-4 border-b">
              <button className="md:hidden" onClick={() => setShowChat(false)}>
                <svg className="w-7 h-7 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
              <span className="font-bold text-lg text-blue-900">Chat</span>
            </div>
            <div className="px-4 py-3">
              <input type="text" placeholder="Search" className="w-full rounded-lg border border-gray-200 px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-200" />
            </div>
            <div className="flex-1 overflow-y-auto">
              {chatList.map((c, i) => (
                <div key={c.name} className={`flex items-center gap-3 px-4 py-3 cursor-pointer rounded-lg mb-1 ${i===2 ? 'bg-purple-100' : 'hover:bg-gray-100'}`}>
                  <img src={c.avatar} alt={c.name} className="w-12 h-12 rounded-full object-cover border-2 border-white" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-blue-900 truncate">{c.name}</span>
                      {c.verified && <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" /></svg>}
                    </div>
                    <div className="text-gray-500 text-sm truncate">{c.lastMsg}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs text-gray-400">{c.time}</span>
                    {c.unread > 0 && <span className="bg-purple-500 text-white rounded-full px-2 text-xs font-bold">{c.unread}</span>}
                  </div>
                </div>
              ))}
            </div>
          </aside>
          {/* Chat Main */}
          <main className="flex-1 flex flex-col bg-[#F5EFFF]">
            {/* Chat header (user info) */}
            <div className="flex items-center gap-4 px-8 py-5 border-b border-gray-200 bg-white">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Trần Đức Anh" className="w-12 h-12 rounded-full object-cover border-2 border-white" />
              <div className="flex-1">
                <div className="font-bold text-blue-900 text-lg">Trần Đức Anh</div>
                <div className="text-sm text-green-500 font-semibold">Đang trực tuyến</div>
              </div>
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" /></svg>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /></svg>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto px-8 py-8 flex flex-col gap-6">
              <div className="flex justify-center mb-2">
                <span className="bg-purple-200 text-purple-700 px-4 py-1 rounded-full font-bold text-sm">Today</span>
              </div>
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xl ${msg.from === 'me' ? 'bg-purple-500 text-white' : 'bg-white text-black'} px-5 py-3 rounded-2xl shadow ${msg.from === 'me' ? 'rounded-br-md' : 'rounded-bl-md'} text-base font-medium relative`}>
                    {msg.text}
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                      <span>{msg.time}</span>
                      {msg.liked && <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.343l-6.828-6.829a4 4 0 010-5.656z" /></svg>}
                      {msg.from === 'me' && <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <form className="flex items-center gap-4 px-8 py-6 bg-white border-t border-gray-200">
              <button type="button" className="text-gray-400">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /></svg>
              </button>
              <input type="text" placeholder="Message" className="flex-1 rounded-full border border-gray-200 px-5 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-200" />
              <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
              </button>
            </form>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[380px] md:min-h-[420px] flex items-center justify-start bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80)'}}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-8 py-16 md:py-24 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Đội ngũ chuyên gia<br />Đến từ Glody
          </h1>
          <div className="text-xl md:text-2xl text-white font-semibold mb-6">Tư vấn độc quyền 1:1</div>
          <button 
            onClick={scrollToExperts}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold text-base flex items-center gap-2 shadow-lg hover:bg-purple-700 transition"
          >
            Đặt hẹn ngay <span>→</span>
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 -mt-16 z-20 relative">
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {benefits.map((b, idx) => (
            <div key={b.title} className="bg-white rounded-2xl shadow-lg p-6 flex-1 min-w-[260px] max-w-sm mx-auto">
              <div className={`text-lg font-bold mb-2 ${b.color}`}>{b.title}</div>
              <div className="text-gray-700 text-base">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experts Section */}
      <section id="experts-section" className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experts.map((ex, idx) => (
            <div key={ex.name} className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row items-center gap-6">
              <img src={ex.avatar} alt={ex.name} className="w-28 h-28 rounded-xl object-cover border-4 border-white shadow" />
              <div className="flex-1">
                <div className="text-lg font-bold text-blue-900 mb-1">{ex.name}</div>
                <div className="text-gray-700 mb-1">{ex.desc}</div>
                <div className="text-sm text-gray-500 mb-2">Kinh nghiệm: {ex.exp} năm</div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-purple-700 transition" onClick={() => setShowBooking(true)}>Đặt hẹn</button>
                  <button className="bg-white border-2 border-purple-400 text-purple-600 px-6 py-2 rounded-lg font-bold hover:bg-purple-50 transition" onClick={() => setShowChat(true)}>Nhắn Tin</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}



      {/* Booking Popup */}
      {showBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30" onClick={() => setShowBooking(false)}>
          <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-2xl mx-4 relative" onClick={e => e.stopPropagation()}>
            <h2 className="text-3xl font-extrabold text-center text-purple-500 mb-8">Đặt hẹn với chuyên gia</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={e => {e.preventDefault(); setShowBooking(false); setShowSuccess(true);}}>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-700">Họ Và tên</label>
                <input type="text" placeholder="Nhập tên của bạn..." className="rounded-xl border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-700"> </label>
                <div className="relative">
                  <input type="date" className="rounded-xl border border-gray-200 px-5 py-3 shadow w-full focus:outline-none focus:ring-2 focus:ring-purple-300 pr-10" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-700">Email</label>
                <input type="email" placeholder="Nhập Email của bạn..." className="rounded-xl border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-700"> </label>
                <div className="relative">
                  <input type="time" className="rounded-xl border border-gray-200 px-5 py-3 shadow w-full focus:outline-none focus:ring-2 focus:ring-purple-300 pr-10" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3" /></svg>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:col-span-1">
                <label className="font-semibold text-gray-700">Số điện thoại</label>
                <input type="tel" placeholder="Nhập số điện thoại của bạn..." className="rounded-xl border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300" />
              </div>
              <div className="flex items-end md:col-span-1">
                <button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 rounded-xl text-lg shadow-lg transition">Xác nhận đặt hẹn</button>
              </div>
            </form>
            <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold" onClick={() => setShowBooking(false)}>&times;</button>
          </div>
        </div>
      )}
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30" onClick={() => setShowSuccess(false)}>
          <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-lg mx-4 flex flex-col items-center relative" onClick={e => e.stopPropagation()}>
            <div className="mb-6">
              <div className="w-28 h-28 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-4">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" fill="none" /><path d="M16 25l7 7 11-13" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-purple-500 mb-4 text-center">Đặt hẹn thành công</h2>
            <p className="text-gray-700 text-center mb-8">Link cuộc họp sẽ được gửi qua email<br/>24h trước khi cuộc hẹn bắt đầu</p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition" onClick={() => setShowSuccess(false)}>Xác nhận</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Services; 