import styled from "styled-components";
import { Link } from "react-router-dom";

export const Movie = styled.div`
    padding: 20px 40px;
`;
export const MovieLink = styled(Link)`
    font-size: 16px;  
    text-align: center;
    text-decoration: none;
    color: blue;

    &:hover, &:focus, &:active
    {
        color: magenta;
    }
    @media screen and (max-width: 720px)
    {
        font-size: 14px;
    }
    @media screen and (max-width: 520px)
    {
        font-size: 12px;
    }
`;
export const MovieLinkBlock = styled.div`
    margin-top: 50px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    gap: 15px;
    font-size: 18px;

    @media screen and (max-width: 720px)
    {
        gap: 10px;
    }
    @media screen and (max-width: 520px)
    {
        gap: 5px;
    }
`;
export const MovieLinkPage = styled(Link)`
    padding: 5px 0;
    width: 100px;
    height: auto;
    font-size: 16px;  
    text-align: center;
    text-decoration: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    border: 2px solid magenta;
    background-color: magenta;
    color: white;

    &:hover, &:focus, &:active
    {
        border: 2px solid aqua;
        background-color: aqua;
    }
    @media screen and (max-width: 720px)
    {
        width: 80px;
        font-size: 14px;
    }
    @media screen and (max-width: 520px)
    {
        width: 60px;
        fon-size: 12px;
    }
`;
export const MovieTitleInfo = styled.h1`
    margin: 20px 0;
    font-size: 25px;
    text-align: center;
    color: blue;

    @media screen and (max-width: 720px)
    {
        font-size: 22px;
    }
    @media screen and (max-width: 520px)
    {
        margin: 20px 0 10px 0;
        font-size: 20px;
    }
`;
export const MovieTitleIndicator = styled.h1`
    margin-top: 200px;
    text-align: center;
`;