import React from "react";
import Account from "../../component/Account";
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
      <Account />
      <About />
      <Product />
      <Footer />
    </div>
  );
};

export default Home;
