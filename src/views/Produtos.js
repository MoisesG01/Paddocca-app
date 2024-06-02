import React, { useState, useEffect } from 'react';
import ProdutoService from '../app/service/produtoService';

const Produtos = () => {
    const [produtos, setProdutos] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(1);
    const itensPorPagina = 10;

    useEffect(() => {
        const produtoService = new ProdutoService();
        produtoService.obterProdutos(pagina, itensPorPagina)
            .then(response => {
                setProdutos(response.data.produtos);
                setTotalPaginas(response.data.totalPaginas);
            })
            .catch(error => {
                console.error(error.response);
            });
    }, [pagina]);

    const handlePaginaAnterior = () => {
        if (pagina > 1) {
            setPagina(pagina - 1);
        }
    };

    const handleProximaPagina = () => {
        if (pagina < totalPaginas) {
            setPagina(pagina + 1);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Produtos</h1>
            <div className="row">
                {produtos.map(produto => (
                    <div key={produto.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{produto.nome}</h5>
                                <p className="card-text">Preço: R$ {produto.preco}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <nav>
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${pagina === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={handlePaginaAnterior}>Anterior</button>
                    </li>
                    {[...Array(totalPaginas)].map((_, index) => (
                        <li key={index} className={`page-item ${pagina === index + 1 ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => setPagina(index + 1)}>{index + 1}</button>
                        </li>
                    ))}
                    <li className={`page-item ${pagina === totalPaginas ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={handleProximaPagina}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Produtos;
