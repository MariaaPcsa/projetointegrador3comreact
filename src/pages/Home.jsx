import React from 'react';
import '../index.css';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../components/Header';
import Footer from '../components/Footer';


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

          <br />
<section>
<div className='on'>
 
 <h3>
  Convidamos Você para ser junta a Nós para louvar a Deus estaremos ao vivo, confira a datas abaixo!
 </h3>
 <h3> ⛪Cultos Oficiais</h3>
 <p>Quarta-feira - 20:00h</p>
 <p>Culto Posicionados para Prosperar</p>
 <p>Domingo - 9:00h e 18:00h</p>
 <p>Culto da Família</p>

 <a href="https://www.youtube.com/@MinisterioNovotempo"
 
 > <button className='button-link-youtube'> Acesse o nosso canal no Youtube</button>
 
 </a>
</div>
</section>


        </section>

      

        <h4 className="subTitulo2">A NOSSA IGREJA QUER TE CONHECER MELHOR! </h4>
   <div className="pesquisa">
    
    <p> 
    Estamos felizes por você estar conosco! Queremos saber mais sobre você para oferecer a melhor acolhida possível e ajudá-lo a se sentir parte de nossa família. Por favor, responda às perguntas </p>

    <p>Acessar o formulário abaixo!</p>
   <a href="https://docs.google.com/forms/d/e/1FAIpQLScBrZ-7H9EToYZFedkFJhxYEkckoNlz3kjOe1HWFSV_96fHuw/viewform" target="_blank" rel="noopener noreferrer">
  
   <button className='button-link'> Clique aqui para acessar o formulário</button>
            
          </a>
          <br /><br />
   </div>
        
       

      </main>
      <Footer/>
      </body>
     
    </>
  );
}

export default Home;