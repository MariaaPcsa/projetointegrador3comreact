import React from 'react';
import '../index.css';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../components/Header';


const Home = () => {
  return (
    <>
     <body>
      <Header/>
      
    

      <main className='container'>
         
      <br /><br />
        <h2 id="titulo">Novo Tempo - A Igreja da Família</h2>
        
        <br /><br />
        <section className="welcome">
          <br /><br />
          <h3>Bem-vindo à nossa Família!    
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
        <h4 className="subTitulo2">A NOSSA IGREJA QUER TE CONHECER MELHOR! </h4>
   <div className="pesquisa">
    
    <p> 
    Estamos felizes por você estar conosco! Queremos saber mais sobre você para oferecer a melhor acolhida possível e ajudá-lo a se sentir parte de nossa família. Por favor, responda às perguntas </p>

   <a href="https://docs.google.com/forms/d/e/1FAIpQLScBrZ-7H9EToYZFedkFJhxYEkckoNlz3kjOe1HWFSV_96fHuw/viewform" target="_blank" rel="noopener noreferrer">
            Clique aqui para acessar o formulário
          </a>
          <br /><br />
   </div>
        
       

      </main>
      </body>
    </>
  );
}

export default Home;