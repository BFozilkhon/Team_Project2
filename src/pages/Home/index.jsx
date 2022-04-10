import React from "react";
import Footer from "../../component/Footer";
import About from "../../component/About";
import Opener from "../../component/Opener";
import Signup from "../../component/Signup";
import Partners from "../../component/Partners";

export const Home = () => {
  return (
    <div>
      <Signup />
      <Opener />
      <About />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
