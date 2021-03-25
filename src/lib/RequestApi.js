import axios from 'axios';

const base_url = 'http://localhost:3001/api/v1/search'

const getResults = (criteria, type) => {
  return axios.get(`${base_url}/${criteria}/${type}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    if(response.data) {
       return { data: response.data.results };
    } else {
      return { message: "No se encontraron datos!" }
    }
  })
}

export { getResults };
