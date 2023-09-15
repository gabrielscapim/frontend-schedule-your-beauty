import { formatDate } from '../utils/formatDate';
import apiRequest from './apiRequest';

const fetchEventTimes = async (eventDate, productionType) => {
  const date = formatDate(eventDate);
  let times = [];

  if (productionType.includes('Penteado (')) {
    times = await apiRequest('get', `/scheduling-date-time/time/${date}/hair`);
  }

  if (productionType.includes('Maquiagem (')) {
    times = await apiRequest('get', `/scheduling-date-time/time/${date}/make`);
  }

  if (productionType.includes('Maquiagem e Penteado')) {
    times = await apiRequest('get', `/scheduling-date-time/time/${date}/make-hair`);
  }

  return times || [];
};

export default fetchEventTimes;
