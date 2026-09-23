import * as S from "./styles";
import type { HeaderSectionsCardsProps } from "./types";

export const HeaderSectionsCards = ({title, subtitle}: HeaderSectionsCardsProps) => {
    return (
        <S.Container>
            <S.ContainerTitle>
                <S.TitleSection>{title}</S.TitleSection>
                <S.SubtitleSection>{subtitle}</S.SubtitleSection>
            </S.ContainerTitle>
            
            <S.btnNext href="#">Ver todos <S.iconBtn/></S.btnNext>
        </S.Container>
    );
};