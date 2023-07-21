import PropTypes from 'prop-types';
import styles from './ProductionCard.module.css';

function ProductionCard({ name, src }) {
  return (
    <button className={ styles['production-card-container'] }>
      <span>{ name.toUpperCase() }</span>
      <img
        src={ src }
        alt="production-main"
        className={ styles['production-card-image'] }
      />
    </button>
  );
}

ProductionCard.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default ProductionCard;
