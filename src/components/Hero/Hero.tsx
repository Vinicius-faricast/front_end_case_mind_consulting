import * as S from "./styles";
import { Button } from "../Buttom/Buttom";

export const Hero = () => {
    return(
        <S.Hero>
            <S.ContainerHero>
                <S.TitleHero>Explore o futuro da <S.textEmphasis>tecnologia</S.textEmphasis></S.TitleHero>
                <S.contentHero>Artigos Sobre IA, Desenvolvimento, DevOps e as últimas tendências tecnológicas</S.contentHero>
                <Button fullWidth={true} primary={true}>Explorar Artigos</Button>
                <Button fullWidth={true}>Começar a escrever</Button>
            </S.ContainerHero>
        </S.Hero>
    )
}