import React from "react";
import Layout from "@components/layout";
import HeaderInner from "@components/header/header-inner";
import MobileNavInner from "@components/mobile-nav-inner";
import PageHeader from "@components/page-header";
import BlogPage from "@components/blog/blog-page";
import Subscribe from "@components/subscribe";
import Footer from "@components/footer";
const Blog = () => {
  return (
    <Layout pageTitle="Viral Ventures Media">
      <HeaderInner />
      <PageHeader title="Blog Page" crumbTitle="Blog Page" />
      <BlogPage />
      <Subscribe />
      <Footer />
      <MobileNavInner />
    </Layout>
  );
};

export default Blog;
