import { Cards } from "./components/Cards/Cards";
import { ContainerStyled } from "./components/Container/Container";
import { Footer } from "./components/Footer/Footer";
import { HeaderSectionsCards } from "./components/HeaderSectionsCards/HeaderSectionsCards";
import { Hero } from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import { NewsLetterComponent } from "./components/NewsLetterComponent/NewsLetterComponet";

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <ContainerStyled>
        <HeaderSectionsCards />
        <Cards/>
      </ContainerStyled>
      <NewsLetterComponent/>
      <Footer />
    </>
  )
}

export default App
