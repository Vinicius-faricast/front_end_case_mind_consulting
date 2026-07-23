import styled from "styled-components";
import type { DefaultTheme } from "../../styles/Theme";

export const Container = styled.article<DefaultTheme>`
  background: ${({ theme }) => theme.color.Card};

  border: 1px solid ${({ theme }) => theme.color.Border};

  cursor: pointer;

  overflow: hidden;

  transition: .25s;

  &:hover{
      transform: translateY(-4px);
  }
`;

export const Banner = styled.img`
  width: 100%;

  height: 220px;

  object-fit: cover;
`;

export const Content = styled.div`
  padding: 24px;
`;

export const Header = styled.div`
  display:flex;

  justify-content:space-between;

  align-items:center;

  margin-bottom:20px;
`;

export const Badge = styled.span`
  background:#343B48;

  color:#FFF;

  padding:6px 12px;

  font-size:13px;

  font-weight:500;
`;

export const Date = styled.span<DefaultTheme>`
  color:${({theme})=>theme.color.Foreground};

  font-size:14px;
`;

export const Title = styled.h2<DefaultTheme>`
  color:${({theme})=>theme.color.Foreground};

  font-size:36px;

  font-weight:700;

  line-height:1.1;

  margin-bottom:16px;
`;

export const Description = styled.p<DefaultTheme>`
  color:${({theme})=>theme.color.Foreground};

  line-height:1.6;

  margin-bottom:28px;
`;

export const Footer = styled.div`

display:flex;

justify-content:space-between;

align-items:center;

`;

export const Author = styled.span<DefaultTheme>`

color:${({theme})=>theme.color.Foreground};

`;

export const Stats = styled.div<DefaultTheme>`

display:flex;

gap:18px;

color:${({theme})=>theme.color.Foreground};

`;

export const Stat = styled.div`

display:flex;

gap:6px;

align-items:center;

font-size:14px;

`;