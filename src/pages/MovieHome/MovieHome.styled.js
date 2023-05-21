import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListContainer = styled.div`

`;
export const List = styled.ol`
    margin: 50px 80px;

    @media screen and (max-width: 720px)
    {
        margin: 40px 60px;
    }
    @media screen and (max-width: 520px)
    {
        margin: 30px 40px;
    }
`;
export const ListItem = styled.li`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
`;
export const ListBlock = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    
    @media screen and (max-width: 720px)
    {
        padding-top: 8px;
        padding-bottom: 8px;
    }
    @media screen and (max-width: 520px)
    {
        padding-top: 6px;
        padding-bottom: 6px; 
    }
`;
export const ListTitle = styled.h1`
    padding-top: 40px;
    text-align: center;

    @media screen and (max-width: 720px)
    {
        padding-top: 30px;
        font-size: 28px;
    }
    @media screen and (max-width: 520px)
    {
        padding-top: 20px;
        font-size: 22px;
    }
`;
export const ListTitleIndicator = styled.h1`
    margin-top: 200px;
    text-align: center;
`;
export const ListLink = styled(Link)`
    transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1) 150ms;
    font-size: 16px;
    color: black;

    @media screen and (max-width: 720px)
    {
        font-size: 14px;
    }
    @media screen and (max-width: 520px)
    {
        font-size: 12px;
    }
    &:hover, &:focus
    {
        color: blue;
    }
    &:active
    {
        color: green;
    }
`;