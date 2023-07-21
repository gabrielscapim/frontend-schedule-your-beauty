/* eslint-disable react/prop-types */
import styles from './ProductionCard.module.css';

function ProductionCard({ src }) {
  return (
    <div className={ styles['production-card-container'] }>
      <img
        src={ src }
        alt="production-main"
        className={ styles['production-card-image'] }
      />
    </div>
  );
}

export default ProductionCard;
