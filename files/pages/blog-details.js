import React from "react";
import Layout from "@components/layout";
import HeaderInner from "@components/header/header-inner";
import MobileNavInner from "@components/mobile-nav-inner";
import PageHeader from "@components/page-header";
import BlogPost from "@components/blog/blog-post";
import Subscribe from "@components/subscribe";
import Footer from "@components/footer";
const BlogDetails = () => {
  return (
    <Layout pageTitle="Viral Ventures Media">
      <HeaderInner />
      <PageHeader title="Blog Details" crumbTitle="Blog Details" />
      <BlogPost />
      <Subscribe />
      <Footer />
      <MobileNavInner />
    </Layout>
  );
};

export default BlogDetails;
