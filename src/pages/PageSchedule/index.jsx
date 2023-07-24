import Input from '../../components/form/input';
import styles from './PageSchedule.module.css';

function PageSchedule() {
  return (
    <form className={ styles.form }>
      <div className={ styles['form-group-1'] }>
        <Input />
      </div>
    </form>
  );
}

export default PageSchedule;
