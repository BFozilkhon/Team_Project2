import React from "react";
import Navbar from "../../component/Navbar";
import { Signup } from "../../component/Signup/Signup";

export const Home = () => {
  return (
    <div>
      <Signup />
      <Navbar />
    </div>
  );
};

export default Home;
