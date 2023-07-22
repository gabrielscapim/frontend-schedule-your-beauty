import PageHeader from '../../components/PageHeader';
import ProductionCard from '../../components/ProductionCard';
import styles from './PageBeautyMake.module.css';

function pageBeautyMake() {
  const beautyImagesTest = [
    {
      name: 'Olhar esfumado',
      src: '../../../public/images/beauty/beauty-make-1.jpeg',
    },
    {
      name: 'Harmonia delicada',
      src: '../../../public/images/beauty/beauty-make-2.jpeg',
    },
    {
      name: 'Beleza sutil',
      src: '../../../public/images/beauty/beauty-make-3.jpeg',
    },
    {
      name: 'Sofisticado',
      src: '../../../public/images/beauty/beauty-make-4.jpeg',
    },
    {
      name: 'Lábios contornados',
      src: '../../../public/images/beauty/beauty-make-5.jpeg',
    },
    {
      name: 'Olhar cativante',
      src: '../../../public/images/beauty/beauty-make-6.jpeg',
    },
  ];

  return (
    <section className={ styles['page-container'] }>
      <PageHeader title="MAQUIAGEM BEAUTY" />
      <div className={ styles['productions-container'] }>
        { beautyImagesTest.map(({ name, src }, index) => (
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

export default pageBeautyMake;
