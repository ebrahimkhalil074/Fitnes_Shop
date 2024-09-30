import React from "react";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Footer from "../components/Footer";
import FeaturedProducts from "../components/Featured";
import Benefits from "../components/Benefits";


export default function Home() {
  return (
    <>
      <Banner />
      <Category/>
<FeaturedProducts></FeaturedProducts>
<Benefits/>
    </>
  );
}
