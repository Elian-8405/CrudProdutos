package br.com.api.produtos.modelo;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;


@Component
@Getter
@Setter
public class RespostaModelo  {
    private String mensagem;

}
