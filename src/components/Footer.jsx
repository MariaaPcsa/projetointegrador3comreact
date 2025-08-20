import React from 'react';
import '../App.css';
import '../components/css/footer.css';
import "bootstrap/dist/css/bootstrap.min.css";

const socialLinks = [
  { href: "", img: "../images/imag-YouTube.jpg", alt: "Logo do YouTube" },
  { href: "", img: "../images/instagram.jpg", alt: "Logo do Instagram" },
  { href: "", img: "../images/facebook_log.png", alt: "Logo do Facebook" },
  { href: "", img: "../images/imag-tik-tok.jpg", alt: "Logo do TikTok" },
  { href: "https://wa.me/9999999999999", img: "../images/imagwhatsapp.jpg", alt: "Ícone do Whatsapp" },
  { href: "#", img: "../images/Seta-volta.jpg", alt: "Ícone de seta para voltar", id: "voltar" }
];

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer">
        <div className="imag-footer">
          <ul>
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="midia-link-lista"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={link.id || undefined}
                >
                  <img src={link.img} alt={link.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <section className="address">
          <address>
            Rua:  Número:  Bairro: , Cidade: , Estado: , CEP: 
          </address>
          <p>&copy; 2025   A Igreja do Futuro- Todos os direitos reservados.</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
