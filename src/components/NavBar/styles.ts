import {styled} from 'styled-components';
import { Link } from 'react-router-dom';
import type { DefaultTheme } from '../../styles/Theme';


export const NavContainer = styled.div<DefaultTheme>`
    width: 100%;
    /* height: 100px; */
    border-bottom: 1px solid ${({theme}) => theme.color.Border};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.color.Background};
    color: ${({theme}) => theme.color.Foreground};
`;

export const Navbar = styled.nav`
    max-width: 1080px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoNavbar = styled.img`

`;

export const ContainerItens = styled.ul`
    display: flex;
    gap: 20px;
    align-items: center;
    list-style: none;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.Foreground};
    transition: ${({ theme }) => theme.transition};

    &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.color.MutedColor};
    }
`;

