/* eslint-disable max-lines */
import DatePicker from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import { useState, useEffect } from 'react';
import MaskedInput from 'react-text-mask';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';
import styles from './PageSchedule.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import { isInputEmpty,
  isInputsCorrect,
  isClientNumberCorrect } from '../../helpers/verifyScheduleInputs';
import Modal from '../../components/Modal';
import whatsAppRequest from '../../services/whatsAppRequest';
import ScheduleConfirmed from '../../components/ScheduleComponents/ScheduleConfirmed';
import fetchProductions from '../../services/fetchProductions';
import fetchEventDates from '../../services/fetchEventDates';
import fetchEventTimes from '../../services/fetchEventTimes';
import scheduleDateTime from '../../services/scheduleDateTime';
import calculateTwoDaysInAdvance from '../../helpers/calculateTwoDaysInAdvance';

// eslint-disable-next-line complexity
function PageSchedule() {
  const [state, setState] = useState({
    clientName: '',
    clientNumber: '',
    productionName: '',
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
  const [isProductionLoading, setIsProductionsLoading] = useState(true);
  const [isEventTimesLoading, setIsEventTimesLoading] = useState(true);
  const [isConfirmScheduleLoading, setIsConfirmScheduleLoading] = useState(false);
  const {
    clientName,
    clientNumber,
    productionName,
    eventName,
    eventDate,
    eventTime,
  } = state;

  const getProductions = async () => {
    setIsProductionsLoading(true);
    const productionsFromAPI = await fetchProductions();
    if (productionsFromAPI) setIsProductionsLoading(false);
    setProductions(productionsFromAPI || []);
    setState((prevState) => (
      { ...prevState, productionName: productionsFromAPI ? productionsFromAPI[0] : '' }));
  };

  const getEventDates = async () => {
    const eventDatesFromAPI = await fetchEventDates();
    setDatesToSchedule(eventDatesFromAPI || []);
  };

  const getEventTimes = async () => {
    setIsEventTimesLoading(true);
    const eventTimesFromAPI = await fetchEventTimes(eventDate, productionName);
    if (eventTimesFromAPI) setIsEventTimesLoading(false);

    setTimesToSchedule(eventTimesFromAPI);
    setState((prevState) => ({ ...prevState, eventTime: eventTimesFromAPI[0] || [] }));
  };

  useEffect(() => {
    getProductions();
    getEventDates();
  }, []);

  useEffect(() => {
    if (eventDate !== '') getEventTimes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventDate, productionName]);

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
      [clientName, clientNumber, eventName],
    );

    if (!isCorrect || !isClientNumberCorrect(clientNumber)) {
      return setInputWarningShouldAppear(true);
    }

    setConfirmScheduleModalOpen(true);
  };

  const handleConfirmSchedule = async () => {
    try {
      setIsConfirmScheduleLoading(true);
      const scheduleResponseError = await scheduleDateTime(state);
      if (scheduleResponseError) {
        return isScheduleFailed(true);
      }
      setConfirmScheduleModalOpen(false);
      setIsConfirmScheduleLoading(false);
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
    <div>
      { isScheduleConfirmed && !isScheduleFailed && <ScheduleConfirmed /> }
      { isScheduleFailed && <ScheduleConfirmed isScheduleFailed /> }
      { !isScheduleConfirmed && !isScheduleFailed && (
        <form className={ styles.form }>
          <Modal
            isOpen={ confirmScheduleModalOpen }
            onClose={ handleCloseModal }
            onConfirm={ handleConfirmSchedule }
            isLoading={ isConfirmScheduleLoading }
          >
            { isConfirmScheduleLoading ? (
              <h3>Só um instante...</h3>
            ) : (
              <>
                <h3>Confirmação de agendamento</h3>
                <p>Deseja confirmar o agendamento de sua produção?</p>
              </>
            ) }
          </Modal>
          <div className={ styles['form-group-1'] }>
            <Input
              label="Nome"
              id="event-client-name"
              type="text"
              inputValue={ clientName }
              placeHolder="Digite seu nome"
              maxInputLength={ 45 }
              name="clientName"
              handleChange={ handleChange }
              isInputCorrect={ isInputEmpty(clientName) && inputWarningShouldAppear }
            />
            <label
              className={ styles['input-label'] }
              htmlFor="event-client-number"
            >
              Contato (WhatsApp)
            </label>
            <MaskedInput
              id="event-client-number"
              mask={ ['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] }
              value={ clientNumber }
              placeholder="Digite seu número de WhatsApp"
              name="clientNumber"
              onChange={ handleChange }
              guide={ false }
              className={ (
                isInputEmpty(clientNumber) || !isClientNumberCorrect(clientNumber))
                && inputWarningShouldAppear ? styles['input-wrong'] : styles.input }
            />
            <Select
              id="production-type-select"
              label="Selecione a sua produção"
              options={ productions }
              inputValue={ productionName }
              name="productionName"
              handleChange={ handleChange }
              disabled={ isProductionLoading }
              loading={ isProductionLoading }
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
              wrapperClassName={ inputWarningShouldAppear && eventDate.length === 0
                ? styles['date-picker-wrong'] : styles['date-picker'] }
              placeholderText="Escolha a data do evento"
              disabled={ confirmScheduleModalOpen }
              minDate={ calculateTwoDaysInAdvance() }
            />
            <Select
              id="production-time-select"
              label="Horário de agendamento"
              options={ timesToSchedule }
              inputValue={ eventTime }
              name="eventTime"
              handleChange={ handleChange }
              disabled={ isEventTimesLoading }
              loading={ isEventTimesLoading }
            />
            { timesToSchedule.length === 0
            && eventDate !== ''
            && !isEventTimesLoading && (
              <span className={ styles['inputs-warning'] }>
                Não existem horários disponíveis para
                esse tipo de produção na data escolhida.
              </span>
            ) }
            <span className={ styles['date-warning'] }>
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
              <span className={ styles['inputs-warning'] }>
                Preencha os campos obrigatórios.
              </span>
            ) }
            <Button
              type="button"
              label="Agendar"
              onClick={ handleSchedule }
              disabled={ timesToSchedule.length === 0 && eventDate !== '' }
            />
          </div>
        </form>
      ) }
    </div>
  );
}

export default PageSchedule;
