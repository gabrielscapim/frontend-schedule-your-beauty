const CHARACTER = -2;

const formatWithLeadingZero = (number) => {
  return (`0${number}`).slice(CHARACTER);
};

const formatHour = (date) => {
  const hour = (`0${date.getHours()}`).slice(CHARACTER);
  const minutes = (`0${date.getMinutes()}`).slice(CHARACTER);

  const formattedHour = `${hour}:${minutes}`;

  return formattedHour;
};

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = formatWithLeadingZero(date.getMonth() + 1);
  const day = formatWithLeadingZero(date.getDate());

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};

export {
  formatHour,
  formatDate,
};
