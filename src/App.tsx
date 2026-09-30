import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";

function App() {

  return (
    <>
      <NavBar />
      {/* x<Home /> */}
      {/* <Register /> */}
      <Login />
      <Footer />
    </>
  )
}

export default App
