import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import '../App.css';

import '../components/css/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  let speechInstance = null;
  
  const leitorDeTexto = () => {
    if (speechSynthesis.speaking && !isPaused) {
      speechSynthesis.pause();
      setIsPaused(true);
    } else if (isPaused) {
      speechSynthesis.resume();
      setIsPaused(false);
    } else {
      speechSynthesis.cancel();
  
      // Verifica se há texto selecionado
      const selectedText = window.getSelection().toString().trim();
  
      const text = selectedText || document.body.innerText;
  
      if (text.length > 0) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pt-BR';
  
        utterance.onend = () => {
          setIsPaused(false);
        };
  
        speechInstance = utterance;
        speechSynthesis.speak(speechInstance);
      }
    }
  };
  
  const pararLeitura = () => {
    speechSynthesis.cancel();
    setIsPaused(false);
  };
  
  const verificarFimDaPagina = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      speechSynthesis.speaking
    ) {
      speechSynthesis.pause();
      setIsPaused(true);
    }
  };
  

  const alterarCorDaPagina = () => {
    const body = document.body;
    const footer = document.getElementById('pageFooter');

    body.style.backgroundColor = '#000';
    if (footer) footer.style.backgroundColor = '#000';

    const secoes = [
      ...document.querySelectorAll('section'),
    ...document.querySelectorAll('.welcome'),
    ...document.querySelectorAll('.know-us'),
    ...document.querySelectorAll('.historia'),
    ...document.querySelectorAll('.content-container'),
    ...document.querySelectorAll('.pastors-section'),
    ...document.querySelectorAll('.courses'),
    ...document.querySelectorAll('.eventos'),
    ...document.querySelectorAll('.doacao'),
    ...document.querySelectorAll('h2.sub-titulo'),
    ...document.querySelectorAll('div.imag-footer span'),
    ...document.querySelectorAll('table.agenda'),
    ...document.querySelectorAll('div.pesquisa'),
    ...document.querySelectorAll('div.on'),
    ...document.querySelectorAll('div.course'),]

    secoes.forEach((secao) => {
      if (secao) {
        secao.style.backgroundColor = '#000';
        secao.style.color = '#fff';
        secao.querySelectorAll('h1, h2, h3, h4, p, span, a, strong, div, li, td, th, footer').forEach((el) => {
          el.style.color = '#fff';
        });

        if (secao.tagName === 'TABLE') {
          secao.style.borderColor = '#fff';
          secao.querySelectorAll('td, th').forEach((celula) => {
            celula.style.borderColor = '#fff';
          });
        }
      }
    });
  };

  const alterarFonte = (tamanho) => {
    document.querySelectorAll('body, body *').forEach((el) => {
      el.style.fontSize = tamanho;
    });
  };

  const resetarConfiguracoes = () => {
    const body = document.body;
    const footer = document.getElementById('pageFooter');
    const welcomeSection = document.querySelector('.welcome');

    body.removeAttribute('style');
    if (footer) footer.removeAttribute('style');
    if (welcomeSection) welcomeSection.removeAttribute('style');

    document.querySelectorAll('body, body *').forEach((el) => {
      el.style.fontSize = '';
      el.style.backgroundColor = '';
      el.style.color = '';
    });

    setSelectedOption('');
  };

  useEffect(() => {
    window.addEventListener('scroll', verificarFimDaPagina);

    return () => {
      window.removeEventListener('scroll', verificarFimDaPagina);
    };
  }, []);

  const handleChange = (e) => {
    const valor = e.target.value;
    setSelectedOption(valor);

    const tamanhosDeFonte = {
      'fonte-pequena': '0.8rem',
      'fonte-media': '1.6rem',
      'fonte-grande': '1.8rem',
    };

    if (valor === 'cor') {
      alterarCorDaPagina();
    } else if (valor in tamanhosDeFonte) {
      alterarFonte(tamanhosDeFonte[valor]);
    } else if (valor === 'reset') {
      resetarConfiguracoes();
    }
  };

  return (
    <div>
      <main>
        <div className="">
          <div className="header">
            <h1 className="titulo">
              <img className="logomarca" src="/images/logo.jpg" alt="Logo Igreja Novo Tempo" />
              Novo Tempo - A Igreja da Família
            </h1>

            <nav className="nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/whoweare">Quem Somos</Link></li>
                <li><Link to="/ctn">CNT</Link></li>
                <li><Link to="/ebnt">EBNT</Link></li>
                <li><Link to="/sos">SOS</Link></li>
                <li><Link to="/events">Eventos</Link></li>
                <li><Link to="/generosity">Generosidade</Link></li>
                <li><Link to="/location">Localização</Link></li>
              </ul>
            </nav>

            <div className="Ouvir">
              <button onClick={leitorDeTexto}>🔊 Ouvir Página</button>
              <button onClick={pararLeitura}>🛑 Parar</button>
              
              <div className="acessibilidade">
                <label htmlFor="selecione"></label>
                <select
                  name="GrupoSelect"
                  id="selecione"
                  value={selectedOption}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Escolha uma opção de fonte/cor:
                  </option>
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
      </main>
    </div>
  );
};

export default Header;
