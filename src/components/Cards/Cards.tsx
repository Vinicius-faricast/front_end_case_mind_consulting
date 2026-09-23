import { Card } from '../Card/Card';
import type { CardProps } from '../Card/types';
import * as S from './styles';

export const Cards = ({cardsProps}: {cardsProps: CardProps[]}) => {
    return (
        <S.ContainerCards>
            {cardsProps.map(card => <Card key={card.id} {...card} />)}
        </S.ContainerCards>
    );
}