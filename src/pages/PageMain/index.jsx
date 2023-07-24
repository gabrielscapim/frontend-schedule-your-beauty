import { useNavigate } from 'react-router-dom';
import ProductionCard from '../../components/ProductionCard';
import Button from '../../components/form/Button';
import styles from './PageMain.module.css';

function PageMain() {
  const navigate = useNavigate();
  const productionsTest = [
    {
      src: '../../public/images/primeira.jpeg',
      name: 'maquiagem beauty',
      location: 'beauty-make',
    },
    {
      src: '../../public/images/segunda.jpeg',
      name: 'maquiagem special day',
      location: 'special-day-make',
    },
    {
      src: '../../public/images/terceira.jpeg',
      name: 'penteados',
      location: 'hairstyle',
    },
  ];

  const scheduleHandleClick = () => {
    navigate('/schedule');
    navigate(0);
  };

  const contactHandleClick = () => {
    console.log('clico');
    window.location.href = 'https://wa.me/5544991343233?text=Oi%20Isa,%20gostaria%20de%20mais%20informações%20sobre%20suas%20produções!';
  };

  return (
    <div className={ styles['page-container'] }>
      <section className={ styles['welcome-container'] }>
        <img
          src="../../public/images/main-image.jpeg"
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
