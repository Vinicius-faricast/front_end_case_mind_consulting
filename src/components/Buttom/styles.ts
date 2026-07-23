import styled from "styled-components";
import type { DefaultTheme } from '../../styles/Theme';

export const Container = styled.button<{ $fullWidth?: boolean}, DefaultTheme>`
    width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "fit-content")};

    min-width: 180px;

    height: 46px;

    padding: 0 24px;

    border: none;

    cursor: pointer;

    background: ${({ theme }) => theme.color.Primary};

    color: ${({ theme }) => theme.color.Primary_Foreground};

    font-size: 16px;

    font-weight: 500;

    transition: ${({ theme }) => theme.color.transition};

    &:hover {

        background: ${({ theme }) => theme.color.Primary_Hover};

    }

    &:disabled{

        opacity:.6;

        cursor:not-allowed;

    }

`;