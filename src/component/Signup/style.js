import styled from 'styled-components'

export const Container = styled.div`
    width: 90%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #4C6FFF;
    margin: auto;
`

Container.Title = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 30px;
    @media (max-width:1400px)  { 
        height: 70px;
    }
    @media (max-width:500px)  { 
        justify-content: flex-end;
        height: 50px;
    }
    @media (max-width:776px)  { 
        justify-content: flex-end;
        height: 60px;
    }
`

Container.Title = styled.div`
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 136.02%;
    color: #FFFFFF;
`

Container.Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 50px;
    border: 1px solid #fff;
    @media (max-width:1400px)  { 
        font-size: 23px;
    }
    @media (max-width:1200px)  { 
        font-size: 21px;
    }
    @media (max-width: 992px)  { 
        font-size: 20px;
    }
    @media (max-width: 776px)  { 
        font-size: 13px;
        display: none;

    }
    @media (max-width: 500px)  { 
        font-size: 14px;
        display: none;
    }
`

Container.Btn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    font-size: 17.3295px;
    line-height: 25px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-left: 25px;
    border-radius: 2px;
    border: 2px solid white;
    padding: 8px 50px;
    margin-left: 25px;
    :hover{
        background-color: #fff;
        color: #4C6FFF;
        border: none;
        font-weight: normal;
    }
    @media (max-width:1400px)  { 
        padding: 7px 45px;
        font-size: 16px;
    }
    @media (max-width:1200px)  { 
        padding: 6px 43px;
        font-size: 15px;
    }
    @media (max-width: 992px)  { 
        padding: 6px 38px;
        font-size: 14px;
    }
    @media (max-width: 776px)  { 
        padding: 3px 25px;
        font-size: 12px;
    }
    @media (max-width: 500px)  { 
        padding: 0;
        font-size: 12px;
        border: none;
    }
    
`