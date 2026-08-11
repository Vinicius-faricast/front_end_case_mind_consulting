import styled from "styled-components";
import type { DefaultTheme } from "../../styles/Theme";

export const ContainerHero = styled.div`
    display: flex;
    max-width: 30%;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const TitleHero = styled.h1`
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    text-align: center;
`;

export const contentHero = styled.p<DefaultTheme>`
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.color.MutedColor};
`;

export const textEmphasis = styled.span<DefaultTheme>`
    color: ${({ theme }) => theme.color.Primary};
`;