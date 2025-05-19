import React, { useState } from 'react';

interface WritingProfileFormProps {
  onNext: () => void;
  onSave?: (data: WritingProfileFormState) => void;
}

interface WritingProfileFormState {
  name: string;
  dob: string;
  nationality: string;
  education: string;
  gpaScale: string;
  gpa: string;
  school: string;
  major: string;
  englishCert: string;
  listening: string;
  reading: string;
  speaking: string;
  writing: string;
  otherCert2: string;
  otherCert2Result: string;
  otherCert3: string;
  otherCert3Result: string;
  paper: string[];
  award: string[];
  activity: string[];
  work: string[];
  save: boolean;
}

type ArrayField = 'paper' | 'award' | 'activity' | 'work';

const gpaScales = ['Chọn hệ điểm GPA', 'Thang 4.0', 'Thang 10'];
const educations = ['Chọn học vấn cao nhất của bạn', 'Đại học', 'Thạc sĩ', 'Tiến sĩ'];
const englishCerts = ['Chọn loại chứng chỉ tiếng anh', 'IELTS', 'TOEFL', 'TOEIC'];
const otherCerts = ['Chọn loại chứng chỉ ngoại ngữ', 'TOCFL', 'JLPT', 'DELF', 'TestDaF'];
const nationalities = ['Chọn Quốc tịch', 'Việt Nam', 'Mỹ', 'Đài Loan', 'Nhật Bản', 'Hàn Quốc', 'Đức'];

const WritingProfileForm: React.FC<WritingProfileFormProps> = ({ onNext, onSave }) => {
  const [form, setForm] = useState<WritingProfileFormState>({
    name: '',
    dob: '',
    nationality: '',
    education: '',
    gpaScale: '',
    gpa: '',
    school: '',
    major: '',
    englishCert: '',
    listening: '',
    reading: '',
    speaking: '',
    writing: '',
    otherCert2: '',
    otherCert2Result: '',
    otherCert3: '',
    otherCert3Result: '',
    paper: [''],
    award: [''],
    activity: [''],
    work: [''],
    save: false,
  });

  // Helper to handle array fields
  const handleArrayChange = (field: ArrayField, idx: number, value: string) => {
    setForm(f => ({
      ...f,
      [field]: f[field].map((v, i) => (i === idx ? value : v)),
    }));
  };
  const handleAddArray = (field: ArrayField) => {
    setForm(f => ({ ...f, [field]: [...f[field], ''] }));
  };

  return (
    <div className="w-full max-w-6xl bg-white rounded-2xl border-2 border-purple-300 p-10 mb-12" style={{ borderWidth: 1, borderColor: '#C4B5FD' }}>
      <h2 className="text-3xl font-bold text-center mb-8">Thông tin Hồ sơ</h2>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <input className="rounded-lg border border-gray-200 px-5 py-3 shadow" placeholder="Nhập họ và tên..." value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
        <input className="rounded-lg border border-gray-200 px-5 py-3 shadow" placeholder="Ngày sinh" type="date" value={form.dob} onChange={e => setForm(f => ({ ...f, dob: e.target.value }))} />
        <select className="rounded-lg border border-gray-200 px-5 py-3 shadow" value={form.nationality} onChange={e => setForm(f => ({ ...f, nationality: e.target.value }))}>
          {nationalities.map((n, i) => <option key={i} value={i === 0 ? '' : n}>{n}</option>)}
        </select>
        <select className="rounded-lg border border-gray-200 px-5 py-3 shadow" value={form.education} onChange={e => setForm(f => ({ ...f, education: e.target.value }))}>
          {educations.map((e, i) => <option key={i} value={i === 0 ? '' : e}>{e}</option>)}
        </select>
        <select className="rounded-lg border border-gray-200 px-5 py-3 shadow" value={form.gpaScale} onChange={e => setForm(f => ({ ...f, gpaScale: e.target.value }))}>
          {gpaScales.map((g, i) => <option key={i} value={i === 0 ? '' : g}>{g}</option>)}
        </select>
        <input className="rounded-lg border border-gray-200 px-5 py-3 shadow" placeholder="Nhập điểm..." value={form.gpa} onChange={e => setForm(f => ({ ...f, gpa: e.target.value }))} />
        <input className="rounded-lg border border-gray-200 px-5 py-3 shadow" placeholder="Nhập tên trường..." value={form.school} onChange={e => setForm(f => ({ ...f, school: e.target.value }))} />
        <input className="rounded-lg border border-gray-200 px-5 py-3 shadow" placeholder="Nhập tên ngành..." value={form.major} onChange={e => setForm(f => ({ ...f, major: e.target.value }))} />
        <select className="rounded-lg border border-gray-200 px-5 py-3 shadow" value={form.englishCert} onChange={e => setForm(f => ({ ...f, englishCert: e.target.value }))}>
          {englishCerts.map((c, i) => <option key={i} value={i === 0 ? '' : c}>{c}</option>)}
        </select>
        <input className="rounded-lg border border-gray-200 px-5 py-3 shadow" placeholder="Listening" value={form.listening} onChange={e => setForm(f => ({ ...f, listening: e.target.value }))} />
        <input className="rounded-lg border border-gray-200 px-5 py-3 shadow" placeholder="Reading" value={form.reading} onChange={e => setForm(f => ({ ...f, reading: e.target.value }))} />
        <input className="rounded-lg border border-gray-200 px-5 py-3 shadow" placeholder="Speaking" value={form.speaking} onChange={e => setForm(f => ({ ...f, speaking: e.target.value }))} />
        <input className="rounded-lg border border-gray-200 px-5 py-3 shadow" placeholder="Writing" value={form.writing} onChange={e => setForm(f => ({ ...f, writing: e.target.value }))} />
        <select className="rounded-lg border border-gray-200 px-5 py-3 shadow" value={form.otherCert2} onChange={e => setForm(f => ({ ...f, otherCert2: e.target.value }))}>
          {otherCerts.map((c, i) => <option key={i} value={i === 0 ? '' : c}>{c}</option>)}
        </select>
        <input className="rounded-lg border border-gray-200 px-5 py-3 shadow" placeholder="Kết quả" value={form.otherCert2Result} onChange={e => setForm(f => ({ ...f, otherCert2Result: e.target.value }))} />
        <select className="rounded-lg border border-gray-200 px-5 py-3 shadow" value={form.otherCert3} onChange={e => setForm(f => ({ ...f, otherCert3: e.target.value }))}>
          {otherCerts.map((c, i) => <option key={i} value={i === 0 ? '' : c}>{c}</option>)}
        </select>
        <input className="rounded-lg border border-gray-200 px-5 py-3 shadow" placeholder="Kết quả" value={form.otherCert3Result} onChange={e => setForm(f => ({ ...f, otherCert3Result: e.target.value }))} />
        {/* Bài báo khoa học */}
        <div className="md:col-span-2 flex gap-2 items-center">
          <input className="rounded-lg border border-gray-200 px-5 py-3 shadow flex-1" placeholder="Nhập tên bài..." value={form.paper[0]} onChange={e => handleArrayChange('paper', 0, e.target.value)} />
          <button type="button" className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-purple-300 text-purple-500 hover:bg-purple-50" onClick={() => handleAddArray('paper')}><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14m7-7H5" /></svg></button>
        </div>
        {/* Giải thưởng cuộc thi */}
        <div className="md:col-span-2 flex gap-2 items-center">
          <input className="rounded-lg border border-gray-200 px-5 py-3 shadow flex-1" placeholder="Nhập tên bài..." value={form.award[0]} onChange={e => handleArrayChange('award', 0, e.target.value)} />
          <button type="button" className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-purple-300 text-purple-500 hover:bg-purple-50" onClick={() => handleAddArray('award')}><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14m7-7H5" /></svg></button>
        </div>
        {/* Hoạt động ngoại khoá */}
        <div className="md:col-span-2 flex gap-2 items-center">
          <input className="rounded-lg border border-gray-200 px-5 py-3 shadow flex-1" placeholder="Nhập tên bài..." value={form.activity[0]} onChange={e => handleArrayChange('activity', 0, e.target.value)} />
          <button type="button" className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-purple-300 text-purple-500 hover:bg-purple-50" onClick={() => handleAddArray('activity')}><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14m7-7H5" /></svg></button>
        </div>
        {/* Kinh nghiệm làm việc */}
        <div className="md:col-span-2 flex gap-2 items-center">
          <input className="rounded-lg border border-gray-200 px-5 py-3 shadow flex-1" placeholder="Nhập tên bài..." value={form.work[0]} onChange={e => handleArrayChange('work', 0, e.target.value)} />
          <button type="button" className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-purple-300 text-purple-500 hover:bg-purple-50" onClick={() => handleAddArray('work')}><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14m7-7H5" /></svg></button>
        </div>
      </form>
      {/* Bottom actions */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
        <label className="flex items-center gap-2 text-purple-400 font-semibold select-none">
          <input type="checkbox" className="accent-purple-400 w-5 h-5" checked={form.save} onChange={e => setForm(f => ({ ...f, save: e.target.checked }))} />
          Lưu thông tin
        </label>
        <button type="button" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-10 rounded-xl text-lg shadow-lg transition flex items-center gap-2" onClick={() => { onSave && onSave(form); onNext(); }}>
          Tiếp Theo <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default WritingProfileForm; 