import * as S from "./styles";
import type { ButtonProps } from "./types";

export function Button({

    children,

    fullWidth,

    primary,

    ...props

}: ButtonProps){

    return(

        <S.Container

            $fullWidth={fullWidth}

            $primary={primary}

            {...props}

        >

            {children}

        </S.Container>

    );

}