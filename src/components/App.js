import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./loginECadastro/Login";
import PaginaInicial from "./PaginaInicial/PaginaInicial";
import GlobalStyle from "../styles/globalStyle";

export default function App() {
    const [token, setToken] = useState('');
    
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<Login setToken={setToken}/>}/>
                <Route path='/transacoes' element={<PaginaInicial token={token}/>} />
            </Routes>
        </BrowserRouter>
    )
}