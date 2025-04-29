import React from 'react';
import '../index.css'
import '../App.css'
import '../components/css/home.css';
import "bootstrap/dist/css/bootstrap.min.css";






const Home = () => {
  return (
    <>
    
    
   
    <main className='container'>
       <section>
  <section className="welcome">
    <h3 className='titulo'>Bem-vindo à nossa Família!</h3>
    <p>
      Guiados pelo amor a Deus e ao próximo, nossa visão é ser uma igreja que acolhe, cuida e oferece apoio incondicional, ajudando cada irmão a crescer espiritualmente e viver em harmonia com o propósito de Cristo."
      <br />
      O principal objetivo é acolher e fortalecer espiritualmente os Usuários desta página. Pois: "pessoas são mais importantes que coisas".
    </p>

    <iframe
      id="video"
      src="https://www.youtube.com/embed/v3E8XbLalwQ?autoplay=1&mute=1&si=mDf5ghHvb8BB_nLJ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </section>

  <section>
    <div className='on'>
      <h4>
        Convidamos Você para se juntar a Nós para louvar a Deus. Estaremos ao vivo, confira as datas abaixo!
      </h4>
      <h3 className='sub-titulo'>⛪ Cultos Oficiais</h3>
      <p> 🗓 Quarta-feira - 20:00h</p>
      <p>Culto Posicionados para Prosperar</p>
      <p> 🗓 Domingo - 9:00h e 18:00h</p>
      <p>Culto da Família</p>
  
      <p className='sub-titulo'>Acessar o canal no Youtube abaixo!</p>

      <a href="https://www.youtube.com/@MinisterioNovotempo">
        <button className='button-link-youtube'> 🎥 Youtube</button>
      </a>
    </div>
  </section>

  <section>
    <h4 className="sub-titulo">A nossa igreja quer te conhecer melho!</h4>
    <div className="pesquisa">
      <p>
        Estamos felizes por você estar conosco! Queremos saber mais sobre você para oferecer a melhor acolhida possível e ajudá-lo a se sentir parte de nossa família. Por favor, responda às perguntas.
      </p>

      <p className='sub-titulo'>Acessar o formulário abaixo!</p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScBrZ-7H9EToYZFedkFJhxYEkckoNlz3kjOe1HWFSV_96fHuw/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className='button-link-google'> 💌Formulário</button>
      </a>
    </div>
  </section>
 </section>
</main>

     
    </>
  );
}

export default Home;