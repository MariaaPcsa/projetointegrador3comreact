
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

             <h3 className='sub-titulo'> 👨‍🎓 Autor</h3>
        <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis esse debitis architecto minima, sequi error ipsum consequuntur numquam eaque dolores fugit officia qui in saepe sunt quaerat tempora veniam.
            </p>
           
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque excepturi dicta, nostrum expedita laudantium rerum necessitatibus molestias nisi accusantium, quasi adipisci autem non repudiandae iure voluptate natus. Ex, nobis.</p>
 <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, quia. Inventore eveniet fugit sed autem optio deleniti voluptatem id nemo, facere nihil itaque quos consequatur ipsam adipisci tenetur minima assumenda..</p>
 <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quae impedit. Voluptatibus, iure. Omnis error id laborum perferendis ipsum incidunt unde eum perspiciatis? Dolore, quia nostrum? Id, architecto! Ipsa, repudiandae!.</p>
 <p>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum deleniti, similique quasi alias placeat dolorum pariatur illo. Fuga id expedita esse? Architecto cumque exercitationem impedit. Quia qui illum sequi magnam..</p>
       
          </div>
        </section>
      )}
    </>
  );
};

export default AlunosModal;
