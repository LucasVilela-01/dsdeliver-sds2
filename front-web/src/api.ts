// Nesse arquivo temos alguns métodos utilitários para efetuar requisições

import axios from "axios";
import { OrderPayload } from "./Orders/types";

const API_URL = 'http://localhost:8080'; // Cria essa constante separada do /products, pois essa url será usada em outros momentos
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export function fetchProducts() { // Pode usar também a nomenclatura de ArrowFunction caso queira.
    // Com esse axios, já realiza a busca dos produtos
    return axios(`${API_URL}/products`) // Entre parenteses, a forma mais moderna de concatenar uma variavel com uma string no JS
}

// Comunicação com o MapBox

export function fetchLocalMapBox(local: string) {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload: OrderPayload) { // Função para salvar o pedido feito pelo usuário
    return axios.post(`${API_URL}/orders`, payload) // Lembrando que esse método post é o mesmo método usado para a API do back-end(postman)
}