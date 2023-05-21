import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ShyreLayout = styled.div`
    
`;
export const ShyreLayoutHeader = styled.header`
    padding: 20px 0;
    text-align: center;
    
`;
export const ShyreLayoutNavLink = styled(NavLink)`
    padding: 0 20px;
    font-size: 24px;
    font-weight: 500;
    text-decoration: none;
    color: blue;

    @media screen and (max-width: 720px)
    {
        font-size: 22px;
    }
    @media screen and (max-width: 520px)
    {
        font-size: 20px;
    }
    &:hover, &:focus
    {
        color: green;
    }
    &:active
    {
        color: magenta;
    }
`;
export const ShyreLayoutTitle = styled.h1`
    margin-top: 200px;
    text-align: center;
`;