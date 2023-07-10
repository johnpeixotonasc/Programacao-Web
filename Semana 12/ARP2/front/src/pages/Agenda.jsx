import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import React, { useEffect } from 'react'; // Importa o hook useEffect do React

function Agenda () {
    useEffect(() => {
        axios.get('http://localhost:4344/patient') // Faz uma requisição GET para o endpoint 'http://localhost:4344/patient'
          .then(response => {
            const data = response.data; // Armazena os dados da resposta da requisição na variável 'data'
          })
          .catch(error => {
            // Trata possíveis erros na requisição
          });
          
      }, []); // O useEffect é executado apenas uma vez, pois o array de dependências está vazio
      
    return (
        <div>
            <h1>Agenda</h1>
        </div>
    )
}

export default Agenda; // Exporta o componente Agenda como padrão
