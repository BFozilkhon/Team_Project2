import { Button } from "antd";
import React from "react";
import IconArrow from "../../assets/icons/arrow.svg";
import {
  CardWrapper,
  DisplayFlex,
  FlexColumn,
  Text,
  Title,
  Wrapper,
  WrapperProduct,
  Buttons,
} from "./style";

const Product = () => {
  return (
    <Wrapper>
      <WrapperProduct>
        <p className="products">Products by CP</p>
        <p className="learn">Learn more {">"}</p>
      </WrapperProduct>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "100px",
        }}
      >
        <CardWrapper>
          <FlexColumn>
            <DisplayFlex>
              <Text>Mercado.Studio</Text>
              <img width={"45px"} src={IconArrow} alt="" />
            </DisplayFlex>
            <p className="title">
              Mercado.studio is a multi-chain NFT marketplace. It is a hub of
              high quality art, talented artists and art collectors. Any digital
              artwork in the form of audio, visual or both can be uploaded here.
            </p>
          </FlexColumn>
        </CardWrapper>
        <CardWrapper>
          <FlexColumn>
            <DisplayFlex>
              <Text>Defi</Text>
              <img width={"45px"} src={IconArrow} alt="" />
            </DisplayFlex>
            <p className="title">
              Creator.defi is the DeFi solution at Create which will provide
              artists' opportunities to utilise financial assistance from the
              community.
            </p>
          </FlexColumn>
        </CardWrapper>
        <CardWrapper>
          <FlexColumn>
            <DisplayFlex>
              <Text>Creator Console</Text>
              <img width={"45px"} src={IconArrow} alt="" />
            </DisplayFlex>
            <p className="title">
              Create Console is a blockchain-based unified analytical creator
              dashboard that allows every creator to collaborate, manage
              royalties, upload their creations and NFTs, etc -all at the same
              time.
            </p>
          </FlexColumn>
        </CardWrapper>
      </div>
      <FlexColumn center>
        <Title>
          The entire ecosystem of CREATE PROTOCOL is a spiderweb: interlinked{" "}
          <br />
          DApps that power each other, where the Protocol is the engine.
        </Title>
        <Buttons>LEARN MORE</Buttons>
      </FlexColumn>
    </Wrapper>
  );
};

export default Product;
