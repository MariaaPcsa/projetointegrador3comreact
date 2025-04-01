import React from 'react';
import '../index.css';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";


const Home = () => {
  return (
    <>
     <body>
      
    
      <main className='container'>
        <h2 id="titulo">Novo Tempo - A Igreja da Família</h2>
        
        <section className="welcome">
          <h3><center>Bem-vindo à nossa Família!</center>       
          </h3>
          <p> Guiados pelo amor a Deus e ao próximo, nossa visão é ser uma igreja que acolhe, cuida e oferece apoio incondicional, ajudando cada irmão a crescer espiritualmente e viver em harmonia com o propósito de Cristo." <br />O principal objetivo é acolher e fortalecer espiritualmente os Usuários desta página. Pois:"pessoas são mais importantes que coisas".</p>
          
          <iframe 
            id="video" 
            src="https://www.youtube.com/embed/v3E8XbLalwQ?autoplay=1&mute=1&si=mDf5ghHvb8BB_nLJ" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
        </section>

        <h1><center>Queremos te conhecer</center></h1>
        <center>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScBrZ-7H9EToYZFedkFJhxYEkckoNlz3kjOe1HWFSV_96fHuw/viewform" target="_blank" rel="noopener noreferrer">
            Clique aqui para acessar o formulário
          </a>
        </center>
      </main>
      </body>
    </>
  );
}

export default Home;