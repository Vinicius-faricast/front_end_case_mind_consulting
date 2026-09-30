import { Link } from "react-router-dom";
import * as S from "./styles";
import logo_menu_bar from "../../assets/logo_menu_bar.png";
import { Button } from "../Buttom/Buttom";

export const NavBar = (): React.JSX.Element => {
    return (
        <S.NavContainer>
            <S.Navbar>
                <S.LogoNavbar src={logo_menu_bar} alt="Logo" />
                <S.ContainerItens>
                    <li><S.NavLink to="/">Home</S.NavLink></li>
                    <li><S.NavLink to="/artigos">Artigos</S.NavLink></li>
                    <li><S.NavLink to="/login">Entrar</S.NavLink></li>
                    <Button primary={true}>
                        <Link to="/cadastro" style={{ textDecoration: "none" }}>Cadastrar</Link>
                    </Button>
                </S.ContainerItens>
            </S.Navbar>
        </S.NavContainer>
    );
};
