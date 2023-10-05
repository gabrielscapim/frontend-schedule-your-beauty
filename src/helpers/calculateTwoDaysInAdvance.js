function calculateTwoDaysInAdvance() {
  const days = 2;
  const hours = 24;
  const minutes = 60;
  const seconds = 60;
  const milliseconds = 1000;

  return new Date(new Date().getTime() + days * hours * minutes * seconds * milliseconds);
}

export default calculateTwoDaysInAdvance;
