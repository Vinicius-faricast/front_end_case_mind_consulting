// import { Card } from "./components/Card/Card"
// import { ContainerStyled } from "./components/Container/Container"
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";

function App() {

  return (
    <>
        <NavBar />
      {/* <ContainerStyled>
        <Card title="Título do Card" description="Descrição do Card" id={1} author="teste" category="teste" likes={2} publishedAt="11-11-11" readingTime={2} views={2} />
      </ContainerStyled> */}
      <Footer />
    </>
  )
}

export default App
