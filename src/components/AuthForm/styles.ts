import styled from "styled-components";
import type { DefaultTheme } from "../../styles/Theme";

export const Container = styled.section<DefaultTheme>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 2rem;
    background: ${({ theme }) => theme.color.Background};
`;

export const Logo = styled.h2<DefaultTheme>`
    color: ${({ theme }) => theme.color.Foreground};
    font-size: 52px;
    margin-bottom: 8px;
`;

export const Title = styled.h2<DefaultTheme>`
    font-size: 28px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.Foreground};
    margin: 0 0 8px 0;
`;

export const Subtitle = styled.p<DefaultTheme>`
    font-size: 16px;
    color: ${({ theme }) => theme.color.Foreground};
    opacity: 0.9;
    margin: 0 0 32px 0;
`;

export const Card = styled.form<DefaultTheme>`
    width: 100%;
    max-width: 480px;
    border: 1px solid ${({ theme }) => theme.color.Border};
    border-radius: 8px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    background: transparent;
`;

export const FooterLink = styled.div`
    text-align: center;
    margin-top: 8px;
    font-size: 14px;
`;
