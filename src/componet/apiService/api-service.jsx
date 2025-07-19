import axios from 'axios';

const BASE_URL = 'https://weather-api92.p.rapidapi.com'

const options = {
    method: 'GET',
    params: {
        country: 'Uzbekistan',
    },
    headers: {
        'x-rapidapi-key': 'e2712dd28bmsh98b68ae5c150e12p1b6218jsne628bcc37e04',
        'x-rapidapi-host': 'weather-api92.p.rapidapi.com'
    }
};

export const ApiService = {
    fetching: async function (url) {
        const response = await axios.get(`${BASE_URL}/${url}`, options)
        return response.data
    }
}