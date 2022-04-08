import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Drawer, Logo, Logo__container, Menu, NavItems } from "./style";

export const Navbar = () => {
  const [state, setState] = useState(false)
  const [link, setLink] = useState('home')
  
  return (
    <Container>
      <Logo__container>
        <Logo />
        <Logo__container.Logo__title />
      </Logo__container>
      <NavItems>
        <NavItems.Text>Home</NavItems.Text>
        <NavItems.Text>Developer</NavItems.Text>
        <NavItems.Text>Creator</NavItems.Text>
        <NavItems.Text>Ecosystem</NavItems.Text>
        <NavItems.Text>About us</NavItems.Text>
        <NavItems.Text>Resources</NavItems.Text>
        <Link to={"/white-paper"}>
          <NavItems.Btn>Whitepaper</NavItems.Btn>
        </Link>
      </NavItems>
      <Menu state={state} onClick={() => setState(!state)}>
        <Menu.Line/>
        <Menu.Line/>
        <Menu.Line/>
      </Menu>
      <Drawer state={state}>
        <Drawer.Close onClick={() => setState(false)}>+</Drawer.Close>
        <Drawer.Wrapper>
          <Drawer.Item state={link==='home' && link} onClick={()=>setLink('home')}>Home</Drawer.Item>
          <Drawer.Item state={link==='developer' && link} onClick={()=>setLink('developer')}>Developer</Drawer.Item>
          <Drawer.Item state={link==='creator' && link} onClick={()=>setLink('creator')}>Creator</Drawer.Item>
          <Drawer.Item state={link==='ecosystem' && link} onClick={()=>setLink('ecosystem')}>Ecosystem</Drawer.Item>
          <Drawer.Item state={link==='about' && link} onClick={()=>setLink('about')}>About us</Drawer.Item>
          <Drawer.Item state={link==='resources' && link} onClick={()=>setLink('resources')}>Resources</Drawer.Item>
          <Link className="btn-link" to={"/white-paper"}>
            <Drawer.Btn>Whitepaper</Drawer.Btn>
          </Link>
        </Drawer.Wrapper>
        
      </Drawer>
    </Container>
  );
};
export default Navbar;
