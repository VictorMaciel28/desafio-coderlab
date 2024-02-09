import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../interfaces/ProductInterface';
import { getProduct } from '../../services/productService';
import './ProductDescriptionPage.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const ProductDescriptionPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getProduct(id);
                setProduct(response);
            } catch (err) {
                navigate('/');
            }
        };

        fetchProduct();

    }, [id]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!product) {
        return (
            <div>
                <Header />
                <div className="product-page">
                    <div className="product-presentation">
                        <div className="product-details">
                            <img src={`../images/backbone.jpg`} alt="Não encontrado, tente novamente" className="product-backbone" />
                            <p>Quantidade disponível: -</p>
                            <p>Preço: R$ -</p>
                            <p>Tipo de prato: -</p>
                            <button onClick={() => navigate(-1)} className="btn-primary">Voltar</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>)
    }

    return (
        <div>
            <Header />
            <div className="product-page">
                <div className="product-presentation">
                    <img src={`../images/${product.photo}.jpg`} alt={product.name} className="product-image" />
                    <div className="product-details">
                        <h1>{product.name}</h1>
                        <p>Quantidade disponível: {product.qty}</p>
                        <p>Preço: R$ {product.price}</p>
                        <p>Tipo de prato: {product.categories[0].name}</p>
                        <button onClick={() => navigate(-1)} className="btn-primary">Voltar</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDescriptionPage;