// Esse componente simboliza todos os tipos de dados que estão sendo utilizados no front-end

import { type } from "os"

export type Product = { // Esse é um modelo de dados
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}

export type OrderLocationData = { // Dentro desse tipo terá atributos necessários para serem enviados para o back-end
    latitude: number;
    longitude: number;
    address: string;
}

// Criando uma forma de representar o payload que será enviado para o back-end

type ProductId = {
    id:number;
}

export type OrderPayload = {
    products: ProductId[];
} & OrderLocationData; // Uma forma de juntar dois tipos em um, onde pode usar os tipos dos outros