import * as S from "./styles";

export const HeaderSectionsCards = () => {
    return (
        <S.Container>
            <S.ContainerTitle>
                <S.TitleSection>Artigos em Destaque</S.TitleSection>
                <S.SubtitleSection>Os melhores conteúdos selecionados para você</S.SubtitleSection>
            </S.ContainerTitle>
            
            <S.btnNext href="#">Ver todos <S.iconBtn/></S.btnNext>
        </S.Container>
    );
};