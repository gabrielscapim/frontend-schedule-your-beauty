import { useNavigate } from 'react-router-dom';
import ProductionCard from '../../components/ProductionCard';
import styles from './PageMain.module.css';

function PageMain() {
  const navigate = useNavigate();

  const productionsTest = [
    {
      src: '../../public/images/primeira.jpeg',
      name: 'maquiagem beauty',
      onClick: () => navigate('/beauty-make'),
    },
    {
      src: '../../public/images/segunda.jpeg',
      name: 'maquiagem special day',
      onClick: () => navigate('/special-day-make'),
    },
    {
      src: '../../public/images/terceira.jpeg',
      name: 'penteados',
      onClick: () => navigate('/hairstyle'),
    },
  ];

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
        </div>
      </section>
      <section className={ styles['productions-container'] }>
        { productionsTest.map(({ src, name, onClick }) => (
          <ProductionCard
            key={ name }
            name={ name }
            src={ src }
            onClick={ onClick }
          />
        )) }
      </section>
    </div>
  );
}

export default PageMain;
