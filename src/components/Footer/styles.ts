import styled from "styled-components";
import type { DefaultTheme } from "../../styles/Theme";

export const Container = styled.footer<DefaultTheme>`

    background:${({theme}) => theme.color.Background};

    padding:60px;

`;

export const Top = styled.div`

    display:flex;

    justify-content:space-between;

    align-items:flex-start;

    margin-bottom:50px;

`;

export const Brand = styled.div`

    max-width:340px;

`;

export const Logo = styled.h2<DefaultTheme>`

    color:${({theme})=>theme.color.Foreground};

    font-size:52px;

    margin-bottom:20px;

`;

export const Description = styled.p<DefaultTheme>`

    color:${({theme})=>theme.color.Foreground};

    line-height:1.5;

`;

export const Navigation = styled.div`

display:flex;

gap:80px;

`;

export const Column = styled.div`

display:flex;

flex-direction:column;

gap:16px;

`;

export const Title = styled.h4<DefaultTheme>`

color:${({theme})=>theme.color.Foreground};

margin-bottom:10px;

`;

export const Link = styled.a<DefaultTheme>`

color:${({theme})=>theme.color.Foreground};

text-decoration:none;

transition:.25s;

&:hover{

color:${({theme})=>theme.color.Foreground};

}

`;

export const Social = styled.div<DefaultTheme>`

display:flex;

gap:16px;

font-size:24px;

color:${({theme})=>theme.color.Foreground};

svg{

cursor:pointer;

transition:.25s;

}

svg:hover{

color:${({theme})=>theme.color.Primary_Hover};

}

`;

export const Divider = styled.hr<DefaultTheme>`

border:none;

height:1px;

background:${({theme})=>theme.color.Border};

margin-bottom:40px;

`;

export const Copyright = styled.p<DefaultTheme>`

text-align:center;

color:${({theme})=>theme.color.Foreground};

`;