# Semana DevSuperior 2.0

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/LucasVilela-01/dsdeliver-sds2/blob/main/LICENSE)

# Sobre o projeto

https://sds2-lucas.netlify.app/

# DS Delivery

DS Deliver é uma aplicação full stack web e mobile construída durante a 2º edição da **Semana DevSuperior 2.0** (#sds2), evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em sistema de pedido e entrega, onde os pedidos são feitos pelo app web e listados no app mobile, contendo as informações do pedido e através de cada pedido, contém 3 opções: Iniciar navegação, Confirmar entrega e Cancelar.

Além disso, o app mobile tem integração com GPS após iniciar a navegação, automaticamente é iniciado o Google Maps no dispositivo móvel.

## Modelo Conceitual
![Modelo Conceitual](https://github.com/devsuperior/sds2/blob/master/assets/modelo-conceitual.png)

## Layout Web
![Web 1](https://github.com/LucasVilela-01/assetssds2.0/blob/main/web1.png) 

![Web 2](https://github.com/LucasVilela-01/assetssds2.0/blob/main/web2.png)

## Layout mobile
![Mobile 1](https://github.com/LucasVilela-01/assetssds2.0/blob/main/mobile1.png) 

![Mobile 2](https://github.com/LucasVilela-01/assetssds2.0/blob/main/mobile2.png) 

![Mobile 3](https://github.com/LucasVilela-01/assetssds2.0/blob/main/mobile3.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end web
- HTML / CSS / JS / TypesScript
- ReactJS
- MapBox
## Front end mobile
- React Native
- Expo
- CSS / JS / TypesScript
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/LucasVilela-01/sds1

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
ggit clone https://github.com/LucasVilela-01/dsdeliver-sds2

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
npm install

# executar o projeto
npm start
```
## Front end mobile
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/LucasVilela-01/dsdeliver-sds2

# entrar na pasta do projeto front end mobile
cd front-mobile

# instalar dependências
npm install

# executar o projeto
npm start
```

# Autor

Lucas Rodrigues Vilela Bota

https://www.linkedin.com/in/lucasvilela-01/

# Agradecimentos

A equipe [DevSuperior](https://devsuperior.com "Site da DevSuperior")  que auxiliou na construção e finalização do projeto, uma semana na qual trouxe muitos ensinamentos e dicas durante cada etapa do projeto, tirando dúvidas dos participantes, além da comunidade se ajudar.
