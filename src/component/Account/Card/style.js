import styled from "styled-components";

export const Card = styled.div`
  margin-top: 40px;
  @media (max-width: 776px) {
    margin-top: 20px;
  }
`;
Card.Img = styled.img`
  width: 60px;
  margin-bottom: 10px;
  @media (max-width: 776px) {
    width: 40px;
    margin-bottom: 3px;
  }
`;
Card.Title = styled.div`
  width: 61px;
  height: 25px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #eaeef6;
  margin-bottom: 10px;
  @media (max-width: 776px) {
    font-size: 14px;
    /* width: 38px; */
  }
`;

Card.Text = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 136.52%;
  color: #ffffff;
  margin-bottom: 10px;
  width: 230px;
  @media (max-width: 776px) {
    font-size: 9px;
    width: 150px;
    /* width: 60px; */
    /* height: 50px; */
  }
`;

Card.Btn = styled.button`
  padding: 5px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-transform: uppercase;
  color: #ffffff;
  border: 1px solid #f5f5f5;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  background-color: rgba(34, 34, 34, 0.1);
  :active {
    transform: scale(0.99);
  }
  @media (max-width: 776px) {
    padding: 5px;
    font-size: 9px;
  }
  @media (max-width: 500px) {
    padding: none;
    font-size: 5px;
    padding: 0 3px 0 3px;
  }
`;
