import styled from "styled-components";
import type { DefaultTheme } from '../../styles/Theme';

export const Container = styled.div<DefaultTheme>`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const LabelField = styled.label<DefaultTheme>`
    color: ${({ theme }) => theme.color.Foreground};
`;

export const Inputfield = styled.input<DefaultTheme>`
    border: 1px solid ${({ theme }) => theme.color.Border};
    background-color: transparent;
    /* color: ${({ theme }) => theme.color.Background}; */
    border-radius: 4px;
    padding: 8px;
    font-size: 16px;
    width: 100%;
`;