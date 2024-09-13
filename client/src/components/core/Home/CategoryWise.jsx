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

  const rajniti = allNews
    .filter((news) => news?.category?._id === "66e431ef2e7cb69596941450")
    .sort((a, b) => new Date(b.publish) - new Date(a.publish))
    .slice(0, 4);
  const crime = allNews
    .filter((news) => news?.category?._id === "66e431fb2e7cb69596941454")
    .sort((a, b) => new Date(b.publish) - new Date(a.publish))
    .slice(0, 4);
  const mp = allNews
    .filter((news) => news?.category?._id === "66e432022e7cb69596941458")
    .sort((a, b) => new Date(b.publish) - new Date(a.publish))
    .slice(0, 4);
  const distrik = allNews
    .filter((news) => news?.category?._id === "66e4320c2e7cb6959694145c")
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
          <h2 className="font-bold text-2xl mb-4">राजनीति</h2>
          <div className="grid gap-4">
            {/* Top news with larger image */}
            {rajniti[0] && (
              <Link to={`/${rajniti[0]?.slug}`} className="relative">
                <img
                  src={rajniti[0]?.images[0]?.url}
                  alt=""
                  className="h-[250px] lg:h-[300px] w-full object-cover"
                />
                <p className="font-semibold text-lg mt-2">
                  {truncateText(rajniti[0]?.title, 10)}
                </p>
                <p className="text-gray-400 text-sm">
                  {formatDate(rajniti[0]?.createdAt)}
                </p>
              </Link>
            )}

            {/* Smaller news items */}
            <div className="grid grid-cols-1 gap-4">
              {rajniti.slice(1).map((news) => (
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
          <h2 className="font-bold text-2xl mb-4">क्राइम</h2>
          <div className="grid gap-4">
            {/* Top news with larger image */}
            {crime[0] && (
              <Link to={`/${crime[0]?.slug}`} className="relative">
                <img
                  src={crime[0]?.images[0]?.url}
                  alt=""
                  className="h-[250px] lg:h-[300px] w-full object-cover"
                />
                <p className="font-semibold text-lg mt-2">
                  {truncateText(crime[0]?.title, 10)}
                </p>
                <p className="text-gray-400 text-sm">
                  {formatDate(crime[0]?.createdAt)}
                </p>
              </Link>
            )}

            <div className="grid grid-cols-1 gap-4">
              {crime.slice(1).map((news) => (
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
          <h2 className="font-bold text-2xl mb-4">अपना मध्यप्रदेश</h2>
          <div className="grid gap-4">
            {/* Top news with larger image */}
            {mp[0] && (
              <Link to={`/${mp[0]?.slug}`} className="relative">
                <img
                  src={mp[0]?.images[0]?.url}
                  alt=""
                  className="h-[250px] lg:h-[300px] w-full object-cover"
                />
                <p className="font-semibold text-lg mt-2">
                  {truncateText(mp[0]?.title, 10)}
                </p>
                <p className="text-gray-400 text-sm">
                  {formatDate(mp[0]?.createdAt)}
                </p>
              </Link>
            )}

            {/* Smaller news items */}
            <div className="grid grid-cols-1 gap-4">
              {mp.slice(1).map((news) => (
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
          <h2 className="font-bold text-2xl mb-4">आपका जिला</h2>
          <div className="grid gap-4">
            {/* Top news with larger image */}
            {distrik[0] && (
              <Link to={`/${distrik[0]?.slug}`} className="relative">
                <img
                  src={distrik[0]?.images[0]?.url}
                  alt=""
                  className="h-[250px] lg:h-[300px] w-full object-cover"
                />
                <p className="font-semibold text-lg mt-2">
                  {truncateText(distrik[0]?.title, 10)}
                </p>
                <p className="text-gray-400 text-sm">
                  {formatDate(distrik[0]?.createdAt)}
                </p>
              </Link>
            )}

            <div className="grid grid-cols-1 gap-4">
              {distrik.slice(1).map((news) => (
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
