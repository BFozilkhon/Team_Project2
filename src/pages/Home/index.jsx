import React from "react";
import About from "../../component/About";
import Opener from "../../component/Opener";
import Signup from "../../component/Signup";

export const Home = () => {
  return (
    <div>
      <Signup />
      <Opener />
      <About />
    </div>
  );
};

export default Home;
