import {createGlobalStyle} from 'styled-components';
import type { Theme } from './Theme';

interface GlobalStylesProps {
  theme?: Theme;
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`

    html{
        scroll-behavior: smooth;
    }

    *{
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: ${({ theme }: { theme: Theme }) => theme.color.Foreground};
    }

        body{
        width: 100%;
        background: ${({ theme}: { theme: Theme })=> theme.color.Background};
    }
`