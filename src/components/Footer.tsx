import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-[#1746A2] text-white pt-12 pb-8 mt-auto">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        {/* Logo and Tagline */}
        <div className="md:col-span-3">
          <img
            src="/assets/logo/glodylogo-white.png"
            alt="Glody"
            className="h-12 mb-8"
          />
          <p className="text-gray-300 text-sm leading-relaxed">
            Công ty TNHH Glody, chuyên tư vấn và cung cấp dịch vụ du học chất
            lượng cao. Giúp bạn tỏa sáng trên hành trình chinh phục tri thức
            toàn cầu.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3">
          <h3 className="text-lg font-semibold mb-4">Điều hướng</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Về Glody
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Dịch vụ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Liên hệ
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="md:col-span-3">
          <h3 className="text-lg font-semibold mb-4">Dịch vụ</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition">
                AI Profile Matching
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Tư vấn du học
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Định hướng nghề nghiệp
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Hỗ trợ visa
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Dịch vụ premium
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-3">
          <h3 className="text-lg font-semibold mb-4">Đăng ký nhận tin</h3>
          <p className="text-gray-300 text-sm mb-4">
            Nhận thông tin mới nhất về học bổng và cơ hội du học
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email của bạn"
              className="bg-white/10 text-white px-4 py-2 rounded-l-lg flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 text-white px-4 py-2 rounded-r-lg text-sm font-medium hover:bg-purple-700 transition">
              Đăng ký
            </button>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-t border-white/10 pt-12">
        <div className="flex items-center gap-4">
          <div className="bg-white/10 p-3 rounded-lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 5h18M9 3v2m6-2v2m-7 4h8m-8 4h8m-8 4h8" />
            </svg>
          </div>
          <div>
            <div className="font-semibold mb-1">Điện thoại</div>
            <a
              href="tel:0292.324.0266"
              className="text-gray-300 hover:text-white transition"
            >
              0292.324.0266
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-white/10 p-3 rounded-lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M16 12v1a4 4 0 01-8 0v-1m8 0a4 4 0 00-8 0m8 0V8a4 4 0 00-8 0v4m8 0a4 4 0 01-8 0" />
            </svg>
          </div>
          <div>
            <div className="font-semibold mb-1">Email</div>
            <a
              href="mailto:glody@gmail.com"
              className="text-gray-300 hover:text-white transition"
            >
              glody@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-white/10 p-3 rounded-lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold mb-1">Địa chỉ văn phòng</div>
            <address className="text-gray-300 not-italic text-sm">
              Số 10 ngách 199/8 phố Phú Viên, phường Bồ Đề, quận Long Biên, Hà
              Nội
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row md:justify-between items-center border-t border-white/10 pt-8 gap-4">
        <div className="flex gap-6">
          <a
            href="#"
            className="text-gray-300 hover:text-purple-400 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-purple-400 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.647.673 18.805.157 16.948.072 15.668.014 15.259 0 12 0z" />
              <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-purple-400 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Glody |
          <a href="#" className="hover:text-white transition ml-2">
            Điều khoản sử dụng
          </a>
          <span className="mx-2">·</span>
          <a href="#" className="hover:text-white transition">
            Chính sách bảo mật
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
