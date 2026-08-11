
export type Theme = {
    color: {
        Card: string,
        Border: string,
        Primary: string,
        Foreground: string,
        MutedColor: string,
        Background: string,
        Primary_Foreground: string,
        Muted: string,
        Accent: string,
        Destructive: string,
        Primary_Hover: string
    }

    transition: string
};

export interface DefaultTheme {
  theme?: Theme;
}

export const theme: Theme = {
    color: {
        Card: '#14181F',
        Border: '#272C35',
        Primary: '#07B6D5',
        Foreground: '#F9FAFB',
        MutedColor: '#9DA6AF',
        Background: '#0B0E13',
        Primary_Foreground: '#0B0E13',
        Muted: '#2B303B',
        Accent: '#F5993D',
        Destructive: '#EF4343',
        Primary_Hover: '#09778B'
    },

    transition: '.25s ease'
};

