import React from 'react'
import '../index.css';
import '../App.css';
import '../components/css/events.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Events = () => {
  return (
  <>

    
<main>
        <h2 className="titulo">Eventos</h2>
        <div className="container-central">
           
          <section className="eventos">
          <h3 className="subTitulo2">📅 Próximos Eventos</h3>
          
            <p>Acompanhe a agenda e participe dos nossos encontros!</p>
            <p> 🚨 Use o botão "Adicionar" para incluir lembretes em sua agenda do Google!</p>

            <table className="agenda">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Evento</th>
                  <th>Descrição</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01/06/2025</td>
                  <td>Rede Barnabé</td>
                  <td>Encontro especial de discipulado e comunhão.</td>
                  <td>
                    <a
                      href="https://www.google.com/calendar/render?action=TEMPLATE&text=Rede+Barnabé&dates=20250601T190000Z/20250601T210000Z&details=Encontro+especial+de+discipulado+e+comunhão&ctz=America/Sao_Paulo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="add-calendar"
                    >
                      <button className="button-link">Adicionar</button>
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>20/06/2025</td>
                  <td>Rede Hadassa</td>
                  <td>Evento voltado para mulheres cristãs.</td>
                  <td>
                    <a
                      href="https://www.google.com/calendar/render?action=TEMPLATE&text=Rede+Hadassa&dates=20250620T190000Z/20250620T210000Z&details=Evento+voltado+para+mulheres+cristãs&ctz=America/Sao_Paulo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="add-calendar"
                    >
                      <button className="button-link">Adicionar</button>
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>08/06/2025</td>
                  <td>Santa Ceia</td>
                  <td>Celebração da Santa Ceia do Senhor.</td>
                  <td>
                    <a
                      href="https://www.google.com/calendar/render?action=TEMPLATE&text=Santa+Ceia&dates=20250608T100000Z/20250608T120000Z&details=Celebração+da+Santa+Ceia+do+Senhor&ctz=America/Sao_Paulo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="add-calendar"
                    >
                      <button className="button-link">Adicionar</button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </main>

    
 
  
  </>
  )
}

export default Events