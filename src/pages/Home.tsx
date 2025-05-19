import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleJoinNow = (e: React.MouseEvent) => {
    e.preventDefault();
    // navigate('/ai-hub');
  };
  const handleLearnNow = (e: React.MouseEvent) => {
    e.preventDefault();
    // navigate('/ai-hub');
  };
  const handleSeeMore = (e: React.MouseEvent) => {
    e.preventDefault();
    // navigate('/ai-hub');
  };
  const handleScrollPersonalize = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('personalize');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    {
      icon: (
        <svg className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l2 2 4-4" /></svg>
      ),
      number: '50+',
      label: 'Chuyên gia tư vấn',
      desc: 'Trực tuyến và dày dặn kinh nghiệm',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>
      ),
      number: '10+',
      label: 'Quốc gia du học',
      desc: 'Tập trung vào các quốc gia du học phát triển nhất',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857" /></svg>
      ),
      number: '900+',
      label: 'Trường đại học',
      desc: 'Kết nối sinh viên với các trường đại học hàng đầu',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 018 0v2" /></svg>
      ),
      number: '100+',
      label: 'Đối tác uy tín',
      desc: 'Hợp tác với các trung tâm tư vấn, tài chính, ... uy tín',
    },
  ];

  const faqs = [
    'Glody có thể giúp tôi chọn trường và học bổng phù hợp như thế nào?',
    'Tôi có thể sử dụng Glody miễn phí hay cần trả phí?',
    'Glody có hỗ trợ viết SOP, Study Plan và Cover Letter không?',
    'Glody có đảm bảo tôi được nhận học bổng không?',
    'Glody có giúp tôi chuẩn bị phỏng vấn visa không?',
  ];

  const articles = [
    {
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      title: 'Chương trình Intense Đại học Văn hóa Trung Quốc kỳ xuân 2025',
      desc: 'Bộ Giáo Dục Đài Loan (MOE) vừa xúc tiến "Chương Trình Đặc Biệt Giáo Dục Tài Năng Công Nghiệp Quốc Tế" Chương trình...',
    },
    {
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80',
      title: 'Giới thiệu về khu ký túc xá Đại học Quốc lập Dương Minh Giao Thông – NYCU',
      desc: 'Khi bắt đầu chuyến hành trình du học Đài Loan, việc thuê ký túc xá và lựa chọn phù hợp biến cho sinh viên quốc tế.',
    },
    {
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
      title: 'Tìm hiểu thông tin và điều kiện du học Mỹ mới nhất 2025',
      desc: 'Nhằm tối đa tiềm năng du học và chuẩn bị lộ trình học sáng dạ, Mỹ luôn là niềm mơ ước của mọi học sinh, sinh viên ...',
    },
    {
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      title: 'Thông tin tuyển sinh trường đại học Seokyong kỳ Thu 2025',
      desc: 'Trường Đại học Seokyeong (Seokyeong University) là một trường tư thục lớn được thành lập năm 1947, tọa lạc...',
    },
    {
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
      title: 'Top 10 các trường đại học top đầu Nhật Bản 2025-2026',
      desc: 'Mới đây, tổ chức Times Higher Education (1 trong 3 tổ chức xếp hạng đại học uy tín trên toàn thế giới) đã công bố danh sách...',
    },
    {
      image: 'https://images.unsplash.com/photo-1519340333755-c1aa5571fd46?auto=format&fit=crop&w=600&q=80',
      title: 'Du học Đức 2025: Ngành, điều kiện, chi phí, học bổng [Updated]',
      desc: 'Nếu bạn đang có dự định du học Đức 2025, mong muốn được học tập và sinh sống tại một quốc gia có nền giáo dục tiên tiến,...',
    },
  ];
  const topics = ['Chủ Đề', 'Học bổng', 'Visa', 'Kinh nghiệm', 'Tin tức'];
  const countries = ['Quốc Gia', 'Mỹ', 'Đài Loan', 'Nhật Bản', 'Hàn Quốc', 'Đức'];
  const sorts = ['Sắp xếp theo', 'Mới nhất', 'Phổ biến', 'A-Z'];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#F8F2FF] pt-8 pb-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <img src="/logo.png" alt="Glody" className="h-8 mb-2" />
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
              Tìm trường và học bổng phù hợp với <br />
              <span className="text-purple-600">Hồ Sơ Cá Nhân</span>
            </h1>
            <p className="text-gray-700 text-lg mb-4">
              Với AI Profile Matching và tư vấn độc quyền từ đội ngũ chuyên gia của Glody
            </p>
            <div className="flex gap-4 mb-4">
              <button onClick={handleJoinNow} className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">Tham gia ngay</button>
              <button onClick={handleScrollPersonalize} className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">Tìm hiểu thêm</button>
            </div>
          </div>
          <div className="relative order-1 md:order-2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80"
              alt="Student"
              className="rounded-xl object-cover w-[320px] md:w-[380px] lg:w-[420px] shadow-lg"
            />
            {/* Badge and chat bubble */}
            <div className="absolute top-4 left-4 bg-white rounded-lg shadow px-4 py-2 flex items-center gap-2 text-xs font-semibold">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Thông Báo</span> Cập nhật học bổng mới
            </div>
            <div className="absolute bottom-4 left-0 bg-white rounded-lg shadow px-4 py-2 flex items-center gap-2 text-xs font-semibold">
              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">Tư vấn chuyên gia</span> 24/7
            </div>
            <div className="absolute bottom-4 right-0 bg-white rounded-lg shadow px-4 py-2 flex items-center gap-2 text-xs font-semibold">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Nhận gợi ý</span> AI Matching
            </div>
          </div>
        </div>
      </section>

      {/* Personalization Section */}
      <section id="personalize" className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80"
              alt="Tablet"
              className="w-full rounded-xl shadow-lg"
            />
            <button onClick={handleLearnNow} className="inline-block mt-4 text-white bg-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition">Tìm hiểu ngay</button>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-purple-700">
              Cá nhân hoá <br /> lộ trình Du Học
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-purple-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </span>
                <div>
                  <span className="font-semibold">AI-Powered Matching</span> – Tìm trường và học bổng phù hợp nhất với hồ sơ và mong muốn
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </span>
                <div>
                  <span className="font-semibold">Tư vấn chuyên gia</span> – Trực tiếp 1-1 cùng những chuyên gia dày dặn kinh nghiệm
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </span>
                <div>
                  <span className="font-semibold">Phân tích cá nhân hoá</span> – Đưa ra lời khuyên và cách cải thiện dựa trên điểm yếu hồ sơ
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </span>
                <div>
                  <span className="font-semibold">Trợ lý Viết Glody</span> – Hỗ trợ viết SOP, cover letter, Studyplan du học
                </div>
              </li>
            </ul>
            <button onClick={handleSeeMore} className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition text-base">Xem Thêm →</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#F8F2FF] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-purple-700">{stat.number}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accurate Info Section (refactor thành trang thông tin du học) */}
      <section className="relative w-full min-h-[420px] flex flex-col">
        {/* Hero image with overlay */}
        <div className="relative w-full h-[340px] md:h-[420px]">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" alt="Hero" className="w-full h-full object-cover rounded-none" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-8 md:px-24">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl leading-tight">Thông tin tuyển sinh Đại học Quốc lập Nghệ Thuật Đài Bắc kỳ thu 2025</h1>
            <p className="text-white text-base md:text-lg mb-6 max-w-2xl">Đại học Quốc lập Nghệ thuật Đài Bắc (國立臺北藝術大學 - TNUA) Taipei National University of the Arts - TNUA dựa trên nền tảng văn hóa truyền thống, tinh thần nhân văn nuôi dưỡng những tài năng sáng tạo nghệ thuật, trình diễn và nghiên cứu cho mục tiêu tham tạo ra những cơ hội mới để phát triển nghệ thuật.</p>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition text-base">Xem Thêm →</button>
          </div>
        </div>
        {/* Filter bar */}
        <div className="w-full bg-white flex flex-col md:flex-row gap-4 md:gap-8 px-4 md:px-24 py-6 shadow-sm z-10">
          <select className="border rounded-lg px-4 py-2 text-gray-700 bg-white focus:outline-none w-full md:w-56">
            {topics.map((t, i) => <option key={i}>{i === 0 ? 'Chọn Chủ Đề' : t}</option>)}
          </select>
          <select className="border rounded-lg px-4 py-2 text-gray-700 bg-white focus:outline-none w-full md:w-56">
            {countries.map((c, i) => <option key={i}>{i === 0 ? 'Chọn Quốc Gia' : c}</option>)}
          </select>
          <select className="border rounded-lg px-4 py-2 text-gray-700 bg-white focus:outline-none w-full md:w-56">
            {sorts.map((s, i) => <option key={i}>{i === 0 ? 'Sắp xếp theo' : s}</option>)}
          </select>
        </div>
        {/* Article grid */}
        <div className="container mx-auto px-4 md:px-24 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((a, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
              <img src={a.image} alt={a.title} className="w-full h-48 object-cover rounded-t-2xl" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2 line-clamp-2">{a.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{a.desc}</p>
                <button className="mt-auto text-purple-600 font-semibold hover:underline text-sm text-left">Đọc thêm →</button>
              </div>
            </div>
          ))}
        </div>
        {/* Slider pagination */}
        <div className="container mx-auto px-4 md:px-24 pb-10 flex justify-end">
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center bg-white text-gray-500 hover:bg-gray-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold hover:bg-purple-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-600">Cộng Đồng Du Học Sinh Glody</h2>
              <p className="text-gray-700 mb-6">
                Tham gia cộng đồng du học sinh năng động, nơi bạn có thể kết nối, học hỏi kinh nghiệm thực tế và nhận hỗ trợ từ những người đi trước. Cùng chia sẻ bí quyết săn học bổng, chuẩn bị hồ sơ, hòa nhập môi trường mới và phát triển sự nghiệp toàn cầu. Không chỉ là thông tin, đây là nơi bạn tìm thấy sự đồng hành trên hành trình du học!
              </p>
              <Link to="#" className="text-purple-600 font-semibold hover:underline">Tham Gia Ngay →</Link>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=200&q=80" alt="Community" className="rounded-lg object-cover h-28 w-full" />
              <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=200&q=80" alt="Community" className="rounded-lg object-cover h-28 w-full" />
              <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80" alt="Community" className="rounded-lg object-cover h-28 w-full" />
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80" alt="Community" className="rounded-lg object-cover h-28 w-full" />
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80" alt="Community" className="rounded-lg object-cover h-28 w-full" />
              <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=200&q=80" alt="Community" className="rounded-lg object-cover h-28 w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F8F2FF] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-600">Câu Hỏi Thường Gặp</h2>
          <p className="mb-8 text-gray-700">Dưới đây là những câu hỏi phổ biến nhất mà chúng tôi nhận được. Nếu bạn có bất kỳ thắc mắc nào khác, đừng ngần ngại liên hệ với Glody!</p>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-4 flex justify-between items-center cursor-pointer">
                <span>{faq}</span>
                <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home; 