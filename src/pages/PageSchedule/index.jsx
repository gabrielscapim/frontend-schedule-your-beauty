import DatePicker from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import Button from '../../components/form/Button';
import Input from '../../components/form/Input';
import Select from '../../components/form/Select';
import styles from './PageSchedule.module.css';
import 'react-datepicker/dist/react-datepicker.css';

function PageSchedule() {
  const [state, setState] = useState({
    eventUserName: '',
    eventUserTel: '',
    productionType: 'Maquiagem e penteado',
    eventName: '',
    eventPeriod: '',
  });
  const [eventDate, setEventDate] = useState('');
  const [eventHour, setEventHour] = useState('');

  const {
    eventUserName,
    eventUserTel,
    productionType,
    eventName,
    eventPeriod,
  } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    return setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const confirmScheduleHandleClick = () => {
    if (window.confirm('Deseja confirmar o agendamento da sua producão?')) {
      console.log('confirmou');
    }
    console.log('não confirmou');
  };

  return (
    <form className={ styles.form }>
      <div className={ styles['form-group-1'] }>
        <Input
          label="Nome"
          id="event-user-name"
          type="text"
          inputValue={ eventUserName }
          placeHolder="Digite seu nome"
          maxInputLength={ 64 }
          name="eventUserName"
          handleChange={ handleChange }
        />
        <Input
          label="Contato (WhatsApp)"
          id="event-user-tel"
          type="number"
          inputValue={ eventUserTel }
          placeHolder="Digite seu nome"
          name="eventUserTel"
          handleChange={ handleChange }
        />
        <Select
          id="production-type-select"
          label="Selecione a sua produção"
          options={ ['Maquiagem e penteado', 'Apenas maquiagem', 'Apenas penteado'] }
          inputValue={ productionType }
          name="productionType"
          handleChange={ handleChange }
        />
        <Input
          label="Evento"
          id="event-input"
          type="text"
          inputValue={ eventName }
          placeHolder="Casamento, formatura, ensaio fotográfico"
          maxInputLength={ 64 }
          name="eventName"
          handleChange={ handleChange }
        />
        <Input
          label="Período do evento"
          id="event-period-input"
          type="text"
          min="2023-07-23"
          inputValue={ eventPeriod }
          placeHolder="Manhã, tarde, noite"
          maxInputLength={ 64 }
          name="eventPeriod"
          handleChange={ handleChange }
        />
        <label
          className={ styles['date-label'] }
          htmlFor="event-date-input"
        >
          Data do evento
        </label>
        <DatePicker
          id="event-date-input"
          selected={ eventDate }
          onChange={ (date) => setEventDate(date) }
          includeDates={ [new Date()] }
          locale={ ptBR }
          dateFormat="dd/MM/yyyy"
          wrapperClassName={ styles['date-picker'] }
        />
        <label
          className={ styles['date-label'] }
          htmlFor="event-date-input"
        >
          Quero estar pronta às
        </label>
        <DatePicker
          id="event-hour-input"
          selected={ eventHour }
          onChange={ (hour) => setEventHour(hour) }
          locale={ ptBR }
          showTimeSelect
          showTimeSelectOnly
          dateFormat="h:mm aa"
          wrapperClassName={ styles['date-picker'] }
        />
        <Button
          type="button"
          label="Agendar"
          onClick={ confirmScheduleHandleClick }
        />
      </div>
    </form>
  );
}

export default PageSchedule;
