import { useEffect, useState } from "react";
import { getAllArticles } from "../../api";
import { Cards } from "../../components/Cards/Cards";
import { ContainerStyled } from "../../components/Container/Container";
import { CTA } from "../../components/CTA/CTA";
import { HeaderSectionsCards } from "../../components/HeaderSectionsCards/HeaderSectionsCards";
import { Hero } from "../../components/Hero/Hero";
import { NewsLetterComponent } from "../../components/NewsLetterComponent/NewsLetterComponet";

export const Home = (): React.JSX.Element => {
    const [cards01, setCards01] = useState<any[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const data = await getAllArticles();
                const mapped = data.slice(0, 5).map((article) => ({
                    id: article.id,
                    title: article.title,
                    description: article.content || "",
                    image: article.banner_image || "https://placehold.co/800x500",
                    author: article.author_name || "teste",
                    category: "teste",
                    likes: 2,
                    publishedAt: article.published_at || "11-11-11",
                    readingTime: 2,
                    views: 2,
                }));
                setCards01(mapped);
            } catch (e) {
                console.error(e);
            }
        };
        fetchArticles();
    }, []);

    const [cards02, setCards02] = useState<any[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const data = await getAllArticles();
                const sorted = [...data].sort(
                    (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
                );
                const mapped = sorted.slice(0, 5).map((article) => ({
                    id: article.id,
                    title: article.title,
                    description: article.content || "",
                    image: undefined,
                    author: article.author_name || "teste",
                    category: "teste",
                    likes: 2,
                    publishedAt: article.published_at || "11-11-11",
                    readingTime: 2,
                    views: 2,
                    $noImage: true,
                }));
                setCards02(mapped);
            } catch (e) {
                console.error(e);
            }
        };
        fetchArticles();
    }, []);

    const fields = [
        {
            "name": "email",
            "id": "email",
            "type": "email",
            "placeholder": "Email",
            "label": true
        },
        {
            "name": "password",
            "id": "password",
            "type": "password",
            "placeholder": "Senha",
            "label": true
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