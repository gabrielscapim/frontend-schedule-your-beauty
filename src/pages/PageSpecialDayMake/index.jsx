import ProductionCard from '../../components/ProductionCard';
import styles from './PageSpecialDayMake.module.css';

function PageBeautyMake() {
  const specialDayMakeObjects = [
    {
      name: 'Olhar dramático',
      src: '/images/special-day/special-day-make-1.jpeg',
    },
    {
      name: 'Esfumado quente',
      src: '/images/special-day/special-day-make-2.jpeg',
    },
    {
      name: 'Beleza clássica',
      src: '/images/special-day/special-day-make-3.jpeg',
    },
    {
      name: 'Olhar delineado',
      src: '/images/special-day/special-day-make-4.jpeg',
    },
    {
      name: 'Esfumado cintilante',
      src: '/images/special-day/special-day-make-5.jpeg',
    },
    {
      name: 'Marrom clássico',
      src: '/images/special-day/special-day-make-7.jpeg',
    },
    {
      name: 'Pálpebra luz',
      src: '/images/special-day/special-day-make-9.jpeg',
    },
    {
      name: 'Clássico de festa',
      src: '/images/special-day/special-day-make-8.jpeg',
    },
    {
      name: 'Preto e prata',
      src: '/images/special-day/special-day-make-10.jpeg',
    },
  ];

  return (
    <section className={ styles['page-container'] }>
      <div className={ styles['productions-container'] }>
        { specialDayMakeObjects.map(({ name, src }, index) => (
          <ProductionCard
            key={ `special-day-make-${index}` }
            name={ name }
            src={ src }
          />
        )) }
      </div>
    </section>
  );
}

export default PageBeautyMake;
