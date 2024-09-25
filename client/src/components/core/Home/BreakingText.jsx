import React, { useEffect, useState } from "react";
import { fetchBreakingNews } from "../../../services/operations/admin";
// import "./BreakingText.css"; // Import the CSS file

const BreakingText = () => {
  const [breakingNews, setBreakingNews] = useState([]);

  useEffect(() => {
    const fetchBreakingNewsList = async () => {
      try {
        const response = await fetchBreakingNews();
        setBreakingNews(response || []);
      } catch (error) {
        console.error("Error fetching breaking news:", error);
      }
    };

    fetchBreakingNewsList();
  }, []);

  return (
    <div className="breaking-news-container">
      <div className="breaking-news-content">
        {breakingNews.length > 0 ? (
          breakingNews.map((currElem, index) => (
            <p key={index} className="breaking-news-item">
              {currElem.name}
            </p>
          ))
        ) : (
          <p className="breaking-news-item">No breaking news at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default BreakingText;
