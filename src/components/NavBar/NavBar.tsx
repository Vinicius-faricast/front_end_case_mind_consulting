import * as S from "./styles";
import logo_menu_bar from "../../assets/logo_menu_bar.png"
export const NavBar = () => {
    return (
        <S.NavContainer>
            <S.Navbar>
                <S.LogoNavbar src={logo_menu_bar} alt="Logo" />
                <S.ContainerItens>
                    <li><a>Home Artigo</a></li>
                    <li><a>Entrar</a></li>
                    <li><a>Cadastrar</a></li>
                </S.ContainerItens>
            </S.Navbar>
        </S.NavContainer>
    )
}