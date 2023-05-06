import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3_blog section_padding" id="blog">
      <div className="gpt3_blog-heading">
        <h2 className="gradient_text">
          A lot is happening, <br /> We are blogging about it.
        </h2>
      </div>
      <div className="gpt3_blog-container">
        <div className="gpt3_blog-container-groupA">
          <Article id={1} imgUrl={blog01} date='May 1, 2023' title='Understanding ChatGPT3: What It Is and How It Works' />
        </div>
        <div className="gpt3_blog-container-groupB">
          <Article id={2} imgUrl={blog02} date='May 2, 2023' title="The Future of Chatbots and Conversational AI with ChatGPT3" />
          <Article id={3} imgUrl={blog03} date='May 3, 2023' title='ChatGPT3 vs. Other Chatbot Platforms: A Comparative Analysis' />
          <Article id={4} imgUrl={blog04} date='May 4, 2023' title='The Benefits of Using ChatGPT3 for Customer Service and Support' />
          <Article id={5} imgUrl={blog05} date='May 5, 2023' title='ChatGPT3 and Natural Language Processing: What You Need to Know' />
        </div>
      </div>
    </div>
  );
};

export default Blog;
