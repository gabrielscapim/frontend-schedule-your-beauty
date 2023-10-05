import styles from './Header.module.css';

function Header() {
  const navOptionClass = 'nav-option';
  const navLocationStyle = {
    fontWeight: 'bold',
  };
  const location = window.location.href;

  return (
    <header className={ styles.header }>
      <nav>
        <div className={ styles['header-line-1'] }>
          <a
            href="/agendar-produção"
            className={ styles[navOptionClass] }
            style={ location.includes('agendar-produção') ? navLocationStyle : {} }
          >
            Agendar produção
          </a>
          <a
            href="/maquiagem-beauty"
            className={ styles[navOptionClass] }
            style={ location.includes('maquiagem-beauty') ? navLocationStyle : {} }
          >
            Maquiagem Beauty
          </a>
          <a
            href="/maquiagem-special-day"
            className={ styles[navOptionClass] }
            style={ location.includes('maquiagem-special-day') ? navLocationStyle : {} }
          >
            Maquiagem Special Day
          </a>
          <a
            href="/penteados"
            className={ styles[navOptionClass] }
            style={ location.includes('penteados') ? navLocationStyle : {} }
          >
            Penteados
          </a>
        </div>
        <div className={ styles['header-line-2'] }>
          <a href="/">
            <img
              src="/images/header/logo.png"
              alt="logo"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
