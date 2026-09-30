import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";

interface PrivateRouteProps {
    children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
    const token = localStorage.getItem("token");
    return token ? <>{children}</> : <Navigate to="/login" replace />;
}

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/artigos" element={<div>Artigos</div>} />
                <Route path="/artigos/:id" element={<div>Detalhe Artigo Público</div>} />
                <Route
                    path="/artigos/:id/comentarios"
                    element={
                        <PrivateRoute>
                            <div>Detalhe Artigo com Comentários</div>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/artigos/novo"
                    element={
                        <PrivateRoute>
                            <div>Novo Artigo</div>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/artigos/editar/:id"
                    element={
                        <PrivateRoute>
                            <div>Editar Artigo</div>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <div>Dashboard</div>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/configuracoes"
                    element={
                        <PrivateRoute>
                            <div>Configurações</div>
                        </PrivateRoute>
                    }
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
