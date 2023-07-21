import styles from './Header.module.css';

function Header() {
  return (
    <header className={ styles.header }>
      <div className={ styles['header-container'] }>
        <div>
          Isabela Colli
        </div>
        <div>
          Beauty
        </div>
      </div>
    </header>
  );
}

export default Header;
