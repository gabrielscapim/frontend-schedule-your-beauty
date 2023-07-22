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
  );
}

export default PageMain;
