import formatDate from '../utils/formatDate';
import formatNumber from '../utils/formatNumber';
import { removeProductionPrice } from '../utils/regex';
import apiRequest from './apiRequest';

const scheduleDateTime = async (state) => {
  const {
    clientName,
    clientNumber,
    productionName,
    eventName,
    eventDate,
    eventTime,
  } = state;
  const schedulingDateTime = `${formatDate(eventDate)} ${eventTime}`;
  const body = {
    clientName,
    clientNumber: formatNumber(clientNumber),
    productionName: productionName.match(removeProductionPrice)[1],
    eventName,
    schedulingDateTime,
  };

  await apiRequest('post', '/schedule', body);
};

export default scheduleDateTime;
