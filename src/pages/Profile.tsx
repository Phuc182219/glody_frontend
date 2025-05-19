import React from 'react';
import Footer from '../components/Footer';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <main className="flex-1 container mx-auto px-4 py-12 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Thông tin cá nhân */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col items-center shadow-sm relative">
            <button className="absolute top-4 right-4 text-purple-500 font-semibold text-sm flex items-center gap-1 hover:underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M9 11l6 6M3 21h18" /></svg>
              Chỉnh sửa
            </button>
            <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-purple-200">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="avatar" className="w-full h-full object-cover" />
            </div>
            <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">Toàn Diện</span>
            <div className="text-2xl font-bold mb-1">Nguyễn Lan</div>
            <div className="text-gray-500 mb-4">Cử Nhân ngành AI</div>
            <div className="flex flex-col gap-2 w-full text-sm">
              <div className="flex items-center gap-2"><svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 00-8 0v2" /><circle cx="12" cy="7" r="4" /></svg> Trường Đại học FPT</div>
              <div className="flex items-center gap-2"><svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 01-12 0" /></svg> nguyenvanlan@gmail.com</div>
              <div className="flex items-center gap-2"><svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" /></svg> +84 091 704 2004</div>
            </div>
          </div>
          {/* Học vấn & hồ sơ */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-purple-200 p-8 shadow-sm flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="font-semibold text-gray-700 mb-1">Hệ điểm GPA <span className="font-normal">Thang điểm 10</span> <span className="font-bold text-purple-600">GPA 8.5</span></div>
                <div className="font-semibold text-gray-700 mt-2">Chứng chỉ tiếng anh <span className="font-normal">TOEIC</span></div>
                <div className="flex gap-4 ml-4 text-sm">
                  <span>Listening <span className="font-bold">345</span></span>
                  <span>Reading <span className="font-bold">325</span></span>
                  <span>Speaking <span className="font-bold">None</span></span>
                  <span>Writing <span className="font-bold">None</span></span>
                </div>
                <div className="font-semibold text-gray-700 mt-2">Chứng chỉ ngoại ngữ 2 <span className="font-normal">TOCFL</span></div>
                <div className="ml-4 text-sm">Kết quả <span className="font-bold">A2</span></div>
                <div className="font-semibold text-gray-700 mt-2">Hoạt động ngoại khoá <span className="font-normal">Chủ nhiệm CLB 9.5 AI Đại học FPT</span></div>
              </div>
              <div>
                <div className="font-semibold text-gray-700">Quốc gia du học <span className="font-normal text-purple-600">Đài Loan</span></div>
                <div className="font-semibold text-gray-700 mt-2">Chương trình học <span className="font-normal">Thạc Sĩ</span></div>
                <div className="font-semibold text-gray-700">Ngành học <span className="font-normal">Trí Tuệ Nhân Tạo</span></div>
                <div className="font-semibold text-gray-700">Thời gian du học dự kiến <span className="font-normal">Mùa Thu 2025</span></div>
                <button className="mt-4 text-purple-500 font-semibold text-sm flex items-center gap-1 hover:underline">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M9 11l6 6M3 21h18" /></svg>
                  Chỉnh sửa
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Lịch nhắc nhở & Đã lưu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col gap-6">
            <div className="font-bold text-lg mb-2 flex items-center gap-2">Lịch nhắc nhở <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 4h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>
            <div className="flex flex-col gap-3 text-sm">
              <div>
                <div className="font-semibold">20/03/2025 <span className="ml-2 text-gray-500">16:00</span></div>
                <div className="text-gray-700">Tư vấn với chuyên gia <a href="#" className="text-purple-500 underline ml-2">Link Tham Gia</a></div>
              </div>
              <div>
                <div className="font-semibold">31/03/2025 <span className="ml-2 text-gray-500">17:00</span></div>
                <div className="text-gray-700">Hạn nộp hồ sơ học bổng MOE <a href="#" className="text-purple-500 underline ml-2">Danh sách hồ sơ cần chuẩn bị</a></div>
              </div>
            </div>
            <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-8 rounded-xl text-base transition">Đăng Xuất</button>
          </div>
          <div className="md:col-span-2 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col gap-6">
            <div className="font-bold text-lg mb-2 flex items-center gap-2">Đã Lưu <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" /></svg></div>
            <div className="flex flex-col gap-4">
              <div className="border border-purple-200 rounded-xl p-4 flex items-center gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/National_Taiwan_University_of_Science_and_Technology_Seal.svg" alt="NTUST" className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="font-bold text-base">Đại học Khoa học Công nghệ Quốc gia Đài Loan</div>
                  <div className="text-xs text-gray-500">National Taiwan University of Science and Technology</div>
                  <div className="flex gap-2 mt-1 text-xs">
                    <span className="bg-gray-100 rounded px-2">#52 World's Best Young University 2024 (THE)</span>
                    <span className="bg-gray-100 rounded px-2">#2 Đại học tại Đài Loan</span>
                  </div>
                </div>
              </div>
              <div className="border border-purple-200 rounded-xl p-4 flex items-center gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/National_Taiwan_Ocean_University_Seal.svg" alt="NTOU" className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="font-bold text-base">Đại học Quốc lập Hải Dương</div>
                  <div className="text-xs text-gray-500">National Taiwan Ocean University</div>
                  <div className="flex gap-2 mt-1 text-xs">
                    <span className="bg-gray-100 rounded px-2">#52 World's Best Young University 2024 (THE)</span>
                    <span className="bg-gray-100 rounded px-2">#2 Đại học tại Đài Loan</span>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="text-purple-500 font-semibold hover:underline text-sm mt-2 self-end">Xem thêm →</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile; 