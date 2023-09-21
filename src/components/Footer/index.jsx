import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={ styles.footer }>
      <div>
        <a
          href="https://wa.me/5544991343233?text=Oi%20Isa,%20gostaria%20de%20marcar%20uma%20produção!"
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
        Copyright © 2023 Isabela Colli. All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
