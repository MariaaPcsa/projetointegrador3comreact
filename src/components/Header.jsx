import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const speech = useRef(null);

  const leitorDeTexto = () => {
    if (speechSynthesis.speaking && !isPaused) {
      speechSynthesis.pause();
      setIsPaused(true);
    } else if (isPaused) {
      speechSynthesis.resume();
      setIsPaused(false);
    } else {
      const text = document.body.innerText;
      speech.current = new SpeechSynthesisUtterance(text);
      speech.current.lang = "pt-BR";

      speech.current.onend = () => {
        setIsPaused(false);
      };

      speechSynthesis.speak(speech.current);
    }
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    const tamanhosDeFonte = {
      "fonte-pequena": "0.8rem",
      "fonte-media": "1rem",
      "fonte-grande": "1.8rem"
    };

    const body = document.body;
    const footer = document.getElementById("pageFooter");
    const welcomeSection = document.querySelector(".welcome");

    if (event.target.value === "cor") {
      body.style.backgroundColor = "black";
      if (footer) footer.style.backgroundColor = "#444";
      if (welcomeSection) {
        welcomeSection.style.backgroundColor = "#222";
        welcomeSection.style.color = "#fff";
      }
    } else if (event.target.value in tamanhosDeFonte) {
      document.querySelectorAll("body, body *").forEach(el => {
        el.style.fontSize = tamanhosDeFonte[event.target.value];
      });
    } else if (event.target.value === "reset") {
      body.style.backgroundColor = "";
      if (footer) footer.style.backgroundColor = "initial";
      if (welcomeSection) {
        welcomeSection.style.backgroundColor = "";
        welcomeSection.style.color = "";
      }
      document.querySelectorAll("body, body *").forEach(el => {
        el.style.fontSize = "2rem"; // Volta ao tamanho padrão
      });
    }
  };

  // Adiciona evento de rolagem para verificar se chegou ao final da página
  useEffect(() => {
    const verificarFimDaPagina = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (speechSynthesis.speaking) {
          speechSynthesis.pause();
          setIsPaused(true);
        }
      }
    };

    window.addEventListener('scroll', verificarFimDaPagina);
    return () => {
      window.removeEventListener('scroll', verificarFimDaPagina);
    };
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1 className="titulo">
          <img className="logomarca" src="/images/logo.jpg" alt="Logo Igreja Novo Tempo" />
          Novo Tempo
        </h1>

        <nav className="nav">
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/quemsomos">Quem Somos</a></li>
            <li><a href="/cnt">CNT</a></li>
            <li><a href="/ebnt">EBNT</a></li>
            <li><a href="/sos">SOS</a></li>
            <li><a href="/events">Eventos</a></li>
            <li><a href="/generosity">Generosidade</a></li>
            <li><a href="/location">Localização</a></li>
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