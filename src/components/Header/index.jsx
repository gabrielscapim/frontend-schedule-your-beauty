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
            href="/schedule"
            className={ styles[navOptionClass] }
            style={ location.includes('schedule-production') ? navLocationStyle : {} }
          >
            Agendar produção
          </a>
          <a
            href="/beauty-make"
            className={ styles[navOptionClass] }
            style={ location.includes('beauty-make') ? navLocationStyle : {} }
          >
            Maquiagem Beauty
          </a>
          <a
            href="/special-day-make"
            className={ styles[navOptionClass] }
            style={ location.includes('special-day') ? navLocationStyle : {} }
          >
            Maquiagem Special Day
          </a>
          <a
            href="/hairstyle"
            className={ styles[navOptionClass] }
            style={ location.includes('hairstyle') ? navLocationStyle : {} }
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
