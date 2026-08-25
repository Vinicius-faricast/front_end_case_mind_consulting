import { Button } from "../Buttom/Buttom";
import * as S from "./styles";
export const NewsLetterComponent = () => {
    return (
        <S.Container>
            <S.Content>
                <S.mensageIcon />
                <h3>Newsletter Semanal</h3>
                <p>Receba os melhores artigos de tecnologia diretamente no seu email.
                    Sem spam, apenas conteúdo de qualidade</p>
                <form action="" method="post">
                    <input type="email" name="email" id="email" placeholder="exemple@email.com" />
                    <Button primary={true}>Inscrever</Button>
                </form>
                <p>Mais de 10.000 desenvolvedores já recebem nossa newsletter</p>
            </S.Content>
        </S.Container>
    );
};