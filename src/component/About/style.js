import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 125px;
  @media (max-width: 1519px) {
    flex-direction: column;
  }
`;

const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 776px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .text {
    width: 70%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 136.52%;
    color: #ffffff;
    @media (min-width: 1520px) {
      font-size: 24px;
    }
    @media (max-width: 1519px) {
      font-size: 21px;
    }
    @media (max-width: 776px) {
      font-size: 17px;
    }
    @media (max-width: 500px) {
      font-size: 15px;
    }
  }
`;

const WrapperImg = styled.img`
  width: 496px;
  height: 479px;
  @media (min-width: 1520px) {
    width: 496px;
  }
  @media (max-width: 1519px) {
    width: 430px;
  }
  @media (max-width: 776px) {
    width: 380px;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
`;

const Text = styled.div`
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 60px;
  text-transform: uppercase;
  margin-bottom: 25px;
  color: #ffffff;
  @media (min-width: 1520px) {
    font-size: 48px;
  }
  @media (max-width: 1519px) {
    font-size: 38px;
  }
  @media (max-width: 776px) {
    font-size: 28px;
    line-height: 40px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export { Wrapper, WrapperText, WrapperImg, Text };
