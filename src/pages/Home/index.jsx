import React from "react";
import Account from "../../component/Account";
import Footer from "../../component/Footer";
import About from "../../component/About";
import Opener from "../../component/Opener";
import Signup from "../../component/Signup";
import Partners from "../../component/Partners";
import Product from "../../component/Product";
import Ecosystem from "../../component/Ecosystem";

export const Home = () => {
  return (
    <div>
      <Signup />
      <Opener />
      <About />
      <Ecosystem />
      <Account />
      <Partners />
      <Product />
      <Footer />
    </div>
  );
};

export default Home;
