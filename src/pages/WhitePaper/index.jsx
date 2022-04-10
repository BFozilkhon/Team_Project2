import React from "react";
import { Container } from "./style";
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'

export const WhitePaper = () => {
  return (
    <Container>
      <Navbar />
      <Container.Main>
        <Container.Title>FOR CREATORS</Container.Title>
        <Container.Wrapper>
          <Container.Wrapper__item>
            <Container.Item__title>Create Console</Container.Item__title>
            <Container.Item__wrapper>
              <Container.Description>Manage your NFT's in the coolest dashboard at Create. Upload your art, colloborate with artists, manage your creation, set rules about the usage of your NFT, royalty management.</Container.Description>
              <Container.Item__icon deg={315} />
            </Container.Item__wrapper>
          </Container.Wrapper__item>
          <Container.Wrapper__item>
          <Container.Item__title>Mercado.studio</Container.Item__title>
            <Container.Item__wrapper>
              <Container.Description>Manage your NFT's in the coolest dashboard at Create. Upload your art, colloborate with artists, manage your creation, set rules about the usage of your NFT, royalty management.</Container.Description>
              <Container.Item__icon deg={45} />
            </Container.Item__wrapper>
          </Container.Wrapper__item>
        </Container.Wrapper>
      </Container.Main>
      <Footer />
    </Container>
  )
};

export default WhitePaper;
