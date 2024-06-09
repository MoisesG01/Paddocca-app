import React, { useState, useEffect } from 'react';
import ProdutoService from '../app/service/produtoService';
import { mensagemErro, mensagemSucesso } from '../components/toastr';
import { useNavigate } from 'react-router-dom';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();
  const produtoService = new ProdutoService(); // Instancie o serviço aqui

  useEffect(() => {
    produtoService.obterProdutos()
     .then(response => {
        setProdutos(response.data || []);
      })
     .catch(error => {
        mensagemErro(error.response?.data || 'Erro ao carregar produtos');
      });
  }, []);

  const handleDelete = (id) => {
    produtoService.deletarProduto(id)
     .then(response => {
        mensagemSucesso('Produto deletado com sucesso!');
        // Atualizar a lista de produtos após a deleção
        produtoService.obterProdutos()
         .then(response => {
            setProdutos(response.data || []);
          });
      })
     .catch(error => {
        mensagemErro(error.response?.data || 'Erro ao deletar produto');
      });
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
    </div>
  );
};

export default Produtos;
