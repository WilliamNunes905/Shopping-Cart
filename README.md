# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

- `git clone git@github.com:WilliamNunes905/Shopping-Cart.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-028-b-project-shopping-cart`

2. Instale as dependências e inicialize o projeto

- Instale as dependências:
  - `npm install`

3. Rodar o projeto

- Script para iniciar o projeto
  - `npm run dev`

</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

Nesse projeto você vai implementar o TDD (Test Driven Development) também conhecido como _desenvolvimento orientado a testes_, que é uma prática muito utilizada no mercado de trabalho para garantir que o código será implementado da maneira correta. Ou seja, primeiro você vai escrever o teste para uma função e depois vai implementar a lógica para que a função execute.

Você vai ser responsável por implementar testes para as funções: `fetchProductsList` e `fetchProduct`.

### Cobertura de testes

Para avaliar se seus testes estão cobrindo toda a função, será utilizado a **cobertura de testes**, que avalia a eficácia dos testes implementados de acordo com os requisitos, determinando se cobrem o que foi pedido ou não.

⚠️ **Será testado apenas as funções pedidas e não toda a aplicação!**

Conforme você for realizando os testes do projeto, a porcentagem da cobertura total irá aumentar. Para a cobertura total será avaliado 25%, 50%, 75%, e, por fim, 100% dos testes. Para cada função solicitada a cobertura de testes irá avaliar a cobertura das linhas da sua função.

Para executar seus testes, execute o comando abaixo:

```bash
npm test
```

Para executar e acompanhar a implementação da sua cobertura de testes, rode o comando abaixo:

```bash
npm run test:coverage
```

Ao realizar o comando de cobertura de testes terá um resultado similar a este:

![Cobertura de Testes](/images/cobertura.png)

Verifique com o comando `npm test` se todos os itens da cobertura dos testes estão passando corretamente.

⚠️ **Atenção:** cuidado com eventuais falso-positivos!

### Pontos importantes para a implementação dos testes

Disponibilizamos a API simulada (mockada) para você implementar seus testes. Isso significa que será possível simular o consumo de todos os dados da API dentro do seu ambiente de testes, de forma segura e independente de fatores externos que possam ocorrer.

- As funções `fetchProductsList` e `fetchProduct` devem ser implementadas por você;

- Os retornos esperados das funções já estão importados nos arquivos de teste e vão estar especificados nos requisitos;

- O `window.fetch` está definido em todos os testes, ou seja, será possível usar a função `fetch` dentro do seu ambiente de testes sem precisar importar ou instalar bibliotecas;

- Para nosso ambiente de testes, o `fetch` está limitado a atender somente a configuração da API referente ao projeto;

- Deseja checar se uma função foi chamada? Ou se foi chamada com um argumento específico? Que tal dar uma olhada nos matchers da [documentação](https://jestjs.io/pt-BR/docs/expect#tohavebeencalled).

### Cypress

Para avaliar o seu projeto como um todo, será utilizado o _Cypress_.

Cypress é uma ferramenta de teste de front-end desenvolvida para a web.

Antes de utilizá-lo, certifique-se de ter executado o comando `npm install` dentro do projeto.

Você pode rodar o cypress localmente para verificar se seus requisitos estão passando, para isso execute um dos seguintes comandos:

Para executar os testes e vê-los rodando em uma janela de navegador:

```bash
npm run cy:open
```

ou para executar os testes apenas no terminal:

```bash
npm run cy
```

Após executar o comando acima, será aberta uma janela de navegador e então basta clicar no nome do arquivo de teste que quiser executar (project.spec.js).

⚠️ **Atenção:** Para que o cypress funcione você precisa estar com a aplicação rodando localmente. Para isso, execute o comando `npm run dev` no terminal.

Você também pode assistir a [este](https://vimeo.com/539240375/a116a166b9) vídeo 😉🎙

⚠️ **Atente-se para os nomes de classes que alguns elementos de seu projeto devem possuir**. O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

</details>

<details>
<summary><strong>🏗 Estrutura do projeto</strong></summary><br />

O arquivo `src/helpers/cartFunctions.js` contém uma estrutura de código inicial, que cria alguns elementos HTML. Leia cada função atentamente para entender o que o código está fazendo.

É no `main.js` que você vai implementar a lógica para desenvolver o projeto. Fique à vontade para criar novas funções e/ou arquivos!

<details>
  <summary>
    Clique aqui para saber um pouco mais sobre o que cada função faz
  </summary> <br />

- `createProductImageElement`: Cria um elemento de imagem;
- `createCustomElement`: Estrutura para criar um elemento;
- `createProductElement`: Cria a lista de produtos;
- `getIdFromProduct`: Pega o `id` de um produto;
- `createCartProductElement`: Cria os elementos do carrinho.

</details>
</details>

<details>
<summary><strong>⚙️ API do Mercado Livre</strong></summary><br />

O [manual da API do Mercado Livre](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas) contém todas as informações acerca da API (retorno, estrutura). Nesse projeto você vai precisar apenas de alguns dos _endpoints_, sendo eles:

- `https://api.mercadolibre.com/sites/MLB/search?q=$QUERY`: traz uma lista de produtos, onde `$QUERY` é o termo a ser buscado. Por exemplo, se o termo for `computador`, o retorno será parecido com esse:

  <details>
    <summary>Retorno da requisição de listagem de produtos</summary>

    Esse retorno possui várias informações acerca da lista de produtos. Dento do array `results` é onde você vai encontrar a lista de produtos.

  ```json
  {
      "site_id": "MLB",
      "query": "computador",
      "paging": {
          "total": 406861,
          "offset": 0,
          "limit": 50,
          "primary_results": 1001
      },
      "results": [
          {
              "id": "MLB1341925291",
              "site_id": "MLB",
              "title": "Processador Intel Core I5-9400f 6 Núcleos 128 Gb",
              "seller": {
                  "id": 385471334,
                  "permalink": null,
                  "power_seller_status": null,
                  "car_dealer": false,
                  "real_estate_agency": false,
                  "tags": []
              },
              "price": 899,
              "currency_id": "BRL",
              "available_quantity": 1,
              "sold_quantity": 0,
              "buying_mode": "buy_it_now",
              "listing_type_id": "gold_pro",
              "stop_time": "2039-10-10T04:00:00.000Z",
              "condition": "new",
              "permalink": "https://www.mercadolivre.com.br/processador-intel-core-i5-9400f-6-nucleos-128-gb/p/MLB13953199",
              "thumbnail": "http://mlb-s2-p.mlstatic.com/813265-MLA32241773956_092019-I.jpg",
              "accepts_mercadopago": true,
              "installments": {
                  "quantity": 12,
                  "amount": 74.92,
                  "rate": 0,
                  "currency_id": "BRL"
              },
              "address": {
                  "state_id": "BR-SP",
                  "state_name": "São Paulo",
                  "city_id": "BR-SP-27",
                  "city_name": "São José dos Campos"
              },
              "shipping": {
                  "free_shipping": true,
                  "mode": "me2",
                  "tags": [
                      "fulfillment",
                      "mandatory_free_shipping"
                  ],
                  "logistic_type": "fulfillment",
                  "store_pick_up": false
              },
              "seller_address": {
                  "id": "",
                  "comment": "",
                  "address_line": "",
                  "zip_code": "",
                  "country": {
                      "id": "BR",
                      "name": "Brasil"
                  },
                  "state": {
                      "id": "BR-SP",
                      "name": "São Paulo"
                  },
                  "city": {
                      "id": "BR-SP-27",
                      "name": "São José dos Campos"
                  },
                  "latitude": "",
                  "longitude": ""
              },
              "attributes": [
                  {
                      "source": 1,
                      "id": "ALPHANUMERIC_MODEL",
                      "value_id": "6382478",
                      "value_struct": null,
                      "values": [
                          {
                              "name": "BX80684I59400F",
                              "struct": null,
                              "source": 1,
                              "id": "6382478"
                          }
                      ],
                      "attribute_group_id": "OTHERS",
                      "name": "Modelo alfanumérico",
                      "value_name": "BX80684I59400F",
                      "attribute_group_name": "Outros"
                  },
                  {
                      "id": "BRAND",
                      "value_struct": null,
                      "attribute_group_name": "Outros",
                      "attribute_group_id": "OTHERS",
                      "source": 1,
                      "name": "Marca",
                      "value_id": "15617",
                      "value_name": "Intel",
                      "values": [
                          {
                              "id": "15617",
                              "name": "Intel",
                              "struct": null,
                              "source": 1
                          }
                      ]
                  },
                  {
                      "name": "Condição do item",
                      "value_id": "2230284",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "source": 1,
                      "id": "ITEM_CONDITION",
                      "value_name": "Novo",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "2230284",
                              "name": "Novo",
                              "struct": null,
                              "source": 1
                          }
                      ]
                  },
                  {
                      "id": "LINE",
                      "value_name": "Core i5",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "name": "Linha",
                      "value_id": "7769178",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "7769178",
                              "name": "Core i5",
                              "struct": null,
                              "source": 1
                          }
                      ],
                      "source": 1
                  },
                  {
                      "id": "MODEL",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "6637008",
                              "name": "i5-9400F",
                              "struct": null,
                              "source": 1
                          }
                      ],
                      "attribute_group_id": "OTHERS",
                      "name": "Modelo",
                      "value_id": "6637008",
                      "value_name": "i5-9400F",
                      "attribute_group_name": "Outros",
                      "source": 1
                  }
              ],
              "differential_pricing": {
                  "id": 33580182
              },
              "original_price": null,
              "category_id": "MLB1693",
              "official_store_id": null,
              "catalog_product_id": "MLB13953199",
              "tags": [
                  "brand_verified",
                  "good_quality_picture",
                  "good_quality_thumbnail",
                  "immediate_payment",
                  "cart_eligible"
              ],
              "catalog_listing": true
          },
      ]
  }
  ```

  </details>

- `https://api.mercadolibre.com/items/$ProductID`: traz detalhes de um determinado produto, onde `$ProductID` é o `id` do produto a ser buscado. Por exemplo, se o `id` do produto for `MLB1341706310`, o retorno será parecido com esse:

  <details>
    <summary>Retorno da requisição de detalhes de um produto</summary>

    Esse retorno traz informações detalhadas sobre cada um dos produtos. Por exemplo, o `id` desse produto, o `title`, que o título do produto, `price`, que é o preço e assim por diante.

  ```json
  {
    "id": "MLB1341706310",
    "site_id": "MLB",
    "title": "Processador Gamer Amd Ryzen 5 2600 Yd2600bbafbox De 6 Núcleos E 3.9ghz De Frequência",
    "subtitle": null,
    "seller_id": 245718870,
    "category_id": "MLB1693",
    "official_store_id": 1929,
    "price": 1068,
    "base_price": 1068,
    "original_price": null,
    "currency_id": "BRL",
    "initial_quantity": 93,
    "available_quantity": 0,
    "sold_quantity": 50,
    "sale_terms": [],
    "buying_mode": "buy_it_now",
    "listing_type_id": "gold_special",
    "start_time": "2019-10-15T18:13:00.000Z",
    "stop_time": "2040-01-27T00:26:51.000Z",
    "condition": "new",
    "permalink": "https://produto.mercadolivre.com.br/MLB-1341706310-processador-gamer-amd-ryzen-5-2600-yd2600bbafbox-de-6-nucleos-e-39ghz-de-frequncia-_JM",
    "thumbnail_id": "852106-MLA42157659481_062020",
    "thumbnail": "http://http2.mlstatic.com/D_852106-MLA42157659481_062020-I.jpg",
    "secure_thumbnail": "https://http2.mlstatic.com/D_852106-MLA42157659481_062020-I.jpg",
    "pictures": [],
    "video_id": null,
    "descriptions": [
    ],
    "accepts_mercadopago": true,
    "non_mercado_pago_payment_methods": [
    ],
    "shipping": {},
    "international_delivery_mode": "none",
    "seller_address": {},
    "seller_contact": null,
    "location": {
    },
    "coverage_areas": [
    ],
    "attributes": [],
    "warnings": [
    ],
    "listing_source": "",
    "variations": [
    ],
    "status": "paused",
    "sub_status": [],
    "tags": [],
    "warranty": "Garantia de fábrica: 3 anos",
    "catalog_product_id": "MLB9196241",
    "domain_id": "MLB-COMPUTER_PROCESSORS",
    "parent_item_id": null,
    "differential_pricing": null,
    "deal_ids": [
    ],
    "automatic_relist": false,
    "date_created": "2019-10-15T18:13:00.000Z",
    "last_updated": "2022-02-05T06:46:48.434Z",
    "health": null,
    "catalog_listing": true,
    "channels": []
  }
  ```
</details>
</details>


