
import React, { useState } from 'react';
import './alunosModal.css'; // Arquivo CSS separado

const AlunosModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button className="alunos-link-button" onClick={openModal}>
        👨‍🎓 Alunos
      </button>

      {isOpen && (
        <section id="modal-background" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span id="close-modal" onClick={closeModal}>&times;</span>

             <h3 className='sub-titulo'> 👨‍🎓 Alunos</h3>
        <p>
              Adaildo S Da Silva, Alyssa A Silva,<br />
              Andressa R G Marques, Cristina F Silva,<br />
              Cicero M F Silva, Jefferson R Silva,<br />
              Maria Ap C Santos, Vanderley F Magalhães.
            </p>
           
                <p>
                Em 07 de fevereiro de 2025, tivemos a honra de dar início a uma jornada que ultrapassou os limites acadêmicos. Como estudantes de Tecnologia da Informação da Univesp, buscávamos aplicar na prática os conhecimentos adquiridos ao longo do curso, e encontramos na Igreja Novo Tempo uma parceira generosa e acolhedora.</p>
 <p>
O projeto, inicialmente batizado de "Atostech – Conectando a Igreja ao Futuro", era, para nós, uma oportunidade de desenvolver habilidades técnicas e realizar um trabalho significativo. No entanto, com o passar dos dias, percebemos que aquilo se tornava muito mais do que um simples projeto curricular.</p>
 <p>
Fomos acolhidos com carinho, respeito e confiança. Cada reunião, cada troca de ideias, cada desafio superado nos aproximava de algo maior: um propósito que unia tecnologia e fé. Sentimos que Deus guiava cada passo, fortalecendo nossa missão de usar o conhecimento para servir, impactar e transformar.</p>
 <p>
Agradecemos profundamente à Igreja Novo Tempo por abrir as portas e os corações para que esse trabalho florescesse. Levamos conosco não só o aprendizado técnico, mas também o exemplo de fé, generosidade e união. Que essa parceria continue inspirando outros alunos e comunidades, mostrando que, quando se caminha com propósito, o futuro se torna mais próximo — e mais iluminado.</p>
       
          </div>
        </section>
      )}
    </>
  );
};

export default AlunosModal;
