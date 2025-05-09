import React from 'react'
import '../index.css'
import '../App.css'
import '../components/css/whoWeAre.css';
import "bootstrap/dist/css/bootstrap.min.css";
import historia from '/images/historia.jpg'
import visao from '/images/visao.jpg'
import missao from '/images/missao.jpg'
import bispos from '/images/bispos.jpg'
import deboraecaio from '/images/deboraecaio.jpg'
import ricardoepatricia from '/images/ricardoepatricia.jpg'
import renatoebarbara from '/images/renatoebarbara.jpg'
import valdeci from '/images/valdeci.jpg'
import Eduardoedani from '/images/Eduardoedani.jpg'
import AlunosModal from '../components/alunosModal/AlunosModal';



const WhoWeAre = () => {
  return (


    
<>
   
 
   
   <main>

      <h2 className="titulo">Quem Somos</h2>
     
      <section className="historia">
        <div className="historia-box">

          <h3 className="sub-titulo">📖 Um Sonho que se Tornou Missão</h3>

        
          <img
            src={historia}
            alt="Foto do primeiro encontro da Igreja Novo Tempo"
            className="imagem-historia"
          />

          <p>
          Em 2011, nasceu no coração de Deus o sonho de enviar uma família a uma cidade até então desconhecida para eles: Franco da Rocha. Embora o casal Samuel e Thaís fosse apaixonado por Jesus, inicialmente não tinham o desejo de liderar uma igreja. Seu anseio era ver vidas transformadas pelo poder da Palavra. </p>
          <p>
          Com a ajuda de pessoas cheias de fé e ousadia, que alugaram um espaço, arrumaram cadeiras, instrumentos musicais e organizaram um culto, surgiu a Igreja Novo Tempo.
          </p>
          <p>
          Desde o início, esse ministério tem crescido com propósito e dedicação, impactando famílias e reacendendo a fé em muitos corações.
          </p>
          

          <h3 className="sub-titulo">Liderança com Propósito</h3>
          <p>
            Sob a liderança dos bispos Samuel e Thaís, a igreja se tornou um lugar de acolhimento, ensino e avivamento.
             Com suas três filhas — Emanuelle, Danielle e Letícia — o casal vive o chamado com intensidade e entrega.
             </p>
             <p>
             Thaís, bióloga de formação, hoje neuropsicopedagoga e terapeuta, e Samuel, ex-supervisor de vendas, deixaram suas carreiras para servir em tempo integral no Reino de Deus, assumindo com coragem e fé a missão de conduzir pessoas ao encontro com Cristo.
          </p>

          <h2 className="sub-titulo">Nossa Identidade</h2>
          <p>
            A trajetória da Novo Tempo é marcada por crescimento, não apenas em número, mas em profundidade espiritual. São vidas restauradas, famílias reerguidas e corações renovados. 
            </p>
            <p>

          
            A igreja se firmou como uma voz profética na cidade, apontando sempre para Jesus como único caminho, verdade e vida.
            </p>
            <p>
            Mais do que uma igreja, a Novo Tempo é uma família espiritual que continua florescendo e avançando, carregando a certeza de que o melhor de Deus ainda está por vir.
          </p>
        </div>
        
      </section>



      <section className='content-container'>

     
     {/*  <!-- Missão --> */}
            <div class="box">
                <h2 className="sub-titulo">🎯 Missão</h2>
                <img
            src={missao}
            alt="Imagem sobre a missão"
            className="imagem-secao "
          />
                <p className='missao-texto'>Transformando vidas e espalhando a luz do Evangelho, nossa missão é levar a mensagem de salvação e amor de Cristo a todos, para que cada coração experimente Sua graça e viva no propósito eterno de Deus.</p>
            </div>
            {/* Visão e  */}
            <div className="box">
                <h2 className="sub-titulo">👀 Visão</h2>
                <img
            src={visao}
            alt="Imagem sobre a missão"
            className="imagem-secao "
          />
               
                <p className='missao-texto'>Guiados pelo amor a Deus e ao próximo, nossa visão é ser uma igreja que acolhe, cuida e oferece apoio incondicional, ajudando cada irmão a crescer espiritualmente e viver em harmonia com o propósito de Cristo.</p>
                <p className='missao-texto'><em>"Amar a Deus e ao próximo" reflete nosso compromisso em apoiar o crescimento espiritual de todos, alinhando-se com Mateus 22:37-39.</em></p>
            </div>
            </section>
            <h3 className="sub-titulo">🙏 Conheça nossos pastores </h3>
            

      <section className='content-container'>

  
    


            <div className="pastor">
        
                
                    
        <img
src={bispos}
alt="bispos" className="imagem-secao "

/>
        <h3 className="sub-titulo">Bispo Samuel e Bispa Thais</h3>
        <p>
            Samuel, gerente da empresa Três Corações no ramo de vendas, e Thais, bióloga na Pfizer, tinham carreiras promissoras, mas sentiam um vazio interior. Diante de um forte chamado de Deus, foram profundamente tocados pela necessidade das comunidades carentes e perceberam um propósito maior em servir ao Senhor.


</p>
<p>
            Enfrentaram desafios financeiros e a incompreensão de muitos, mas a fé os sustentou. Com o tempo, suas iniciativas prosperaram, impactando inúmeras vidas. Hoje, seguem firmes na missão, testemunhando que a verdadeira realização está em servir a Deus e ao próximo.
        </p>
    </div>

    <div className="pastor">
    <img
src={deboraecaio}
alt="Pastor Caio e Pastora Débora"

/>
       
        <h3 className="sub-titulo">Pastor Caio e Pastora Débora</h3>
        <p>
            Com corações dispostos e cheios de fé, ouviram atentamente a voz de Deus e, com coragem, deixaram para trás seus planos pessoais para abraçar o ministério pastoral. Hoje, são referência de liderança jovem, inspirando muitos com seu testemunho e dedicação.


</p>
<p>


            Atualmente, a pastora Débora e o pastor Caio servem no Nordeste, levando a mensagem do evangelho e fortalecendo a comunidade da nossa igreja. Com amor e compromisso, trabalham para transformar vidas, guiando jovens e famílias no caminho da fé.
</p>
<p>
            O pastor Caio é formado em Bacharelado em Teologia pela UMESP (Universidade Metodista de São Paulo) e a pastora Débora é pedagoga, pós-graduada em Neuropsicologia, Psicomotricidade e Psicopedagogia. Além de sua atuação no ministério pastoral, ambos se dedicam ao ensino teológico, compartilhando seu profundo conhecimento e experiência para formar futuros líderes espirituais.
</p>
<p>
            Seu exemplo é um reflexo do poder de Deus agindo através de corações dispostos a servi-Lo.
        </p>
    </div>

    <div className="pastor">
        
        <img
src={ricardoepatricia} 
alt="Ricardo e Patricia"

/>
        <h3 className="sub-titulo">Pastor Ricardo e Pastora Patricia</h3>
        <p>
            Nosso chamado pastoral nasceu do desejo profundo de servir a Deus e cuidar de pessoas. Entendemos que a vida cristã vai além de palavras — ela se expressa no amor, na escuta, na presença e no compromisso com cada vida.
</p>
<p>
            Somos pastores por vocação, por convicção e por compaixão. Deus nos chamou para edificar uma comunidade de fé onde todos possam encontrar cura, direção e esperança.
</p>
<p>
            Nosso coração pulsa por vidas transformadas pela graça de Jesus. Queremos caminhar com você, celebrar suas vitórias e estender a mão nas suas lutas. Estamos aqui para ouvir, ensinar, orar e, acima de tudo, amar.
        </p>
    </div>

    <div className="pastor">
        
                   
        <img
src={renatoebarbara}
alt="Renato e Barbara"

/>
        <h3 className="sub-titulo">Pastor Renato e Pastora Barbara</h3>
        <p>
            Nosso chamado pastoral nasceu do desejo profundo de servir a Deus e cuidar de pessoas. Entendemos que a vida cristã vai além de palavras — ela se expressa no amor, na escuta, na presença e no compromisso com cada vida.


</p>
<p>


            Somos pastores por vocação, por convicção e por compaixão. Deus nos chamou para edificar uma comunidade de fé onde todos possam encontrar cura, direção e esperança.
            </p>
<p>
            Nosso coração pulsa por vidas transformadas pela graça de Jesus. Queremos caminhar com você, celebrar suas vitórias e estender a mão nas suas lutas. Estamos aqui para ouvir, ensinar, orar e, acima de tudo, amar.
        </p>
    </div>

    <div className="pastor">
        

        <img
src={valdeci}
alt="Valdeci"

/>
        <h3 className="sub-titulo">Pastor Valdeci</h3>
        <p>
            Nosso chamado pastoral nasceu do desejo profundo de servir a Deus e cuidar de pessoas. Entendemos que a vida cristã vai além de palavras — ela se expressa no amor, na escuta, na presença e no compromisso com cada vida.
</p>
<p>
            Somos pastores por vocação, por convicção e por compaixão. Deus nos chamou para edificar uma comunidade de fé onde todos possam encontrar cura, direção e esperança.
</p>
<p>
            Nosso coração pulsa por vidas transformadas pela graça de Jesus. Queremos caminhar com você, celebrar suas vitórias e estender a mão nas suas lutas. Estamos aqui para ouvir, ensinar, orar e, acima de tudo, amar.
        </p>
    </div>

    <div className="pastor">
      
        <img
src={Eduardoedani}
alt="Eduardo e Dani"
/>
        <h3 className="sub-titulo">Pastor Eduardo e Pastora Dani</h3>
        <p>
            Nosso chamado pastoral nasceu do desejo profundo de servir a Deus e cuidar de pessoas. Entendemos que a vida cristã vai além de palavras — ela se expressa no amor, na escuta, na presença e no compromisso com cada vida.
</p>

<p>
            Somos pastores por vocação, por convicção e por compaixão. Deus nos chamou para edificar uma comunidade de fé onde todos possam encontrar cura, direção e esperança.
</p>

<p>
            Nosso coração pulsa por vidas transformadas pela graça de Jesus. Queremos caminhar com você, celebrar suas vitórias e estender a mão nas suas lutas. Estamos aqui para ouvir, ensinar, orar e, acima de tudo, amar.
        </p>
    </div>

      </section> 

      <section className="hSite">
            <div className="container">
              
              <div className="texto">
                <h3 className
                ="sub-titulo">Surgimento do Site:</h3>
                <h3 className
                ="sub-titulo">Uma Jornada de Propósito e Colaboração</h3>
                <p>Em 07/02/2025, uma data que ficará marcada em nossa trajetória, fomos abordados por um grupo de dedicados estudantes de Tecnologia da Informação  da <strong>Univesp</strong>  (Universidade Virtual do Estado de São Paulo), que nos convidaram a participar de seu projeto integrador III, a proposta inicial era [ <strong>Atostech</strong> -conectando a Igreja ao futuro].</p>
                <p>Aceitamos prontamente o convite, movidos pelo desejo de contribuir com o crescimento e desenvolvimento acadêmico desses jovens talentos. Contudo, no decorrer do processo de desenvolvimento, percebemos que aquele encontro não havia sido mera coincidência.</p>
                <p>Sentimos que Deus nos proporcionou, através desses estudantes, uma oportunidade singular de levar Seus ensinamentos a um público ainda mais vasto. Expressamos nossa profunda gratidão a Ele por colocar em nosso caminho essas pessoas talentosas, que com esmero e dedicação desenvolveram nossa página.</p>
                
                <p>Para conhecer mais sobre essa inspiradora jornada, clique em. <AlunosModal/> </p>
                
                    
              
                
              </div>
            </div>
          </section>
         
    
    </main>


    
    </>
  )
}

export default WhoWeAre