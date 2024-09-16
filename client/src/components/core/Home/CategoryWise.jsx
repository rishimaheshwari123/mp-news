import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import AddSlideBar from "./AddSlideBar";

function CategoryWise() {
  const { allNews } = useSelector((state) => state.news);

  const all = [...allNews]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  const videsh = allNews
    .filter((news) => news?.category?._id === "66e71349fb7bfd9e1e73e207")
    .sort((a, b) => new Date(b.publish) - new Date(a.publish))
    .slice(0, 4);
  const desh = allNews
    .filter((news) => news?.category?._id === "66e712d4fb7bfd9e1e73e1ff")
    .sort((a, b) => new Date(b.publish) - new Date(a.publish))
    .slice(0, 4);
  const khel = allNews
    .filter((news) => news?.category?._id === "66e71371fb7bfd9e1e73e20b")
    .sort((a, b) => new Date(b.publish) - new Date(a.publish))
    .slice(0, 4);
  const topNews = allNews
    .filter((news) => news?.category?._id === "66e71256fb7bfd9e1e73e1c5")
    .sort((a, b) => new Date(b.publish) - new Date(a.publish))
    .slice(0, 4);
  const lifeStyle = allNews
    .filter((news) => news?.category?._id === "66e713d2fb7bfd9e1e73e213")
    .sort((a, b) => new Date(b.publish) - new Date(a.publish))
    .slice(0, 4);
  const tech = allNews
    .filter((news) => news?.category?._id === "66e7140afb7bfd9e1e73e217")
    .sort((a, b) => new Date(b.publish) - new Date(a.publish))
    .slice(0, 4);

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }
    return format(date, "MMMM d, yyyy");
  };

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Maharashtra Section */}
        <div className="lg:col-span-1">
          <h2 className="font-bold text-2xl mb-4">विदेश</h2>
          <div className="grid gap-4">
            {/* Top news with larger image */}
            {videsh[0] && (
              <Link to={`/${videsh[0]?.slug}`} className="relative">
                <img
                  src={videsh[0]?.images[0]?.url}
                  alt=""
                  className="h-[250px] lg:h-[300px] w-full object-cover"
                />
                <p className="font-semibold text-lg mt-2">
                  {truncateText(videsh[0]?.title, 10)}
                </p>
                <p className="text-gray-400 text-sm">
                  {formatDate(videsh[0]?.createdAt)}
                </p>
              </Link>
            )}

            {/* Smaller news items */}
            <div className="grid grid-cols-1 gap-4">
              {videsh.slice(1).map((news) => (
                <Link
                  to={`/${news?.slug}`}
                  key={news._id}
                  className="flex gap-3"
                >
                  <img
                    src={news?.images[0]?.url}
                    alt=""
                    className="h-[65px] min-w-[110px]"
                  />
                  <div>
                    <p className="font-semibold text-sm">
                      {truncateText(news?.title, 20)}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {formatDate(news?.createdAt)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bharat Section */}
        <div className="lg:col-span-1">
          <h2 className="font-bold text-2xl mb-4">देश</h2>
          <div className="grid gap-4">
            {/* Top news with larger image */}
            {desh[0] && (
              <Link to={`/${desh[0]?.slug}`} className="relative">
                <img
                  src={desh[0]?.images[0]?.url}
                  alt=""
                  className="h-[250px] lg:h-[300px] w-full object-cover"
                />
                <p className="font-semibold text-lg mt-2">
                  {truncateText(desh[0]?.title, 10)}
                </p>
                <p className="text-gray-400 text-sm">
                  {formatDate(desh[0]?.createdAt)}
                </p>
              </Link>
            )}

            <div className="grid grid-cols-1 gap-4">
              {desh.slice(1).map((news) => (
                <Link
                  to={`/${news?.slug}`}
                  key={news._id}
                  className="flex gap-3"
                >
                  <img
                    src={news?.images[0]?.url}
                    alt=""
                    className="h-[65px] min-w-[110px]"
                  />
                  <div>
                    <p className="font-semibold text-sm">
                      {truncateText(news?.title, 20)}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {formatDate(news?.createdAt)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <AddSlideBar />

      <br />
      <br />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Maharashtra Section */}
        <div className="lg:col-span-1">
          <h2 className="font-bold text-2xl mb-4">खेल</h2>
          <div className="grid gap-4">
            {/* Top news with larger image */}
            {khel[0] && (
              <Link to={`/${khel[0]?.slug}`} className="relative">
                <img
                  src={khel[0]?.images[0]?.url}
                  alt=""
                  className="h-[250px] lg:h-[300px] w-full object-cover"
                />
                <p className="font-semibold text-lg mt-2">
                  {truncateText(khel[0]?.title, 10)}
                </p>
                <p className="text-gray-400 text-sm">
                  {formatDate(khel[0]?.createdAt)}
                </p>
              </Link>
            )}

            {/* Smaller news items */}
            <div className="grid grid-cols-1 gap-4">
              {khel.slice(1).map((news) => (
                <Link
                  to={`/${news?.slug}`}
                  key={news._id}
                  className="flex gap-3"
                >
                  <img
                    src={news?.images[0]?.url}
                    alt=""
                    className="h-[65px] min-w-[110px]"
                  />
                  <div>
                    <p className="font-semibold text-sm">
                      {truncateText(news?.title, 20)}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {formatDate(news?.createdAt)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bharat Section */}
        <div className="lg:col-span-1">
          <h2 className="font-bold text-2xl mb-4">टॉप न्यूज़</h2>
          <div className="grid gap-4">
            {/* Top news with larger image */}
            {topNews[0] && (
              <Link to={`/${topNews[0]?.slug}`} className="relative">
                <img
                  src={topNews[0]?.images[0]?.url}
                  alt=""
                  className="h-[250px] lg:h-[300px] w-full object-cover"
                />
                <p className="font-semibold text-lg mt-2">
                  {truncateText(topNews[0]?.title, 10)}
                </p>
                <p className="text-gray-400 text-sm">
                  {formatDate(topNews[0]?.createdAt)}
                </p>
              </Link>
            )}

            <div className="grid grid-cols-1 gap-4">
              {topNews.slice(1).map((news) => (
                <Link
                  to={`/${news?.slug}`}
                  key={news._id}
                  className="flex gap-3"
                >
                  <img
                    src={news?.images[0]?.url}
                    alt=""
                    className="h-[65px] min-w-[110px]"
                  />
                  <div>
                    <p className="font-semibold text-sm">
                      {truncateText(news?.title, 20)}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {formatDate(news?.createdAt)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="lg:col-span-1">
          <h2 className="font-bold text-2xl mb-4">लाइफ स्टाइल</h2>
          <div className="grid gap-4">
            {lifeStyle[0] && (
              <Link to={`/${lifeStyle[0]?.slug}`} className="relative">
                <img
                  src={lifeStyle[0]?.images[0]?.url}
                  alt=""
                  className="h-[250px] lg:h-[300px] w-full object-cover"
                />
                <p className="font-semibold text-lg mt-2">
                  {truncateText(lifeStyle[0]?.title, 10)}
                </p>
                <p className="text-gray-400 text-sm">
                  {formatDate(lifeStyle[0]?.createdAt)}
                </p>
              </Link>
            )}

            {/* Smaller news items */}
            <div className="grid grid-cols-1 gap-4">
              {lifeStyle.slice(1).map((news) => (
                <Link
                  to={`/${news?.slug}`}
                  key={news._id}
                  className="flex gap-3"
                >
                  <img
                    src={news?.images[0]?.url}
                    alt=""
                    className="h-[65px] min-w-[110px]"
                  />
                  <div>
                    <p className="font-semibold text-sm">
                      {truncateText(news?.title, 20)}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {formatDate(news?.createdAt)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bharat Section */}
        <div className="lg:col-span-1">
          <h2 className="font-bold text-2xl mb-4">टेक-ऑटो</h2>
          <div className="grid gap-4">
            {/* Top news with larger image */}
            {tech[0] && (
              <Link to={`/${tech[0]?.slug}`} className="relative">
                <img
                  src={tech[0]?.images[0]?.url}
                  alt=""
                  className="h-[250px] lg:h-[300px] w-full object-cover"
                />
                <p className="font-semibold text-lg mt-2">
                  {truncateText(tech[0]?.title, 10)}
                </p>
                <p className="text-gray-400 text-sm">
                  {formatDate(tech[0]?.createdAt)}
                </p>
              </Link>
            )}

            <div className="grid grid-cols-1 gap-4">
              {tech.slice(1).map((news) => (
                <Link
                  to={`/${news?.slug}`}
                  key={news._id}
                  className="flex gap-3"
                >
                  <img
                    src={news?.images[0]?.url}
                    alt=""
                    className="h-[65px] min-w-[110px]"
                  />
                  <div>
                    <p className="font-semibold text-sm">
                      {truncateText(news?.title, 20)}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {formatDate(news?.createdAt)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryWise;
