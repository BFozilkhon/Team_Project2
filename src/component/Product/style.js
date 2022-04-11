import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 141px;
  margin-bottom: 130px;
  div {
    @media (max-width: 1200px) {
      flex-direction: column;
    }
  }
`;
const WrapperProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 49px;
  .products {
    font-family: "Orbitron";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 136.02%;
    color: #ffffff;
    @media (min-width: 1520px) {
      font-size: 48px;
    }
    @media (max-width: 1519px) {
      font-size: 44px;
    }
    @media (max-width: 776px) {
      font-size: 40px;
      line-height: 30px;
    }
    @media (max-width: 500px) {
      font-size: 36px;
    }
  }
  .learn {
    font-family: "Orbitron";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 136.02%;
    text-align: center;
    color: #cbd5e0;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  /* justify-content: start; */
  /* align-items: ${(center) => (center ? "center" : "none")}; */
  .title {
    padding: 0 20px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 136.02%;
    display: flex;
    align-items: flex-end;
    color: #cbd5e0;

    @media (max-width: 520px) {
      font-size: 18px;
    }
  }
`;

const CardWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
`;

const Text = styled.div`
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 136.02%;
  color: #ffffff;
  @media (min-width: 1520px) {
    font-size: 36px;
  }
  @media (max-width: 1519px) {
    font-size: 30px;
  }
  @media (max-width: 776px) {
    font-size: 24px;
  }
  @media (max-width: 520px) {
    font-size: 18px;
  }
`;
const DisplayFlex = styled.div`
  margin: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 136.52%;
  /* or 33px */

  text-align: center;
  margin-bottom: 40px;
  color: #ffffff;
  line-height: 65px;
  @media (min-width: 1520px) {
    font-size: 24px;
  }
  @media (max-width: 1519px) {
    font-size: 20px;
  }
  @media (max-width: 776px) {
    font-size: 16px;
    line-height: 30px;
  }
  @media (max-width: 520px) {
    font-size: 12px;
  }
`;
const Buttons = styled.div`
  width: 204px;
  height: 49px;
  background: #4c6fff;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 17.3295px;
  line-height: 25px;
  /* identical to box height, or 143% */

  text-transform: uppercase;

  color: #ffffff;
  @media (max-width: 500px) {
    width: 50%;
  }
`;

export {
  Wrapper,
  Title,
  DisplayFlex,
  Text,
  WrapperProduct,
  FlexColumn,
  CardWrapper,
  Buttons,
};
