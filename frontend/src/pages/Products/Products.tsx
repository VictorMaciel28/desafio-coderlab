import './Products.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Product } from '../../interfaces/ProductInterface';
import { Category } from '../../interfaces/CategoryInterface';
import listProducts from '../../services/productService';
import { useState, useEffect } from 'react';

function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsList: Product[] = await listProducts();
                setProducts(productsList);
            } catch (e) {
                setError('Falha ao buscar produtos');
            }
        };

        fetchProducts();
    }, []);
    if (error) {
        return <div>Erro: {error}</div>;
    }

    return (
        <div>
            <Header/>
            {/* Renderização condicional de produtos ou mensagem de lista vazia */}
            <div>
                {products.length > 0 ? (
                    products.map(product => <div key={product.id}>{product.name}</div>) // Substitua `product.id` e `product.name` pelos campos reais do seu produto
                ) : (
                    <p>Nenhum produto encontrado</p>
                )}
            </div>
            <Footer/>
        </div>
    );
}

export default Products;