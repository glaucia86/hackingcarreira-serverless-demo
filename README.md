# # Demo - Hacking de Carreira WoMakersCode 2020: APIs Escaláveis com Node.js & Arquitetura Serverless

[![image.png](https://i.postimg.cc/gc4jHtNQ/image.png)](https://postimg.cc/7bGqx9vn)

Repositório responsável pelas demos relacionadas ao evento **[Hacking de Carreira WoMakersCode 2020](https://womakerscode.org/carreira)**

## Recursos Utilizados 🚀

* **[Angular versão 9.x](https://cli.angular.io/)**
* **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=hackingcarreira_wmc-github-gllemos)**
* **[Node.js](https://nodejs.org/en/)**
* **[Postman](https://www.getpostman.com/)**
* **[Conta - Azure](https://azure.microsoft.com/pt-br/?WT.mc_id=hackingcarreira_wmc-github-gllemos)**
* **[Azure Web App Service](https://azure.microsoft.com/services/app-service/?WT.mc_id=hackingcarreira_wmc-github-gllemos)**
* **[Mongodb Community Server](https://www.mongodb.com/download-center/community)**
* **[MongodB Compass GUI](https://www.mongodb.com/download-center/compass)**
* **[Extensão Visual Studio Code: Azure Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=hackingcarreira_wmc-github-gllemos)**
* **[Azure Storage Account](https://azure.microsoft.com/pt-br/services/storage/?WT.mc_id=hackingcarreira_wmc-github-gllemos)**

## Conta - Azure for Students ⭐️

Caso você seja um(a) estudante de alguma Instituição de Ensino de Faculdade ou Universidade, poderá criar sua conta no **[Azure for Students](https://azure.microsoft.com/pt-br/free/students/?WT.mc_id=hackingcarreira_wmc-github-gllemos)**. Essa conta te dará o benefício em possuir crédito de USD 100,00 para usar os serviços de maneira gratuita, sem necessidade de possuir um cartão de crédito. Para ativar essa conta, bastam acessar o link ao lado: **[AQUI](https://azure.microsoft.com/pt-br/free/students/?WT.mc_id=hackingcarreira_wmc-github-gllemos)**

## Executando a Aplicação Localmente ❗️

### Executando a aplicação no lado do Front-End

1) Instalar os pacotes com o comando: (dentro da pasta `front`)

``` 
> npm install
```

2) Depois executar o seguinte comando para executar a aplicação (dentro da pasta `front`):

```
> ng serve -o
```

Depois bastam abrir o browser em **localhost:4200** (porta padrão de uma aplicação Angular)

### Executando a aplicação no lado do Back-End

Antes de iniciar os passos abaixo é muito importante que você execute nesse momento o MongoDb localmente!

1) Instalar os pacotes com o comando: (dentro da pasta `api`)

``` 
> npm install
```

2) Depois executar o seguinte comando para executar a aplicação (dentro da pasta `api`):

```
> nodemon
```

Depois bastam abrir o postamn em **localhost:8000** e testar as requisições

E vòilá! :heart: :heart:

## Consumindo as API's no Azure Functions(Mongo x CosmosDb) ⚡️

Visando facilitar o desenvolvimento e agilidade do projeto, já criei duas API que consomem esse projeto no Front-End. Para isso, seguem os links das apis:

### API via MongoDb - Azure Functions

Essa API persiste localmente no MongoDb via Azure Functions.

Para executar, bastam seguir os seguintes passos:

1. Baixar o projeto abaixo:

- **[CRUD Serverless MongoDb](https://github.com/glaucia86/crud-serverless-mongodb)**

2. Instalar as dependências necessárias com o comando:

```bash
> npm i
```

3. Criar um arquivo chamado: `local.settings.json` e incluir o bloco de código abaixo:

```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsStorage": "{AzureWebJobsStorage}"
  },
  "Host": {
    "LocalHttpPort": 7071,
    "CORS": "*"
  }
}
```
4. Execute o comando:

```bash
> func host start
```

E ele irá listar todos os endpoints criados e necessários para persistir juntamente com o nosso Front-End.

5. Agora abre o projeto `front` e vão até: `src -> app -> palestrante.service.ts`

6. Ao entrar no arquivo `palestrante.service.ts`, basta alterar a uri para: `http://localhost:7071/api`

7. Execute o projeto Angular com o comando: 

```bash
> ng server -o
```

E vòilá! Só começar a persistir!

## Links & Recursos Importantes ⭐️

Durante a live, comentei sobre importantes documentações, links e recursos que podem auxiliar o seu conhecimento sobre Serverless & Azure Functions

- ✅ **[Slides palestra - Criando API's Escaláveis com Node.js & Arquitetura Serverless](http://bit.ly/slides-braziljs19)**
- ✅ **[Cursos Grátis - Azure Functions](https://docs.microsoft.com/learn/browse/?term=functions&WT.mc_id=hackingcarreira_wmc-github-gllemos)**
- ✅ **[Azure para devs JavaScript & Node.js](https://docs.microsoft.com/javascript/azure/?WT.mc_id=hackingcarreira_wmc-github-gllemos&view=azure-node-latest)**
- ✅ **[Documentação Azure Functions](https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=hackingcarreira_wmc-github-gllemos)**
- ✅ **[Criando a sua Primeira Função no Visual Studio Code](https://docs.microsoft.com/azure/azure-functions/functions-create-first-function-vs-code?WT.mc_id=hackingcarreira_wmc-github-gllemos)**
- ✅ **[E-Book Grátis - Azure Serverless Computing Cookbook](https://azure.microsoft.com/resources/azure-serverless-computing-cookbook/?WT.mc_id=hackingcarreira_wmc-github-gllemos)**

## Tenho Dúvidas... O que Faço?! ❓

Caso tenham dúvidas aos códigos dos projetos relacionados a palestra, sintam-se à vontade em abrir uma **[ISSUE AQUI](https://github.com/glaucia86/hackingcarreira-serverless-demo/issues)**. Assim que possível, estarei respondendo as todas as dúvidas que tiverem!

