import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "@components/blog/blog-card";
import { BLOG_DATA } from "@data/index";
const BlogPage = () => {
  return (
    <section className="blog-one blog-two">
      <Container>
        <Row>
          {BLOG_DATA.posts.map((blogPost, index) => (
            <Col lg={4} md={6} sm={12} key={`blog-card-key-${index}`}>
              <BlogCard
                image={blogPost.image}
                extraClassName=" mbt-60"
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
    </section>
  );
};

export default BlogPage;
