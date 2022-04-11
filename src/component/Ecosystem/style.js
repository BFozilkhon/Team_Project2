import styled from "styled-components";

export const Container = styled.div`
  margin: 125px 40px;
`;
export const Wrap = styled.div``;

export const Partner = styled.div`
  display: flex;
  justify-content: space-between;
`;

Partner.Name = styled.div`
  height: 65px;
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 136.02%;
  text-align: center;
  color: #ffffff;
`;

Partner.Name1 = styled.div`
  width: 175px;
  height: 33px;
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 136.02%;
  text-align: center;
  color: #cbd5e0;
`;

export const CardAni = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: auto;
`;

CardAni.Container = styled.div`
  width: 250px;
  margin: 30px 20px;
`;

CardAni.Img = styled.img`
  margin-left: 30px;
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 35px 40px;
  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(224, 249, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 64.58%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  filter: drop-shadow(2px 16px 19px rgba(0, 0, 0, 0.09));
  backdrop-filter: blur(80px);
  border: 1px solid #7895ff;
  border-radius: 12px;
`;

CardAni.HeaderBlack = styled.div`
  width: 261px;
  height: 25px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #eaeef6;
  align-self: stretch;
  margin: 5px 0px;
`;

CardAni.HeaderLight = styled.div`
  width: 261px;
  height: 23px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  font-feature-settings: "salt";
  color: #718096;
`;

CardAni.Text = styled.div`
  width: 261px;
  height: 92px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  color: #a6b7d4;
  text-align: center;
`;
