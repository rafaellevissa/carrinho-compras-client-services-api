# Allu Challenge - API Services

This repository contains all the API services for the Allu challenge.
front-end: https://github.com/rafaellevissa/allu-client

## Architecture

![Diagram](/docs/images/diagram.png)

### Api Gateway

![Api Gateway](/docs/images/apigateway.png)

### EC2

![Ec2](/docs/images/ec2.png)

## How to Run the Services

To run all the services, you can access each service in the `services` folder and execute it using Docker Compose or npm locally. Remember to modify the `.env` file. The `.env.example` file is already configured to run locally with Docker, so if you're using Docker Compose, simply copy the contents of `.env.example` to `.env`.

## Services

### Product

Responsible for managing products.

### Shopping Cart

Responsible for managing the shopping cart.

### Order

Responsible for managing the order.

Each order will be published to the rabbitmq

![rabbitmq](/docs/images/rabbitmq.png)

## API Documentation

In the README of each project, you can access the API Swagger documentation for each service and find detailed instructions on how to run the service locally.

## Desafio

Nosso time de negócio necessita que seja desenvolvido um site com os seguintes requisitos.

Funcionalidades do sistema:

1. Catálogo de produtos: Uma listagem onde são exibidos os produtos disponíveis para
   assinatura, com nome, descrição, valor e imagem; (planilha com os dados anexo)
   a. Nesse catálogo deve ser implementado a técnica de “infinite scroll”, de forma
   que os produtos vão carregando na página a medida que o usuário realiza o
   scroll;
   b. Ao clicar em um produto, deve ser redirecionado para “Página do produto - Item
   3”;
   c. Deve ser aplicada uma lógica de cacheamento das informações do produto para
   melhorar o desempenho da página.

2. Busca de produtos: No catálogo deve ser adicionado uma busca onde o usuário poderá
   procurar por um nome de produto ou categoria;
   a. Implementar a feature de “auto-complete” a medida que o usuário digita;
   b. Implementar uma lógica que torne a busca tolerante a erros de digitação.
3. Página de produto: A página deve conter informações do produto como nome, uma
   descrição mais completa, valores para assinatura (anual e mensal), além de um
   carrossel de imagens do produto em questão.
   a. Aplicar tratamento das imagens para melhoria de desempenho da página.
4. Carrinho de compras: O usuário deverá ter a possibilidade de adicionar/remover itens
   do seu carrinho de compras.
   a. Os itens do carrinho devem ficar salvos caso o usuário saia e volte para o site.

Requisitos/Premissas para o teste:

● Base de produtos
Não é necessário implementar nenhum CRUD de produtos para o teste, apenas
crie uma base de produtos de sua preferência contendo as informações
necessárias para as telas;
○ Se preferir, pode usar alguns produtos disponíveis em nosso catálogo.
● Arquitetura/Tecnologias:
○ O desenvolvimento deverá seguir o padrão de microsserviços;
○ A tecnologia para o back-end deverá ter como base o Node.js, como Express ou
NestJS (temos preferência por Nest);
○ A tecnologia para o front-end deverá ser o React.js ou Next.js (temos preferência
por Next);
○ A tecnologia para o banco de dados deverá ser MySQL;
○ Utilizar Docker para rodar o projeto e subir as demais tecnologias necessárias;
○ Outras tecnologias/ferramentas poderão ser utilizadas da maneira que achar
conveniente.

● Boas práticas de desenvolvimento:
○ Documentar toda a API usando Swagger ou similar;
○ Aplicar conceitos de SOLID e Clean Code;
○ Implementar testes automatizados (unitários) usando Jest ou similar;
○ Seguir boas práticas de versionamento de código com commits divididos e bem
explicados;
○ Adicionar um arquivo README com instruções completas para configuração e
execução do projeto.

● CI:
○ Configurar um pipeline de CI para build, lint e testes automáticos com Github
Actions.
● Monitoramento e Logs:
○ Implementar logging centralizado utilizando uma ferramenta de sua preferência.
