import React from "react";
import Layout from "@components/layout";
import Header from "@components/header/header";
import Banner from "@components/banner";
import Video from "@components/video";
import AppFeature from "@components/app-feature";
import CallToAction from "@components/call-to-action";
import PriceHome from "@components/price/price-home";
import TestimonialsHome from "@components/testimonials/testimonials-home";
import AppShot from "@components/app-shot";
import BlogHome from "@components/blog/blog-home";
import ServicesHome from "@components/services/services-home";
import FAQ from "@components/faq";
import Brands from "@components/brands";
import Subscribe from "@components/subscribe";
import Footer from "@components/footer";
import MobileNav from "@components/mobile-nav";

const HomeOne = () => {
  return (
    <Layout pageTitle="Viral Ventures Media">
      <Header />
      <Banner />
      <ServicesHome />
      <CallToAction />
      <Video />
      <AppFeature />
      <PriceHome />
      <TestimonialsHome />
      {/* <AppShot /> */}
      <FAQ />
      {/* <BlogHome /> */}
      {/* <Brands /> */}
      <Subscribe />
      <Footer />
      <MobileNav />
    </Layout>
  );
};

export default HomeOne;
