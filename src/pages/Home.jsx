import React from 'react';
import '../index.css';
import '../App.css';
import '../components/css/home.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <>
      {/* Seção de boas-vindas */}
      <section className="welcome">
        <h3 className="titulo">Bem-vindo Família!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, incidunt! Repellendus laboriosam illum nihil nam deleniti accusamus recusandae, sed cumque possimus ex. Dolorem architecto voluptates sapiente, ipsum provident dolore tempore.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolores obcaecati, tempore quasi suscipit sapiente voluptatem et, cumque ipsa reiciendis corporis reprehenderit dolorem aut repudiandae quos cupiditate quia sint quisquam.
        </p>

        {/* Vídeo incorporado do YouTube */}
        <iframe
          id="video"
          src="https://www.youtube.com/embed/nSAPBBgPnos"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>

      {/* Seção de cultos oficiais */}
      <section className="on">
        <h4>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti voluptatibus optio fugit perspiciatis, officiis similique earum ipsam. Ipsa praesentium similique molestiae cumque eaque temporibus, labore enim velit corrupti earum illo.
        </h4>

        <h3 className="sub-titulo">⛪ Cultos Oficiais</h3>
        <p>🗓 Sábado - 20:00h | Culto Posicionados para Prosperar</p>
        <p>🗓 Domingo - 9:00h e 18:00h | Culto da Família</p>

        <p className="sub-titulo">Acessar o canal no YouTube abaixo!</p>
        <a href="https://www.youtube.com/@MinisterioNovotempo" target="_blank" rel="noopener noreferrer">
          <button className="button-link-youtube">🎥 Acesse o nosso canal no YouTube</button>
        </a>
      </section>

      {/* Seção de formulário para conhecer melhor os visitantes */}
      <section className="pesquisa">
        <h4 className="sub-titulo">A nossa igreja quer te conhecer melhor!</h4>
        <p>
          Estamos felizes por você estar conosco! Queremos saber mais sobre você para oferecer a melhor acolhida possível e ajudá-lo a se sentir parte de nossa família. Por favor, responda às perguntas.
        </p>

        <p className="sub-titulo">Acessar o formulário abaixo!</p>
        <a href="" target="_blank" rel="noopener noreferrer">
          <button className="button-link-google">💌 Clique aqui para acessar o formulário</button>
        </a>
      </section>
    </>
  );
};

export default Home;
