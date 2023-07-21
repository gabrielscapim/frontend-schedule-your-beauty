/* eslint-disable react/prop-types */
import styles from './ProductionCard.module.css';

function ProductionCard({ src, name }) {
  return (
    <div className={ styles['production-card-container'] }>
      <img
        src={ src }
        alt={ name }
        className={ styles['production-card-image'] }
      />
      <div className={ styles['production-card-info'] }>
        { name }
      </div>
    </div>
  );
}

export default ProductionCard;
