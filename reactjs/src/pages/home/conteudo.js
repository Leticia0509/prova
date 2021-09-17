import Cabecalho from "../../components/cabecalho/conteudo.js"
import  Menu  from "../../components/menu/Conteudo.js"
import {Container} from './conteudo-styled.js'

import Api from '../../services/api.js'

import { useEffect, useState } from "react"

import {Inputstyle} from '../../components/inputs/styled'

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'



const api = new Api();

export default function Conteudo() {

  const [produtos, setProd] = useState([])
  const [nome, setNome] = useState('')
  const [categoria, setCategoria] = useState('')
  const [avaliacao, setAvaliacao] = useState('')
  const [imagem, setImagem] = useState('')
  const [precoPOR, setPrecoPOR] = useState('')
  const [precoDE, setPrecoDE] = useState('')
  const [estoque, setEstoque] = useState('')
  const [descricao, setDesc] = useState('')
  const [idAlt, setId] = useState(0)


  const loading = useRef(null);

    async function alterar(item){
      setNome(item.nm_produto);
      setCategoria(item.ds_categoria);
      setPrecoDE(item.vl_preco_de);
      setPrecoPOR(item.vl_preco_por);
      setAvaliacao(item.vl_avaliacao);
      setEstoque(item.qtd_estoque);
      setImagem(item.img_produto);
      setDesc(item.ds_produto)
      setId(item.id_produto)
    }

    let promiseSuccess = (erro, success) => {
      const resolve3sec = new Promise ((resove, reject) => {
      setTimeout(resove, 2000)
    });
    toast.promise(resolve3sec, {
      pending: "carregando",
      success: success,
      error: erro
    })
    };

    let promiseError = (erro, success) => {
      const resolve3sec = new Promise ((resove, reject) => {
      setTimeout(reject, 2000)
    });
    toast.promise(resolve3sec, {
      pending: "carregando",
      success: success,
      error: erro
    })
  };
  
    async function listar() {
      let r = await api.listar();
      setProd(r)
    }


    async function inserir() {
      if(idAlt === 0) {
        let r = await api.inserir(nome, categoria, precoDE, precoPOR, avaliacao, descricao, estoque, imagem)
        if(r.erro){
          promiseError(r.erro)
        } else {
          promiseSuccess(r.success)
          clear();
        }
      } else{
      let r = await api.alterar(idAlt, nome, categoria, precoDE, precoPOR, avaliacao, descricao, estoque, imagem)
      if(r.erro){
        promiseError(r.erro)
      } else {
        promiseSuccess(r.success)
        clear()
      }
    } 
    listar();
  }

    async function deletar(id){
      confirmAlert({
        title: "Remover produto",
        message: `Deseja apagar o produto ${id}?`,
        buttons: [
          {
            label: "Sim", onClick: async () => {
              let r = await api.deletar(id)
              promiseSuccess(r.erro, r.success)
              listar()
            },
            
          },{
            label: "Não"
          }
        ]
      })
    }

    function clear(){
      setNome('');
      setCategoria('');
      setPrecoDE('');
      setPrecoPOR('');
      setAvaliacao('');
      setEstoque('');
      setImagem('');
      setDesc('')
      setId(0)
    }

    useEffect(() => {
      listar()
    }, [])

    return (
      <Container>
        <Menu/>
        <ToastContainer />
        <LoadingBar color='#f11946' ref={loading} />
          <div className="pt2-home">
            <Cabecalho/>
            <div className="info-alunos"> 
            <div className="nome-aluno"> <img src="/assets/images/Line.svg" alt=""/> <div className="novo-aluno" > {idAlt === 0? "Novo produto": `Alterando produto ${idAlt}`} </div> </div>
              <div className="form-home"> 
                  <div className="inputs">
                    <Inputstyle>
                      <form> 
                        <div className="pt1-inputs">
                            <label> 
                                Nome: 
                                <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
                            </label>

                            <label> 
                                Preço DE:
                                <input type="text" value={precoDE} onChange={e => setPrecoDE(e.target.value)}/>
                            </label>
                        </div>

                        <div className="pt2-inputs">
                            <label> 
                                Categoria: 
                                <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)}/>
                            </label>

                            <label> 
                                Preço POR: 
                                <input type="text" value={precoPOR} onChange={e => setPrecoPOR(e.target.value)}/>
                            </label>
                        </div>

                        <div className="pt3-inputs">
                            <label> 
                                Avaliação:
                                <input type="text" value={avaliacao} onChange={e => setAvaliacao(e.target.value)}/>
                            </label>

                            <label> 
                                Estoque:
                                <input type="text" value={estoque} onChange={e => setEstoque(e.target.value)}/>
                            </label>
                        </div>

                        <div className="link-img">
                          <label className="img"> 
                            Link Imagem: 
                            <input type="text" value={imagem} onChange={e => setImagem(e.target.value)}/>
                          </label>
                        </div>

                        <label className="textarea">
                          <div> Descrição:  </div>
                        <textarea cols="67" rows="9" value={descricao} onChange={e => setDesc(e.target.value)}> </textarea>
                        </label>
                      </form>
                    </Inputstyle>
                  </div>
                  <button className="cadastrar" onClick={inserir}> {idAlt === 0? "Cadastrar": "Alterar"} </button>
              </div>
            </div>
            <div className="tabela">
              <div className="novo-aluno">
                <img src="/assets/images/Line.svg" alt=""/>
                <div className="titulo-aluno" > Produtos Cadastrados </div>
              </div>
              <table className="tabela-ns">
                <thead>
                  <tr className="inicio-table">
                    <th> </th>
                    <th> Id </th>
                    <th> Produto </th>
                    <th> Categoria </th>
                    <th> Preço</th>
                    <th> Estoque </th>
                    <th> </th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {produtos.map((item, i) => 
                    <tr className={i% 2 === 0? "cinza": "normal"}> 
                    <td> <img className="img-table" src={item.img_produto} alt=""/>  </td>
                      <td> {item.id_produto} </td>
                      <td title={item.nm_produto}> {item.nm_produto != null && item.nm_produto.length >=20? item.nm_produto.substr(0, 20)  + '...': item.nm_produto} </td>
                      <td> {item.ds_categoria} </td>
                      <td> {item.vl_preco_por} </td>
                      <td> {item.qtd_estoque} </td>
                      <td> <button className="bt-functions" onClick={() => alterar(item)}> <img src="/assets/images/edit.svg" alt=""/> </button> </td>
                      <td> <button className="bt-functions" onClick={() => deletar(item.id_produto)}> <img src="/assets/images/lixo.svg" alt=""/> </button> </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
      </Container>
    )
}