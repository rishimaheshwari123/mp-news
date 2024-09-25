import React, { useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  const [visible, setVisible] = useState(true);

  const { allNews } = useSelector((state) => state.news);

  const breakingNews = [...allNews]
    .filter((news) => news.type === "breaking-news")
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  console.log(breakingNews);
  return (
    <>
      {visible && breakingNews.length > 0 && (
        <div className="max-w-7xl mx-auto relative bg-yellow-500 overflow-hidden">
          <div className="max-w-7xl mx-auto relative flex items-center">
            <p className="text-[16px] bg-white py-3 sm:text-[20px] lg:text-2xl font-bold text-red-600 px-2 uppercase">
              Breaking News
            </p>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{ delay: 1500 }}
              loop={true}
              className="flex-1"
            >
              {breakingNews.map((currElem, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-yellow-500 text-white px-4 py-1">
                    <Link
                      to={currElem.slug}
                      className="text-[14px] sm:text-[18px] lg:text-xl font-semibold text-white"
                    >
                      {currElem.title}
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default BreakingNews;
