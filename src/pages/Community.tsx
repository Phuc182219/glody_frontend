import React from 'react';
import Footer from '../components/Footer';

const qrCodes = [
  {
    label: 'Fanpage của Glody',
    img: 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://facebook.com',
    highlight: false,
    link: undefined,
  },
  {
    label: 'Cộng Đồng Du Học Sinh Glody',
    img: 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://zalo.me',
    highlight: true,
    link: 'https://zalo.me',
  },
  {
    label: 'Instagram của Glody',
    img: 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://instagram.com',
    highlight: false,
    link: undefined,
  },
];

const studentImages = [
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1519340333755-c1aa5571fd46?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80',
];

const Community: React.FC = () => {
  const handleLearnMore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const qrSection = document.getElementById('qr');
    if (qrSection) {
      qrSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Section 1: Title, description, images */}
      <section className="container mx-auto px-4 pt-12 pb-0 flex flex-col md:flex-row items-start gap-8">
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <h1 className="text-[2.5rem] md:text-[3.25rem] font-extrabold mb-4 leading-tight text-left">
            <span className="text-purple-600">Cộng Đồng Du Học Sinh</span> <span className="text-black">Glody</span>
          </h1>
          <p className="text-gray-700 text-lg mb-6 text-left max-w-xl">
            Tham gia cộng đồng du học sinh năng động, nơi bạn có thể kết nối, học hỏi kinh nghiệm thực tế và nhận hỗ trợ từ những người đi trước. Cùng chia sẻ bí quyết săn học bổng, chuẩn bị hồ sơ, hòa nhập môi trường mới và phát triển sự nghiệp toàn cầu. Không chỉ là thông tin, đây là nơi bạn tìm thấy sự đồng hành trên hành trình du học!
          </p>
          <a href="#qr" onClick={handleLearnMore} className="text-purple-600 font-bold hover:underline flex items-center gap-1 text-left w-fit text-base mb-4">
            Tìm hiểu thêm <span>→</span>
          </a>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          {/* 3x3 grid with center image larger */}
          <div className="grid grid-cols-3 grid-rows-3 gap-2 relative">
            {studentImages.map((img, idx) => {
              // Center image (index 4) is larger
              const isCenter = idx === 4;
              return (
                <img
                  key={idx}
                  src={img}
                  alt="Student"
                  className={`rounded-lg object-cover shadow transition-all duration-200 mx-auto ${isCenter ? 'col-span-1 row-span-1 w-28 h-36 md:w-40 md:h-56 z-10' : 'w-16 h-20 md:w-24 md:h-32'}`}
                  style={{objectPosition: 'center'}}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: QR Codes */}
      <section id="qr" className="bg-[#F6F0FF] py-16 mt-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12">
            {qrCodes.map((qr, idx) => (
              <div
                key={qr.label}
                className={`flex flex-col items-center bg-white rounded-2xl p-8 md:w-80 w-full mb-8 md:mb-0 ${qr.highlight ? 'border-2 border-purple-500 shadow-lg' : 'shadow'}`}
              >
                <img src={qr.img} alt={qr.label} className="mb-4 w-44 h-44" />
                <div className={`text-center font-bold text-base mb-1 ${qr.highlight ? 'text-black' : 'text-gray-700'}`}>{qr.label}</div>
                {qr.highlight && (
                  <a href={qr.link} className="text-purple-600 font-semibold hover:underline text-sm mt-1 block text-center">Tham Gia Ngay</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Community; 