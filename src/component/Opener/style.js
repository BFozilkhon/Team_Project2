import styled from 'styled-components'
import img from '../../assets/imgs/background.png'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* height: 1115px; */
    background: linear-gradient(282.91deg, rgba(76, 111, 255, 0.294) -6.88%, rgba(143, 47, 255, 0.183) 77.43%), url(${img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`

Container.Wrapper = styled.div`
    display: flex;
    width: 90%;
    @media (max-width:1519px)  { 
        display: flex;
        flex-direction: column;
    }
`

Container.Left = styled.div`
    width: 50%;
    padding: 200px 0;
    box-sizing: border-box;
    @media (max-width:1519px)  { 
        width: 100%;
        padding-bottom: 120px;
        padding-top: 120px;
    }
    @media (max-width:1400px)  { 
        padding-bottom: 100px;
        padding-top: 100px;
    }
    @media (max-width:500px)  { 
        padding-top: 60px;
        padding-bottom: 60px;
    }
`


Container.Title = styled.div`
    font-family: 'Orbitron', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 88.6932px;
    line-height: 100px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    text-shadow: 3px 2px 7px #000000;
    @media (min-width:1520px)  { 
        font-size: 84px;
    }
    @media (max-width:1519px)  { 
        font-size: 70px;
    }
    @media (max-width:776px)  { 
        font-size: 50px;
    }
    @media (max-width:500px)  { 
        font-size: 35px;
        line-height: 65px;
    }
    `

Container.Description = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 29.7077px;
    line-height: 45px;
    letter-spacing: 0.03em;
    color: #FFFFFF;
    margin: 25px 0 35px 0;
    @media (min-width:1520px)  { 
        font-size: 27px;
    }
    @media (max-width:776px)  { 
        font-size: 20px;
    }
    @media (max-width:500px)  { 
        font-size: 18px;
        line-height: 35px;
    }
    `

Container.UL = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    `

Container.Circle = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin-right: 20px;
    background: #8F2FFF;
    @media (min-width:776px)  { 
        width: 15px;
        height: 15px;
    }
    @media (max-width:776px)  { 
        width: 12px;
        height: 12px;
    }
    @media (max-width:500px)  { 
        width: 10px;
        height: 10px;
    }
    `

Container.List = styled.div`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 136.02%;
    color: #E4ECF7;
    @media (min-width:1520px)  { 
        font-size: 22px;
    }
    @media (max-width:776px)  { 
        font-size: 17px;
    }
    @media (max-width:500px)  { 
        font-size: 15px;
    }
    `

Container.Wrapper__btn = styled.div`
    display: flex;
    margin-top: 49px;
    `

Container.Buy = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 49px;
    background: #4C6FFF;
    margin-right: 33px;
    font-style: normal;
    font-weight: 400;
    font-size: 17.3295px;
    line-height: 25px;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 0 25px;
    transition: all .3s ease-in-out;
    :hover{
        background-color: transparent;
        border: 2px solid #4C6FFF;
        color: #fff;
    }
    :active{
        opacity: 0.9;
    }
    @media (max-width:776px)  { 
        padding: 0 20px;
        height: 45px;
        font-size: 15px;
        margin-right: 27px;
    }
    @media (max-width:500px)  { 
        padding: 0 18px;
        height: 40px;
        font-size: 13px;
        margin-right: 23px;
    }
    `

Container.Join = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 49px;
    border: 2px solid #F5F5F5;
    font-style: normal;
    font-weight: 400;
    font-size: 17.3295px;
    line-height: 25px;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 0 25px;
    :hover{
        background-color: #fff;
        border: 2px solid #0a0822;
        color: #0a0822;
    }
    :active{
        opacity: 0.85;
    }
    @media (max-width:776px)  { 
        padding: 0 20px;
        height: 45px;
        font-size: 15px;
    }
    @media (max-width:500px)  { 
        padding: 0 18px;
        height: 40px;
        font-size: 13px;
    }
`

Container.Right = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    @media (max-width:1519px)  { 
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 120px;
    }
    @media (max-width:1400px)  { 
        padding-bottom: 100px;
    }
    @media (max-width:776px)  { 
        /* padding-bottom: 100px; */
    }
    @media (max-width:500px)  { 
        padding-bottom: 50px;
    }
    
`

Container.Video = styled.div`
    width: 720px;
    height: 436px;
    background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.5) 51.04%, #000000 100%);
    /* opacity: 0.3; */
    border-radius: 33.9077px;
    @media (min-width:1520px)  { 
        width: 600px;
        height: 436px;
    }
    @media (max-width:1400px)  { 
        width: 600px;
        height: 390px;
    }
    @media (max-width:776px)  { 
        width: 570px;
        height: 360px;
    }
    @media (max-width:500px)  { 
        width: 100%;
        height: 280px;
    }
`

Container.Video__img = styled.img`
    width: 100%;
    height: 100%;
`