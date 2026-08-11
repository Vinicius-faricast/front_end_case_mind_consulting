import * as S from "./styles";
import logo_menu_bar from "../../assets/logo_menu_bar.png"
import { Button } from "../Buttom/Buttom";
export const NavBar= (): React.JSX.Element  => {
    return (
        <S.NavContainer>
            <S.Navbar>
                <S.LogoNavbar src={logo_menu_bar} alt="Logo" />
                <S.ContainerItens>
                    <li><a>Home Artigo</a></li>
                    <li><a>Entrar</a></li>
                    <Button primary={true}><li><a>Cadastrar</a></li></Button>
                </S.ContainerItens>
            </S.Navbar>
        </S.NavContainer>
    )
}