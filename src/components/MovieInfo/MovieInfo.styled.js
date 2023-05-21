import styled from "styled-components";
import { Link } from "react-router-dom";

export const Movie = styled.div`

`;
export const MovieArticleBlock = styled.article`
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    background-color: white;
`;
export const MovieMainBlock = styled.div`
    padding: 20px;
`;
export const MoviePageBlock = styled.p`
    margin: 15px;
`;
export const MovieLinkBlock = styled.div`
    margin-top: 50px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 18px;
`;
export const MovieImage = styled.img`
    margin: 35px auto;
    width: 30%;
    height: auto;

    @media screen and (max-width: 720px)
    {
        width: 60%;
        height: auto;
    }
    @media screen and (max-width: 520px)
    {
        width: 40%;
        height: auto;
    }
`;
export const MovieLabel = styled.label`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const MovieLink = styled(Link)`
    width: 70px;
    height: auto;
    padding: 5px 0;
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
        width: 60px;
        font-size: 14px;
    }
    @media screen and (max-width: 520px)
    {
        fon-size: 12px;
    }
`;
export const MovieTitle = styled.h3`
    padding: 20px 0;
    color: darkslategray;

    @media screen and (max-width: 720px)
    {
        font-size: 16px;
    }
    @media screen and (max-width: 520px)
    {
        font-size: 14px;
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
export const MovieTitleError = styled.h3`
    padding: 40px 0;
    text-align: center;
    color: green;

    @media screen and (max-width: 720px)
    {
        font-size: 20px;
    }
    @media screen and (max-width: 520px)
    {
        font-size: 18px;
    }
`;
export const MovieNameText = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    color: red;

    @media screen and (max-width: 720px)
    {
        font-size: 18px;
    }
    @media screen and (max-width: 520px)
    {
        font-size: 16px;
    }
`;
export const MoviePercentageText = styled.span`
    padding-top: 26px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: gray;

    @media screen and (max-width: 720px)
    {
        font-size: 13px;
    }
    @media screen and (max-width: 520px)
    {
        font-size: 12px;
    }
`;
export const MovieOverviewText = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.8;
    font-size: 14px;
    color: indigo;

    @media screen and (max-width: 720px)
    {
        font-size: 13px;
    }
    @media screen and (max-width: 520px)
    {
        font-size: 12px;
    }
`;
export const MovieGenresText = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: green;

    @media screen and (max-width: 720px)
    {
        font-size: 13px;
    }
    @media screen and (max-width: 520px)
    {
        font-size: 12px;
    }
`;
export const MovieTitleIndicator = styled.h1`
    margin-top: 200px;
    text-align: center;
`;