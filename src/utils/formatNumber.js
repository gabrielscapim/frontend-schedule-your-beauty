import { removeNonNumericCharacters } from './regex';

const formatNumber = (number) => {
  return number.replace(removeNonNumericCharacters, '');
};

export default formatNumber;
