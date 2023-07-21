import styles from './Header.module.css';

function Header() {
  return (
    <header className={ styles.header }>
      <div className={ styles['header-container'] }>
        <div className={ styles['header-name-principal'] }>
          isabela colli
        </div>
        <div className={ styles['header-name-secondary'] }>
          beauty
        </div>
      </div>
    </header>
  );
}

export default Header;
