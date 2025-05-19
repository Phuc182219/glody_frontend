import React, { useState } from 'react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Payment: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  if (success) {
    return (
      <div className="min-h-screen bg-[#faf9fb] flex flex-col justify-between">
        <main className="flex-1 flex flex-col items-center justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center max-w-lg w-full mx-auto mt-16 mb-16">
            <div className="bg-purple-500 rounded-full w-32 h-32 flex items-center justify-center mb-8">
              <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" fill="none" /><path d="M16 25l7 7 11-13" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="text-3xl font-bold text-purple-500 mb-2 text-center">Thanh toán thành công</div>
            <div className="text-lg text-gray-700 mb-6 text-center">Cảm ơn bạn đã tin tưởng Glody</div>
            <button onClick={() => navigate('/')} className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition">Trở về Trang Chủ</button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">Thanh toán</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Chi tiết thanh toán */}
          <div className="bg-white rounded-2xl border-2 border-purple-200 p-8 flex flex-col gap-4 shadow-sm md:col-span-1">
            <div className="font-bold text-lg mb-2">Chi Tiết Thanh Toán</div>
            <div className="flex flex-col gap-2 text-base">
              <div className="flex justify-between"><span>Gói Nâng Cấp</span><span>99.000/ tháng</span></div>
              <div className="text-gray-500 text-sm">từ 21/03/2025</div>
            </div>
            <div className="border-t border-gray-200 my-4" />
            <div className="flex justify-between font-bold text-lg">
              <span>Tổng</span>
              <span>99.000</span>
            </div>
          </div>
          {/* Thanh toán thẻ & QR */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Thẻ tín dụng */}
            <div className="bg-white rounded-2xl border-2 border-purple-200 p-8 flex flex-col gap-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-100 text-purple-600 rounded-full p-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3" /></svg></span>
                <span className="font-bold">Thẻ ghi nợ/ Thẻ tín dụng</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="visa" className="h-6 ml-2" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="mc" className="h-6 ml-1" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg" alt="amex" className="h-6 ml-1" />
              </div>
              <form className="flex flex-col gap-4">
                <input type="text" className="rounded-lg border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="Số thẻ" defaultValue="1244 5434 5643 5432" />
                <div className="flex gap-4">
                  <input type="text" className="rounded-lg border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300 w-1/2" placeholder="CVV/CVC" />
                  <input type="text" className="rounded-lg border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300 w-1/2" placeholder="MM/YY" />
                </div>
                <input type="text" className="rounded-lg border border-gray-200 px-5 py-3 shadow focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="Tên chủ thẻ" />
                <button type="button" onClick={() => setSuccess(true)} className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-10 rounded-xl text-lg shadow-lg transition mt-2">Thanh Toán 99.000</button>
              </form>
            </div>
            {/* QR chuyển khoản */}
            <div className="bg-white rounded-2xl border-2 border-purple-200 p-8 flex flex-col gap-6 shadow-sm items-center">
              <div className="font-bold mb-4 flex items-center gap-2">Chuyển khoản <span className="bg-purple-100 text-purple-600 rounded-full p-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 9V7a5 5 0 00-10 0v2a5 5 0 0010 0z" /></svg></span></div>
              <img src="https://img.vietqr.io/image/970422-1018883973-qr_only.png?amount=99000&addInfo=Glody%20NangCap" alt="VNPAY QR" className="w-48 h-48 object-contain mx-auto" />
              <div className="text-center text-xs text-gray-500">MID: 0108893973<br/>TID: UKC00006</div>
              <button type="button" onClick={() => setSuccess(true)} className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-10 rounded-xl text-lg shadow-lg transition mt-2">Xác nhận đã thanh toán</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Payment; 