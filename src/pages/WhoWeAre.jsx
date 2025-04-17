import React from 'react'
import '../index.css';
import '../App.css';


import Header from '../components/Header';
import Footer from '../components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

const WhoWeAre = () => {
  return (
<>
   
   <body>
   <Header/>
   <main>
      <h2 className="titulo-pagina">Quem Somos</h2>
      <br /><br /><br />

      <section className="historia">
        <div className="historia-box">
          <h2 style={{ textAlign: 'center' }}>📖 Onde tudo começou</h2>
          <br />
          <img
            src="/images/historia.jpg"
            alt="Foto do primeiro encontro da Igreja Novo Tempo"
            className="imagem-historia"
          />
          <br />
          <p>A Igreja Novo Tempo nasceu de um movimento de fé, obediência e generosidade. Um grupo de irmãos, com corações dedicados a Deus, se uniu para montar a igreja e entregá-la ao Bispo Samuel e à Bispa Thaís. Com muito carinho e zelo, alugaram um pequeno salão, colocaram algumas cadeiras e prepararam o ambiente para dar início a algo grandioso.</p>
          <br />
          <p>O que tornou esse gesto ainda mais especial foi a generosidade das pessoas envolvidas, que, com sacrifício e amor, contribuíram para que aquele sonho se tornasse realidade. Cada ato de fé e generosidade foi fundamental para a construção do que hoje é a Igreja Novo Tempo.</p>
          <br />
          <p>Durante aquele primeiro encontro, os irmãos compartilharam com o Bispo Samuel e Bispa Thaís que aquele seria o lugar onde a Igreja Novo Tempo nasceria. Deus revelou que era ali que Ele iniciaria uma grande obra, e o Bispo Samuel e a Bispa Thaís, tocados pela fé e dedicação do grupo, aceitaram com gratidão o chamado e desafio de pastorear a igreja.</p>
          <br />
          <p>Hoje, a Igreja Novo Tempo continua crescendo e espalhando o evangelho, lembrando sempre daquele primeiro encontro e da generosidade que tornou tudo possível.</p>
        </div>
      </section>

      <section className="content-container">
        <div className="box missao">
          <h2>🎯 Missão</h2>
          <img
         
            src="/images/missao.jpg"
            alt="Imagem sobre a missão"
            className="imagem-secao"
          />
          <p>Transformando vidas e espalhando a luz do Evangelho, nossa missão é levar a mensagem de salvação e amor de Cristo a todos, para que cada coração experimente Sua graça e viva no propósito eterno de Deus.</p>
        </div>
    <section className=''>

    </section>
        <div className="box visao">
          <h2>👀 Visão</h2>
          <img
            src="/images/visao.jpg"
            alt="Imagem sobre a visão"
            className="imagem-secao"
          />
          <p>Guiados pelo amor a Deus e ao próximo, nossa visão é ser uma igreja que acolhe, cuida e oferece apoio incondicional, ajudando cada irmão a crescer espiritualmente e viver em harmonia com o propósito de Cristo.</p>
          <p><em>"Amar a Deus e ao próximo" reflete nosso compromisso em apoiar o crescimento espiritual de todos, alinhando-se com Mateus 22:37-39.</em></p>
        </div>
        
      </section>

      <section className="pastors-section">
        <h2>🙏 Conheça nossos pastores</h2>
        <br />
        <div className="pastors-container">
          <div className="pastor">
            <img src="/images/bispos.jpg" alt="bispos" />
            <h3>Bispo Samuel e Bispa Thais</h3>
            <p>
              Samuel, gerente da empresa Três Corações no ramo de vendas, e Thais, bióloga na Pfizer, tinham carreiras promissoras, mas sentiam um vazio interior. Diante de um forte chamado de Deus, foram profundamente tocados pela necessidade das comunidades carentes e perceberam um propósito maior em servir ao Senhor.
              <br /><br />
              Enfrentaram desafios financeiros e a incompreensão de muitos, mas a fé os sustentou. Com o tempo, suas iniciativas prosperaram, impactando inúmeras vidas. Hoje, seguem firmes na missão, testemunhando que a verdadeira realização está em servir a Deus e ao próximo.
            </p>
          </div>
    <section className='container'>

    
          <div className="pastor">
            <img src="/images/deboraecaio.jpg" alt="Pastor 2" />
            <h3>Pastor Caio e Pastora Débora</h3>
            <p>
              Com corações dispostos e cheios de fé, ouviram atentamente a voz de Deus e, com coragem, deixaram para trás seus planos pessoais para abraçar o ministério pastoral. Hoje, são referência de liderança jovem, inspirando muitos com seu testemunho e dedicação.
              <br /><br />
              Atualmente, a pastora Débora e o pastor Caio servem no Nordeste, levando a mensagem do evangelho e fortalecendo a comunidade da nossa igreja. Com amor e compromisso, trabalham para transformar vidas, guiando jovens e famílias no caminho da fé.
              <br /><br />
              O pastor Caio é formado em Bacharelado em Teologia pela UMESP (Universidade Metodista de São Paulo) e a pastora Débora é pedagoga, pós-graduada em Neuropsicologia, Psicomotricidade e Psicopedagogia. Além de sua atuação no ministério pastoral, ambos se dedicam ao ensino teológico, compartilhando seu profundo conhecimento e experiência para formar futuros líderes espirituais.
              <br /><br />
              Seu exemplo é um reflexo do poder de Deus agindo através de corações dispostos a servi-Lo.
            </p>
          </div>
          </section>
        </div>
      </section>
    </main>
  


   <Footer/>
   </body>
   
  
 

    </>
  )
}

export default WhoWeAre