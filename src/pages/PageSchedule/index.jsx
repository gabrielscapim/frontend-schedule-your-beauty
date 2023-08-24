import DatePicker from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import Button from '../../components/form/Button';
import Input from '../../components/form/Input';
import Select from '../../components/form/Select';
import styles from './PageSchedule.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import {
  isDateInputEmpty,
  isInputEmpty,
  isInputsCorrect } from '../../helpers/verifyScheduleInputs';
import Modal from '../../components/Modal';
import whatsAppRequest from '../../services/whatsAppRequest';
import ScheduleConfirmed from '../../components/ScheduleComponents/ScheduleConfirmed';

function PageSchedule() {
  const [state, setState] = useState({
    eventUserName: '',
    eventUserTel: '',
    productionType: 'Maquiagem e penteado (R$ 180,00)',
    eventName: '',
    eventPeriod: '',
    eventDate: '',
    eventHour: '',
  });
  const [inputWarningShouldAppear, setInputWarningShouldAppear] = useState(false);
  const [confirmScheduleModalOpen, setConfirmScheduleModalOpen] = useState(false);
  const [isScheduleConfirmed, setIsScheduleConfirmed] = useState(false);

  const {
    eventUserName,
    eventUserTel,
    productionType,
    eventName,
    eventPeriod,
    eventDate,
    eventHour,
  } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    return setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSchedule = () => {
    const isCorrect = isInputsCorrect(
      [eventDate, eventHour],
      [eventUserName, eventUserTel, eventName, eventPeriod],
    );

    if (!isCorrect) return setInputWarningShouldAppear(true);

    setConfirmScheduleModalOpen(true);
  };

  const handleConfirmSchedule = async () => {
    setConfirmScheduleModalOpen(false);
    setIsScheduleConfirmed(true);
    await whatsAppRequest(state);
  };

  const handleCloseModal = () => {
    setConfirmScheduleModalOpen(false);
  };

  return (
    <>
      { isScheduleConfirmed && <ScheduleConfirmed /> }
      { !isScheduleConfirmed && (
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
              inputValue={ eventUserName }
              placeHolder="Digite seu nome"
              maxInputLength={ 32 }
              name="eventUserName"
              handleChange={ handleChange }
              isInputCorrect={ isInputEmpty(eventUserName) && inputWarningShouldAppear }
            />
            <Input
              label="Contato (WhatsApp)"
              id="event-user-tel"
              type="number"
              inputValue={ eventUserTel }
              placeHolder="Digite seu número de WhatsApp"
              maxInputLength={ 12 }
              name="eventUserTel"
              handleChange={ handleChange }
              isInputCorrect={ isInputEmpty(eventUserTel) && inputWarningShouldAppear }
            />
            <Select
              id="production-type-select"
              label="Selecione a sua produção"
              options={
                ['Maquiagem e penteado (R$ 180,00)',
                  'Apenas maquiagem (R$ 130,00) ',
                  'Apenas penteado (R$ 50,00)']
              }
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
              maxInputLength={ 32 }
              name="eventName"
              handleChange={ handleChange }
              isInputCorrect={ isInputEmpty(eventName) && inputWarningShouldAppear }
            />
            <Input
              label="Período do evento"
              id="event-period-input"
              type="text"
              min="2023-07-23"
              inputValue={ eventPeriod }
              placeHolder="Manhã, tarde, noite"
              maxInputLength={ 32 }
              name="eventPeriod"
              handleChange={ handleChange }
              isInputCorrect={ isInputEmpty(eventPeriod) && inputWarningShouldAppear }
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
              onChange={ (date) => setState((prevState) => ({
                ...prevState,
                eventDate: date,
              })) }
              includeDates={ [new Date()] }
              locale={ ptBR }
              dateFormat="dd/MM/yyyy"
              wrapperClassName={
                isDateInputEmpty(eventDate) && inputWarningShouldAppear
                  ? styles['date-picker-wrong']
                  : styles['date-picker']
              }
              placeholderText="Escolha a data do evento"
              disabled={ confirmScheduleModalOpen }
            />
            <label
              className={ styles['date-label'] }
              htmlFor="event-hour-input"
            >
              Horário
            </label>
            <DatePicker
              id="event-hour-input"
              selected={ eventHour }
              onChange={ (hour) => setState((prevState) => ({
                ...prevState,
                eventHour: hour,
              })) }
              locale={ ptBR }
              showTimeSelect
              showTimeSelectOnly
              dateFormat="h:mm aa"
              wrapperClassName={
                isDateInputEmpty(eventHour) && inputWarningShouldAppear
                  ? styles['date-picker-wrong']
                  : styles['date-picker']
              }
              placeholderText="Escolha o horário do evento"
              disabled={ confirmScheduleModalOpen }
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
