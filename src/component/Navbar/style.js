import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/logo-icon.svg";
import { ReactComponent as logotitle } from "../../assets/icons/logo-title.svg";

export const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 80px;
  @media (max-width:776px)  { 
        padding-top: 40px;
  }
`;

export const Logo__container = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled(logo)`
  width: 68px;
  height: 33px;
  @media (max-width:500px)  { 
    width: 65px;
    height: 30px;
  }
`;

Logo__container.Logo__title = styled(logotitle)`
  margin-left: 12px;
  @media (max-width:500px)  { 
    display: none;
  }
`


export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width:1400px)  { 
    display: none;
  }
`;

NavItems.Text = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  margin-right: 24px;
  @media (max-width:1520px)  { 
    margin-right: 22px;
  }
`;

NavItems.Btn = styled.div`
  border: 2px solid #f5f5f5;
  width: 163px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15.6724px;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background-color: white;
    color: #4c6fff;
  }
  :active {
    transform: scale(0.99);
  }
`;


export const Menu = styled.div`
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 26px;
  @media (min-width:1400px)  { 
    display: none;
  }
  @media (max-width:1400px)  { 
    display: ${({state}) => state ? 'none' : 'flex'};
  }
  @media (max-width:500px)  { 
    height: 22px;
  }
`

Menu.Line = styled.div`
  width: 40px;
  height: 5px;
  background-color: #fff;
  border-radius: 3px;
  @media (max-width:500px)  { 
    width: 30px;
    height: 4px;
  }
`

export const Drawer = styled.div`
  position: fixed;
  display: ${({state}) => state ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  z-index: 500;
  height: 100vh;
  width: 350px;
  background-color: white;
  .btn-link{
    display: flex;
    justify-content: center;
  }
  @media (min-width:1401px)  { 
    display: none;
  }
`

Drawer.Close = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 40px;
  font-weight: 900;
  transform: rotate(45deg);
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  :hover{
    background-color: rgba(34, 34, 34, 0.1);
  }
  :active{
    background-color: rgba(34, 34, 34, 0.2);
  }
`

Drawer.Wrapper = styled.div`
  width: 100%;
`

Drawer.Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color:  ${({state}) => state ? 'white' : '#444'};
  margin-right: 24px;
  width: 100%;
  height: 50px;
  background-color: ${({state}) => state && 'rgba(61, 61, 61, 0.9)'};
  :hover{
    background-color: rgba(34, 34, 34, 0.5);
    color: #fff;
  }
  @media (max-width:1520px)  { 
    margin-right: 22px;
  }
`

Drawer.Btn = styled.div`
  width: 100%;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15.6724px;
  text-transform: uppercase;
  color:#4c6fff;
  margin-top: 15px;
  cursor: pointer;
  :hover {
    background-color: #4c6fff;
    color: #fff;
  }
  :active {
    transform: scale(0.99);
  }
`