import * as S from "./styles";
import type { ContainerProps } from "./types";


export const ContainerStyled = ({ children } : ContainerProps) => {
    return (
        <S.Container>
            {children}
        </S.Container>
    )
}