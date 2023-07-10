import React, { useState } from 'react'; // Importa o hook useState do React
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP

function Cadastro({ onCadastro }) {
  const [name, setName] = useState(''); // Define o estado 'name' e a função 'setName' para atualizá-lo
  const [dateOfBirth, setDateOfBirth] = useState(''); // Define o estado 'dateOfBirth' e a função 'setDateOfBirth' para atualizá-lo
  const [gender, setGender] = useState(''); // Define o estado 'gender' e a função 'setGender' para atualizá-lo
  const [address, setAddress] = useState(''); // Define o estado 'address' e a função 'setAddress' para atualizá-lo
  const [phoneNumber, setPhoneNumber] = useState(''); // Define o estado 'phoneNumber' e a função 'setPhoneNumber' para atualizá-lo
  const [email, setEmail] = useState(''); // Define o estado 'email' e a função 'setEmail' para atualizá-lo
  const [medicalHistory, setMedicalHistory] = useState(''); // Define o estado 'medicalHistory' e a função 'setMedicalHistory' para atualizá-lo

  const handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão do envio do formulário

    const paciente = { name, dateOfBirth, gender, address, phoneNumber, email, medicalHistory }; // Cria um objeto paciente com os dados do formulário

    axios.post('http://localhost:4344/patient', paciente) // Faz uma requisição POST para o endpoint 'http://localhost:4344/patient' com o objeto paciente
      .then(response => {
        console.log('Paciente cadastrado com sucesso!');
        onCadastro(paciente); // Chama a função 'onCadastro' passando o objeto paciente como argumento
      })
      .catch(error => {
        console.error('Erro ao cadastrar paciente:', error);
      });

    setName(''); // Limpa o estado 'name'
    setDateOfBirth(''); // Limpa o estado 'dateOfBirth'
    setGender(''); // Limpa o estado 'gender'
    setAddress(''); // Limpa o estado 'address'
    setPhoneNumber(''); // Limpa o estado 'phoneNumber'
    setEmail(''); // Limpa o estado 'email'
    setMedicalHistory(''); // Limpa o estado 'medicalHistory'
  };

  return (
    <div>
      <h1>Cadastro</h1> {/* Título da tela */}
      <form onSubmit={handleSubmit}> {/* Define o evento onSubmit para chamar a função handleSubmit */}
        <input type="text" placeholder="Nome Completo" value={name} onChange={(e) => setName(e.target.value)} /> {/* Campo de entrada para o nome com o valor controlado pelo estado 'name' */}
        <input type="date" placeholder="Data de Nascimento" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} /> {/* Campo de entrada para a data de nascimento com o valor controlado pelo estado 'dateOfBirth' */}
        <input type="text" placeholder="Gênero" value={gender} onChange={(e) => setGender(e.target.value)} /> {/* Campo de entrada para o gênero com o valor controlado pelo estado 'gender' */}
        <input type="text" placeholder="Endereço" value={address} onChange={(e) => setAddress(e.target.value)} /> {/* Campo de entrada para o endereço com o valor controlado pelo estado 'address' */}
        <input type="text" placeholder="Telefone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /> {/* Campo de entrada para o telefone com o valor controlado pelo estado 'phoneNumber' */}
        <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} /> {/* Campo de entrada para o e-mail com o valor controlado pelo estado 'email' */}
        <input type="text" placeholder="Histórico Médico" value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)} /> {/* Campo de entrada para o histórico médico com o valor controlado pelo estado 'medicalHistory' */}
        <button type="submit">Cadastrar</button> {/* Botão de submit para cadastrar o paciente */}
      </form>
    </div>
  );
}

export default Cadastro; // Exporta o componente Cadastro como padrão
