import './Products.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { GroupedProducts, Product } from '../../interfaces/ProductInterface';
import listProducts from '../../services/productService';
import { useState, useEffect } from 'react';
import ProductComponent from '../../components/Product/ProductComponent';


function Products() {
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);
    const [groupedProducts, setGroupedProducts] = useState<GroupedProducts>({});
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsList: Product[] = await listProducts();
                setProducts(productsList);

                const grouped: GroupedProducts = productsList.reduce((acc: GroupedProducts, product) => {
                    product.categories.forEach(category => {
                        if (!acc[category.name]) acc[category.name] = [];
                        acc[category.name].push(product);
                    });
                    return acc;
                }, {});

                setGroupedProducts(grouped);
            } catch (e) {
                setError('Falha ao carregar produtos');
                navigate('/');
            }
        };

        fetchProducts();
    }, []);
    if (error) {
        return <div>Erro: {error}</div>;
    }

    return (
        <div>
            <Header />
            {/* Renderização dos produtos agrupados por categoria */}
            <div className="product-categories">
                {Object.keys(groupedProducts).length > 0 ? (
                    Object.entries(groupedProducts).map(([category, products]) => (
                        <div key={category} className="category">
                            <h2>{category}</h2>
                            <div className="products-grid">
                                {products.map(product => (
                                    <ProductComponent {...product}/>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Nenhum produto encontrado</p>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Products;