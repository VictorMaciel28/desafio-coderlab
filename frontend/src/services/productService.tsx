import axios from 'axios';
import { Product } from '../interfaces/ProductInterface';

const baseURL = 'http://localhost:4000';

async function listProducts(): Promise<Product[]> {
    const response = await axios.get<Product[]>(`${baseURL}/product`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      });
    return response.data;
};

export default listProducts;
