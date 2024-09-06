import { useState } from 'react';

import Nome from './components/Nome'

function App() {
  const[aluno, setAluno] = useState('Sujeito Programador')

  function handleChangeName(nome){
    setAluno(nome);
  }

  return(
    <div>
      <h1>Bem vindo ao meu projeto</h1>
      <h2>Olá: {aluno} </h2>
      <button onClick={ () => handleChangeName('Lucas Oliveira') }>
      Mudar
      </button>
    </div>
  );
}

export default App;


