import React from 'react';
import Footer from '../components/Footer';

const articles = [
  {
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    title: 'Chương trình Intense Đại học Văn hóa Trung Quốc kỳ xuân 2025',
    desc: 'Bộ Giáo Dục Đài Loan (MOE) vừa xúc tiến "Chương Trình Đặc Biệt Giáo Dục Tài Năng Công Nghiệp Quốc Tế" Chương trình...'
  },
  {
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80',
    title: 'Giới thiệu về khu ký túc xá Đại học Quốc lập Dương Minh Giao Thông – NYCU',
    desc: 'Khi bắt đầu chuyến hành trình du học Đài Loan, việc thuê ký túc xá và lựa chọn phù hợp biến cho sinh viên quốc tế.'
  },
  {
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    title: 'Tìm hiểu thông tin và điều kiện du học Mỹ mới nhất 2025',
    desc: 'Nhằm tối đa tiềm năng du học và chuẩn bị lộ trình học sáng dạ, Mỹ luôn là niềm mơ ước của mọi học sinh, sinh viên ...'
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    title: 'Thông tin tuyển sinh trường đại học Seokyong kỳ Thu 2025',
    desc: 'Trường Đại học Seokyeong (Seokyeong University) là một trường tư thục lớn được thành lập năm 1947, tọa lạc...'
  },
  {
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    title: 'Top 10 các trường đại học top đầu Nhật Bản 2025-2026',
    desc: 'Mới đây, tổ chức Times Higher Education (1 trong 3 tổ chức xếp hạng đại học uy tín trên toàn thế giới) đã công bố danh sách...'
  },
  {
    image: 'https://images.unsplash.com/photo-1519340333755-c1aa5571fd46?auto=format&fit=crop&w=600&q=80',
    title: 'Du học Đức 2025: Ngành, điều kiện, chi phí, học bổng [Updated]',
    desc: 'Nếu bạn đang có dự định du học Đức 2025, mong muốn được học tập và sinh sống tại một quốc gia có nền giáo dục tiên tiến,...'
  },
];
const topics = ['Chủ Đề', 'Học bổng', 'Visa', 'Kinh nghiệm', 'Tin tức'];
const countries = ['Quốc Gia', 'Mỹ', 'Đài Loan', 'Nhật Bản', 'Hàn Quốc', 'Đức'];
const sorts = ['Sắp xếp theo', 'Mới nhất', 'Phổ biến', 'A-Z'];

const Dropdown = ({ options, defaultLabel }: { options: string[]; defaultLabel: string }) => (
  <div className="relative w-full md:w-64">
    <select className="appearance-none border border-gray-200 rounded-xl px-5 py-3 pr-10 text-gray-700 bg-white focus:outline-none w-full text-base font-medium shadow-sm">
      <option>{defaultLabel}</option>
      {options.slice(1).map((opt, i) => (
        <option key={i + 1}>{opt}</option>
      ))}
    </select>
    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
    </span>
  </div>
);

const VisaInfo: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      {/* Hero section */}
      <section className="relative w-full h-[420px] md:h-[520px] flex items-end">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80" alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 px-6 md:px-24 pb-16 w-full">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 max-w-3xl leading-tight drop-shadow-lg">
            Thông tin tuyển sinh Đại học Quốc lập Nghệ Thuật Đài Bắc kỳ thu 2025
          </h1>
          <div className="text-white text-base md:text-lg font-medium mb-6 max-w-2xl drop-shadow-lg">
            Đại học Quốc lập Nghệ thuật Đài Bắc <span className="font-normal">(國立臺北藝術大學)</span> · Taipei National University of the Arts - TNUA
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-xl text-base flex items-center gap-2 shadow-lg">
            Xem Thêm
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </section>

      {/* Filter bar */}
      <section className="w-full bg-white flex flex-col md:flex-row gap-4 md:gap-8 px-4 md:px-24 py-8 shadow-sm z-10 -mt-8 relative">
        <Dropdown options={topics} defaultLabel="Chọn Chủ Đề" />
        <Dropdown options={countries} defaultLabel="Chọn Quốc Gia" />
        <Dropdown options={sorts} defaultLabel="Sắp xếp theo" />
      </section>

      {/* Article grid */}
      <section className="container mx-auto px-4 md:px-24 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((a, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border border-gray-100">
            <img src={a.image} alt={a.title} className="w-full h-48 object-cover rounded-t-2xl" />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-bold mb-2 line-clamp-2 text-gray-900">{a.title}</h3>
              <p className="text-gray-600 text-base mb-0 line-clamp-2">{a.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Slider pagination */}
      <div className="container mx-auto px-4 md:px-24 pb-10 flex justify-end">
        <div className="flex gap-4">
          <button className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center bg-white text-gray-400 hover:bg-gray-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button className="w-11 h-11 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold hover:bg-purple-700 shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VisaInfo; 