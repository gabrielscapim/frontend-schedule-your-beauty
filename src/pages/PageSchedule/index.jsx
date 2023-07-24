import Button from '../../components/form/Button';
import Input from '../../components/form/Input';
import Select from '../../components/form/Select';
import styles from './PageSchedule.module.css';

function PageSchedule() {
  return (
    <form className={ styles.form }>
      <div className={ styles['form-group-1'] }>
        <Input
          label="Nome"
          id="event-user-name"
          type="text"
          placeHolder="Digite seu nome"
          maxInputLength={ 64 }
          name="eventUserName"
        />
        <Input
          label="Contato (WhatsApp)"
          id="event-user-tel"
          type="number"
          placeHolder="Digite seu nome"
          name="eventUserTel"
        />
        <Select
          id="production-type-select"
          label="Selecione a sua produção"
          options={ ['Maquiagem e penteado', 'Apenas maquiagem', 'Apenas penteado'] }
          name="productionType"
        />
        <Input
          label="Evento"
          id="event-input"
          type="text"
          placeHolder="Casamento, formatura, ensaio fotográfico"
          maxInputLength={ 64 }
          name="eventName"
        />
        <Input
          label="Período do evento"
          id="event-period-input"
          type="text"
          placeHolder="Manhã, tarde, noite"
          maxInputLength={ 64 }
          name="eventPeriod"
        />
        <Input
          label="Data do evento"
          id="event-date-input"
          type="date"
          name="eventDate"
        />
        <Input
          label="Quero estar pronta às"
          id="event-hour-input"
          type="time"
          name="eventHour"
        />
        <Button
          type="button"
          label="Agendar"
        />
      </div>
    </form>
  );
}

export default PageSchedule;
