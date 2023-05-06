import React from "react";
import "./article.css";
import { Link } from "react-router-dom";

const Article = ({ id, imgUrl, date, title }) => {
  return (
    <div className="gpt3_blog-container-article">
      <div className="gpt3_blog-container-article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt3_blog-container-article-content">
        <div>
          <p>{date}</p>
          <Link to="BlogPage" state={{ id: id }}>
            <h3>{title}</h3>
          </Link>
        </div>
        <Link to="BlogPage" state={{ id: id }}>
          <p>Read Full Article</p>
        </Link>
      </div>
    </div>
  );
};

export default Article;
