import axios from 'axios';

const URL = '';

const apiRequest = async (method, endpoint, data = null) => {
  try {
    let response;

    switch (method.toLowerCase()) {
    case 'get':
      response = await axios.get(`${URL}${endpoint}`, config);
      break;
    case 'post':
      response = await axios.post(`${URL}${endpoint}`, data, config);
      break;
    case 'put':
      response = await axios.put(`${URL}${endpoint}`, data, config);
      break;
    case 'delete':
      response = await axios.delete(`${URL}${endpoint}`, config);
      break;
    default:
      throw new Error(`Invalid HTTP method: ${method}`);
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default apiRequest;
