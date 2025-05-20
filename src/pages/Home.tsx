import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

// Add animation keyframes
const slideInFromLeft = `
  @keyframes slideInFromLeft {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const slideInFromRight = `
  @keyframes slideInFromRight {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const fadeIn = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

// Add style tag with animations
const style = document.createElement("style");
style.textContent = slideInFromLeft + slideInFromRight + fadeIn;
document.head.appendChild(style);

const topics = ["Chủ Đề", "Học bổng", "Visa", "Kinh nghiệm", "Tin tức"];
const countries = ["Quốc Gia", "Mỹ", "Đài Loan", "Nhật Bản", "Hàn Quốc", "Đức"];
const sorts = ["Sắp xếp theo", "Mới nhất", "Phổ biến", "A-Z"];

const articles = [
  {
    title: "Du học Mỹ: Hướng dẫn xin visa F1 chi tiết",
    desc: "Tìm hiểu điều kiện và thủ tục xin visa du học Mỹ diện F1 trong bài viết này.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Kinh nghiệm phỏng vấn visa du học Nhật Bản",
    desc: "Chia sẻ kinh nghiệm và mẹo hay để vượt qua buổi phỏng vấn xin visa du học Nhật Bản.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Top 10 học bổng du học Hàn Quốc 2025",
    desc: "Cập nhật thông tin mới nhất về các học bổng du học Hàn Quốc dành cho sinh viên quốc tế.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Du học Đức: Những điều cần biết về hệ thống giáo dục",
    desc: "Tìm hiểu về hệ thống giáo dục và các bậc học tại Đức cho sinh viên quốc tế.",
    image:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Học bổng toàn phần du học Úc 2025",
    desc: "Thông tin chi tiết về học bổng toàn phần du học Úc dành cho sinh viên quốc tế.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Visa du học Canada: Điều kiện và thủ tục cần thiết",
    desc: "Hướng dẫn chi tiết về điều kiện và thủ tục xin visa du học Canada cho sinh viên quốc tế.",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=500&q=80",
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = React.useState(0);
  const [selectedTopic, setSelectedTopic] = React.useState("Chủ Đề");
  const [selectedCountry, setSelectedCountry] = React.useState("Quốc Gia");
  const [selectedSort, setSelectedSort] = React.useState("Sắp xếp theo");
  const [openFaqId, setOpenFaqId] = React.useState<number | null>(null);
  const [animatedStats, setAnimatedStats] = useState(false);
  const [statValues, setStatValues] = useState({
    experts: 0,
    countries: 0,
    universities: 0,
    partners: 0,
  });

  const articlesPerPage = 3;

  // Animation for stats when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedStats) {
          setAnimatedStats(true);
          animateStats();
        }
      },
      { threshold: 0.5 }
    );

    const statsSection = document.querySelector(".stats-section");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, [animatedStats]);

  const animateStats = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const targetValues = {
      experts: 50,
      countries: 10,
      universities: 900,
      partners: 100,
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;

      setStatValues({
        experts: Math.min(
          Math.floor((targetValues.experts * currentStep) / steps),
          targetValues.experts
        ),
        countries: Math.min(
          Math.floor((targetValues.countries * currentStep) / steps),
          targetValues.countries
        ),
        universities: Math.min(
          Math.floor((targetValues.universities * currentStep) / steps),
          targetValues.universities
        ),
        partners: Math.min(
          Math.floor((targetValues.partners * currentStep) / steps),
          targetValues.partners
        ),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);
  };

  // Get available categories from articles
  const availableCategories = React.useMemo(() => {
    const categorySet = new Set<string>();
    const countrySet = new Set<string>();

    articles.forEach((article) => {
      // Extract topics from title and description
      if (article.title.toLowerCase().includes("học bổng"))
        categorySet.add("Học bổng");
      if (
        article.title.toLowerCase().includes("visa") ||
        article.desc.toLowerCase().includes("visa")
      )
        categorySet.add("Visa");
      if (
        article.title.toLowerCase().includes("kinh nghiệm") ||
        article.desc.toLowerCase().includes("kinh nghiệm")
      )
        categorySet.add("Kinh nghiệm");

      // Extract countries
      countries.slice(1).forEach((country) => {
        if (
          article.title.toLowerCase().includes(country.toLowerCase()) ||
          article.desc.toLowerCase().includes(country.toLowerCase())
        ) {
          countrySet.add(country);
        }
      });
    });

    const availableTopics = Array.from(categorySet);
    const availableCountries = Array.from(countrySet);

    // Only include default options if we have actual options
    return {
      topics: availableTopics.length > 0 ? ["Chủ Đề", ...availableTopics] : [],
      countries:
        availableCountries.length > 0
          ? ["Quốc Gia", ...availableCountries]
          : [],
    };
  }, [articles]);

  // Filter and sort articles
  const filteredArticles = React.useMemo(() => {
    let filtered = [...articles];

    // Apply topic filter
    if (selectedTopic && selectedTopic !== "Chủ Đề") {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(selectedTopic.toLowerCase()) ||
          article.desc.toLowerCase().includes(selectedTopic.toLowerCase())
      );
    }

    // Apply country filter
    if (selectedCountry && selectedCountry !== "Quốc Gia") {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(selectedCountry.toLowerCase()) ||
          article.desc.toLowerCase().includes(selectedCountry.toLowerCase())
      );
    }

    // Apply sorting
    if (selectedSort && selectedSort !== "Sắp xếp theo") {
      switch (selectedSort) {
        case "Mới nhất":
          // Articles are already sorted by newest
          break;
        case "Phổ biến":
          // You could add a popularity field later
          break;
        case "A-Z":
          filtered.sort((a, b) => a.title.localeCompare(b.title));
          break;
        default:
          break;
      }
    }

    return filtered;
  }, [selectedTopic, selectedCountry, selectedSort]);

  // Update pagination with filtered results
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const currentArticles = filteredArticles.slice(
    currentPage * articlesPerPage,
    (currentPage + 1) * articlesPerPage
  );

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(0);
  }, [selectedTopic, selectedCountry, selectedSort]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const handleJoinNow = (e: React.MouseEvent) => {
    e.preventDefault();
    // navigate('/ai-hub');
  };
  const handleLearnNow = (e: React.MouseEvent) => {
    e.preventDefault();
    // navigate('/ai-hub');
  };
  const handleScrollPersonalize = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("personalize");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    {
      icon: (
        <div className="flex items-center justify-center w-14 h-14">
          <img
            src="/assets/home/professional.svg"
            className="w-10 h-10 object-contain"
            alt="Chuyên gia tư vấn"
          />
        </div>
      ),
      number: "50+",
      label: "Chuyên gia tư vấn",
      desc: "Trực tuyến và dày dạn kinh nghiệm",
    },
    {
      icon: (
        <div className="flex items-center justify-center w-14 h-14">
          <img
            src="/assets/home/global.svg"
            className="w-10 h-10 object-contain"
            alt="Quốc gia du học"
          />
        </div>
      ),
      number: "10+",
      label: "Quốc gia du học",
      desc: "Tập trung vào các quốc gia du học phát triển nhất",
    },
    {
      icon: (
        <div className="flex items-center justify-center w-14 h-14">
          <img
            src="/assets/home/university.svg"
            className="w-10 h-10 object-contain"
            alt="Trường đại học"
          />
        </div>
      ),
      number: "900+",
      label: "Trường đại học",
      desc: "Kết nối sinh viên với các trường đại học hàng đầu",
    },
    {
      icon: (
        <div className="flex items-center justify-center w-14 h-14">
          <img
            src="/assets/home/colab.svg"
            className="w-10 h-10 object-contain"
            alt="Đối tác uy tín"
          />
        </div>
      ),
      number: "100+",
      label: "Đối tác uy tín",
      desc: "Hợp tác với các trung tâm tư vấn, tài chính, ... uy tín",
    },
  ];

  const faqs = [
    {
      question:
        "Glody có thể giúp tôi chọn trường và học bổng phù hợp như thế nào?",
      answer:
        "Glody sử dụng công nghệ AI để phân tích hồ sơ cá nhân, bao gồm điểm số, thành tích học tập, kinh nghiệm làm việc và sở thích cá nhân. Dựa trên dữ liệu này, hệ thống sẽ đề xuất danh sách các trường phù hợp với nguyện vọng và khả năng tài chính của bạn, đồng thời lọc ra những học bổng có tỷ lệ trúng tuyển cao nhất.",
    },
    {
      question: "Tôi có thể sử dụng Glody miễn phí hay cần trả phí?",
      answer:
        "Glody có gói miễn phí, cho phép người dùng truy cập các thông tin cơ bản về trường học, học bổng, chat bot AI độc quyền của glody cũng như tham gia vào cộng đồng du học sinh. Tuy nhiên, để trải nghiệm đầy đủ các tính năng cao cấp như tư vấn chuyên sâu, viết SOP, Study Plan, và hướng dẫn tối ưu hồ sơ, người dùng có thể nâng cấp lên gói Premium với mức phí hợp lý.",
    },
    {
      question: "Glody có hỗ trợ viết SOP, Study Plan và Cover Letter không?",
      answer:
        "Có! Glody AI sẽ giúp bạn soạn thảo các tài liệu quan trọng như Statement of Purpose (SOP), Study Plan, Cover Letter dựa trên thông tin hồ sơ bạn cung cấp. AI sẽ phân tích điểm mạnh/yếu trong hồ sơ và đề xuất nội dung phù hợp với từng trường và học bổng. Ngoài ra, bạn cũng có thể nhận phản hồi từ chuyên gia để chỉnh sửa và nâng cao chất lượng bài viết.",
    },
    {
      question: "Glody có đảm bảo tôi được nhận học bổng không?",
      answer:
        "Glody không thể cam kết 100% bạn sẽ nhận được học bổng, vì quyết định cuối cùng thuộc về trường và tổ chức cấp học bổng. Tuy nhiên, nền tảng này sẽ giúp bạn tối ưu hóa hồ sơ, cải thiện SOP, Study Plan, và tăng khả năng cạnh tranh bằng cách đề xuất học bổng phù hợp với hồ sơ của bạn. Ngoài ra, Glody còn cung cấp công cụ để bạn theo dõi thời hạn nộp hồ sơ và tránh những sai sót không đáng có.",
    },
    {
      question: "Glody có giúp tôi chuẩn bị phỏng vấn visa không?",
      answer:
        "Có! Glody không chỉ hướng dẫn quy trình xin visa mà còn cung cấp công cụ luyện phỏng vấn với các câu hỏi thường gặp và cách trả lời tối ưu. Ngoài ra, bạn có thể nhận tư vấn trực tiếp từ chuyên gia để tăng khả năng đậu visa.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#F8F2FF] pt-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className="space-y-6 order-2 md:order-1"
            style={{ animation: "slideInFromLeft 1s ease-out" }}
          >
            <img
              src="/assets/logo/glodylogo-colored.png"
              alt="Glody"
              className="h-8 mb-2 opacity-0"
              style={{ animation: "fadeIn 0.5s ease-out forwards 0.5s" }}
            />
            <h1
              className="text-4xl md:text-5xl font-bold leading-tight mb-2 opacity-0"
              style={{ animation: "fadeIn 0.5s ease-out forwards 0.7s" }}
            >
              Tìm trường và học bổng phù hợp với <br />
              <span className="text-purple-600">Hồ Sơ Cá Nhân</span>
            </h1>
            <p
              className="text-gray-700 text-lg mb-4 opacity-0"
              style={{ animation: "fadeIn 0.5s ease-out forwards 0.9s" }}
            >
              Với AI Profile Matching và tư vấn độc quyền từ đội ngũ chuyên gia
              của Glody
            </p>
            <div
              className="flex gap-4 mb-4 opacity-0"
              style={{ animation: "fadeIn 0.5s ease-out forwards 1.1s" }}
            >
              <button
                type="button"
                onClick={handleJoinNow}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Tham gia ngay
              </button>
              <button
                type="button"
                onClick={handleScrollPersonalize}
                className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition"
              >
                Tìm hiểu thêm
              </button>
            </div>
          </div>
          <div className="relative order-1 md:order-2 flex justify-center">
            <img
              src="/assets/home/student.svg"
              alt="Student"
              className="rounded-xl object-cover w-[320px] md:w-[380px] lg:w-[420px]"
            />
          </div>
        </div>
      </section>
      {/* Personalization Section */}
      <section id="personalize" className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <img
              src="/assets/home/personalized.svg"
              alt="Personalized Learning"
              className="w-full h-full z-10 relative"
            />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
          </div>

          <div className="order-1 md:order-2 space-y-8 max-w-xl">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight leading-tight">
                <span className="text-purple-700 block mb-2">Cá nhân hoá</span>
                <span className="text-black">lộ trình Du Học</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Mỗi hành trình du học đều khác biệt. Chúng tôi tạo ra lộ trình
                phù hợp nhất với bạn.
              </p>
            </div>

            <ul className="space-y-8">
              <li className="flex items-start gap-5 group">
                <span className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors mt-1">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-xl mb-2">
                    AI-Powered Matching
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tìm trường và học bổng phù hợp với hồ sơ và mong muốn của bạn
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-5 group">
                <span className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors mt-1">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-xl mb-2">
                    Tư vấn chuyên gia
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Trực tiếp 1-1 cùng những chuyên gia dày dạn kinh nghiệm
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-5 group">
                <span className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors mt-1">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-xl mb-2">
                    Phân tích cá nhân hoá
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Đưa ra lời khuyên và cách cải thiện dựa trên điểm yếu hồ sơ
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-5 group">
                <span className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors mt-1">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-xl mb-2">
                    Trợ lý Viết Glody
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hỗ trợ viết SOP, cover letter, Studyplan du học
                  </p>
                </div>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => {
                if (window.location.pathname === '/ai-hub') {
                  const el = document.getElementById('header');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/ai-hub#header';
                }
              }}
              className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center gap-3 group mt-4"
            >
              <span className="text-lg">Khám Phá Ngay</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="bg-[#F8F2FF] py-12 stats-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-200">
              <div
                className="mb-2"
                style={{ animation: "fadeIn 0.5s ease-out" }}
              >
                {stats[0].icon}
              </div>
              <div className="text-2xl font-bold text-purple-700">
                {statValues.experts}+
              </div>
              <div className="font-semibold mb-1">{stats[0].label}</div>
              <div className="text-gray-500 text-sm">{stats[0].desc}</div>
            </div>
            <div className="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-200">
              <div
                className="mb-2"
                style={{ animation: "fadeIn 0.5s ease-out 0.2s" }}
              >
                {stats[1].icon}
              </div>
              <div className="text-2xl font-bold text-purple-700">
                {statValues.countries}+
              </div>
              <div className="font-semibold mb-1">{stats[1].label}</div>
              <div className="text-gray-500 text-sm">{stats[1].desc}</div>
            </div>
            <div className="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-200">
              <div
                className="mb-2"
                style={{ animation: "fadeIn 0.5s ease-out 0.4s" }}
              >
                {stats[2].icon}
              </div>
              <div className="text-2xl font-bold text-purple-700">
                {statValues.universities}+
              </div>
              <div className="font-semibold mb-1">{stats[2].label}</div>
              <div className="text-gray-500 text-sm">{stats[2].desc}</div>
            </div>
            <div className="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-200">
              <div
                className="mb-2"
                style={{ animation: "fadeIn 0.5s ease-out 0.6s" }}
              >
                {stats[3].icon}
              </div>
              <div className="text-2xl font-bold text-purple-700">
                {statValues.partners}+
              </div>
              <div className="font-semibold mb-1">{stats[3].label}</div>
              <div className="text-gray-500 text-sm">{stats[3].desc}</div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Accurate Info Section*/}
      <section className="relative w-full min-h-[420px] flex flex-col">
        <div className="max-w-4xl mx-auto text-center space-y-4 py-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-black">Thông tin</span>{" "}
            <span className="text-purple-600">
              Chính Xác - Cập nhật liên tục
            </span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Cập nhật thông tin du học chính thống, từ học bổng, visa đến lộ
            trình hồ sơ. Nắm bắt cơ hội với dữ liệu chính xác, minh bạch. Giúp
            bạn tự tin lên kế hoạch và ra quyết định đúng đắn.
          </p>
        </div>
        {/* Filter bar */}
        <div className="w-full bg-white px-4 md:px-24 py-8 shadow-sm z-10">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center gap-4 md:gap-8">
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="border rounded-lg px-6 py-3 text-gray-700 bg-white focus:outline-none focus:border-purple-400 w-full md:w-72 cursor-pointer hover:border-purple-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              disabled={availableCategories.topics.length === 0}
            >
              {availableCategories.topics.length > 0 ? (
                availableCategories.topics.map((topic, idx) => (
                  <option key={idx} value={topic}>
                    {topic}
                  </option>
                ))
              ) : (
                <option value="">404 - danh mục trống</option>
              )}
            </select>

            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="border rounded-lg px-6 py-3 text-gray-700 bg-white focus:outline-none focus:border-purple-400 w-full md:w-72 cursor-pointer hover:border-purple-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              disabled={availableCategories.countries.length === 0}
            >
              {availableCategories.countries.length > 0 ? (
                availableCategories.countries.map((country, idx) => (
                  <option key={idx} value={country}>
                    {country}
                  </option>
                ))
              ) : (
                <option value="">404 - danh mục trống</option>
              )}
            </select>

            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="border rounded-lg px-6 py-3 text-gray-700 bg-white focus:outline-none focus:border-purple-400 w-full md:w-72 cursor-pointer hover:border-purple-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              disabled={sorts.length <= 1}
            >
              {sorts.length > 1 ? (
                sorts.map((sort, idx) => (
                  <option key={idx} value={sort}>
                    {sort}
                  </option>
                ))
              ) : (
                <option value="">404 - danh mục trống</option>
              )}
            </select>
          </div>
        </div>
        {/* Article grid */}
        <div className="container mx-auto px-4 md:px-24 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentArticles.map((a, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col h-full"
            >
              <img
                src={a.image}
                alt={a.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2 line-clamp-2">
                  {a.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {a.desc}
                </p>
                <button
                  type="button"
                  className="mt-auto text-purple-600 font-semibold hover:underline text-sm text-left"
                >
                  Đọc thêm →
                </button>
              </div>
            </div>
          ))}
        </div>{" "}
        {/* Slider pagination */}
        <div className="container mx-auto px-4 md:px-24 pb-10 flex justify-center items-center">
          <div className="flex gap-4">
            <button
              type="button"
              onClick={handlePrevPage}
              aria-label="Previous page"
              disabled={currentPage === 0}
              className={`w-12 h-12 rounded-full border border-purple-200 flex items-center justify-center bg-white text-purple-600 transition-colors duration-200 ${
                currentPage === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-purple-600 hover:text-white active:bg-purple-700 active:border-purple-700"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNextPage}
              aria-label="Next page"
              disabled={currentPage === totalPages - 1}
              className={`w-12 h-12 rounded-full border border-purple-200 flex items-center justify-center bg-white text-purple-600 transition-colors duration-200 ${
                currentPage === totalPages - 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-purple-600 hover:text-white active:bg-purple-700 active:border-purple-700"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      {/* Community Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-600">
                Cộng Đồng Du Học Sinh Glody
              </h2>
              <p className="text-gray-700 mb-6">
                Tham gia cộng đồng du học sinh năng động, nơi bạn có thể kết
                nối, học hỏi kinh nghiệm thực tế và nhận hỗ trợ từ những người
                đi trước. Cùng chia sẻ bí quyết săn học bổng, chuẩn bị hồ sơ,
                hòa nhập môi trường mới và phát triển sự nghiệp toàn cầu. Không
                chỉ là thông tin, đây là nơi bạn tìm thấy sự đồng hành trên hành
                trình du học!
              </p>
              <Link
                to="/community"
                onClick={e => {
                  e.preventDefault();
                  window.location.href = '/community#header';
                }}
                className="text-purple-600 font-semibold hover:underline"
              >
                Tham Gia Ngay →
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=200&q=80"
                alt="Community"
                className="rounded-lg object-cover h-28 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=200&q=80"
                alt="Community"
                className="rounded-lg object-cover h-28 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80"
                alt="Community"
                className="rounded-lg object-cover h-28 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80"
                alt="Community"
                className="rounded-lg object-cover h-28 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
                alt="Community"
                className="rounded-lg object-cover h-28 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=200&q=80"
                alt="Community"
                className="rounded-lg object-cover h-28 w-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="bg-[#F8F2FF] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-600">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="mb-8 text-gray-700">
            Dưới đây là những câu hỏi phổ biến nhất mà chúng tôi nhận được. Nếu
            bạn có bất kỳ thắc mắc nào khác, đừng ngần ngại liên hệ với Glody!
          </p>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow overflow-hidden transform hover:scale-[1.01] transition-all duration-200"
              >
                <div
                  onClick={() => setOpenFaqId(openFaqId === idx ? null : idx)}
                  className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                  role="button"
                  aria-expanded={openFaqId === idx}
                  tabIndex={0}
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-purple-600 transition-transform duration-300 ease-in-out ${
                      openFaqId === idx ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaqId === idx
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-4 bg-gray-50 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
