import axios from 'axios';
import { formatDate, formatHour } from '../utils/formatDate';

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
Data do evento: ${formatDate(eventDate)}
Horário: ${formatHour(eventHour)}
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
