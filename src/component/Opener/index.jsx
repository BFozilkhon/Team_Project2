import React from 'react'
import { Container } from './style'
import Navbar from '../Navbar'
import vide_img from '../../assets//imgs//video.png'

export const Opener = () => {
  return (
    <Container>
        <Navbar />
        <Container.Wrapper>
            <Container.Left>
                <Container.Title>Creativity Decentralised</Container.Title>
                <Container.Description>First Decentralized Create To Earn Economy</Container.Description>
                <Container.UL>
                    <Container.Circle />
                    <Container.List>Decentralized Creations</Container.List>
                </Container.UL>
                <Container.UL>
                    <Container.Circle />
                    <Container.List>Suite of API’s and smart contracts.</Container.List>
                </Container.UL>
                <Container.UL>
                    <Container.Circle />
                    <Container.List>The CREATE REVOLUTION</Container.List>
                </Container.UL>
                <Container.Wrapper__btn>
                    <Container.Buy>Buy CR8 Token</Container.Buy>
                    <Container.Join>join community</Container.Join>
                </Container.Wrapper__btn>
            </Container.Left>
            <Container.Right>
                <Container.Video>
                    <Container.Video__img src={vide_img} />
                </Container.Video>
            </Container.Right>

        </Container.Wrapper>
        
    </Container>
  )
}

export default Opener