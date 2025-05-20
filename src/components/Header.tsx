import React from "react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Về Glody", href: "/about" },
  { name: "Glody AI Hub", href: "/ai-hub" },
  { name: "Tư Vấn Chuyên Gia", href: "/services" },
  { name: "Thông tin Du Học - Visa", href: "/visa-info" },
  { name: "Cộng Đồng", href: "/community" },
  { name: "Nâng Cấp", href: "/upgrade" },
  { name: "Hồ sơ", href: "/profile" },
];

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <header className="bg-white w-full border-b-0">
      <div className="px-8 py-4 w-full">
        <div className="flex items-start">
          {" "}
          {/* Logo on the left */}
          <Link to="/" className="flex-shrink-0 mr-8 flex items-center">
            {" "}
            <img
              src="/assets/logo/glodylogo-colored.png"
              alt="Glody - Go Global Glow Study"
              className="max-h-16 h-auto w-full max-w-[180px] object-contain"
            />
          </Link>{" "}
          {/* Right side content: search bar and navigation */}
          <div className="flex-1 flex flex-col items-end">
            {" "}
            {/* Search bar */}
            <div className="relative w-full mb-4 flex items-center">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="w-full py-1 pl-8 pr-4 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-[#0A3180]"
              />
              <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-4 h-4 text-[#0A3180]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-3.5-3.5" />
                </svg>
              </div>
              <button
                className="ml-4 px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg text-base transition"
                onClick={() => window.location.href = '/login'}
              >
                Đăng Nhập
              </button>
              <button
                className="ml-2 px-6 py-2 bg-white border border-purple-500 text-purple-600 font-bold rounded-lg text-base transition hover:bg-purple-50 hover:border-purple-600"
                onClick={() => window.location.href = '/register'}
              >
                Đăng Ký
              </button>
            </div>{" "}
            {/* Navigation - flexible layout with full stretch */}
            <nav className="flex flex-wrap items-center gap-4 justify-between w-full">
              {navigation.map((item, index) => (
                <React.Fragment key={item.name}>
                  {index > 0 && (
                    <div className="h-5 w-px bg-gray-200" aria-hidden="true" />
                  )}
                  {item.name === "Glody AI Hub" ? (
                    <Link
                      to={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/ai-hub";
                      }}
                      className={`relative text-[#0A3180] font-bold text-base whitespace-nowrap py-1 px-2 group ${
                        location.pathname === item.href ? "text-purple-600" : ""
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform origin-left transition-transform duration-300 ease-out ${
                          location.pathname === item.href
                            ? "scale-x-100"
                            : "scale-x-0"
                        } group-hover:scale-x-100`}
                      />
                    </Link>
                  ) : (
                    <Link
                      to={item.href}
                      className={`relative text-[#0A3180] font-bold text-base whitespace-nowrap py-1 px-2 group ${
                        location.pathname === item.href ? "text-purple-600" : ""
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform origin-left transition-transform duration-300 ease-out ${
                          location.pathname === item.href
                            ? "scale-x-100"
                            : "scale-x-0"
                        } group-hover:scale-x-100`}
                      />
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
