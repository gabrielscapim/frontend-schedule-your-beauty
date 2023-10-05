import styles from './PageNotFound.module.css';

function PageNotFound() {
  return (
    <section className={ styles['page-container'] }>
      <div>
        <h2>404</h2>
      </div>
      <div>
        <h3>
          Página não encontrada!
          Desculpa, a página que você está procutando não existe nesse site.
        </h3>
      </div>
    </section>
  );
}

export default PageNotFound;
