import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div>
    <h1>Olá, React!</h1>
    <p>Estou alterando meu primeiro componente.</p>
    
    <Saudacao/>
    <Perfil nome = "Samuel" cargo = "Professor"/>
    <Sobre nome = "Beatriz" cargo = "Aluno(a)" idade = "20" Curso = "Desenvolvimento de Sistemas"/>
    <Painel/>
    <NovoPainel/>
    <PlacarFutebol nomeTimeA = "Corinthians" nomeTimeB = "Flamengo"/>
  </div>
  )
}
export default App

function Saudacao(){
  return(
    <div style={{backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '8px', marginBottom: '10px'}}>
      <h2 style={{color: '#007bff'}}> Olá, Alunos!</h2>
      <p>Este componente foi criado separadamente.</p>
    </div>
  );
}
  function Perfil({nome, cargo}){
  return(
    <div style={{
      border: '2px solid #2e7d32',
      borderRadius: '12px',
      padding: '15px',
      margin: '10px 0',
      backgroundColor: '#f1f8e9',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{margin: '0 0 5px 0', color: '#1b5e20'}}>
      👤 Nome: {nome}
      </h3>

      <p style={{margin: 0, color: '#444'}}>
      📚 Cargo: <strong>{cargo}</strong>
      </p>
    </div>
  );
  }

function Sobre({nome, cargo, idade, Curso}) {
  return (
    <div style={{
      border: '2px solid #5f1c86',
      borderRadius: '12px',
      padding: '15px',
      margin: '10px 0',
      backgroundColor: '#ddc2ec',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{margin: '0 0 5px 0', color: '#5f1c86'}}>
        Nome: {nome}
      </h3>

      <p style={{margin: 0, color: '#444'}}>
        Cargo: <strong>{cargo}</strong>
      </p>

      <p style={{margin: 0, color: '#444'}}>
        Idade: <strong>{idade}</strong>
      </p>
   
    <p style={{margin: 0, color: '#444'}}>
        Curso: <strong>{Curso}</strong>
      </p>
    </div>
  );
}

  function Painel(){
  return(
    <div style={{backgroundColor: '#ebb895', padding: '10px', borderRadius: '8px', marginBottom: '10px'}}>
      <h2 style={{color: '#db600e'}}> Oii, Este é o Painel!</h2>
      <p>Teste.</p>
    </div>
  );
}

function NovoPainel() {
const[texto, setTexto] = useState('');
return (
  <div style={{
      background: '#f9f9f9',
      padding: '15px',
      borderRadius: '12px',
      border:"1px dasher #000000",
      margin: '20px',
      color: '#666',
    }}>
      <h4>Escreva uma mensagem: </h4>
      <input 
      type='text'
      placeholder='Digite algo...'
      onChange={(e) => setTexto(e.target.value)}
      style={{padding:'8px', width:'80%'}}
      />
      <p>O que você digitou: <span style={{color:'red'}}>{texto}</span></p>
    </div>
);
}

function PlacarFutebol({nomeTimeA, nomeTimeB}){
  const[golsA, setGolsA] = useState(0);
  const [golsB, setGolsB] = useState(0);

  const botaoEstilo = {
  backgroundColor: '#2e7d32',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

  return(
    <div style={{
      border: '3px solid #2e7d32',
      boderRadius: '15px',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f1f8e9',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '20px auto'
    }}>
      <h2 style={{color: '#1b5e20'}}> Placar de Jogo</h2>
      <div style={{display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'}}>

          {/* LADO DO TIME A */}
           <div>
            <h3>{nomeTimeA}</h3>
            <h1 style={{fontSize: '40px', margin: '10px 0'}}>{golsA}</h1>
            <button onClick={() => setGolsA(golsA + 1)} style={botaoEstilo}> GOL!</button>
           </div>

           <h1 style={{margin: '20px'}}>X</h1>


        {/* LADO DO TIME B */}

        <div>
          <h3>{nomeTimeB}</h3>
          <h1 style={{fontSize: '40px', margin: '10px 0'}}>{golsB}</h1>
          <button onClick={()=> setGolsB(golsB + 1)} style={botaoEstilo}>GOL!</button>
        </div>
        </div>
    </div>
  );
}