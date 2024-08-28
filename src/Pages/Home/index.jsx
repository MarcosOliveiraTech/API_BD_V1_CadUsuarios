// Importações Padrão
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './style.css';
import Trash from '../../assets/trash.png';

function Home() {

  // Correção do array de objetos
  const users = [
    {
      id: 123465789,
      name: 'Marcos', // Nome como string
      age: '21',
      email: 'marcos@gmail.com', // Email como string
    },

    {
      id: 123465789,
      name: 'Ester', // Nome como string
      age: '22',
      email: 'ester@gmail.com', // Email como string
    },
  ]; // Correção do ponto e vírgula e da vírgula adicional
  
  return (
    <>
      <div className="container">
        <form action="" className="teste">
          {/* Título */}
          <h1>Cadastro de usuário</h1>
          {/* Caixas de texto */}
          <input name="nome" type="text" />
          <input name="idade" type="number" />
          <input name="e-mail" type="email" />
          {/* Botão: Enviar e concluir formulário */}
          <button type="button">Cadastrar</button>

          {/* Correção de sintaxe no map */}
          {users.map((user) => (
            <div key={user.id}>
              <div>
                <p>Nome: {user.name}</p>
                <p>Idade: {user.age}</p>
                <p>E-mail: {user.email}</p>
              </div>

              <button>
                <img src={Trash} alt="Delete" />
              </button>
            </div>
          ))}
        </form>
      </div>
    </>
  );
}

export default Home;
