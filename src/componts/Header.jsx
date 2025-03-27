import React from 'react';
import '../index.css';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const leitorDeTexto = () => {
    console.log("Função de leitura de texto");
  };

  const [selectedOption, setSelectedOption] = React.useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="titulo">
          <img className="logomarca" src="/images/logo.jpg" alt="Logo Igreja Novo Tempo" />
          Novo Tempo
        </h1>

        <nav className="nav">
          <ul>
            <div className='ancara'>
            <li><a href="/home">Home</a></li>
            </div>
            
            <li><a href="/quemsomos">Quem Somos</a></li>
            <li><a href="/cnt">CNT</a></li>
            <li><a href="/ebnt">EBNT</a></li>
            <li><a href="/sos">SOS</a></li>
            <li><a href="/events">Eventos</a></li>
            <li><a href="/generosity">Generosidade</a></li>
            <li><a href="/location">Localização</a></li>
            <li><a href="/sos">Sos</a></li>
          </ul>
        </nav>

        <div className="Ouvir">
          <button onClick={leitorDeTexto}>🔊 Ouvir Página</button>

          <div className="acessibilidade container">
            <label htmlFor="selecione"></label>
            <select name="GrupoSelect" id="selecione" value={selectedOption} onChange={handleChange}>
              <option value="" disabled>Escolha uma opção de fonte/cor:</option>
              <option value="cor">Alterar Cor Da Página</option>
              <option value="fonte-pequena">Tamanho de Fonte Pequena</option>
              <option value="fonte-media">Tamanho de Fonte Médio</option>
              <option value="fonte-grande">Tamanho de Fonte Grande</option>
              <option value="reset">Voltar ao Padrão</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
