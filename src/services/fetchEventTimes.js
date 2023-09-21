import formatDate from '../utils/formatDate';
import apiRequest from './apiRequest';

const fetchEventTimes = async (eventDate, productionName) => {
  const date = formatDate(eventDate);
  let times = [];

  if (productionName.includes('Penteado (')) {
    times = await apiRequest('get', `/scheduling-date-time/time/${date}/hair`);
  }

  if (productionName.includes('Maquiagem (')) {
    times = await apiRequest('get', `/scheduling-date-time/time/${date}/make`);
  }

  if (productionName.includes('Maquiagem e Penteado')) {
    times = await apiRequest('get', `/scheduling-date-time/time/${date}/make-hair`);
  }

  return times;
};

export default fetchEventTimes;
