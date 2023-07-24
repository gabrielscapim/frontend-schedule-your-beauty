import PropTypes from 'prop-types';
import styles from './ProductionCard.module.css';

function ProductionCard({ name = '', src, principalPage, location }) {
  return (
    principalPage ? (
      <a
        className={ styles['production-card-container'] }
        href={ `/${location}` }
      >
        { name && (
          <span>{ name.toUpperCase() }</span>
        )}
        <img
          src={ src }
          alt="production"
          className={ styles['production-card-image'] }
        />
      </a>
    ) : (
      <div
        className={ styles['production-card-container'] }
      >
        { name && (
          <span>{ name.toUpperCase() }</span>
        )}
        <img
          src={ src }
          alt="production"
          className={ styles['production-card-image'] }
        />
      </div>
    )
  );
}

ProductionCard.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  principalPage: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired,
};

export default ProductionCard;
