import { Cards } from "./components/Cards/Cards";
import { ContainerStyled } from "./components/Container/Container";
import { Footer } from "./components/Footer/Footer";
import { HeaderSectionsCards } from "./components/HeaderSectionsCards/HeaderSectionsCards";
import { NavBar } from "./components/NavBar/NavBar";

function App() {

  return (
    <>
      <NavBar />
      <ContainerStyled>
        <HeaderSectionsCards />
        <Cards/>
      </ContainerStyled>
      <Footer />
    </>
  )
}

export default App
