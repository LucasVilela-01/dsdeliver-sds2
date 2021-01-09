import { Product } from "./types";

export function checkIsSelected(selectedProducts: Product[], product: Product) {
    return selectedProducts.some(item => item.id === product.id); // .some - verifica se tem pelo menos 1 item selecionado
}

// Arrumando a formatação do preço
// Forma moderna de fazer isso com JS, é usar a própria API de NumberFormat
export function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('pt-BR', { // Intl(internalization) - API de internacionalização do JS
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    }); // O 1º parametro é sua localização
/* Entre {} uma série de configuração para formatar corretamente, 1º style que nessa caso é currency, transformando para moeda, 2º qual é o tipo da
moeda e o 3º é quantas casas após a vírgula */

    return formatter.format(price);
}