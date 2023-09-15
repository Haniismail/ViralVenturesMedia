import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import BlogCard from "@components/blog/blog-card";
import blogShape1 from "@images/blog/blog-1-shape-1.png";
import blogShape2 from "@images/blog/blog-1-shape-2.png";
import blogShape3 from "@images/blog/blog-1-shape-3.png";

import { BLOG_DATA } from "@data/index";

const BlogHome = () => {
  const { sectionTitle, posts } = BLOG_DATA;
  const { title, text } = sectionTitle;
  const blogPosts = posts.slice(0, 3);
  return (
    <>
    {/* <section className="blog-one" id="blog">
      <div
        className="blog-1-shape-1"
        style={{ backgroundImage: `url(${blogShape1})` }}
      ></div>
      <div
        className="blog-1-shape-2"
        style={{ backgroundImage: `url(${blogShape2})` }}
      ></div>
      <div
        className="blog-1-shape-3"
        style={{ backgroundImage: `url(${blogShape3})` }}
      ></div>
      <Container>
        <div className="block-title text-center">
          <p>{text}</p>
          <h3>{title}</h3>
        </div>
        <Row>
          {blogPosts.map((blogPost, index) => (
            <Col key={`blog-card-key-${index}`} lg={4}>
              <BlogCard
                image={blogPost.image}
                extraClassName=" "
                date={blogPost.date}
                commentCount={blogPost.commentCount}
                title={blogPost.title}
                text={blogPost.text}
                link={blogPost.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section> */}
    </>
  );
};

export default BlogHome;
