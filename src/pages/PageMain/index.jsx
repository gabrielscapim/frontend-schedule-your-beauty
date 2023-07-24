import ProductionCard from '../../components/ProductionCard';
import Button from '../../components/form/Button';
import styles from './PageMain.module.css';

function PageMain() {
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
          <Button
            type="button"
            label="Agende seu horário"
          />
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
