import React from 'react'
import '../App.css';
import '../components/css/footer.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <>
   <section>

  


    <div className='footer'>
        <section>

       
        <div className='imag-footer'>

       
    <ul>
            <li>
                <a className="midia-link-lista" href="https://www.youtube.com/@MinisterioNovotempo" target="_blank">
                    <img src="../images/imag-YouTube.jpg" alt="Logo do YouTube" />
                </a>
            </li>
            {/* <!-- YouTube --> */}
        
            <li>
                <a className="midia-link-lista" href="https://www.instagram.com/mnovotempo/" target="_blank">
                    <img src="../images/instagram.jpg" alt="Logo do Instagram" />
                </a>
            </li>
            {/* <!-- Instagram --> */}
        
            <li>
                <a className="midia-link-lista" href="https://www.facebook.com/imnovotempo" target="_blank">
                    <img src="../images/facebook_log.png" alt="Logo do Facebook" />
                </a>
            </li>
            {/* <!-- Facebook --> */}
        
            <li>
                <a className="midia-link-lista" href="https://www.tiktok.com/@hashtagprogramacao " target="_blank">
                    <img src="../images/imag-tik-tok.jpg" alt="Logo do TikTok" />
                </a>
            </li>
            {/* <!-- TikTok --> */}
        
            <li>
                <a className="midia-link-lista"  href="http://web.whatsapp.com" target="_blank">
                    <img src="../images/imagwhatsapp.jpg" alt="Ícone do Whatsapp" />
                </a>
            </li>
            {/* <!-- Whatsapp --> */}
        
            <li>
                <a href="#" className="midia-link-lista" id='voltar'>
                    <img src="../images/Seta-volta.jpg" alt="Ícone de seta para voltar" />
                    
                    
                </a>
            </li>
           
            
            {/* <!-- Retornar --> */}
        </ul>
        </div>
        </section>


        <section className='address'>
            
        <address>
              <p>Endereço: Rua: Jaime Duprat, Número: 530, Bairro: Parque Vitoria, Cidade: Franco da Rocha, Estado: SP, CEP:07857-0800 </p>
            </address>
            
          
          <p>&copy; 2025 Igreja Cristã Novo Tempo - Todos os direitos reservados.</p>
        </section>
      

        
    </div>
    </section>
   
     </>
  )
}

export default Footer