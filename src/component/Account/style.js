import styled from "styled-components";

export const Container = styled.div`
  height: 497px;
  margin: 50px 0px 10px 20px;
  @media (max-width: 776px) {
    display: flex;
    flex-wrap: wrap;
    /* width: 700px; */
    height: 300px;
    margin: 0px;
  }
`;

Container.Header = styled.div`
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 136.02%;
  color: #ffffff;
  @media (max-width: 776px) {
    position: relative;
    font-size: 25px;
  }
  @media (max-width: 500px) {
    font-size: 15px;
    align-items: center;
  }
`;

Container.Text = styled.div`
  width: 293px;
  height: 106px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  margin-top: 30px;
  color: #ffffff;
  @media (max-width: 776px) {
    font-size: 10px;
    width: 140px;
    margin-top: 5px;
  }
  @media (max-width: 500px) {
    font-size: 8px;
  }
`;

Container.HR = styled.div`
  width: 204px;
  height: 0px;
  border: 1px solid #f5f5f5;
  transform: rotate(90deg);
  align-self: center;
  @media (max-width: 776px) {
    display: none;
  }
`;

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  position: ${({ main }) => main && "relative"};
  display: ${({ main }) => main && "flex"};
  @media (max-width: 500px) {
      justify-content: center;
  }
`;

export const CardAccounts = styled.div`
  justify-content: space-evenly;
`;
