import './ProductComponent.scss';
import { Product } from "../../interfaces/ProductInterface";


const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);
};


const ProductComponent: React.FC<Product> = ({ id, photo, name, price }) => {
    return (
        <div key={id} className="product-card">
            <img src={`../images/${photo}.jpg`} alt={name} />
            <h3>{name}</h3>
            <p>Preço: {formatPrice(price)}</p>
        </div>
    );
};

export default ProductComponent;