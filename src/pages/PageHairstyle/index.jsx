import PageHeader from '../../components/PageHeader';
import ProductionCard from '../../components/ProductionCard';
import styles from './PageHairstyle.module.css';

function pageHairStyle() {
  const beautyImagesTest = [
    {
      name: 'Liso de festa',
      src: '../../../public/images/hair-style/hair-style-1.jpeg',
    },
    {
      name: 'Preso lateral',
      src: '../../../public/images/hair-style/hair-style-2.jpeg',
    },
    {
      name: 'Preso alto',
      src: '../../../public/images/hair-style/hair-style-3.jpeg',
    },
    {
      name: 'Preso baixo',
      src: '../../../public/images/hair-style/hair-style-4.jpeg',
    },
    {
      name: 'Babyliss',
      src: '../../../public/images/hair-style/hair-style-5.jpeg',
    },
  ];

  return (
    <section className={ styles['page-container'] }>
      <PageHeader title="PENTEADOS" />
      <div className={ styles['productions-container'] }>
        { beautyImagesTest.map(({ name, src }, index) => (
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
