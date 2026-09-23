import * as S from "./styles";
// import type { NewsLetterProps } from "./types";
import { Button } from "../Buttom/Buttom";
import { Input } from "../Input/Input";

export const NewsLetterComponent = () => {
    return (
        <S.Container>
            <S.Content>
                <S.IconWrapper>
                    <S.mensageIcon />
                </S.IconWrapper>

                <S.Title>Newsletter Semanal</S.Title>

                <S.Subtitle>
                    Receba os melhores artigos de tecnologia diretamente no seu email.
                    Sem spam, apenas conteúdo de qualidade
                </S.Subtitle>

                <S.Form action="" method="post">
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="exemplo@email.com"
                        label={false}
                    />
                    <Button primary={true}>Inscrever</Button>
                </S.Form>

                <S.FooterText>
                    Mais de 10.000 desenvolvedores já recebem nossa newsletter
                </S.FooterText>
            </S.Content>
        </S.Container>
    );
};
