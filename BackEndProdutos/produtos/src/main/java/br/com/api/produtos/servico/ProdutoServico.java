package br.com.api.produtos.servico;


import br.com.api.produtos.modelo.ProdutoModelo;
import br.com.api.produtos.modelo.RespostaModelo;
import br.com.api.produtos.repositorio.ProdutoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ProdutoServico {
    @Autowired
    private ProdutoRepositorio pr;


    @Autowired
    private RespostaModelo rm;



    //Metodo de listar produtos
    public Iterable<ProdutoModelo> listar(){
        return pr.findAll();
    }


    //Metodo cadastrarAlterar ou alterar produtos

    public ResponseEntity<?> cadastrarAlterar(ProdutoModelo pm, String acao){
        if(pm.getNome().equals("")){
            rm.setMensagem("O nome do produto é obrigatorio");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        }else if(pm.getMarca().equals("")){
            rm.setMensagem("O nome da marca é obrigatorio");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        }else{
            if(acao.equalsIgnoreCase("cadastrar")){
                return new ResponseEntity<ProdutoModelo>(pr.save(pm), HttpStatus.CREATED);

            }else{
                return new ResponseEntity<ProdutoModelo>(pr.save(pm), HttpStatus.OK);
            }
        }

    }

    //Metodo para remover serviso

    public ResponseEntity<RespostaModelo> remover(long codigo){
        pr.deleteById(codigo);
        rm.setMensagem("Produto foi removido com sucesso!");

        return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);


    }


}
