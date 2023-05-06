import React from "react";
import { Navbar } from "../../components";
import { blogContent } from "./blogContent";
import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import "./blogPage.css";
const BlogPage = () => {
  const location = useLocation();
  const { id } = location.state;
  return (
    <div>
      <Navbar />
      {blogContent.map((item) => {
        if (id === item.id) {
          return (
            <div className="blog-page-container section_padding">
              <h2 className="blog-page-header">{item.title}</h2>
              <img src={item.img} className="blog-page-image" alt="blog" />
              <p className="blog-page-text">{item.text}</p>
              <p className="blog-page-author">Source: {item.author}</p>
              <p className="blog-page-date">{item.date}</p>
            </div>
          );
        }
        return null;
      })}
      <Footer />
    </div>
  );
};

export default BlogPage;
