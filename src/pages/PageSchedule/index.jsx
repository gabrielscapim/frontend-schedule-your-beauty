import DatePicker from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import { useState, useEffect } from 'react';
import MaskedInput from 'react-text-mask';
import Button from '../../components/form/Button';
import Input from '../../components/form/Input';
import Select from '../../components/form/Select';
import styles from './PageSchedule.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import { isInputEmpty,
  isInputsCorrect,
  isUserNumberCorrect } from '../../helpers/verifyScheduleInputs';
import Modal from '../../components/Modal';
import whatsAppRequest from '../../services/whatsAppRequest';
import ScheduleConfirmed from '../../components/ScheduleComponents/ScheduleConfirmed';
import fetchProductions from '../../services/fetchProductions';
import fetchEventDates from '../../services/fetchEventDates';
import fetchEventTimes from '../../services/fetchEventTimes';

function PageSchedule() {
  const [state, setState] = useState({
    userName: '',
    userNumber: '',
    productionType: '',
    eventName: '',
    eventDate: '',
    eventTime: '',
  });
  const [inputWarningShouldAppear, setInputWarningShouldAppear] = useState(false);
  const [confirmScheduleModalOpen, setConfirmScheduleModalOpen] = useState(false);
  const [isScheduleConfirmed, setIsScheduleConfirmed] = useState(false);
  const [isScheduleFailed, setIsScheduleFailed] = useState(false);
  const [datesToSchedule, setDatesToSchedule] = useState([]);
  const [timesToSchedule, setTimesToSchedule] = useState([]);
  const [productions, setProductions] = useState([]);
  const {
    userName,
    userNumber,
    productionType,
    eventName,
    eventDate,
    eventTime,
  } = state;

  const getProductions = async () => {
    const productionsFromAPI = await fetchProductions();
    setProductions(productionsFromAPI);
    setState((prevState) => (
      { ...prevState, productionType: productionsFromAPI[0] || '' }));
  };

  const getEventDates = async () => {
    const eventDatesFromAPI = await fetchEventDates();
    setDatesToSchedule(eventDatesFromAPI);
  };

  const getEventTimes = async () => {
    const eventTimesFromAPI = await fetchEventTimes(eventDate, productionType);

    setTimesToSchedule(eventTimesFromAPI);
    setState((prevState) => ({ ...prevState, eventTime: eventTimesFromAPI || '' }));
  };

  useEffect(() => {
    getProductions();
    getEventDates();
  }, []);

  useEffect(() => {
    if (eventDate !== '') getEventTimes();
  }, [eventDate, productionType]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    return setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSchedule = () => {
    const isCorrect = isInputsCorrect(
      [eventDate, eventTime],
      [userName, userNumber, eventName],
    );

    if (!isCorrect || !isUserNumberCorrect(userNumber)) {
      return setInputWarningShouldAppear(true);
    }

    setConfirmScheduleModalOpen(true);
  };

  const handleConfirmSchedule = async () => {
    try {
      setConfirmScheduleModalOpen(false);
      setIsScheduleConfirmed(true);
      await whatsAppRequest(state);
    } catch (error) {
      console.log(error);
      setIsScheduleFailed(true);
    }
  };

  const handleCloseModal = () => {
    setConfirmScheduleModalOpen(false);
  };

  return (
    <>
      { isScheduleConfirmed && !isScheduleFailed && <ScheduleConfirmed /> }
      { isScheduleFailed && <ScheduleConfirmed isScheduleFailed /> }
      { !isScheduleConfirmed && !isScheduleFailed && (
        <form className={ styles.form }>
          <Modal
            isOpen={ confirmScheduleModalOpen }
            onClose={ handleCloseModal }
            onConfirm={ handleConfirmSchedule }
          >
            <h3>Confirmação de agendamento</h3>
            <p>Deseja confirmar o agendamento de sua produção?</p>
          </Modal>
          <div className={ styles['form-group-1'] }>
            <Input
              label="Nome"
              id="event-user-name"
              type="text"
              inputValue={ userName }
              placeHolder="Digite seu nome"
              maxInputLength={ 45 }
              name="userName"
              handleChange={ handleChange }
              isInputCorrect={ isInputEmpty(userName) && inputWarningShouldAppear }
            />
            <label
              className={ styles['input-label'] }
              htmlFor="event-user-number"
            >
              Contato (WhatsApp)
            </label>
            <MaskedInput
              id="event-user-number"
              mask={ ['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] }
              value={ userNumber }
              placeholder="Digite seu número de WhatsApp"
              name="userNumber"
              onChange={ handleChange }
              guide={ false }
              className={ (isInputEmpty(userNumber) || !isUserNumberCorrect(userNumber))
                && inputWarningShouldAppear ? styles['input-wrong'] : styles.input }
            />
            <Select
              id="production-type-select"
              label="Selecione a sua produção"
              options={ productions }
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
              maxInputLength={ 20 }
              name="eventName"
              handleChange={ handleChange }
              isInputCorrect={ isInputEmpty(eventName) && inputWarningShouldAppear }
            />
            <label
              className={ styles['input-label'] }
              htmlFor="event-date-input"
            >
              Data do evento
            </label>
            <DatePicker
              id="event-date-input"
              selected={ eventDate }
              onChange={ (date) => setState((prevState) => ({
                ...prevState,
                eventDate: date,
              })) }
              includeDates={ datesToSchedule }
              locale={ ptBR }
              dateFormat="dd/MM/yyyy"
              wrapperClassName={ styles['date-picker'] }
              placeholderText="Escolha a data do evento"
              disabled={ confirmScheduleModalOpen }
            />
            <Select
              id="production-time-select"
              label="Horário de agendamento"
              options={ timesToSchedule }
              inputValue={ eventTime }
              name="eventTime"
              handleChange={ handleChange }
            />
            <span className={ styles['date-advice'] }>
              Caso você não tenha encontrado a data desejada, clique
              <span> </span>
              <a
                href="https://wa.me/5544991343233?text=Oi%20Isa,%20gostaria%20de%20marcar%20uma%20produção!"
                target="_blank"
                rel="noreferrer"
              >
                aqui
              </a>
              <span> </span>
              para entrar em contato comigo.
            </span>
            { inputWarningShouldAppear && (
              <span className={ styles['inputs-advice'] }>
                Preencha os campos obrigatórios
              </span>
            ) }
            <Button
              type="button"
              label="Agendar"
              onClick={ handleSchedule }
            />
          </div>
        </form>
      ) }
    </>
  );
}

export default PageSchedule;
