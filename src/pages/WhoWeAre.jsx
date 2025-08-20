import React from 'react'
import '../index.css'
import '../App.css'
import '../components/css/whoWeAre.css';
import "bootstrap/dist/css/bootstrap.min.css";
import historia from '/imageHistoria.jpg'
import visao from '/imageHistoria2.jpg'
import missao from '/imagepostora2.jpg'
import bispos from '/Imagepastora1.jpg'
import deboraecaio from '/imagepostora2.jpg'
import ricardoepatricia from '/imagepastorAna-Alan.jpg'
import renatoebarbara from '/imagepastorPaulo-Paula.jpg'
import valdeci from '/imagepastor2.jpg'
import Eduardoedani from '/Imagepastora1.jpg'
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
            alt="Foto do Igreja "
            className="imagem-historia"
          />

          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, incidunt! Repellendus laboriosam illum nihil nam deleniti accusamus recusandae, sed cumque possimus ex. Dolorem architecto voluptates sapiente, ipsum provident dolore tempore.</p>
          <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui earum ex! Veritatis natus, asperiores dignissimos voluptatem fugiat soluta corrupti? Sed possimus mollitia nemo fuga culpa. Soluta aliquam explicabo ratione.
          </p>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt porro blanditiis saepe a eaque unde consectetur qui quam debitis. Facilis dolorum accusamus voluptatibus esse quam repudiandae mollitia assumenda enim ea.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque. Quisquam, voluptatum. Doloribus, cumque. Quisquam, voluptatum. Doloribus, cumque. Quisquam, voluptatum.
          </p>
          

          <h3 className="sub-titulo">Liderança com Propósito</h3>
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, incidunt! Repellendus laboriosam illum nihil nam deleniti accusamus recusandae, sed cumque possimus ex. Dolorem architecto voluptates sapiente, ipsum provident dolore tempore.</p>
          <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui earum ex! Veritatis natus, asperiores dignissimos voluptatem fugiat soluta corrupti? Sed possimus mollitia nemo fuga culpa. Soluta aliquam explicabo ratione.
          </p>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt porro blanditiis saepe a eaque unde consectetur qui quam debitis. Facilis dolorum accusamus voluptatibus esse quam repudiandae mollitia assumenda enim ea.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque. Quisquam, voluptatum. Doloribus, cumque. Quisquam, voluptatum. Doloribus, cumque. Quisquam, voluptatum.
          </p>

          <h2 className="sub-titulo">Nossa Identidade</h2>
           <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, incidunt! Repellendus laboriosam illum nihil nam deleniti accusamus recusandae, sed cumque possimus ex. Dolorem architecto voluptates sapiente, ipsum provident dolore tempore.</p>
          <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui earum ex! Veritatis natus, asperiores dignissimos voluptatem fugiat soluta corrupti? Sed possimus mollitia nemo fuga culpa. Soluta aliquam explicabo ratione.
          </p>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt porro blanditiis saepe a eaque unde consectetur qui quam debitis. Facilis dolorum accusamus voluptatibus esse quam repudiandae mollitia assumenda enim ea.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque. Quisquam, voluptatum. Doloribus, cumque. Quisquam, voluptatum. Doloribus, cumque. Quisquam, voluptatum.
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
                <p className='missao-texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae excepturi alias praesentium non similique saepe reiciendis provident, nostrum atque vero odit laborum tempora, repellendus ratione placeat quis voluptates ut. Voluptas?.</p>
            </div>
            {/* Visão e  */}
            <div className="box">
                <h2 className="sub-titulo">👀 Visão</h2>
                <img
            src={visao}
            alt="Imagem sobre a missão"
            className="imagem-secao "
          />
               
                <p className='missao-texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nemo ullam porro. Eaque, illo accusamus iure vero quibusdam ullam perspiciatis illum totam reprehenderit fugiat dolorem commodi sunt cumque repellat excepturi!.</p>
                <p className='missao-texto'><em>"O Senhor é a minha luz e a minha salvação; de quem terei medo? (Salmos 27:1).</em></p>
            </div>
            </section>
            <h3 className="sub-titulo">🙏 Conheça nossos pastores </h3>
            

      <section className='content-container'>

  
    


            <div className="pastor">
        
                
                    
        <img
src={bispos}
alt="bispos" className="imagem-secao "

/>
        <h3 className="sub-titulo">Pastora</h3>
        <p>
            Nosso chamado pastoral nasceu do desejo profundo de servir a Deus e cuidar de pessoas. Entendemos que a vida cristã vai além de palavras — ela se expressa no amor, na escuta, na presença e no compromisso com cada vida.

Somos pastores por vocação, por convicção e por compaixão. Deus nos chamou para edificar uma comunidade de fé onde todos possam encontrar cura, direção e esperança.

Nosso coração pulsa por vidas transformadas pela graça de Jesus. Queremos caminhar com você, celebrar suas vitórias e estender a mão nas suas lutas. Estamos aqui para ouvir, ensinar, orar e, acima de tudo, amar.


</p>

    </div>

    <div className="pastor">
    <img
src={deboraecaio}
alt="Pastor Caio e Pastora Débora"

/>
       
        <h3 className="sub-titulo">Pastora</h3>
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
src={ricardoepatricia} 
alt="Ricardo e Patricia"

/>
        <h3 className="sub-titulo">Bispos</h3>
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
        <h3 className="sub-titulo">Pastores</h3>
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
        <h3 className="sub-titulo">Pastor</h3>
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
        <h3 className="sub-titulo">Pastorai</h3>
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
                ="sub-titulo">Uma Jornada de Propósito e Colaboração</h3>
                <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus mollitia alias, sint molestiae nulla velit deserunt dolorum aspernatur quidem esse vitae doloremque distinctio repellat quos harum cupiditate accusantium nostrum molestias!


</p>
<p>


            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nam dignissimos, dolorum ex rem sunt eum harum iste eius quidem aspernatur delectus animi. Corporis tempora quis necessitatibus accusamus reiciendis! Dolor?
            </p>
<p>
            Lorem);
            
        </p>
                
                <p>Para conhecer mais sobre essa inspiradora jornada, clique em. <AlunosModal/> </p>
                
                    
              
                
              </div>
            </div>
          </section>
         
    
    </main>


    
    </>
  )
}

export default WhoWeAre