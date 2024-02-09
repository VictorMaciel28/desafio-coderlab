import './ProductComponent.scss';
import { Product } from "../../interfaces/ProductInterface";
import { useNavigate } from 'react-router-dom';

const ProductComponent: React.FC<Product> = ({ id, photo, name, price }) => {
    const navigate = useNavigate();

    const formatPrice = (price: number): string => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(price);
    };

    const handleNavigate = () => {
        navigate(`/produto/${id}`);
    };

    return (
        <div className="product-card">
            <img src={`../images/${photo}.jpg`} alt={name} onClick={handleNavigate} style={{ cursor: 'pointer' }} />
            <h3 onClick={handleNavigate} style={{ cursor: 'pointer' }}>{name}</h3>
            <p>Preço: {formatPrice(price)}</p>
        </div>
    );
};

export default ProductComponent;