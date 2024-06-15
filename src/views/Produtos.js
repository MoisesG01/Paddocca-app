import React, { useState, useEffect } from 'react';
import ProdutoService from '../app/service/produtoService';
import { mensagemErro, mensagemSucesso } from '../components/toastr';
import { useNavigate } from 'react-router-dom';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [itensPorPagina] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();
  const produtoService = new ProdutoService();

  useEffect(() => {
    produtoService.obterProdutos(paginaAtual, itensPorPagina)
      .then(response => {
        setProdutos(response.data.content || []);
        setTotalPages(response.data.totalPages);
      })
      .catch(error => {
        mensagemErro(error.response?.data || 'Erro ao carregar produtos');
      });
  }, [paginaAtual, itensPorPagina]);

  const handleDelete = (id) => {
    produtoService.deletarProduto(id)
      .then(response => {
        mensagemSucesso('Produto deletado com sucesso!');
        produtoService.obterProdutos(paginaAtual, itensPorPagina)
          .then(response => {
            setProdutos(response.data.content || []);
            setTotalPages(response.data.totalPages);
          });
      })
      .catch(error => {
        mensagemErro(error.response?.data || 'Erro ao deletar produto');
      });
  };

  const handlePaginaChange = (pagina) => {
    if (pagina >= 0 && pagina < totalPages) {
      setPaginaAtual(pagina);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Produtos</h1>
      <button onClick={() => navigate('/adicionar-produto')} className="btn btn-success mb-4">Adicionar Produto</button>
      <div className="row">
        {produtos.map(produto => (
          <div key={produto.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{produto.nome}</h5>
                <p className="card-text">Descrição: {produto.descricao}</p>
                <p className="card-text">Categoria: {produto.categoria}</p>
                <p className="card-text">Preço: R$ {produto.preco}</p>
                <button onClick={() => navigate(`/editar-produto/${produto.id}`)} className="btn btn-primary">Editar</button>
                <button onClick={() => handleDelete(produto.id)} className="btn btn-danger">Deletar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${paginaAtual === 0 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePaginaChange(paginaAtual - 1)}>Anterior</button>
          </li>
          {[...Array(totalPages).keys()].map((pagina) => (
            <li key={pagina} className={`page-item ${paginaAtual === pagina ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePaginaChange(pagina)}>{pagina + 1}</button>
            </li>
          ))}
          <li className={`page-item ${paginaAtual === totalPages - 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePaginaChange(paginaAtual + 1)}>Próximo</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Produtos;
