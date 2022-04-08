import React from "react";
import Navbar from "../../component/Navbar";
import { Signup } from "../../component/Signup/Signup";
import Footer from "../../component/Footer";
import About from "../../component/About";
import Opener from "../../component/Opener";
import Signup from "../../component/Signup";

export const Home = () => {
  return (
    <div>
      <Signup />
      <Navbar />
      <Opener />
      <Footer />
      <About />
    </div>
  );
};

export default Home;
