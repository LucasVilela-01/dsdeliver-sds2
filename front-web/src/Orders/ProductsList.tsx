import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = { // Toda vez que criado uma Prop é um parametro sendo passado para o componente
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct: (product: Product) => void;
}

function ProductsList({ products, selectedProducts, onSelectProduct } : Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard
                        key={product.id} 
                        product={product}
                        onSelectProduct={onSelectProduct}
                        isSelected={checkIsSelected(selectedProducts, product)}
                    />
                ))} 
            </div> 
        </div> // .map - é do JS e o React utiliza, sendo um método de array(lista) do JS que usa para manipular/transformar uma lista
/* React precisa do atributo "key" quando se cria produtos através de lista, por exemplo, o modelo acima, para ter o funcionamento correto do React e
não apresentar erro no console do browser */
    )
}

export default ProductsList;