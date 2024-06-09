import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom'; // Adicionei Outlet aqui

import Login from "../views/login";
import Home from "../views/home";
import AuthService from "../app/service/authService";
import Produtos from "../views/Produtos";
import TipoPerfil from "../views/TipoPerfil";
import CadastroCliente from "../views/cadastroCliente";
import CadastroEntregador from "../views/CadastroEntregador";
import CadastroPadaria from "../views/CadastroPadaria";
import EditarProduto from "../views/EditarProduto";
import AdicionarProduto from "../views/AdicionarProduto";

function RotaAutenticada({ children }) {
    let location = useLocation();

    if (!AuthService.isUsuarioAutenticado()) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
}

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro-cliente" element={<CadastroCliente />} />
                <Route path="/cadastro-entregador" element={<CadastroEntregador />} />
                <Route path="/cadastro-padaria" element={<CadastroPadaria />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/tipo-perfil" element={<TipoPerfil />} />
                <Route path="/editar-produto/:id" element={<EditarProduto />} />
                <Route path="/adicionar-produto" element={<AdicionarProduto />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
