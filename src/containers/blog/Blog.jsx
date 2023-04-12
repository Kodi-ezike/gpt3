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
          <Article imgUrl={blog01} date='Sep 23, 2021' title='Understanding ChatGPT3: What It Is and How It Works' />
        </div>
        <div className="gpt3_blog-container-groupB">
          <Article imgUrl={blog02} date='Sep 24, 2021' title="The Future of Chatbots and Conversational AI with ChatGPT3" />
          <Article imgUrl={blog03} date='Sep 25, 2021' title='ChatGPT3 vs. Other Chatbot Platforms: A Comparative Analysis' />
          <Article imgUrl={blog04} date='Sep 26, 2021' title='The Benefits of Using ChatGPT3 for Customer Service and Support' />
          <Article imgUrl={blog05} date='Sep 27, 2021' title='ChatGPT3 and Natural Language Processing: What You Need to Know' />
        </div>
      </div>
    </div>
  );
};

export default Blog;
