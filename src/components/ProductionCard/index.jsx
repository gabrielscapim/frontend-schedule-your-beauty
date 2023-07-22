import PropTypes from 'prop-types';
import styles from './ProductionCard.module.css';

function ProductionCard({ name = '', src, onClick = () => null }) {
  return (
    <button
      className={ styles['production-card-container'] }
      onClick={ onClick }
    >
      { name && (
        <span>{ name.toUpperCase() }</span>
      )}
      <img
        src={ src }
        alt="production"
        className={ styles['production-card-image'] }
      />
    </button>
  );
}

ProductionCard.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ProductionCard;
