import ProductionCard from '../../components/ProductionCard';
import styles from './PageMain.module.css';

function PageMain() {
  const productionsTest = [
    {
      src: '../../public/images/primeira.jpeg',
      name: 'maquiagem beauty',
    },
    {
      src: '../../public/images/segunda.jpeg',
      name: 'maquiagem special day',
    },
    {
      src: '../../public/images/terceira.jpeg',
      name: 'penteados',
    },
  ];

  return (
    <section className={ styles['productions-container'] }>
      { productionsTest.map(({ src, name }) => (
        <ProductionCard
          key={ name }
          name={ name }
          src={ src }
        />
      )) }
    </section>
  );
}

export default PageMain;
