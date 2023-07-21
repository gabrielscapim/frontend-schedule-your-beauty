import ProductionCard from '../components/ProductionCard/ProductionCard';
import styles from './PageMain.module.css';

/* eslint-disable sonarjs/no-duplicate-string */
function PageMain() {
  const productionsTest = [
    '../../public/images/primeira.jpeg',
    '../../public/images/segunda.jpeg',
    '../../public/images/terceira.jpeg',
  ];

  return (
    <section className={ styles['productions-container'] }>
      { productionsTest.map((production, index) => (
        <ProductionCard
          key={ `production-main-${index}` }
          src={ production }
        />
      )) }
    </section>
  );
}

export default PageMain;
