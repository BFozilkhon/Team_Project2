import styled from 'styled-components'
import {ReactComponent as logo} from '../../assets/icons/logo-footer.svg'
import {ReactComponent as input} from '../../assets/icons/send.svg'
import {ReactComponent as instagram} from '../../assets/icons/instagram.svg'
import {ReactComponent as m} from '../../assets/icons/m.svg'
import {ReactComponent as twitter} from '../../assets/icons/twitter.svg'
import {ReactComponent as circle} from '../../assets/icons/circle.svg'
import {ReactComponent as figma} from '../../assets/icons/figma.svg'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    background: #121624;
    box-shadow: -1px 1px 2px rgba(12, 12, 39, 0.2), 1px -1px 2px rgba(12, 12, 39, 0.2), -1px -1px 2px rgba(14, 14, 47, 0.9), 1px 1px 3px rgba(12, 12, 39, 0.9), inset 1px 1px 2px rgba(14, 14, 47, 0.3), inset -1px -1px 2px rgba(12, 12, 39, 0.5);

`

Container.Top = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 36px;
    padding-top: 170px;
`

Container.Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    @media (max-width:500px)  {
        flex-wrap: nowrap;
        flex-direction: column;
    }
`

Container.Column = styled.div`
    color: white;
    flex: 3;
    box-sizing: border-box;
    margin-bottom:  30px;
    padding-right: 15px;
    @media (max-width:500px)  {
        flex: 3;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
         padding-right: 0;
    }
`
Container.Column1 = styled.div`
    color: white;
    flex: 1.5;
    box-sizing: border-box;
    margin-bottom:  30px;
    padding-right: 15px;
    @media (max-width:500px)  {
        flex: 3;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
         padding-right: 0;
    }
`
Container.Column2 = styled.div`
    color: white;
    flex: 1.5;
    box-sizing: border-box;
    margin-bottom:  30px;
    padding-right: 15px;
    @media (max-width:500px)  {
        flex: 3;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
         padding-right: 0;
    }
`
Container.Column3 = styled.div`
    color: white;
    flex: 2;
    box-sizing: border-box;
    margin-bottom:  30px;
    padding-right: 15px;
    @media (max-width:500px)  {
        flex: 3;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
         padding-right: 0;
    }
`

Container.Logo = styled(logo)`

`

Container.Logo__Wrapper = styled.div`
    display: flex;
    align-items: center;
    @media (max-width:500px)  {
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
`

Container.Socials = styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;
`

Container.Instagram = styled(instagram)`
    width: 45px;
    height: 45px;
    margin-right: 43px;
    @media (max-width:500px)  {
        width: 25px;
        height: 25px;
    }
`

Container.Circle = styled(circle)`
    width: 45px;
    height: 45px;
    margin-right: 43px;
    @media (max-width:500px)  {
        width: 25px;
        height: 25px;
    }
`

Container.M = styled(m)`
    width: 45px;
    height: 45px;
    margin-right: 43px;
    @media (max-width:500px)  {
        width: 25px;
        height: 25px;
    }
`

Container.Twitter = styled(twitter)`
    width: 45px;
    height: 45px;
    margin-right: 43px;
    @media (max-width:500px)  {
        width: 25px;
        height: 25px;
    }
`

Container.Figma = styled(figma)`
    width: 45px;
    height: 45px;
    margin-right: 43px;
    @media (max-width:500px)  {
        width: 25px;
        height: 25px;
    }
`

Container.Text = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    max-width: 280px;
    @media (max-width:500px)  {
        max-width: 500px;
        display: flex;
        justify-content: center;
    }
`

Container.Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 38px;
    color: #FFFFFF;
    margin-bottom: 15px;
    margin-top: 20px;
`

Container.Input__wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 32px;
`

Container.Input = styled.input`
    background: #191D2A;
    border-radius: 10px 0px 0px 10px;
    width: 400px;
    height: 63px;
    outline: none;
    border: none;
    font-size: 20px;
    padding: 0 15px;
    color: white;
    @media (max-width:500px)  {
        width: 230px;
        height: 40px;
    }
`

Container.Input__icon = styled.div`
    background: rgba(216, 216, 216, 0.5);
    border-radius: 0px;
    height: 63px;
    width: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:500px)  {
        width: 40px;
        height: 39px;
    }
`

Container.Send = styled(input)`

`

Container.Bottom = styled.div`
    display: flex;
    align-items: center;
    background: #191D2A;
    height: 98px;

`

Container.Copyright = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    width: 90%;
    margin: auto;
`

