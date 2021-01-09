import { formatPrice } from './helpers';
import { Product } from './types';

// Criando um método para passar as informações dos produtos dinamicamente

type Props = {
    product: Product;
    onSelectProduct: (product: Product) => void;
    isSelected: boolean; // reconhece se esta selecionado ou não.
}

function ProductCard({ product, onSelectProduct, isSelected }: Props) {
    return (
        <div 
            className={`order-card-container ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelectProduct(product)}
        >
            <h3 className="order-card-title">
                {product.name}
            </h3>
            <img 
                src={product.imageUri} 
                className="order-card-image"
                alt={product.name}
            />
            <h3 className="order-card-price">
                {formatPrice(product.price)}
            </h3>
            <div className="order-card-description">
                <h3>Descrição</h3>
                <p>
                {product.description}
                </p>
            </div>
        </div> // Tag p representa um paragrafo, onde é colocado um texto
/* Toda imagem, o ideal é que cria uma propriedade chamada "alt", é um texto alternativo, caso a imagem não carregue corretamente, geralmente usa o 
nome das coisas que não for carregado */
    )
}

export default ProductCard;