// Nesse arquivo temos alguns métodos utilitários para efetuar requisições

import axios from "axios";

const API_URL = 'http://localhost:8080'; // Cria essa constante separada do /products, pois essa url será usada em outros momentos

export function fetchProducts() { // Pode usar também a nomenclatura de ArrowFunction caso queira.
    // Com esse axios, já realiza a busca dos produtos
    return axios(`${API_URL}/products`) // Entre parenteses, a forma mais moderna de concatenar uma variavel com uma string no JS
}