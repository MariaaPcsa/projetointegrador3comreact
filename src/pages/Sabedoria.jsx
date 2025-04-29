
import React, { useEffect, useState } from "react";
import '../index.css';
import '../App.css';
import '../components/css/sabedoria.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sabedoria() {
  const [versiculo, setVersiculo] = useState("Carregando...");

  useEffect(() => {
    const versiculos = [
      "O Senhor é a minha luz e a minha salvação; de quem terei medo? (Salmos 27:1)",
      "Entregue o seu caminho ao Senhor; confie nele, e ele agirá. (Salmos 37:5)",
      "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor. (Jeremias 29:11)",
      "No mundo tereis aflições, mas tende bom ânimo; eu venci o mundo. (João 16:33)",
      "Busquem, pois, em primeiro lugar, o Reino de Deus e a sua justiça. (Mateus 6:33)"
    ];
    const versiculoAleatorio = versiculos[Math.floor(Math.random() * versiculos.length)];
    setVersiculo(versiculoAleatorio);
  }, []);

  return (
    <main>
         <h2 class="titulo ">Sabedoria</h2>
      <section className="sabedoria">
        <h2 className="subTitulo">📢 Evangelismo</h2>
        <p>
          O evangelismo é uma missão essencial de toda igreja cristã. Nosso objetivo é compartilhar
          o evangelho de Jesus Cristo com todos, levando a mensagem de salvação, amor e esperança
          para aqueles que ainda não conhecem a Palavra de Deus. Jesus nos comissionou a ir por todo
          o mundo e pregar a boa nova (Mateus 28:19-20).
        </p>
        <p>
          Se você sente no coração o desejo de evangelizar, nós te encorajamos a participar de
          nossos grupos e ações de evangelismo. Juntos, podemos levar a luz de Cristo aos que estão
          em necessidade de salvação.
        </p>
      </section>

      <section className="sabedoria">
        <h2 className="subTitulo">Versículo do Dia</h2>
        <p id="versiculo">{versiculo}</p>
      </section>
    </main>
  );
}

export default Sabedoria;
