import styled from "styled-components";

export const StyledApp = styled.div`
    background-color: rgba(255, 255, 255, 0.6);
    width: 100%;
    margin: 2% auto;
    border-radius: 20px;
    min-height: 550px;
`;  

export const AppContainer = styled.div`
    width: 1500px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 50px;
`

export const StyledInput = styled.input`
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 0 20px 20px 0;
    width: 350px;
    height: 50px;
    border: none;
    font-size: 20px;
    padding-left: 10px;
    &:focus {
        outline: none;
    }
`

export const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 7%;
`

export const ButtonFlex = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 8%;
`
export const SearchFlexDiv = styled.div`
    display: flex;
    margin-left: 3%;
`

export const StyledDiv = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 20px 0 0 20px;
    height: 52px;
    width: 40px;
`

export const SVGContainer = styled.div`
    margin-top: 13px;
    margin-left: 10px;
`

export const HomeSVGContainer = styled.div`
    margin-top: 8px;
`

export const StyledHomeButton = styled.button`
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 13px;
    width: 60px;
    height: 50px;
    border: none;
    margin-right: 12px;
    &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.6);
    }
    &:focus {
        outline: none;
    }
`

export const StyledButton = styled.button`
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 13px;
    width: 140px;
    height: 50px;
    border: none;
    font-size: 20px;
    font-weight: bold;
    margin-right: 12px;
    &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.6);
    }
    &:focus {
        outline: none;
    }
`