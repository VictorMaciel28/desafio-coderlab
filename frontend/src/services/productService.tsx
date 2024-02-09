import axios from 'axios';
import { Product } from '../interfaces/ProductInterface';

const apiURL = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;

function getHeader() {
    return {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
    };
}

export async function getProducts(): Promise<Product[]> {
    const header = getHeader();
    const response = await axios.get<Product[]>(`${apiURL}/product`, header);
    return response.data;
}


export async function getProduct(id?: string): Promise<Product> {
    const header = getHeader();
    const response = await axios.get<Product>(`${apiURL}/product/`+id, header);
    return response.data;
}


