import formatDate from './formatDate';

const getWhatsAppRequestData = (scheduleData) => {
  const whatsAppRequestData = {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to: import.meta.env.VITE_WHATSAPP_NUMBER,
    type: 'template',
    template: {
      name: 'agendamento_confirmado',
      language: {
        code: 'pt_BR',
      },
      components: [
        {
          type: 'body',
          parameters: [
            {
              type: 'text',
              text: scheduleData.userName,
            },
            {
              type: 'text',
              text: scheduleData.userNumber,
            },
            {
              type: 'text',
              text: scheduleData.productionType,
            },
            {
              type: 'text',
              text: scheduleData.eventName,
            },
            {
              type: 'text',
              text: formatDate(scheduleData.eventDate),
            },
            {
              type: 'text',
              text: scheduleData.eventTime,
            },

          ],
        },
      ],
    },
  };

  return whatsAppRequestData;
};

export default getWhatsAppRequestData;
