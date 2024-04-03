Requisitos funcionais:

[x] criar produtos
[x] criar usuarios
[x] criar pedidos
    [x] ter varios produtos
    [x] deve pertercer a um usuario

Requisitos não funcionais:

[x]usar express
[x]usar cors
[x]usar prisma.js

A pasta prisma/(migrations/seed).

/migrations é onde fica alocado cada mudança do banco de dados.

/seeds usada para popular o banco de dados para teste ou dados de configuração.


A pasta api/modulos/(Order, Product, User) elas guarda as funções principais da API.

/User é um post que que cria uma variavel data que recebe é uma requisição dos dados do clint 
depois esses dados são usados pelo prismaClint para criação dos users a partir do create.

/Product é um post que que cria uma variavel data que recebe é uma requisição dos dados do clint depois esses dados são usados pelo prismaClint para criação dos products a partir do create.

/Order no começo existe duas funções validateUserId e validateProductId que fazem a validação tanto do id do usuario e a do produto, depois da da validação de ambos e criado o post que tem uma variavel que recebe userId, name, description, productsIds de um requisição do corpo do clint os userId e o productsIds são validados com as funções e é criado no banco a order depois é feito um for para validar cada produto da requisição após a validação é criado o   productOrder que valida o product e o pedido sendo feito um push dos produtos no array Product[] e por final ele envia a order e os products para o client.

A pasta util/(app/routes/server).

/app ele importa o express, cors, router e outros frameworks. Inicia o servidor express define as rotas(routes).

/router ele cria a class Routes que define as rotas.

/server arquivo server.ts inicia a aplicação express.

