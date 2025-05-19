import React from 'react';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Về Glody', href: '/about' },
  { name: 'Glody AI Hub', href: '/ai-hub' },
  { name: 'Tư Vấn Chuyên Gia', href: '/services' },
  { name: 'Thông tin Du Học - Visa', href: '/visa-info' },
  { name: 'Cộng Đồng', href: '/community' },
  { name: 'Nâng Cấp', href: '/upgrade' },
  { name: 'Hồ sơ', href: '/profile' },
];

const Header: React.FC = () => {
  return (
    <header className="bg-white w-full border-b-0">
      <div className="flex items-center w-full px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center mr-6 flex-shrink-0">
          <img src="/logo.png" alt="Glody" className="h-12 w-auto" />
          <div className="ml-2">
            <div className="text-3xl font-bold text-[#0A3180] leading-none">GLODY</div>
            <div className="text-xs text-[#7B89C2] font-semibold tracking-wide mt-1">GO GLOBAL. GLOW STUDY</div>
          </div>
        </Link>
        {/* Horizontal line */}
        <div className="flex-1 border-t border-[#0A3180] mx-4" />
        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          {navigation.map((item) => (
            item.name === 'Glody AI Hub' ? (
              <Link
                key={item.name}
                to={item.href}
                onClick={e => {
                  e.preventDefault();
                  window.location.href = '/ai-hub';
                }}
                className="text-[#0A3180] font-bold text-base hover:underline whitespace-nowrap"
              >
                {item.name}
              </Link>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="text-[#0A3180] font-bold text-base hover:underline whitespace-nowrap"
              >
                {item.name}
              </Link>
            )
          ))}
          {/* Profile */}
          <Link to="/login" className="ml-2 flex items-center">
            <span className="sr-only">Hồ sơ</span>
            <svg className="w-6 h-6 text-[#0A3180]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M16 20v-2a4 4 0 00-8 0v2" />
            </svg>
          </Link>
        </nav>
        {/* Search icon */}
        <div className="ml-4 flex items-center">
          <svg className="w-5 h-5 text-[#0A3180]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-3.5-3.5" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header; 