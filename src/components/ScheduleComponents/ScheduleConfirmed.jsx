import './ScheduleConfirmed.css';

function ScheduleConfirmed({ isScheduleFailed = false }) {
  return (
    <div className="schedule-confirmed-container">
      { isScheduleFailed ? (
        <>
          <i className="bi bi-check-circle"> </i>
          <h3>Seu agendamento falhou.</h3>
          <p>
            Tente novamente ou entre em contato comigo.
          </p>
        </>
      ) : (
        <>
          <i className="bi bi-check-circle"> </i>
          <h3>Obrigada!</h3>
          <p>
            Seu agendamento foi confirmado
            e entrarei em contato com você em instantes.
          </p>
        </>
      ) }
    </div>
  );
}

ScheduleConfirmed.propTypes = {}.isRequired;

export default ScheduleConfirmed;
