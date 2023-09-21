const CHARACTER = -2;

const formatWithLeadingZero = (number) => {
  return (`0${number}`).slice(CHARACTER);
};
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = formatWithLeadingZero(date.getMonth() + 1);
  const day = formatWithLeadingZero(date.getDate());

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};

export default formatDate;
