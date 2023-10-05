import { useNavigate } from 'react-router-dom';
import ProductionCard from '../../components/ProductionCard';
import Button from '../../components/Form/Button';
import styles from './PageMain.module.css';

function PageMain() {
  const navigate = useNavigate();
  const productionsTest = [
    {
      src: '/images/primeira.jpeg',
      name: 'maquiagem beauty',
      location: 'maquiagem-beauty',
    },
    {
      src: '/images/segunda.jpeg',
      name: 'maquiagem special day',
      location: 'maquiagem-special-day',
    },
    {
      src: '/images/terceira.jpeg',
      name: 'penteados',
      location: 'penteados',
    },
  ];

  const scheduleHandleClick = () => {
    navigate('/agendar-producao');
    navigate(0);
  };

  const contactHandleClick = () => {
    window.location.href = 'https://wa.me/5544991343233?text=Oi%20Isa,%20gostaria%20de%20mais%20informações%20sobre%20suas%20produções!';
  };

  return (
    <div className={ styles['page-container'] }>
      <section className={ styles['welcome-container'] }>
        <img
          src="/images/main-image.jpeg"
          alt="main"
          className={ styles['welcome-image'] }
        />
        <div className={ styles['welcome-text'] }>
          <h3>BEM VINDA!</h3>
          <p>
            Sou a Isa e meu objetivo é elevar sua autoestima e
            acentuar sua autenticidade, te deixando ainda mais bonita!
          </p>
          <div className={ styles['buttons-container'] }>
            <Button
              type="button"
              label="Agende seu horário"
              onClick={ scheduleHandleClick }
            />
            <Button
              type="button"
              label="Entrar em contato"
              onClick={ contactHandleClick }
            />
          </div>
        </div>
      </section>
      <nav className={ styles['productions-container'] }>
        { productionsTest.map(({ src, name, location }) => (
          <ProductionCard
            key={ name }
            name={ name }
            src={ src }
            principalPage
            location={ location }
          />
        )) }
      </nav>
    </div>
  );
}

export default PageMain;
