import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #4C6FFF;
    margin: auto;
`

Container.Title = styled.div`
    font-size: 24px;
    padding: 0 30px;
    color: #fff;
    @media (max-width:1400px)  { 
        font-size: 23px;
    }
    @media (max-width:776px)  { 
        font-size: 16px;
        display: none;

    }
    @media (max-width:500px)  { 
        font-size: 13px;
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
        padding: 6px 40px;
        font-size: 16px;
    }
    @media (max-width:1200px)  { 
        padding: 5px 38px;
        font-size: 15px;
    }
    @media (max-width: 992px)  { 
        padding: 4px 34px;
        font-size: 14px;
        margin-left: 10x;

    }
    @media (max-width: 776px)  { 
        padding: 3px 25px;
        font-size: 12px;
        margin-left: 10px;

    }
    @media (max-width: 500px)  { 
        padding: 0;
        font-size: 12px;
        border: none;
    }
    
`