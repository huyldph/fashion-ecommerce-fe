import axios from 'axios';

const BASE_URL = 'http://localhost:8080/public/api';

export const getProducts = async () => {
    const { data } = await axios.get(`${BASE_URL}/products`);
    return data;
};

export const getCategories = async () => {
    const { data } = await axios.get(`${BASE_URL}/categories`);
    return data;
}; 