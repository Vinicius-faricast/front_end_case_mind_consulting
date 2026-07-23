import * as S from "./styles";
import type { ButtonProps } from "./types";

export function Button({

    children,

    fullWidth,

    ...props

}: ButtonProps){

    return(

        <S.Container

            $fullWidth={fullWidth}

            {...props}

        >

            {children}

        </S.Container>

    );

}