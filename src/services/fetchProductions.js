import apiRequest from './apiRequest';

const fetchProductions = async () => {
  const productionsFromAPI = await apiRequest('get', '/production');
  const productions = productionsFromAPI
    ? productionsFromAPI.map(({ name, price }) => (
      `${name} (R$ ${price})`
    )) : undefined;

  return productions;
};

export default fetchProductions;
