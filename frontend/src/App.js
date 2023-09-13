import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
function App() {
  const [dadosDoServidor, setDadosDoServidor] = useState({});

  useEffect(() => {
    // Fazer a solicitação ao servidor Node.js
    fetch('http://localhost:3000/api/exemplo')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação');
        }
        return response.json();
      })
      .then((data) => {
        setDadosDoServidor(data)
        console.log(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados do servidor:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Dados do Servidor:</h1>
      <p>{dadosDoServidor.mensagem}</p>
      <h1 className="text-3xl font-bold ">
        Hello World
       !
    </h1>
    </div>
    
  );
}


export default App;
