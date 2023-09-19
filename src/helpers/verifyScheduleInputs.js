import { emptyStringRegex } from '../utils/regex';

export const isInputEmpty = (string) => (
  string.replace(emptyStringRegex, '').length === 0
);

export const isInputsCorrect = (dateArray, otherInputsArray) => {
  const isDateArrayWrong = dateArray.some((date) => (
    date.length === 0
  ));

  const isOtherInputsArrayWrong = otherInputsArray.some((value) => (
    value.replace(emptyStringRegex, '').length === 0
  ));

  return !isDateArrayWrong && !isOtherInputsArrayWrong;
};

export const isClientNumberCorrect = (clientNumber) => {
  const expectedClientNumberLenght = 16;
  return clientNumber.length === expectedClientNumberLenght;
};
