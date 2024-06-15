import React from 'react';
import { Link } from 'react-router-dom';

import { FaUser } from 'react-icons/fa';
import { FaStore } from 'react-icons/fa';
import { FaTruck } from 'react-icons/fa';

import './TipoPerfil.css'; 

const TipoPerfil = () => {
    return (
        <div className="tipo-perfil-container">
            <h1>Escolha o Tipo de Perfil</h1>
            <div className="perfil-links">
                <Link to="/cadastro-cliente" className="perfil-link">
                    <FaUser className="perfil-icon" />
                    <span>Cliente</span>
                </Link>
                <Link to="/cadastro-padaria" className="perfil-link">
                    <FaStore className="perfil-icon" />
                    <span>Padaria</span>
                </Link>
                <Link to="/cadastro-entregador" className="perfil-link">
                    <FaTruck className="perfil-icon" />
                    <span>Entregador</span>
                </Link>
            </div>
        </div>
    );
};

export default TipoPerfil;
