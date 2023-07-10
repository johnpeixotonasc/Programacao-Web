import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import React, { useEffect } from 'react'; // Importa o hook useEffect do React

function Home () {
    useEffect(() => { // Hook useEffect para executar um efeito colateral na montagem do componente
        axios.get('http://localhost:4344/patient') // Faz uma requisição GET para o endpoint 'http://localhost:4344/patient'
          .then(response => { // Trata a resposta da requisição
            const data = response.data; // Armazena os dados da resposta em uma variável 'data'
          })
          .catch(error => { // Trata possíveis erros na requisição
            // Tratamento de erro
          });
          
      }, []); // O array vazio [] indica que o efeito será executado apenas uma vez, na montagem do componente
    
    return (
        <div>
            <h1>Tela Inicial</h1>
            <p>Tela Inicial da API de Cadastro de Cliente</p>
        </div>
    )
}

export default Home; // Exporta o componente Home como padrão
