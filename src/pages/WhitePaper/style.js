import styled from 'styled-components'
import {ReactComponent as arrow} from '../../assets/icons/arrow.svg'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 1678px;
    background: #28272E;
`

Container.Title = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 136.02%;
    color: #FFFFFF;
    @media (max-width: 1200px){
        font-size: 33px;
    }
    @media (max-width: 1000px){
        font-size: 30px;
    }
    @media (max-width: 776px){
        font-size: 28px;
    }
    @media (max-width: 500px){
        font-size: 25px;
    }
`

Container.Main = styled.div`
    width: 90%;
    padding-top: 103px;  
    padding-bottom : 245px;
`

Container.Wrapper = styled.div`
    display: flex;
    padding: 0 45px;
    justify-content: space-between;
    margin-top: 32px;
    gap: 53px;
    @media (max-width: 1000px){
        flex-direction: column;
    }
    @media (max-width: 776px){
        height: 400px;
        padding: 0 10px;
    }
    @media (max-width: 500px){
        height: 350px;
        padding: 0 ;
    }
`

Container.Wrapper__item = styled.div`
    flex: 1;
    height: 498px;
    background: #3B2E57;
    border-radius: 12px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @media (max-width: 1600px){
        height: 470px;
    }
    @media (max-width: 1400px){
        height: 470px;
    }
    @media (max-width: 1200px){
        height: 450px;
    }
    @media (max-width: 1000px){
        height: 450px;
    }
    @media (max-width: 776px){
        height: 400px;
        padding: 40px;
    }
    @media (max-width: 500px){
        height: 350px;
        padding: 30px;
    }
`


Container.Item__title = styled.div`
    font-size: 45px;
    color: #fff;
    @media (max-width: 1400px){
        font-size: 43px;
    }
    @media (max-width: 1200px){
        font-size: 40px;
    }
    @media (max-width: 776px){
        font-size: 35px;
    }
    @media (max-width: 500px){
        font-size: 27px;
    }
`

Container.Item__wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

Container.Description = styled.div`
    font-size: 25px;
    margin-top: 30px;
    width: 80%;
    color: white;
    line-height: 35px;
    @media (max-width: 1400px){
        font-size: 23px;
        margin-top: 25px;
    }
    @media (max-width: 1200px){
        font-size: 21px;
        margin-top: 20px;
    }
    @media (max-width: 776px){
        font-size: 18px;
        margin-top: 18px;
    }
    @media (max-width: 500px){
        font-size: 15px;
        margin-top: 16px;
        line-height: 25px;
    }
`

Container.Item__icon = styled(arrow)`
    transform: rotate(${({deg}) => deg && deg}deg);
    width: 50px;
    height: 50px;
    @media (max-width: 1200px){
        width: 40px;
        height: 40px;
    }
    @media (max-width: 776px){
        width: 30px;
        height: 30px;
    }
    @media (max-width: 500px){
        width: 25px;
        height: 25px;
    }
`   