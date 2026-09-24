import { Cards } from "../components/Cards/Cards";
import { ContainerStyled } from "../components/Container/Container";
import { CTA } from "../components/CTA/CTA";
import { HeaderSectionsCards } from "../components/HeaderSectionsCards/HeaderSectionsCards";
import { Hero } from "../components/Hero/Hero";
import { NewsLetterComponent } from "../components/NewsLetterComponent/NewsLetterComponet";

export const Home = (): React.JSX.Element => {

    const cards01 = [
        {
            "title": "Título do Card",
            "description": "Descrição do Card",
            "image": "https://placehold.co/800x500",
            "id": 1,
            "author": "teste",
            "category": "teste",
            "likes": 2,
            "publishedAt": "11-11-11",
            "readingTime": 2,
            "views": 2
        },
        {
            "title": "Título do Card",
            "description": "Descrição do Card",
            "image": "https://placehold.co/800x500",
            "id": 1,
            "author": "teste",
            "category": "teste",
            "likes": 2,
            "publishedAt": "11-11-11",
            "readingTime": 2,
            "views": 2
        },
        {
            "title": "Título do Card",
            "description": "Descrição do Card",
            "image": "https://placehold.co/800x500",
            "id": 1,
            "author": "teste",
            "category": "teste",
            "likes": 2,
            "publishedAt": "11-11-11",
            "readingTime": 2,
            "views": 2
        },
        {
            "title": "Título do Card",
            "description": "Descrição do Card",
            "image": "https://placehold.co/800x500",
            "id": 1,
            "author": "teste",
            "category": "teste",
            "likes": 2,
            "publishedAt": "11-11-11",
            "readingTime": 2,
            "views": 2
        }
    ]

    const cards02 = [
        {
            "title": "Título do Card",
            "description": "Descrição do Card",
            "id": 1,
            "author": "teste",
            "category": "teste",
            "likes": 2,
            "publishedAt": "11-11-11",
            "readingTime": 2,
            "views": 2
        },
        {
            "title": "Título do Card",
            "description": "Descrição do Card",
            "id": 1,
            "author": "teste",
            "category": "teste",
            "likes": 2,
            "publishedAt": "11-11-11",
            "readingTime": 2,
            "views": 2
        },
        {
            "title": "Título do Card",
            "description": "Descrição do Card",
            "id": 1,
            "author": "teste",
            "category": "teste",
            "likes": 2,
            "publishedAt": "11-11-11",
            "readingTime": 2,
            "views": 2
        },
        {
            "title": "Título do Card",
            "description": "Descrição do Card",
            "id": 1,
            "author": "teste",
            "category": "teste",
            "likes": 2,
            "publishedAt": "11-11-11",
            "readingTime": 2,
            "views": 2
        }
    ]
    return (
        <>
            <Hero />
            <ContainerStyled>
                <HeaderSectionsCards title="Artigos em Destaque" subtitle="Os melhores conteúdos selecionados para você" />
                <Cards cardsProps={cards01} />
            </ContainerStyled>
            <ContainerStyled>
                <HeaderSectionsCards title="Artigos Recentes" subtitle="Conteudo da comunidade" />
                <Cards cardsProps={cards02} />
            </ContainerStyled>
            <NewsLetterComponent />
            <CTA />
        </>
    );
};