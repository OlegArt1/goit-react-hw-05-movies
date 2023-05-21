import styled from "styled-components";

export const Searchbar = styled.header`
    height: auto;
    display: block;
`;
export const SearchbarTitle = styled.h1`
    padding: 40px 0;
    text-align: center;

    @media screen and (max-width: 720px)
    {
        padding-top: 50px;
        font-size: 28px;
    }
    @media screen and (max-width: 520px)
    {
        padding-top: 60px;
        font-size: 22px;
    }
`;
export const SearchbarForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;   
    border-radius: 5px;
`;
export const SearchbarButton = styled.button`
    width: 100px;
    height: 42px;  
    display: inline-block;
    cursor: pointer;
    outline: none;
    border-radius: 5px;
    border: 2px solid gray;
    background: gray;

    &:hover, &:focus
    {
        border: 2px solid darkcyan;
        background-color: darkcyan;
    }
    @media screen and (max-width: 720px)
    {
        width: 80px;
        height: 33px;
    }
    @media screen and (max-width: 520px)
    {
        width: 70px;
        height: 30px;
    }
    @media screen and (max-width: 420px)
    {
        width: 60px;
    }
`;
export const SearchbarText = styled.span`
    font-weight: 600;
    font-size: 16px;
    color: white;

    @media screen and (max-width: 720px)
    {
        font-size: 14px;
    }
    @media screen and (max-width: 520px)
    {
        font-size: 12px;
    }
    @media screen and (max-width: 420px)
    {
        font-size: 11px;
    }
`;
export const SearchbarInput = styled.input`
    margin-left: 0.4rem;
    padding: 1px 10px;
    width: 20rem;
    height: 38px;
    font-size: 15px;    
    border-radius: 5px;
    border: 3px solid rgb(168, 91, 127);

    @media screen and (max-width: 720px)
    {
        width: 18rem;
        height: 33px;
        font-size: 14px;
    }
    @media screen and (max-width: 520px)
    {
        width: 14rem;
        height: 30px;
        font-size: 13px;
    }
    @media screen and (max-width: 420px)
    {
        width: 80px;
        height: 25px;
        font-size: 11px;
    }
`;