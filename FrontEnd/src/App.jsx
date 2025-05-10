import { useEffect, useState } from "react"
import Formulario from "./Formulario"
import Tabela from "./Tabela"
import Header from "./Header"
import './index.css'






function App() {

  //Produto
  const produto = {
    nome: '',
    marca: ''
  }
  
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([ ]);
  const [objProduto, setObjProduto] = useState(produto);

  const aoDigitar = (e) => {
    setObjProduto({...objProduto, [e.target.name]: e.target.value})

  }
  
  //Cadastrar Produto
  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar',{
      method: 'post',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(retorno => retorno.json())
    .then(retorno_convertido => {
        if(retorno_convertido.mensagem !== undefined){
          alert(retorno_convertido.mensagem);

        }else{
          setProdutos([...produtos, retorno_convertido])
          alert('Produto Cadastrado');
          limparFormulario();
        }
    })
  }


  //Alterar Produto 
  const alterar = () => {
    fetch('http://localhost:8080/alterar',{
      method: 'put',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(retorno => retorno.json())
    .then(retorno_convertido => {
        if(retorno_convertido.mensagem !== undefined){
          alert(retorno_convertido.mensagem);

        }else{
          alert('Produto Alterado!');
          //Copia dos produtos
          let prodsTemp = [...produtos];

          //Indice
          let indice = prodsTemp.findIndex((p) => {
            return p.codigo === objProduto.codigo;
          });

          //Alterar do ProdsTemp
          prodsTemp[indice] = objProduto;
          
          //Atualizar produtos 
          setProdutos(prodsTemp);

          //Limpar formulario
          limparFormulario();
        }
    })
  }

  //Remover Produto 
  const remover = () => {
    fetch('http://localhost:8080/remover/'+ objProduto.codigo,{
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(retorno => retorno.json())
    .then(retorno_convertido => {
      alert(retorno_convertido.mensagem);

      // Copia produtos 
      let prodsTemp = [...produtos];

      //Indice
      let indice = prodsTemp.findIndex((p) => {
        return p.codigo === objProduto.codigo;


      });
      //Remover do ProdsTemp

      prodsTemp.splice(indice, 1);
      //Atualizar produtos 
      setProdutos(prodsTemp);
      limparFormulario();
    })
  }


  //Selecionar Produto

  const selecionarProduto = (indice) =>{
    setObjProduto(produtos[indice]);
    setBtnCadastrar(false);
  }


  //Limpar form

  const limparFormulario  = () => {
    setObjProduto(produto);
    setBtnCadastrar(true);
  }

  useEffect(()=>{
    fetch('http://localhost:8080/listar')
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido))
  }, []);

  return (
    <>
      <Header></Header>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj = {objProduto} cancelar={limparFormulario} remover = {remover} alterar= {alterar}></Formulario>
      <Tabela prods={produtos} selecionarProduto={selecionarProduto}></Tabela>
      
    </>
  )
}

export default App
