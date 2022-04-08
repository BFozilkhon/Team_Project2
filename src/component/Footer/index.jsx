import React from 'react'
import { Container } from './style'

export const Footer = () => {
  return (
    <Container>
        <Container.Top>
          <Container.Wrapper>
            <Container.Column >
              <Container.Logo__Wrapper>
                <Container.Logo />
                <Container.Text>A revolutionary creator platform structured upon a create-to-earn (C2E) economy that integrates NFT's further into the metaverse and blockchain.</Container.Text>
              </Container.Logo__Wrapper>
              <Container.Title>Join Create community</Container.Title>
              <Container.Socials>
                <Container.Instagram />
                <Container.Circle />
                <Container.M />
                <Container.Twitter />
                <Container.Figma />
              </Container.Socials>
            </Container.Column>
            <Container.Column1 >
              <Container.Title>Quick Links</Container.Title>
              <Container.Text>Home</Container.Text>
              <Container.Text>Producst</Container.Text>
              <Container.Text>About</Container.Text>
              <Container.Text>Features</Container.Text>
            </Container.Column1>
            <Container.Column2 >
              <Container.Title>Resources</Container.Title>
              <Container.Text>Home</Container.Text>
              <Container.Text>Products</Container.Text>
              <Container.Text>About</Container.Text>
              <Container.Text>Features</Container.Text>
            </Container.Column2>
            <Container.Column3 >
              <Container.Title>Get the latest updates</Container.Title>
              <Container.Text>Don’t miss to subscribe to our new feeds, kindly fill the form below.</Container.Text>
              <Container.Input__wrapper>
                <Container.Input />
                <Container.Input__icon>
                  <Container.Send />
                </Container.Input__icon>
              </Container.Input__wrapper>
            </Container.Column3>
          </Container.Wrapper>
        </Container.Top>
        <Container.Bottom>
            <Container.Copyright>Copyright © {new Date().getFullYear()}, All Right Reserved CreateProtocol</Container.Copyright>
        </Container.Bottom>
    </Container>
  )
}

export default Footer