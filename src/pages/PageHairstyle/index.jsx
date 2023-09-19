import ProductionCard from '../../components/ProductionCard';
import styles from './PageHairstyle.module.css';

function pageHairStyle() {
  const hairStyleObjects = [
    {
      name: 'Liso de festa',
      src: '/images/hair-style/hair-style-1.jpeg',
    },
    {
      name: 'Preso lateral',
      src: '/images/hair-style/hair-style-2.jpeg',
    },
    {
      name: 'Preso alto',
      src: 'c/images/hair-style/hair-style-3.jpeg',
    },
    {
      name: 'Preso baixo',
      src: '/images/hair-style/hair-style-4.jpeg',
    },
    {
      name: 'Babyliss',
      src: '/images/hair-style/hair-style-5.jpeg',
    },
  ];

  return (
    <section className={ styles['page-container'] }>
      <div className={ styles['productions-container'] }>
        { hairStyleObjects.map(({ name, src }, index) => (
          <ProductionCard
            key={ `hairstyle-${index}` }
            name={ name }
            src={ src }
          />
        )) }
      </div>
    </section>
  );
}

export default pageHairStyle;
