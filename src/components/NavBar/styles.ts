import {styled} from 'styled-components';
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

