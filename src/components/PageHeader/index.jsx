import PropTypes from 'prop-types';
import styles from './PageHeader.module.css';

function PageHeader({ title }) {
  return (
    <div className={ styles['page-title-container'] }>
      { title }
    </div>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
