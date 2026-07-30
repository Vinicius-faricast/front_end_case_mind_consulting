import { Card } from '../Card/Card';
import * as S from './styles';

export const Cards = () => {
    return (
        <S.ContainerCards>
            <Card title="Título do Card" description="Descrição do Card" id={1} author="teste" category="teste" likes={2} publishedAt="11-11-11" readingTime={2} views={2} />
            <Card title="Título do Card" description="Descrição do Card" id={1} author="teste" category="teste" likes={2} publishedAt="11-11-11" readingTime={2} views={2} />
            <Card title="Título do Card" description="Descrição do Card" id={1} author="teste" category="teste" likes={2} publishedAt="11-11-11" readingTime={2} views={2} />
            <Card title="Título do Card" description="Descrição do Card" id={1} author="teste" category="teste" likes={2} publishedAt="11-11-11" readingTime={2} views={2} />
        </S.ContainerCards>
    );
}