import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { useEffect, useState } from 'react';
import { OrderLocationData, Product } from './types';
import { fetchProducts, saveOrder } from '../api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import Footer from '../Footer';
import { checkIsSelected } from './helpers';
import { toast } from 'react-toastify';

// Esse componente Order é responsável por realizar o carregamento das informações do produto de forma dinâmica e passando como prop para o ProductList

function Orders() {
    // Para o código funcionar precisa de um estado que armazena a lista de produtos
    // É bom começar pelos tipos de dados, pois denotam o modelo de dados que estão sendo trabalhados
    // Criação do arquivos types.tsx

    // Depois da criação do types.tsx, cria a função(estado) abaixo:
    // O produts entre [] tem a lista de produtos que vem do back-end
    /* Lembrando, quando se tem um estado, tem-se uma variavel(products) e uma função(setProducts), nada impede que seja outro nome, mas a função que 
inicializaria o products, mas por convenção, a própria documentação do React também da a dica usar uma variavel e set(e o nome da variavel em seguida) */
    // useState - é o que permite ter um estado no componente. Entre <> indica o tipo de dado desse estado.
    // Para iniciar essa lista de produtos, cria o arquivo api.ts

    const [products, setProducts] = useState<Product[]>([]);
    // Fazendo o código rodar apenas quando chegar na lista, carregando as informações via back-end
    // Todo o bloco dentro do parenteses da useEffect é uma ArrowFunction

    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]); // Diz quantos produtos estão selecionados

    const [orderLocation, setOrderLocation] = useState<OrderLocationData>(); /* Criando um estado quando o usuário selecionar o local
    Obs.: orderLocation - nome de variavel, diferente do nome do componente OrderLocation que ambos nomes começam com letra maiuscula */

    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data)) // Utiliza esse quando a requisição der sucesso
            /* response.data - esse .data é do axios, na api do back-end(nesse caso, sendo utilizado o postman), não tem esse . data na api, então os dados ficam
            armazenados dentro desse .data, tendo acesso a lista de produtos */
            /* Quando efetua o setProducts, demostra que valor da lista esta sendo alterando e o valor colocado é o responde.data, que nesse caso, seria a própria
            lista vinda do back-end */
            .catch(() => {
                toast.warning('Erro ao listar produtos'); 
            }) // Quando temos um error(vem do back-end), requisição não obtem sucesso
        /* Depois é possível colocar um alerta customizado para o usuário, informando que deu erro ao listar os produtos, conseguindo uma melhora na
parte de tratamento de excessões */
    }, []); /* A lista de dependencias quando esta vazia(representado pelo []), entendemos que esse código não depende de nada e vai rodar quando o
componente Order inicializar */


    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }

    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          products: productsIds
        }
      
        saveOrder(payload)
            .then((response) => {
                toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`); // Utiliza apostrofe, pois esta concatenando uma string com código JS
                setSelectedProducts([]);
        })
          .catch(() => {
            toast.warning('Erro ao enviar pedido');
          })
      }

    return (
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductsList
                    products={products}
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                />
                <OrderLocation 
                    onChangeLocation={location => setOrderLocation(location)} 
                />
                <OrderSummary 
                    amount={selectedProducts.length} 
                    totalPrice={totalPrice}
                    onSubmit={handleSubmit}
                />
            </div>
            <Footer />
        </>
    )
}

export default Orders;