import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={ styles.footer }>
      <div>
        <a
          href="https://wa.me/5544991343233?text=Oi%20Isa,%20gostaria%20de%20mais%20informações%20sobre%20suas%20produções!"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-whatsapp"> </i>
        </a>
        <a
          href="https://www.instagram.com/isabelascolli/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-instagram"> </i>
        </a>
      </div>
      <span>
        Copyright © 2024 Isabela Colli. All Rights Reserved.
      </span>
      <span>
        Designed and developed by Gabriel Scapim.
      </span>
    </footer>
  );
}

export default Footer;
