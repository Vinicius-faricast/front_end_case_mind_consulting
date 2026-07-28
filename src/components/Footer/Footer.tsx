import * as S from "./styles";

import {

    FiGithub,

    FiLinkedin,

    FiTwitter

} from "react-icons/fi";

export function Footer(){

    return(

        <S.Container>

            <S.Top>

                <S.Brand>

                    <S.Logo>

                        {"<M/>"}

                    </S.Logo>

                    <S.Description>

                        Seu portal de tecnologia com artigos,
                        tutoriais e novidades do mundo tech.

                    </S.Description>

                </S.Brand>

                <S.Navigation>

                    <S.Column>

                        <S.Title>

                            Navegação

                        </S.Title>

                        <S.Link href="/">

                            Home

                        </S.Link>

                        <S.Link href="/articles">

                            Artigos

                        </S.Link>

                        <S.Link href="/dashboard">

                            Dashboard

                        </S.Link>

                    </S.Column>

                    <S.Column>

                        <S.Title>

                            Redes Sociais

                        </S.Title>

                        <S.Social>

                            <FiLinkedin/>

                            <FiGithub/>

                            <FiTwitter/>

                        </S.Social>

                    </S.Column>

                </S.Navigation>

            </S.Top>

            <S.Divider/>

            <S.Copyright>

                © 2025 TechBlog. Todos os direitos reservados.

            </S.Copyright>

        </S.Container>

    )

}