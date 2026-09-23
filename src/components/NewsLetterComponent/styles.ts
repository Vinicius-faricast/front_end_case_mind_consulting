import styled from "styled-components";
import type { DefaultTheme } from "../../styles/Theme";
import { FiMail } from "react-icons/fi";

export const Container = styled.section<DefaultTheme>`
    max-width: 100%;
    display: flex;
    justify-content: center;
    padding: 4rem 2rem;
    background-color: ${({ theme }) => theme.color.Card};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    max-width: 600px;
    width: 100%;
`;

export const IconWrapper = styled.div<DefaultTheme>`
    border: 1px solid ${({ theme }) => theme.color.Border};
    border-radius: 8px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const mensageIcon = styled(FiMail)<DefaultTheme>`
    height: 1.5rem;
    width: 1.5rem;
    color: ${({ theme }) => theme.color.Foreground};
`;

export const Title = styled.h3<DefaultTheme>`
    font-size: 28px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.Foreground};
    margin: 0;
`;

export const Subtitle = styled.p<DefaultTheme>`
    font-size: 16px;
    color: ${({ theme }) => theme?.color.Foreground};
    text-align: center;
    line-height: 1.6;
    margin: 0;
    opacity: 0.9;
`;

export const Form = styled.form`
    display: flex;
    gap: 0.75rem;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
`;

export const FooterText = styled.p<DefaultTheme>`
    font-size: 14px;
    color: ${({ theme }) => theme.color.Foreground};
    opacity: 0.7;
    margin: 0;
`;
