import ProductionCard from '../../components/ProductionCard';
import styles from './PageBeautyMake.module.css';

function PageBeautyMake() {
  const beautyMakeObjects = [
    {
      name: 'Olhar esfumado',
      src: '/images/beauty/beauty-make-1.jpeg',
    },
    {
      name: 'Harmonia delicada',
      src: '/images/beauty/beauty-make-2.jpeg',
    },
    {
      name: 'Beleza sutil',
      src: '/images/beauty/beauty-make-3.jpeg',
    },
    {
      name: 'Sofisticado',
      src: '/images/beauty/beauty-make-4.jpeg',
    },
    {
      name: 'Lábios contornados',
      src: '/images/beauty/beauty-make-5.jpeg',
    },
    {
      name: 'Olhar cativante',
      src: '/images/beauty/beauty-make-6.jpeg',
    },
  ];

  return (
    <section className={ styles['page-container'] }>
      <div className={ styles['productions-container'] }>
        { beautyMakeObjects.map(({ name, src }, index) => (
          <ProductionCard
            key={ `beauty-make-${index}` }
            name={ name }
            src={ src }
          />
        )) }
      </div>
    </section>
  );
}

export default PageBeautyMake;
