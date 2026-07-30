import styled from "styled-components";
import type { DefaultTheme } from "../../styles/Theme";
import{ AiOutlineArrowRight } from "react-icons/ai";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;
`

export const TitleSection = styled.h1<DefaultTheme>`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

export const SubtitleSection = styled.p<DefaultTheme>`
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 1rem;
`;

export const btnNext = styled.a<DefaultTheme>`
    background: none;
    border: none;
    cursor: pointer;
    color: ${({theme})=>theme.color.Primary};
    transition: .25s;

    &:hover{
        color: ${({theme})=>theme.color.Primary_Hover};
    }
`;

export const iconBtn = styled(AiOutlineArrowRight)<DefaultTheme>`
      fill: ${({theme})=>theme.color.Primary};
      transition: .25s;

      &:hover{
        fill: ${({theme})=>theme.color.Primary_Hover};
      }

`;