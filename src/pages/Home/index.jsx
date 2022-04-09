import React from "react";
import Footer from "../../component/Footer";
import About from "../../component/About";
import Opener from "../../component/Opener";
import Signup from "../../component/Signup";
import Product from "../../component/Product";

export const Home = () => {
  return (
    <div>
      <Signup />
      <Opener />
      <About />
      <Product />
      <Footer />
    </div>
  );
};

export default Home;
