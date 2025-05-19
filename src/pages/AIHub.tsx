import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

const aiTools = [
  {
    title: 'AI Profile Analysis & Matching',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="20" width="18" height="18" rx="5" fill="#2563EB"/>
        <rect x="20" y="6" width="18" height="18" rx="5" fill="#6366F1"/>
        <rect x="20" y="36" width="18" height="18" rx="5" fill="#A5B4FC"/>
        <rect x="34" y="20" width="18" height="18" rx="5" fill="#60A5FA"/>
        <circle cx="32" cy="32" r="6" fill="#fff" stroke="#6366F1" strokeWidth="2"/>
        <rect x="28" y="29" width="8" height="5" rx="2.5" fill="#6366F1"/>
      </svg>
    ),
  },
  {
    title: 'AI Writing Assist',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="14" width="44" height="36" rx="7" fill="#6366F1"/>
        <rect x="18" y="22" width="28" height="22" rx="3" fill="#fff"/>
        <rect x="24" y="30" width="14" height="3" rx="1.5" fill="#A5B4FC"/>
        <rect x="24" y="36" width="8" height="3" rx="1.5" fill="#A5B4FC"/>
        <path d="M32 50l7-7" stroke="#2563EB" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="39" cy="43" r="3" fill="#2563EB"/>
      </svg>
    ),
  },
  {
    title: 'Glody Chatbot',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="32" cy="36" rx="16" ry="10" fill="#2563EB"/>
        <ellipse cx="32" cy="28" rx="10" ry="6" fill="#6366F1"/>
        <circle cx="27" cy="28" r="2" fill="#fff"/>
        <circle cx="37" cy="28" r="2" fill="#fff"/>
        <rect x="29" y="32" width="6" height="2.5" rx="1.25" fill="#fff"/>
        <ellipse cx="48" cy="18" rx="3" ry="2" fill="#A5B4FC"/>
        <ellipse cx="16" cy="18" rx="2" ry="1.5" fill="#A5B4FC"/>
      </svg>
    ),
  },
];

const chatList = [
  {
    name: 'Glody AI Chatbot',
    avatar: '/logo.png',
    lastMsg: 'Bạn có thể bắt đầu b...',
    time: '19:48',
    unread: 1,
    active: true,
    verified: false,
  },
  {
    name: 'Nguyễn Bảo Hạnh',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    lastMsg: 'Ok em nè',
    time: '19:48',
    unread: 1,
    active: false,
    verified: true,
  },
  {
    name: 'Trần Đức Anh',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    lastMsg: 'Bạn: Dạ, may quá...',
    time: '19:48',
    unread: 0,
    active: false,
    verified: true,
  },
];

const chatMessages = [
  { from: 'me', text: 'Tôi muốn biết về qui trình nộp hồ sơ du học Đài Loan', time: '18:16' },
  { from: 'bot', text: 'Quy trình du học Đài Loan gồm chọn trường, chuẩn bị hồ sơ, nộp đơn nhập học, xin học bổng (nếu có), xin visa và sắp xếp chỗ ở. Bạn đang ở bước nào rồi?', time: '18:12', liked: true },
  { from: 'me', text: 'Tôi mới bắt đầu thôi, chưa biết nên chọn trường nào.', time: '18:16' },
  { from: 'bot', text: 'Bạn có thể bắt đầu bằng cách truy cập vào Glody AI profile analysis & matching để mình phân tích hồ sơ của bạn và giúp bạn chọn được trường và học bổng phù hợp nhất với hồ sơ và mong muốn của bạn', time: '18:12', liked: true, link: true },
];

const countries = ['Chọn Quốc Gia bạn muốn học', 'Mỹ', 'Đài Loan', 'Nhật Bản', 'Hàn Quốc', 'Đức'];
const programs = ['Chọn chương trình bạn muốn học', 'Đại học', 'Thạc sĩ', 'Tiến sĩ'];
const times = ['Thời gian du học dự kiến', '2024', '2025', '2026'];

const AIHub: React.FC = () => {
  const [flowMode, setFlowMode] = useState<null | 'profile' | 'writing' | 'chat'>(null);
  const [profileStep, setProfileStep] = useState(1);
  const [resultTab, setResultTab] = useState<'profile' | 'school' | 'scholarship'>('profile');
  const [writingStep, setWritingStep] = useState(1);
  const location = useLocation();

  // Add form state interface and state
  interface FormState {
    country: string;
    program: string;
    major: string;
    time: string;
  }

  const [form, setForm] = useState<FormState>({
    country: '',
    program: '',
    major: '',
    time: ''
  });

  useEffect(() => {
    if (location.pathname === '/ai-hub') {
      setFlowMode(null);
      setProfileStep(1);
      setWritingStep(1);
    }
  }, [location.pathname]);

  // Flow: AI Profile Analysis & Matching
  if (flowMode === 'profile') {
    if (profileStep === 2) {
      return (
        <div className="min-h-screen bg-white flex flex-col justify-between">
          <main className="flex-1 flex flex-col items-center py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
              <span className="text-purple-500">AI Profile</span> Analysis & Matching
            </h1>
            {/* Stepper */}
            <div className="flex items-center justify-center w-full max-w-3xl mb-12 mt-8">
              <div className="flex-1 flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-200 text-white flex items-center justify-center font-bold text-2xl border-4 border-blue-200">1</div>
                <div className="flex-1 h-1 bg-blue-300" />
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl border-4 border-blue-600">2</div>
                <div className="flex-1 h-1 bg-blue-300" />
                <div className="w-12 h-12 rounded-full bg-blue-200 text-white flex items-center justify-center font-bold text-2xl border-4 border-blue-200">3</div>
              </div>
            </div>
            {/* Form Thông tin Hồ sơ */}
            <div className="w-full max-w-6xl bg-white rounded-2xl border-2 border-purple-200 p-10 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Thông tin Hồ sơ</h2>
              <form className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700">Học Vấn</label>
                  <select className="rounded-lg border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300">
                    <option>Chọn học vấn cao nhất của bạn</option>
                    <option>Đại học</option>
                    <option>Thạc sĩ</option>
                    <option>Tiến sĩ</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700">Hệ điểm GPA</label>
                  <select className="rounded-lg border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300">
                    <option>Chọn hệ điểm GPA</option>
                    <option>Thang 4.0</option>
                    <option>Thang 10</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700">Điểm GPA</label>
                  <input type="text" className="rounded-lg border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="Nhập điểm..." />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700">Chứng chỉ tiếng anh</label>
                  <select className="rounded-lg border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300">
                    <option>Chọn loại chứng chỉ tiếng anh</option>
                    <option>IELTS</option>
                    <option>TOEFL</option>
                    <option>TOEIC</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700">Listening</label>
                  <input type="text" className="rounded-lg border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="Nhập..." />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700">Reading</label>
                  <input type="text" className="rounded-lg border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="Nhập..." />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700">Speaking</label>
                  <input type="text" className="rounded-lg border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="Nhập..." />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700">Writing</label>
                  <input type="text" className="rounded-lg border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="Nhập..." />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700">Chứng chỉ ngoại ngữ 2 (nếu có)</label>
                  <select className="rounded-lg border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300">
                    <option>Chọn loại chứng chỉ ngoại ngữ</option>
                    <option>TOCFL</option>
                    <option>JLPT</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700">Kết quả</label>
                  <input type="text" className="rounded-lg border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="Nhập..." />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700">Chứng chỉ ngoại ngữ 3 (nếu có)</label>
                  <select className="rounded-lg border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300">
                    <option>Chọn loại chứng chỉ ngoại ngữ</option>
                    <option>DELF</option>
                    <option>TestDaF</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700">Kết quả</label>
                  <input type="text" className="rounded-lg border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="Nhập..." />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-semibold text-gray-700">Bài Báo Khoa Học (nếu có)</label>
                  <div className="flex gap-2 items-center">
                    <input type="text" className="rounded-lg border border-gray-200 px-5 py-3 shadow flex-1 focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="Nhập tên bài..." />
                    <button type="button" className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-purple-300 text-purple-500 hover:bg-purple-50"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14m7-7H5" /></svg></button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-semibold text-gray-700">Giải thưởng cuộc thi (nếu có)</label>
                  <div className="flex gap-2 items-center">
                    <input type="text" className="rounded-lg border border-gray-200 px-5 py-3 shadow flex-1 focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="Nhập tên bài..." />
                    <button type="button" className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-purple-300 text-purple-500 hover:bg-purple-50"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14m7-7H5" /></svg></button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-semibold text-gray-700">Hoạt động ngoại khoá (nếu có)</label>
                  <div className="flex gap-2 items-center">
                    <input type="text" className="rounded-lg border border-gray-200 px-5 py-3 shadow flex-1 focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="Nhập tên bài..." />
                    <button type="button" className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-purple-300 text-purple-500 hover:bg-purple-50"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14m7-7H5" /></svg></button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-semibold text-gray-700">Kinh nghiệm làm việc (nếu có)</label>
                  <div className="flex gap-2 items-center">
                    <input type="text" className="rounded-lg border border-gray-200 px-5 py-3 shadow flex-1 focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="Nhập tên bài..." />
                    <button type="button" className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-purple-300 text-purple-500 hover:bg-purple-50"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14m7-7H5" /></svg></button>
                  </div>
                </div>
              </form>
              {/* Bottom actions */}
              <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
                <button type="button" className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold py-3 px-10 rounded-xl text-lg shadow transition flex items-center gap-2" onClick={() => setProfileStep(1)}>
                  ← Trở lại
                </button>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 text-purple-400 font-semibold select-none">
                    <input type="checkbox" className="accent-purple-400 w-5 h-5" />
                    Lưu thông tin
                  </label>
                  <button type="button" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-10 rounded-xl text-lg shadow-lg transition flex items-center gap-2" onClick={() => setProfileStep(3)}>
                    Tiếp Theo <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      );
    }
    if (profileStep === 1) {
      return (
        <div className="min-h-screen bg-white flex flex-col justify-between">
          <main className="flex-1 flex flex-col items-center py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
              <span className="text-purple-500">AI Profile</span> Analysis & Matching
            </h1>
            {/* Stepper */}
            <div className="flex items-center justify-center w-full max-w-3xl mb-12 mt-8">
              <div className="flex-1 flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-200 text-white flex items-center justify-center font-bold text-2xl border-4 border-blue-200">1</div>
                <div className="flex-1 h-1 bg-blue-300" />
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl border-4 border-blue-600">2</div>
                <div className="flex-1 h-1 bg-blue-300" />
                <div className="w-12 h-12 rounded-full bg-blue-200 text-white flex items-center justify-center font-bold text-2xl border-4 border-blue-200">3</div>
              </div>
            </div>
            {/* Form xác định mục tiêu */}
            <div className="w-full max-w-3xl bg-white rounded-2xl border-2 border-purple-200 p-10 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Xác định mục tiêu</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700">Quốc Gia</label>
                  <select className="rounded-lg border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300" value={form.country} onChange={e => setForm(f => ({ ...f, country: e.target.value }))}>
                    {countries.map((c, i) => <option key={i} value={c === countries[0] ? '' : c}>{c}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700">Chương trình học</label>
                  <select className="rounded-lg border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300" value={form.program} onChange={e => setForm(f => ({ ...f, program: e.target.value }))}>
                    {programs.map((p, i) => <option key={i} value={p === programs[0] ? '' : p}>{p}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700">Ngành học</label>
                  <input type="text" className="rounded-lg border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="Ngành Học..." value={form.major} onChange={e => setForm(f => ({ ...f, major: e.target.value }))} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700">Thời gian</label>
                  <select className="rounded-lg border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300" value={form.time} onChange={e => setForm(f => ({ ...f, time: e.target.value }))}>
                    {times.map((t, i) => <option key={i} value={t === times[0] ? '' : t}>{t}</option>)}
                  </select>
                </div>
              </form>
              <div className="flex justify-end mt-8">
                <button type="button" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-10 rounded-xl text-lg shadow-lg transition flex items-center gap-2" onClick={() => setProfileStep(2)}>
                  Tiếp theo <span>→</span>
                </button>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      );
    }
    if (profileStep === 3) {
      // Danh sách trường
      const schools = [
        {
          logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/National_Taiwan_University_logo.svg',
          name: 'Đại học Khoa học Công nghệ Quốc gia Đài Loan',
          en: 'National Taiwan University of Science and Technology',
          location: 'Đài Bắc',
          badges: [
            { text: "#52 World's Best Young University 2024 (THE)", color: 'purple' },
            { text: '#2 Đại học tại Đài Loan', color: 'purple' },
          ],
          scholarship: '9000-12000 TWD/tháng',
          match: '92% Profile Match',
        },
        {
          logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/National_Taiwan_Ocean_University_Logo.svg',
          name: 'Đại học Quốc lập Hải Dương',
          en: 'National Taiwan Ocean University',
          location: 'Đài Bắc',
          badges: [
            { text: "#52 World's Best Young University 2024 (THE)", color: 'purple' },
            { text: '#2 Đại học tại Đài Loan', color: 'purple' },
          ],
          scholarship: '9000-12000 TWD/tháng',
          match: '92% Profile Match',
        },
        {
          logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/National_Central_University_Seal.svg',
          name: 'Đại học quốc lập Trung ương',
          en: 'National Central University',
          location: 'Đào Viên',
          badges: [
            { text: "#52 World's Best Young University 2024 (THE)", color: 'purple' },
            { text: '#2 Đại học tại Đài Loan', color: 'purple' },
          ],
          scholarship: '9000-12000 TWD/tháng',
          match: '92% Profile Match',
        },
        {
          logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Chang_Gung_University_Logo.svg',
          name: 'Đại học Trường Canh',
          en: 'Chang Gung University',
          location: 'Đào Viên',
          badges: [
            { text: "#52 World's Best Young University 2024 (THE)", color: 'purple' },
            { text: '#2 Đại học tại Đài Loan', color: 'purple' },
          ],
          scholarship: '9000-12000 TWD/tháng',
          match: '92% Profile Match',
        },
        {
          logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/National_Dong_Hwa_University_Logo.svg',
          name: 'Đại học Quốc lập Đông Hoa',
          en: 'National Dong Hwa University',
          location: 'Đài Bắc',
          badges: [
            { text: "#52 World's Best Young University 2024 (THE)", color: 'purple' },
            { text: '#2 Đại học tại Đài Loan', color: 'purple' },
          ],
          scholarship: '9000-12000 TWD/tháng',
          match: '92% Profile Match',
        },
        {
          logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/National_Yang_Ming_Chiao_Tung_University_Logo.svg',
          name: 'Đại học Quốc lập Dương Minh Giao thông',
          en: 'National Yang Ming Chiao Tung University',
          location: 'Đài Bắc',
          badges: [
            { text: "#52 World's Best Young University 2024 (THE)", color: 'purple' },
            { text: '#2 Đại học tại Đài Loan', color: 'purple' },
          ],
          scholarship: '9000-12000 TWD/tháng',
          match: '92% Profile Match',
        },
      ];
      // Danh sách học bổng
      const scholarships = [
        {
          logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/ROC_MOE_Seal.svg',
          name: 'Học bổng chính phủ Đài Loan MOE',
          org: 'Ministry of Education Scholarship',
          value: [
            'Học phí: 40.000 TWD/ học kỳ',
            'Sinh hoạt phí: 20.000 TWD/ học kỳ',
          ],
          match: '92% Profile Match',
          duration: '2 năm',
          conditions: [
            'GPA đại học: 7.5 trở lên',
            'Trình độ ngoại ngữ: TOCFL 3/ TOEIC 600/ IELTS 5.5 trở lên',
          ],
        },
        {
          logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/ROC_MOFA_Seal.svg',
          name: 'Học bổng Bộ Ngoại Giao MOFA',
          org: 'Ministry of Foreign Affairs Taiwan Scholarship',
          value: [
            'Học phí: 40.000 TWD/ học kỳ',
            'Sinh hoạt phí: 20.000 TWD/ học kỳ',
          ],
          match: '92% Profile Match',
          duration: '2 năm',
          conditions: [
            'GPA đại học: 7.5 trở lên',
            'Trình độ ngoại ngữ: TOCFL 3/ TOEIC 600/ IELTS 5.5 trở lên',
          ],
        },
        {
          logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/ROC_MOST_Seal.svg',
          name: 'Học bổng của Bộ Khoa học và Công nghệ Đài Loan MOST',
          org: 'Ministry of Science and Technology Scholarship',
          value: [
            'Học phí: 40.000 TWD/ học kỳ',
            'Sinh hoạt phí: 20.000 TWD/ học kỳ',
          ],
          match: '92% Profile Match',
          duration: '2 năm',
          conditions: [
            'GPA đại học: 7.5 trở lên',
            'Trình độ ngoại ngữ: TOCFL 3/ TOEIC 600/ IELTS 5.5 trở lên',
          ],
        },
        {
          logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/ROC_ICDF_Seal.svg',
          name: 'Học bổng chính phủ Đài Loan MOE',
          org: 'Ministry of Education Scholarship',
          value: [
            'Học phí: 40.000 TWD/ học kỳ',
            'Sinh hoạt phí: 20.000 TWD/ học kỳ',
          ],
          match: '92% Profile Match',
          duration: '2 năm',
          conditions: [
            'GPA đại học: 7.5 trở lên',
            'Trình độ ngoại ngữ: TOCFL 3/ TOEIC 600/ IELTS 5.5 trở lên',
          ],
        },
      ];
      return (
        <div className="min-h-screen bg-white flex flex-col justify-between">
          <main className="flex-1 flex flex-col items-center py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
              <span className="text-purple-500">AI Profile</span> Analysis & Matching
            </h1>
            {/* Stepper */}
            <div className="flex items-center justify-center w-full max-w-3xl mb-12 mt-8">
              <div className="flex-1 flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-200 text-white flex items-center justify-center font-bold text-2xl border-4 border-blue-200">1</div>
                <div className="flex-1 h-1 bg-blue-300" />
                <div className="w-12 h-12 rounded-full bg-blue-200 text-white flex items-center justify-center font-bold text-2xl border-4 border-blue-200">2</div>
                <div className="flex-1 h-1 bg-blue-300" />
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl border-4 border-blue-600">3</div>
              </div>
            </div>
            {/* Hồ sơ summary */}
            <div className="w-full max-w-6xl bg-white rounded-2xl border-2 border-purple-200 p-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                {/* Avatar + info */}
                <div className="flex flex-col items-center justify-center border-r border-purple-200 py-4 md:col-span-1">
                  <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M16 20v-2a4 4 0 00-8 0v2" /></svg>
                  </div>
                  <div className="font-bold text-lg mb-1">Nguyễn Lan</div>
                  <div className="text-gray-500 text-sm">Cử nhân</div>
                  <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-lg text-base transition flex items-center gap-2" onClick={() => setProfileStep(2)}>
                    ← Trở lại
                  </button>
                </div>
                {/* Thông tin hồ sơ */}
                <div className="col-span-2 md:col-span-1">
                  <div className="font-semibold text-gray-700">Hệ điểm GPA <span className="font-normal">Thang điểm 10</span> <span className="font-bold text-purple-600">GPA 8.5</span></div>
                  <div className="font-semibold text-gray-700 mt-2">Chứng chỉ tiếng anh <span className="font-normal">TOEIC</span></div>
                  <div className="flex gap-4 ml-4 text-sm">
                    <span>Listening <span className="font-bold">345</span></span>
                    <span>Reading <span className="font-bold">325</span></span>
                    <span>Speaking <span className="font-bold">None</span></span>
                    <span>Writing <span className="font-bold">None</span></span>
                  </div>
                  <div className="font-semibold text-gray-700 mt-2">Chứng chỉ ngoại ngữ 2 <span className="font-normal">TOCFL</span></div>
                  <div className="ml-4 text-sm">Kết quả <span className="font-bold">A2</span></div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="font-semibold text-gray-700">Quốc gia du học <span className="font-normal text-purple-600">Đài Loan</span></div>
                  <div className="font-semibold text-gray-700 mt-2">Chương trình học <span className="font-normal">Thạc Sĩ</span></div>
                  <div className="font-semibold text-gray-700">Ngành học <span className="font-normal">Trí Tuệ Nhân Tạo</span></div>
                  <div className="font-semibold text-gray-700">Thời gian du học dự kiến <span className="font-normal">Mùa Thu 2025</span></div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="font-semibold text-gray-700">Hoạt động ngoại khoá <span className="font-normal">Chủ nhiệm CLB 9.5 AI Đại học FPT</span></div>
                </div>
              </div>
            </div>
            {/* Kết quả, điểm mạnh/yếu, giải pháp, đề xuất */}
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-2 flex flex-col gap-8">
                <div className="bg-white rounded-2xl border-2 border-purple-200 p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <h2 className="text-2xl font-bold mb-4 md:mb-0">Kết Quả</h2>
                    <div className="flex gap-3">
                      <button onClick={() => setResultTab('profile')} className={`${resultTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-white border-2 border-blue-600 text-blue-600'} font-bold px-4 py-2 rounded-lg text-base hover:bg-blue-50 transition`}>Phân tích hồ sơ</button>
                      <button onClick={() => setResultTab('school')} className={`${resultTab === 'school' ? 'bg-blue-600 text-white' : 'bg-white border-2 border-blue-600 text-blue-600'} font-bold px-4 py-2 rounded-lg text-base hover:bg-blue-50 transition`}>Trường</button>
                      <button onClick={() => setResultTab('scholarship')} className={`${resultTab === 'scholarship' ? 'bg-blue-600 text-white' : 'bg-white border-2 border-blue-600 text-blue-600'} font-bold px-4 py-2 rounded-lg text-base hover:bg-blue-50 transition`}>Học bổng</button>
                    </div>
                  </div>
                  {resultTab === 'profile' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-lg text-purple-600 mb-2">Điểm Mạnh</h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                          <li><b>GPA cao (8.5/10)</b> → Đáp ứng tốt yêu cầu học thuật.</li>
                          <li>Hoạt động ngoại khoá mạnh (Chủ nhiệm CLB AI) → Thể hiện kỹ năng lãnh đạo & đam mê nghiên cứu.</li>
                          <li>Chứng chỉ <b>TOEIC (670)</b> → Đáp ứng yêu cầu tối thiểu (TOEIC ≥ 550) để học chương trình bằng tiếng Anh.</li>
                          <li>Có <b>TOCFL (A2)</b> → Lợi thế khi học tập & hòa nhập tại Đài Loan.</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-purple-600 mb-2">Điểm Yếu</h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                          <li><b>Chưa đạt yêu cầu TOCFL nếu học chương trình tiếng Hoa</b> - yêu cầu TOCFL B2+ (cấp 4 trở lên).</li>
                          <li>Chứng chỉ tiếng Anh đủ nhưng không mạnh, cần cải thiện thêm để làm mạnh hồ sơ tăng cơ hội lấy học bổng chính phủ</li>
                          <li>Thiếu nghiên cứu khoa học/dự án AI thực tế</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {resultTab === 'school' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {schools.map((school, idx) => (
                        <div key={idx} className="bg-white rounded-2xl border-2 border-purple-200 p-6 flex flex-col gap-2">
                          <div className="flex items-center gap-4 mb-2">
                            <img src={school.logo} alt={school.name} className="w-16 h-16 object-contain" />
                            <div>
                              <div className="font-bold text-lg">{school.name}</div>
                              <div className="text-xs text-gray-500">{school.en}</div>
                            </div>
                          </div>
                          <div className="flex gap-2 mb-2">
                            {school.badges.map((badge, i) => (
                              <span key={i} className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded-full">{badge.text}</span>
                            ))}
                          </div>
                          <div className="flex items-center gap-2 text-sm mb-2">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 12.414a2 2 0 10-2.828 0l-4.243 4.243" /><circle cx="12" cy="12" r="10" /></svg>
                            <span>{school.location}</span>
                          </div>
                          <div className="text-sm mb-2">Học bổng: {school.scholarship}</div>
                          <div className="text-xs font-bold text-purple-600 bg-purple-100 rounded-full px-3 py-1 w-fit">{school.match}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  {resultTab === 'scholarship' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {scholarships.map((sch, idx) => (
                        <div key={idx} className="bg-white rounded-2xl border-2 border-purple-200 p-6 flex flex-col gap-2">
                          <div className="flex items-center gap-4 mb-2">
                            <img src={sch.logo} alt={sch.name} className="w-16 h-16 object-contain" />
                            <div>
                              <div className="font-bold text-lg">{sch.name}</div>
                              <div className="text-xs text-gray-500">{sch.org}</div>
                            </div>
                          </div>
                          <div className="flex gap-2 mb-2">
                            <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded-full">{sch.match}</span>
                          </div>
                          <div className="text-sm mb-2">Thời gian: {sch.duration}</div>
                          <div className="mb-2">
                            <div className="font-semibold text-gray-700">Giá trị học bổng:</div>
                            <ul className="list-disc pl-5 text-gray-700 text-sm">
                              {sch.value.map((v, i) => <li key={i}>{v}</li>)}
                            </ul>
                          </div>
                          <div className="mb-2">
                            <div className="font-semibold text-gray-700">Điều kiện học vấn:</div>
                            <ul className="list-disc pl-5 text-gray-700 text-sm">
                              {sch.conditions.map((c, i) => <li key={i}>{c}</li>)}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="bg-white rounded-2xl border-2 border-purple-200 p-8">
                  <h3 className="font-bold text-lg text-purple-600 mb-4">Giải Pháp Cải Thiện</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Nâng cấp TOCFL B1+, tập trung vào từ vựng học thuật.</li>
                    <li>Luyện nghe/nói tiếng Hoa để phỏng vấn & giao tiếp dễ dàng hơn.</li>
                    <li>Cải thiện chứng chỉ tiếng Anh (đề xuất: TOEIC &gt;800)</li>
                    <li>Thực hiện dự án AI cá nhân hoặc tham gia nhóm nghiên cứu.</li>
                    <li>Viết báo khoa học hoặc đăng tải trên arXiv, IEEE.</li>
                    <li>Xin thư giới thiệu từ giảng viên có chuyên môn về AI.</li>
                  </ul>
                </div>
              </div>
              {/* Đề xuất */}
              <div className="md:col-span-1 flex flex-col gap-8">
                <div className="bg-white rounded-2xl border-2 border-purple-200 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg text-purple-600">Đề Xuất</h3>
                    <button className="text-blue-600 font-semibold hover:underline text-sm">Xem Thêm →</button>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="bg-[#F6F6FF] rounded-xl p-4 flex items-center gap-4">
                      <div className="flex-1">
                        <div className="font-bold text-base">Taiwan Diary</div>
                        <div className="text-xs text-gray-500">Trung tâm phân tích | Trung tâm du học</div>
                        <div className="flex gap-1 mt-1">
                          {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>)}
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#F6F6FF] rounded-xl p-4 flex items-center gap-4">
                      <img src="https://cdn.glody.vn/brand/iig.png" alt="IIG Viet Nam" className="w-12 h-12 rounded-full object-cover" />
                      <div className="flex-1">
                        <div className="font-bold text-base">IIG Viet Nam</div>
                        <div className="text-xs text-gray-500">Trung tâm luyện thi TOEIC</div>
                        <div className="flex gap-1 mt-1">
                          {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>)}
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#F6F6FF] rounded-xl p-4 flex items-center gap-4">
                      <img src="https://cdn.glody.vn/brand/taec.png" alt="Ngoại ngữ Tuấn Anh" className="w-12 h-12 rounded-full object-cover" />
                      <div className="flex-1">
                        <div className="font-bold text-base">Ngoại ngữ Tuấn Anh</div>
                        <div className="text-xs text-gray-500">Trung tâm tiếng Anh</div>
                        <div className="flex gap-1 mt-1">
                          {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      );
    }
  }

  if (flowMode === 'chat') {
    return (
      <div className="min-h-screen bg-white flex flex-col justify-between">
        <main className="flex-1 flex flex-col">
          <div className="flex flex-1 h-[80vh] bg-white rounded-2xl shadow mt-8 mb-8 mx-auto max-w-6xl overflow-hidden">
            {/* Sidebar chat list */}
            <aside className="w-80 bg-[#f5f4fa] border-r border-gray-200 flex flex-col">
              <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-200">
                <button className="md:hidden"><svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg></button>
                <input className="flex-1 rounded-lg border border-gray-200 px-4 py-2 bg-white text-sm focus:outline-none" placeholder="Search" />
              </div>
              <div className="flex-1 overflow-y-auto">
                {chatList.map((c, i) => (
                  <div key={i} className={`flex items-center gap-3 px-4 py-3 cursor-pointer ${c.active ? 'bg-purple-100' : ''} hover:bg-purple-50 rounded-lg transition-all` }>
                    <img src={c.avatar} alt={c.name} className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex-1">
                      <div className="flex items-center gap-1 font-semibold text-base text-black">{c.name} {c.verified && <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#3B82F6"/><path d="M17 9l-5.2 5.2-2.8-2.8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}</div>
                      <div className="text-xs text-gray-500 truncate max-w-[120px]">{c.lastMsg}</div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs text-gray-400">{c.time}</span>
                      {c.unread > 0 && <span className="bg-purple-500 text-white rounded-full px-2 text-xs font-bold">{c.unread}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </aside>
            {/* Main chat window */}
            <section className="flex-1 flex flex-col bg-[#f5eefe]">
              <div className="flex items-center gap-3 px-8 py-4 border-b border-gray-200">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Trần Đức Anh" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-lg">Trần Đức Anh</div>
                  <div className="text-xs text-green-500">Đang trực tuyến</div>
                </div>
                <div className="flex-1" />
                <button className="mx-2"><svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg></button>
                <button className="mx-2"><svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405" /></svg></button>
                <button className="mx-2"><svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" /><circle cx="5" cy="12" r="2" /></svg></button>
              </div>
              <div className="flex-1 overflow-y-auto px-8 py-6 flex flex-col gap-4">
                <div className="flex justify-center mb-2"><span className="bg-purple-200 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold">Today</span></div>
                {/* Chat messages */}
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}` }>
                    <div className={`max-w-xl px-5 py-3 rounded-2xl text-base ${msg.from === 'me' ? 'bg-purple-500 text-white' : 'bg-white text-gray-900'} shadow-sm relative`}>
                      {msg.text}
                      {msg.link && <a href="#" className="text-purple-500 underline ml-1">Glody AI profile analysis & matching</a>}
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-gray-400">{msg.time}</span>
                        {msg.liked && <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>}
                        {msg.from === 'me' && <svg className="w-4 h-4 text-white ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Input */}
              <form className="flex items-center gap-4 px-8 py-4 border-t border-gray-200 bg-[#f5eefe]">
                <button type="button"><svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg></button>
                <input className="flex-1 rounded-full border border-gray-200 px-5 py-3 bg-white text-base focus:outline-none" placeholder="Message" />
                <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg></button>
              </form>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (flowMode === 'writing') {
    if (writingStep === 1) {
      return (
        <div className="min-h-screen bg-white flex flex-col justify-between">
          <main className="flex-1 flex flex-col items-center py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
              <span className="text-purple-500">AI Writting</span> Assist
            </h1>
            {/* Stepper */}
            <div className="flex items-center justify-center w-full max-w-3xl mb-12 mt-8">
              <div className="flex-1 flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-200 text-white flex items-center justify-center font-bold text-2xl border-4 border-blue-200">1</div>
                <div className="flex-1 h-1 bg-blue-300" />
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl border-4 border-blue-600">2</div>
                <div className="flex-1 h-1 bg-blue-300" />
                <div className="w-12 h-12 rounded-full bg-blue-200 text-white flex items-center justify-center font-bold text-2xl border-4 border-blue-200">3</div>
              </div>
            </div>
            {/* Form Xác định mục tiêu, Động lực, Yêu cầu khác */}
            <div className="w-full max-w-5xl bg-white rounded-2xl border border-purple-300 p-10 flex flex-col gap-10 shadow-sm" style={{ borderWidth: 1, borderColor: '#C4B5FD' }}>
              <div>
                <h2 className="text-3xl font-bold text-center mb-8">Xác định mục tiêu</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="font-semibold text-gray-700 mb-2 block">Quốc Gia</label>
                    <select className="w-full px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-base">
                      <option>Chọn Quốc Gia bạn muốn học</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700 mb-2 block">Chương trình học</label>
                    <select className="w-full px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-base">
                      <option>Chọn chương trình bạn muốn học</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700 mb-2 block">Ngành học</label>
                    <input type="text" placeholder="Ngành Học..." className="w-full px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-base" />
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700 mb-2 block">Thời gian</label>
                    <select className="w-full px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-base">
                      <option>Thời gian du học dự kiến</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-center mb-8">Động lực & định hướng cá nhân</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <label className="font-semibold text-gray-700 mb-2 block">Lý do chọn ngành học này</label>
                    <textarea rows={4} placeholder="Để trống nếu bạn muốn Glody đề xuất...." className="w-full px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-base resize-none" />
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700 mb-2 block">Lý do chọn trường & quốc gia này</label>
                    <textarea rows={4} placeholder="Để trống nếu bạn muốn Glody đề xuất...." className="w-full px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-base resize-none" />
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700 mb-2 block">Định hướng nghề nghiệp sau khi tốt nghiệp</label>
                    <textarea rows={4} placeholder="Để trống nếu bạn muốn Glody đề xuất...." className="w-full px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-base resize-none" />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-center mb-8">Yêu cầu khác ( nếu có )</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <label className="font-semibold text-gray-700 mb-2 block">Câu hỏi SOP/Study Plan cụ thể</label>
                    <textarea rows={4} placeholder="Câu hỏi SOP/Study Plan cụ thể từ trường/học bổng ( nếu có )" className="w-full px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-base resize-none" />
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700 mb-2 block">Định dạng / giới hạn số từ theo yêu cầu</label>
                    <textarea rows={4} placeholder="Định dạng / giới hạn số từ theo yêu cầu" className="w-full px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-base resize-none" />
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700 mb-2 block">Bài mẫu</label>
                    <textarea rows={4} placeholder="Paste vào bài viết hoặc link bài viết bạn muốn Glody tham khảo" className="w-full px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-base resize-none" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button type="button" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-10 rounded-xl text-lg shadow-lg transition flex items-center gap-2">
                    Tiếp theo <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      );
    }
    if (writingStep === 2) {
      return (
        <div className="min-h-screen bg-white flex flex-col justify-between">
          <main className="flex-1 flex flex-col items-center py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
              <span className="text-purple-500">AI Writting</span> Assist
            </h1>
            {/* Stepper */}
            <div className="flex items-center justify-center w-full max-w-3xl mb-12 mt-8">
              <div className="flex-1 flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-200 text-white flex items-center justify-center font-bold text-2xl border-4 border-blue-200">1</div>
                <div className="flex-1 h-1 bg-blue-300" />
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl border-4 border-blue-600">2</div>
                <div className="flex-1 h-1 bg-blue-300" />
                <div className="w-12 h-12 rounded-full bg-blue-200 text-white flex items-center justify-center font-bold text-2xl border-4 border-blue-200">3</div>
              </div>
            </div>
            {/* Form Xác định mục tiêu, Động lực, Yêu cầu khác */}
            <div className="w-full max-w-5xl bg-white rounded-2xl border border-purple-300 p-10 flex flex-col gap-10 shadow-sm" style={{ borderWidth: 1, borderColor: '#C4B5FD' }}>
              <div>
                <h2 className="text-3xl font-bold text-center mb-8">Xác định mục tiêu</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="font-semibold text-gray-700 mb-2 block">Quốc Gia</label>
                    <select className="w-full px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-base">
                      <option>Chọn Quốc Gia bạn muốn học</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700 mb-2 block">Chương trình học</label>
                    <select className="w-full px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-base">
                      <option>Chọn chương trình bạn muốn học</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700 mb-2 block">Ngành học</label>
                    <input type="text" placeholder="Ngành Học..." className="w-full px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-base" />
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700 mb-2 block">Thời gian</label>
                    <select className="w-full px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-base">
                      <option>Thời gian du học dự kiến</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-center mb-8">Động lực & định hướng cá nhân</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <label className="font-semibold text-gray-700 mb-2 block">Lý do chọn ngành học này</label>
                    <textarea rows={4} placeholder="Để trống nếu bạn muốn Glody đề xuất...." className="w-full px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-base resize-none" />
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700 mb-2 block">Lý do chọn trường & quốc gia này</label>
                    <textarea rows={4} placeholder="Để trống nếu bạn muốn Glody đề xuất...." className="w-full px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-base resize-none" />
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700 mb-2 block">Định hướng nghề nghiệp sau khi tốt nghiệp</label>
                    <textarea rows={4} placeholder="Để trống nếu bạn muốn Glody đề xuất...." className="w-full px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-base resize-none" />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-center mb-8">Yêu cầu khác ( nếu có )</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <label className="font-semibold text-gray-700 mb-2 block">Câu hỏi SOP/Study Plan cụ thể</label>
                    <textarea rows={4} placeholder="Câu hỏi SOP/Study Plan cụ thể từ trường/học bổng ( nếu có )" className="w-full px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-base resize-none" />
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700 mb-2 block">Định dạng / giới hạn số từ theo yêu cầu</label>
                    <textarea rows={4} placeholder="Định dạng / giới hạn số từ theo yêu cầu" className="w-full px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-base resize-none" />
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700 mb-2 block">Bài mẫu</label>
                    <textarea rows={4} placeholder="Paste vào bài viết hoặc link bài viết bạn muốn Glody tham khảo" className="w-full px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-base resize-none" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button type="button" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-10 rounded-xl text-lg shadow-lg transition flex items-center gap-2">
                    Tiếp theo <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <main className="flex-1 flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-purple-500">Glody AI Hub</h1>
        <h2 className="text-2xl font-semibold text-center text-black mb-12">Công Cụ Du Học Thông Minh</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full max-w-5xl">
          {aiTools.map((tool, idx) => (
            <div
              key={tool.title}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center px-10 py-10 w-80 mb-6 md:mb-0 cursor-pointer"
              onClick={() => {
                if (idx === 0) setFlowMode('profile');
                if (idx === 1) { setFlowMode('writing'); setWritingStep(1); }
                if (idx === 2) setFlowMode('chat');
              }}
            >
              <div className="mb-6">{tool.icon}</div>
              <div className="text-lg font-bold text-center mb-2">{tool.title}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIHub; 