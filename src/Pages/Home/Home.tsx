import React from "react";
import Header from "../../compoments/header";
import Slogan from "../../compoments/slogan";
import Footer from "../../compoments/Footer";
import HighProducts from "../../compoments/HighlightProducts";
import ProductShowcase from "../../compoments/ProductShow";

const Home: React.FC = () => {
  return (
    <>
      <Slogan />
      <Header />
      <HighProducts />
      <ProductShowcase />
      <Footer />

    </>
  );
};

export default Home;
