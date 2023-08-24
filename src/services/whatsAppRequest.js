import axios from 'axios';

const whatsAppRequest = async (scheduleData) => {
  const {
    eventUserName,
    eventUserTel,
    productionType,
    eventName,
    eventPeriod,
    eventDate,
    eventHour,
  } = scheduleData;

  const MAX_HOUR = 10;
  const formatNumberWithZero = (number) => {
    return number < MAX_HOUR ? `0${number}` : number;
  };
  // eslint-disable-next-line max-len
  const formattedDate = `${formatNumberWithZero(eventDate.getDate())}/${formatNumberWithZero(eventDate.getMonth() + 1)}/${eventDate.getFullYear()}`;
  // eslint-disable-next-line max-len
  const formattedHour = `${formatNumberWithZero(eventHour.getHours())}:${formatNumberWithZero(eventHour.getMinutes())}`;

  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_WHATSAPP_TOKEN}`,
    'Content-Type': 'application/json',
  };

  const data = {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to: import.meta.env.VITE_WHATSAPP_NUMBER,
    type: 'text',
    text: {
      preview_url: false,
      body: `
      Um agendamento foi confirmado!

Nome: ${eventUserName}
Contato (Whatsapp): ${eventUserTel}
Tipo da produção: ${productionType}
Evento: ${eventName}
Período do evento: ${eventPeriod}
Data do evento: ${formattedDate}
Horário: ${formattedHour}
      `,
    },
  };

  try {
    await axios.post(import.meta.env.VITE_WHATSAPP_URL, data, { headers });
  } catch (error) {
    console.error('Erro:', error);
  }
};

export default whatsAppRequest;
