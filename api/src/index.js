import db from './db.js'
import express from 'express'
import cors from 'cors'

const app = new express();
app.use(cors())
app.use(express.json())

app.get('/produto', async (req, resp) => {
  let r = await db.tb_produto.findAll({order: [['id_produto', 'desc']]})
  resp.send(r)
})

app.post('/produto', async (req, resp) => {
  try { 
    let d = req.body;
    var data = new Date();

    if(d.produto == '')
      return resp.send({erro: "Campo nome é obrigatório"})
    
    if(d.estoque == null)
      return resp.send({erro: "Campo estoque é obrigatório"})

    if(d.produto >= 4)
      return resp.send({erro: "Campo nome tem que ter no mínimo 5 carácteres"})

    if(d.categoria == '')
      return resp.send({erro: "Campo categoria é obrigatório"})

    if(d.avaliacaoo < 0)
      return resp.send({erro: "A avaliação não aceita numeros negativos"})

    if(d.avaliacao > 10)
    return resp.send({erro: "A avaliação máxima é 10"})

    if(d.preco_de == '')
      return resp.send({erro: "Campo preço DE é obrigatório"})

    if(d.preco_por == '')
      return resp.send({erro: "Campo Preço POR é obrigatório"})

    if(d.descricao == '')
      return resp.send({erro: "Campo descrição é obrigatório"})

      else{

    let r = await db.tb_produto.create({
      nm_produto: d.produto,
      ds_categoria: d.categoria,
      vl_preco_de: d.preco_de,
      vl_preco_por: d.preco_por,
      vl_avaliacao: d.avaliacao,
      ds_produto: d.descricao,
      qtd_estoque: d.estoque,
      img_produto: d.img,
      bt_ativo: d.ativo,
      dt_inclusao: data
    })
      resp.send({success: "Produto inserido"})
      }
  } catch (e){
    resp.send({erro: "Erro ao inserir produto"})
  }

})

app.delete('/produto/:id', async(req, resp) => {
  try {
    let r = await db.tb_produto.destroy({where: {id_produto: req.params.id}})
  resp.send({success:"Aluno removido"})
  } catch (e) {
    resp.send({error: "Não foi possivel remover aluno"})
  }
})

app.put('/produto/:id', async (req, resp) => {
  let d = req.body;
  var data = new Date();

  if(d.produto == '')
      return resp.send({erro: "Campo nome é obrigatório"})
    
    if(d.estoque == null)
      return resp.send({erro: "Campo estoque é obrigatório"})

    if(d.produto >= 4)
      return resp.send({erro: "Campo nome tem que ter no mínimo 5 carácteres"})

    if(d.categoria == '')
      return resp.send({erro: "Campo categoria é obrigatório"})

    if(d.avaliacaoo < 0)
      return resp.send({erro: "A avaliação não aceita numeros negativos"})

    if(d.avaliacao > 10)
    return resp.send({erro: "A avaliação máxima é 10"})

    if(d.preco_de == '')
      return resp.send({erro: "Campo preço DE é obrigatório"})

    if(d.preco_por == '')
      return resp.send({erro: "Campo Preço POR é obrigatório"})

    if(d.descricao == '')
      return resp.send({erro: "Campo descrição é obrigatório"})
      
  let r = await db.tb_produto.update({
    nm_produto: d.produto,
    ds_categoria: d.categoria,
    vl_preco_de: d.preco_de,
    vl_preco_por: d.preco_por,
    vl_avaliacao: d.avaliacao,
    ds_produto: d.descricao,
    qtd_estoque: d.estoque,
    img_produto: d.img,
    bt_ativo: d.ativo,
    dt_inclusao: data
  }, {where: {id_produto: req.params.id}}) 

  resp.send({success: "Produto alterado"})
})

app.listen(process.env.PORT,
  X => console.log(`server subiu na porta ${process.env.PORT}`))