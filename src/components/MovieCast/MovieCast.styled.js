import styled from "styled-components";

export const Cast = styled.div`

`;
export const CastList = styled.ul`
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0px;
    list-style-type: none;
    background-color: white;

    @media screen and (max-width: 720px)
    {
        padding-top: 50px;
        padding-bottom: 50px;
    }
    @media screen and (max-width: 520px)
    {
        padding-top: 35px;
        padding-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;
export const CastItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const CastArticleBlock = styled.article`
    padding: 20px 0;
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 720px)
    {
        padding: 0;
        height: 220px;
    }
    @media screen and (max-width: 520px)
    {
        display: block;
        height: 400px;
    }
`;
export const CastMainBlock = styled.div`
    margin: 0 40px;

    @media screen and (max-width: 720px)
    {
        margin: 0;
    }
    @media screen and (max-width: 520px)
    {
        margin-left: 50px;
    }
`;
export const CastPageBlock = styled.p`
    padding: 10px;

    @media screen and (max-width: 720px)
    {
        padding-left: 40px;
    }
    @media screen and (max-width: 520px)
    {
        padding: 5px;
    }
`;
export const CastIconBlock = styled.label`
    margin-left: 10px;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const CastImage = styled.img`
    width: 200px;
    height: 300px;

    @media screen and (max-width: 720px)
    {
        width: 150px;
        height: 200px;
    }
    @media screen and (max-width: 520px)
    {
        margin: 20px 40px;
        width: auto;
        height: 250px;
    }
`;
export const CastLabel = styled.label`
    margin-left: 0;
`;
export const CastTitle = styled.b`
    font-size: 16px;
    color: darkslategray;

    @media screen and (max-width: 720px)
    {
        font-size: 14px;
    }
    @media screen and (max-width: 520px)
    {
        font-size: 12px;
    }
`;
export const CastTitleError = styled.h3`
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
export const CastText = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.8;

    @media screen and (max-width: 720px)
    {
        font-size: 12px;
    }
    @media screen and (max-width: 520px)
    {
        font-size: 10px;
    }
`;
export const CastIcon = styled.svg`
    margin-top: -10px;
    width: 30px;
    height: 30px;
    vertical-align: middle;

    @media screen and (max-width: 720px)
    {
        width: 0;
        height: 0;
    }
    @media screen and (max-width: 520px)
    {
        width: 0;
        height: 0;
    }
`;