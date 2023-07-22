import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header className={ styles.header }>
      <button
        className={ styles['header-container'] }
        onClick={ () => navigate('/') }
      >
        <div className={ styles['header-name-principal'] }>
          isabela colli
        </div>
        <div className={ styles['header-name-secondary'] }>
          beauty
        </div>
      </button>
    </header>
  );
}

export default Header;
