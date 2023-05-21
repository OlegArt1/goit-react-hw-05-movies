import styled from "styled-components";

export const Review = styled.div`

`;
export const ReviewList = styled.ul`
    padding: 40px 60px 40px 40px;
    list-style-type: none;
    background-color: white;

    @media screen and (max-width: 720px)
    {
        padding: 35px 60px 40px 40px;
    }
    @media screen and (max-width: 520px)
    {
        padding: 30px 60px 40px 40px;
    }
`;
export const ReviewItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const ReviewArticleBlock = styled.article`
    padding-bottom: 25px;
    width: 100%;
    height: auto;
`;
export const ReviewPageBlock = styled.p`
    padding: 10px;
`;
export const ReviewLabel = styled.label`

`;
export const ReviewTitle = styled.b`
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
export const ReviewTitleError = styled.h3`
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
export const ReviewText = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.8;
    text-align: center;

    @media screen and (max-width: 720px)
    {
        font-size: 12px;
    }
    @media screen and (max-width: 520px)
    {
        font-size: 10px;
    }
`;