import styled from "styled-components";
import type { DefaultTheme } from '../../styles/Theme';

export const Container = styled.button<DefaultTheme & { $fullWidth?: boolean, $primary?: boolean}>`
    width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "fit-content")};

    min-width: 180px;

    height: 46px;

    padding: 0 24px;

    border: ${({ $primary }) => ($primary ? 'none' : ({ theme }) => theme.color.Primary + ' 1px solid')};

    cursor: pointer;

    background: ${({ $primary }) => ($primary ? ({ theme }) => theme.color.Primary : ({ theme }) => theme.color.Background)};

    color: ${({ $primary }) => ($primary ? ({ theme }) => theme.color.Background : ({ theme }) => theme.color.Foreground)};


    font-size: 16px;

    font-weight: 500;

    transition: .25s;

    &:hover {

        background: ${({ theme }) => theme.color.Primary_Hover};

    }

    &:disabled{

        opacity:.6;

        cursor:not-allowed;

    }

`;