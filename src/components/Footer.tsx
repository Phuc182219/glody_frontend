import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-[#1746A2] text-white pt-12 pb-8 mt-auto">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
        <div className="md:col-span-5 flex flex-wrap md:gap-16 gap-8 items-start">
          <a href="#" className="text-lg md:text-xl font-semibold mb-4 block">Về Glody</a>
          <a href="#" className="text-lg md:text-xl font-semibold mb-4 block">AI Profile Matching</a>
          <a href="#" className="text-lg md:text-xl font-semibold mb-4 block">Tư Vấn Chuyên Gia</a>
          <a href="#" className="text-lg md:text-xl font-semibold mb-4 block">Thông tin Du Học - Visa</a>
          <a href="#" className="text-lg md:text-xl font-semibold mb-4 block">Cộng Đồng</a>
          <a href="#" className="text-lg md:text-xl font-semibold mb-4 block">Nâng Cấp</a>
        </div>
        <div className="md:col-span-1 flex flex-col items-end justify-end">
          <span className="text-5xl md:text-6xl font-bold tracking-wide mb-2">g<span className="inline-block align-middle" style={{fontSize: '0.7em', transform: 'translateY(-0.2em)'}}><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fff"/><path d="M8 12h8M12 8v8" stroke="#1746A2" strokeWidth="2" strokeLinecap="round"/></svg></span>LODY</span>
          <span className="text-xs md:text-base font-light mt-1">GO GLOBAL, GLOW STUDY</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5h18M9 3v2m6-2v2m-7 4h8m-8 4h8m-8 4h8" /></svg>
            <span className="font-semibold">Điện thoại</span>
          </div>
          <span>0292.324.0266</span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 12v1a4 4 0 01-8 0v-1m8 0a4 4 0 00-8 0m8 0V8a4 4 0 00-8 0v4m8 0a4 4 0 01-8 0" /></svg>
            <span className="font-semibold">Email</span>
          </div>
          <span>Glody@gmail.com</span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <span className="font-semibold">Địa chỉ văn phòng</span>
          </div>
          <span>Số 10 ngách 199/8 phố Phú Viên, phường Bồ Đề, quận Long Biên, Hà Nội</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center border-t border-white/20 pt-6 mt-6 gap-4">
        <div className="flex gap-4 text-2xl">
          <a href="#" className="hover:text-purple-300" aria-label="YouTube"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.11-2.116C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.388.57A2.994 2.994 0 0 0 .502 6.186C0 8.347 0 12 0 12s0 3.653.502 5.814a2.994 2.994 0 0 0 2.11 2.116C4.772 20.5 12 20.5 12 20.5s7.228 0 9.388-.57a2.994 2.994 0 0 0 2.11-2.116C24 15.653 24 12 24 12s0-3.653-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></a>
          <a href="#" className="hover:text-purple-300" aria-label="Facebook"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0" /></svg></a>
          <a href="#" className="hover:text-purple-300" aria-label="Twitter"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" /></svg></a>
          <a href="#" className="hover:text-purple-300" aria-label="Instagram"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.98.98-1.274 2.092-1.334 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.06 1.282.354 2.394 1.334 3.374.98.98 2.092 1.274 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.06 2.394-.354 3.374-1.334.98-.98 1.274-2.092 1.334-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.06-1.282-.354-2.394-1.334-3.374-.98-.98-2.092-1.274-3.374-1.334C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg></a>
          <a href="#" className="hover:text-purple-300" aria-label="LinkedIn"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
        </div>
        <div className="text-sm text-gray-200 mt-2">© 2023 FlowMapp &nbsp;|&nbsp; <a href="#" className="hover:underline">Terms of Use</a> &nbsp;|&nbsp; <a href="#" className="hover:underline">Security</a> &nbsp;|&nbsp; <a href="#" className="hover:underline">Privacy</a></div>
      </div>
    </div>
  </footer>
);

export default Footer; 