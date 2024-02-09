import axios from 'axios';
import { Product } from '../interfaces/ProductInterface';

const baseURL = 'http://localhost:4000';

function getHeader() {
    return {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
    };
}

async function listProducts(): Promise<Product[]> {
    const header = getHeader();
    const response = await axios.get<Product[]>(`${baseURL}/product`, header);
    return response.data;
}

export default listProducts;
