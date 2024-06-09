import React, { createContext, useState, useContext } from 'react';
import LocalStorageService from '../app/service/localstorageService';

const AuthContext = createContext();
export const AuthConsumer = AuthContext.Consumer;

const ProvedorAutenticacao = (props) => {
    const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);

    const iniciarSessao = (usuario) => {
        setUsuarioAutenticado(usuario);
        LocalStorageService.adicionarItem('_usuario_logado', usuario);
    };

    const encerrarSessao = () => {
        setUsuarioAutenticado(null);
        LocalStorageService.removerItem('_usuario_logado');
    };

    return (
        <AuthContext.Provider value={{ usuarioAutenticado, iniciarSessao, encerrarSessao }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default ProvedorAutenticacao;
