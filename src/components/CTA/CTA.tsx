import * as S from "./styles";
import type { CTAProps } from "./types";
import { Button } from "../Buttom/Buttom";

export const CTA = ({
    title = "Compartilhe Seu Conhecimento",
    subtitle = "Junte-se à nossa comunidade de escritores e compartilhe suas experiências e conhecimentos em tecnologia",
    buttonText = "Criar Conta Gratuita",
    onButtonClick,
}: CTAProps) => {
    return (
        <S.Container>
            <S.Content>
                <S.Title>{title}</S.Title>
                <S.Subtitle>{subtitle}</S.Subtitle>
                <Button primary={true} onClick={onButtonClick}>
                    {buttonText}
                </Button>
            </S.Content>
        </S.Container>
    );
}
