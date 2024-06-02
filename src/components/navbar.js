import React from "react";
import NavBarItem from "./navbarItem";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="/home">Paddocca</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <NavBarItem href="/tipo-perfil" label="Cadastrar" />
                        <NavBarItem href="/login" label="Login" />
                        <NavBarItem href="/produtos" label="Produtos" />
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
