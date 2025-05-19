import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md bg-white rounded-2xl border border-purple-300 p-10 flex flex-col items-center shadow-sm"
        style={{ borderWidth: 1, borderColor: '#C4B5FD' }}
      >
        <img src="/logo.png" alt="Glody" className="h-14 mb-8" />
        <input
          type="text"
          placeholder="Tên của bạn..."
          className="w-full mb-4 px-5 py-3 rounded-lg bg-purple-50 border-none focus:outline-none focus:ring-2 focus:ring-purple-200 text-base"
        />
        <input
          type="text"
          placeholder="Số điện thoại....."
          className="w-full mb-4 px-5 py-3 rounded-lg bg-purple-50 border-none focus:outline-none focus:ring-2 focus:ring-purple-200 text-base"
        />
        <input
          type="text"
          placeholder="Tên đăng nhập..."
          className="w-full mb-4 px-5 py-3 rounded-lg bg-purple-50 border-none focus:outline-none focus:ring-2 focus:ring-purple-200 text-base"
        />
        <div className="w-full mb-6 relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Mật Khẩu....."
            className="w-full px-5 py-3 rounded-lg bg-purple-50 border-none focus:outline-none focus:ring-2 focus:ring-purple-200 text-base pr-12"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-500"
            onClick={() => setShowPassword((v) => !v)}
            tabIndex={-1}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {showPassword ? (
                <><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></>
              ) : (
                <><path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95M6.7 6.7A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.956 9.956 0 01-4.043 5.112M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M3 3l18 18" /></>
              )}
            </svg>
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 rounded-lg text-lg mb-8 transition"
        >
          Đăng Ký
        </button>
        <div className="flex items-center w-full mb-8">
          <div className="flex-1 h-px bg-purple-200" />
          <span className="mx-4 text-gray-500 font-semibold">Hoặc</span>
          <div className="flex-1 h-px bg-purple-200" />
        </div>
        <div className="flex justify-center gap-8 w-full mb-8">
          <button type="button"><svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 1.43c-.36-.36-.86-.56-1.37-.56-.51 0-1.01.2-1.37.56-.36.36-.56.86-.56 1.37 0 .51.2 1.01.56 1.37.36.36.86.56 1.37.56.51 0 1.01-.2 1.37-.56.36-.36.56-.86.56-1.37 0-.51-.2-1.01-.56-1.37z" /></svg></button>
          <button type="button"><svg className="w-8 h-8" viewBox="0 0 48 48"><g><circle fill="#fff" cx="24" cy="24" r="20"/><path fill="#4285F4" d="M34.6 24.2c0-.7-.1-1.4-.2-2H24v4.1h6c-.3 1.5-1.3 2.7-2.7 3.5v2.9h4.4c2.6-2.4 4.1-5.9 4.1-9.5z"/><path fill="#34A853" d="M24 36c2.4 0 4.4-.8 5.9-2.1l-4.4-2.9c-1.2.8-2.7 1.3-4.3 1.3-3.3 0-6.1-2.2-7.1-5.2h-4.5v3.2C12.9 33.8 18.1 36 24 36z"/><path fill="#FBBC05" d="M16.9 27.1c-.3-.8-.5-1.7-.5-2.6s.2-1.8.5-2.6v-3.2h-4.5C11.2 21.1 10.9 22.5 10.9 24s.3 2.9.9 4.3l4.5-3.2z"/><path fill="#EA4335" d="M24 17.9c1.3 0 2.5.4 3.4 1.2l2.6-2.6C29.1 14.8 27.1 14 24 14c-5.9 0-11.1 2.2-14.6 5.8l4.5 3.2c1-3 3.8-5.2 7.1-5.2z"/><path fill="none" d="M0 0h48v48H0z"/></g></svg></button>
          <button type="button"><svg className="w-8 h-8" viewBox="0 0 24 24" fill="#1877F3"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0" /></svg></button>
        </div>
        <div className="text-center text-base text-black">
          Bạn có tài khoản?{' '}
          <button
            type="button"
            className="text-purple-600 font-bold hover:underline"
            onClick={() => navigate('/login')}
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register; 