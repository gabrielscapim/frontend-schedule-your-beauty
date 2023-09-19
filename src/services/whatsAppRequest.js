import axios from 'axios';
import getWhatsAppRequestData from '../utils/whatsAppRequestData';

const whatsAppRequest = async (scheduleData) => {
  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_WHATSAPP_TOKEN}`,
    'Content-Type': 'application/json',
  };

  try {
    await axios.post(
      import.meta.env.VITE_WHATSAPP_URL,
      getWhatsAppRequestData(scheduleData),
      { headers },
    );
  } catch (error) {
    console.error('Erro:', error);
  }
};

export default whatsAppRequest;
