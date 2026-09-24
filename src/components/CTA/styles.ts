import styled from "styled-components";
import type { DefaultTheme } from "../../styles/Theme";

export const Container = styled.section<DefaultTheme>`
    padding: 80px 2rem;
    display: flex;
    justify-content: center;
`;

export const Content = styled.div`
    max-width: 800px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;

export const Title = styled.h2<DefaultTheme>`
    font-size: 36px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.Foreground};
    margin: 0;
`;

export const Subtitle = styled.p<DefaultTheme>`
    font-size: 18px;
    color: ${({ theme }) => theme.color.Foreground};
    line-height: 1.6;
    margin: 0;
    opacity: 0.9;
`;

