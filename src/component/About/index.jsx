import React from "react";
import { Text, Wrapper, WrapperImg, WrapperText } from "./style";
import Ilustator from "../../assets/imgs/ilustrator.svg";

const About = () => {
  return (
    <Wrapper>
      <WrapperText>
        <Text>
          What is <span style={{ color: "#6280FF" }}>Create Protocol</span>
        </Text>
        <p className="text">
          Create Protocol is a completely decentralised ecosystem, structured
          around creators and artists, which has multiple decentralised
          applications (DApps) built on top of it. All these DApps are governed
          and powered by the create governance token - $CR8. <br /> <br /> Using
          the Create platform and the suite of APIs along with it, the community
          has the freedom of extending these applications in the way they like -
          which is the revolution that Create Protocol plans to bring about.
        </p>
      </WrapperText>
      <WrapperImg src={Ilustator} />
    </Wrapper>
  );
};

export default About;
