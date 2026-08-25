import styled from "styled-components";
import type { DefaultTheme } from "../../styles/Theme";
import {FiMail} from "react-icons/fi";

export const Container = styled.section<DefaultTheme>`
    max-width: 100%;
    display: flex;
    justify-content: center;
    padding: 3rem 0;
    background-color: ${({theme})=> theme.color.Card};
`;

export const Content = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: .5rem;
`;

export const Img = styled.image``;

export const mensageIcon = styled(FiMail)<DefaultTheme>`
    height: 2rem;
    width: 2rem;
    color: ${({theme})=> theme.color.Primary};

`;