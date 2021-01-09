import axios from "axios";

const API_URL = 'https://sds2-lucas.herokuapp.com'

export function fetchOrders() { // Uma função que retorna os pedidos
    return axios(`${API_URL}/orders`);
}

export function confirmDelivery(orderId: number) { // Esse método realiza uma requisição no back end para fazer a confirmação(por isso é um put)
    return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}