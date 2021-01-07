import { Product } from './types';

// Criando um método para passar as informações dos produtos dinamicamente

type Props = {
    product: Product;
}

// Arrumando a formatação do preço
// Forma moderna de fazer isso com JS, é usar a própria API de NumberFormat
function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('pt-BR', { // Intl(internalization) - API de internacionalização do JS
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    }); // O 1º parametro é sua localização
/* Entre {} uma série de configuração para formatar corretamente, 1º style que nessa caso é currency, transformando para moeda, 2º qual é o tipo da
moeda e o 3º é quantas casas após a vírgula */

    return formatter.format(price);
}

function ProductCard({ product } : Props) {
    return (
        <div className="order-card-container">
            <h3 className="order-card-title">
                {product.name}
            </h3>
            <img 
                src={product.imageUri} 
                className="order-card-image"
                alt={product.name}
            />
            <h3 className="order-card-price">
                {formatPrice (product.price)}
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