import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 141px;
  margin-bottom: 130px;
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
  align-items: ${(center) => (center ? "center" : "none")};
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
  }
`;

const CardWrapper = styled.div`
  width: 474px;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 136.02%;
  color: #ffffff;
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
`;
const Buttons = styled.div`
  width: 204px;
  height: 49px;
  background: #4c6fff;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 17.3295px;
  line-height: 25px;
  /* identical to box height, or 143% */

  text-transform: uppercase;

  color: #ffffff;
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
