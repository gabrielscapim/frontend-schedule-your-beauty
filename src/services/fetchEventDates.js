import apiRequest from './apiRequest';

const fetchEventDates = async () => {
  const eventDatesFromAPI = await apiRequest('get', '/scheduling-date-time/date');
  const dates = eventDatesFromAPI ? eventDatesFromAPI.map((date) => {
    const splitDate = date.split('-');
    return new Date(splitDate[0], Number(splitDate[1] - 1), splitDate[2]);
  }) : [];

  return dates;
};

export default fetchEventDates;
