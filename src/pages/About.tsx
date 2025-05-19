import React from 'react';
import Footer from '../components/Footer';

const AboutContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white pt-8 pb-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3 w-full">
            <img
              src="https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=900&q=80"
              alt="Graduation celebration"
              className="rounded-xl object-cover w-full h-[340px] md:h-[400px] shadow-lg"
            />
          </div>
          <div className="md:w-1/2 w-full md:absolute md:right-0 md:top-1/2 md:translate-y-[-50%] md:translate-x-[20%] z-10">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:max-w-md mx-auto md:mx-0">
              <h1 className="text-4xl font-bold mb-4">
                Về <span className="text-purple-600 italic">Glody</span>
              </h1>
              <p className="text-gray-700 mb-4 text-base">
                Glody ra đời với mục tiêu giúp sinh viên đơn giản hóa và tối ưu hóa quá trình du học bằng công nghệ AI. Chúng tôi hiểu rằng việc tìm trường, săn học bổng, chuẩn bị hồ sơ và xin visa có thể phức tạp, tốn nhiều thời gian và dễ gây nhầm lẫn.<br/>
                Chúng tôi tin rằng du học không chỉ là giấc mơ, mà là một hành trình có thể chinh phục nếu bạn có sự chuẩn bị đúng đắn. Glody ở đây để giúp bạn mỗi bước đi trên hành trình ấy!
              </p>
              <a href="#story" className="text-purple-600 font-semibold flex items-center gap-1 hover:underline">
                Tìm hiểu thêm <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Câu chuyện của <span className="text-purple-600">Glody</span>
          </h2>
          <div className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed text-center">
            Du học không chỉ là một hành trình học tập, mà còn là một bước ngoặt thay đổi cả cuộc đời. Nhưng để biến ước mơ thành hiện thực, mỗi du học sinh phải đối mặt với vô số câu hỏi: Nên chọn trường nào? Học bổng ở đâu? Quy trình hồ sơ ra sao? Làm sao tăng cơ hội trúng tuyển?<br/><br/>
            Chúng tôi – những người từng trải qua hành trình ấy – hiểu rằng tìm kiếm thông tin chính xác, cá nhân hóa lộ trình, và có một người đồng hành đáng tin cậy là điều quan trọng nhất. Đó là lý do Glody ra đời – nền tảng giúp bạn định hướng trường, săn học bổng, chuẩn bị hồ sơ thông minh và tối ưu hóa hành trình du học từ A-Z.<br/><br/>
            Tại Glody, du học không phải là một giấc mơ xa vời mà là một hành trình có thể chinh phục, nếu bạn có sự chuẩn bị đúng đắn.
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 w-full">
            <img
              src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
              alt="Teamwork"
              className="rounded-xl object-cover w-full h-[220px] md:h-[260px] shadow-lg"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:ml-[-60px] relative z-10">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">Tầm nhìn</h3>
              <p className="text-gray-700 text-base">
                Trở thành nền tảng du học ứng dụng AI hàng đầu giúp cá nhân hóa và tối ưu hóa hành trình du học, giúp hàng triệu sinh viên trên thế giới tiếp cận nền giáo dục toàn cầu dễ dàng hơn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2 w-full">
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
              alt="Globe and graduation cap"
              className="rounded-xl object-cover w-full h-[220px] md:h-[260px] shadow-lg"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:mr-[-60px] relative z-10">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">Sứ mệnh</h3>
              <p className="text-gray-700 text-base">
                Glody cam kết giúp sinh viên tiếp cận nền giáo dục toàn cầu dễ dàng hơn bằng công nghệ AI. Chúng tôi cung cấp thông tin chính xác, cá nhân hóa lộ trình du học, tư vấn trường, săn học bổng, tối ưu hồ sơ đến lập kế hoạch tài chính & visa.<br/>
                Không chỉ là một nền tảng hỗ trợ, Glody còn xây dựng một cộng đồng du học sinh kết nối & chia sẻ kinh nghiệm thực tế, giúp bạn tự tin chinh phục ước mơ và tỏa sáng trên thế giới.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mr-4">Giá Trị Cốt Lõi</h2>
            <div className="flex-1 border-t-2 border-purple-400"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-lg font-bold text-blue-700 mb-2">Chính Xác</h4>
              <p className="text-gray-600 text-base">
                Cung cấp thông tin du học đáng tin cậy, cập nhật liên tục từ các trường đại học, tổ chức học bổng và cơ quan giáo dục. Kết hợp với công nghệ AI và đội ngũ chuyên gia, Glody giúp cá nhân hóa lộ trình, đảm bảo sinh viên luôn có lựa chọn phù hợp và sát thực tế nhất.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-lg font-bold text-blue-700 mb-2">Hiệu Quả</h4>
              <p className="text-gray-600 text-base">
                Đơn giản hóa quy trình du học với các công cụ AI giúp tìm trường, săn học bổng, tối ưu hồ sơ và lập kế hoạch tài chính & visa. Ngoài ra, sinh viên còn nhận được sự hỗ trợ từ các chuyên gia tư vấn giàu kinh nghiệm, giúp tiết kiệm thời gian, giảm áp lực và tăng tối đa cơ hội trúng tuyển.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-lg font-bold text-blue-700 mb-2">Kết Nối</h4>
              <p className="text-gray-600 text-base">
                Xây dựng cộng đồng du học sinh với đội ngũ cố vấn để chia sẻ kinh nghiệm thực tế, hỗ trợ nhau trong suốt hành trình. Glody không chỉ là một nền tảng công nghệ mà còn là nơi kết nối những người có chung ước mơ, giúp bạn tự tin chinh phục cơ hội học tập toàn cầu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const About: React.FC = () => (
  <>
    <AboutContent />
    <Footer />
  </>
);

export default About;