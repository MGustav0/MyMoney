# My Money

![Badge](https://img.shields.io/badge/Ignite%20Rocketseat-ReactJS-blueviolet)
![Badge](https://img.shields.io/badge/types-Flow%20%7C%20TypeScript-blue)
![Badge](https://img.shields.io/badge/node-%3E%3D%2016.3.0-brightgreen)

> Status do Projeto: :construction: em desenvolvimento

## Tópicos

🔹 [Descrição do projeto](#link-descrição-do-projeto)

🔹 [Funcionalidades](#information_source-funcionalidades)

🔹 [Pré-requisitos](#sparkles-pré-requisitos)

🔹 [Como configurar a aplicação](#floppy_disk-iniciar/configurar-banco-de-dados)

🔹 [Como rodar a aplicação](#arrow_forward-como-rodar-a-aplicação)

🔹 [Como rodar os testes](#building_construction-como-rodar-os-testes)

🔹 [Insomnia](#sleeping-insomnia)

🔹 [Layout da Aplicação](#scroll-layout-da-aplicação)

🔹 [Resolvendo Problemas](#hammer-resolvendo-problemas)

🔹 [Tarefas em aberto](#pencil-tarefas-em-aberto)

🔹 [Desenvolvedores](#octopus-desenvolvedores)

## :link: Descrição do projeto

<p align="justify">
  Projeto criado usando a versão 2.4.2 do Yarn.
</p>

## :information_source: Funcionalidades

:heavy_check_mark: Funcionalidade 1  

:heavy_check_mark: Funcionalidade 2  

:x: Funcionalidade 3  

:x: Funcionalidade 4

## :sparkles: Pré-requisitos

⚠️ [Node](https://nodejs.org/en/download/)

⚠️ [Yarn 2](https://yarnpkg.com/getting-started/install)

⚠️ [Docker](https://www.docker.com/products/docker-desktop)

⚠️ [PostgreSQL Docker](https://hub.docker.com/_/postgres)

⚠️ [MongoDB Docker](https://hub.docker.com/_/mongo)

⚠️ [Redis Docker](https://hub.docker.com/_/redis)

:exclamation: Para utilizar o Yarn 2, rode o seguinte comando na raiz do seu projeto `yarn dlx @yarnpkg/pnpify --sdk vscode` e configure sua IDE para utilizar o typescript pnpify.

:exclamation: Você precisará seguir os passos a seguir para poder rodar a aplicação na sua máquina.

## :floppy_disk: Iniciar/Configurar banco de dados

Ter Docker e as imagens PostgreSQL, MongoDB e Redis instalados.

### :elephant: Instalar PostgreSQL via Docker

* `docker run --name ecommerceChallengePostgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
* Verificar se a imagem está rodando: `docker ps`
* Usuário: postgres
* Senha: docker
* Acesso pelo terminal: `docker exec -it nome_do_container bash`

### :dolphin: Criar Banco de Dados PostgreSQL

1. Instale o DBeaver, ou outro gerenciador de Banco de Dados, ou faça por linha de comando.
2. Acesse com o usuário e senha supracitados.
3. Crie um Banco de Dados com o nome __gostack_desafio09__.
4. Crie um Banco de Dados com o nome __gostack_desafio09_tests__.

### :four_leaf_clover: Instalar MongoDB via Docker

* `docker run --name ecommerceChallengeMongo -p 27017:27017 -d -t mongo`
* Verificar se a imagem está rodando: `docker ps`
* Usuário: postgres
* Senha: docker
* Acesso pelo terminal: `docker exec -it nome_do_container bash`

### :file_folder: Instalar Redis via Docker

* `docker run --name ecommerceChallengeRedis -p 6379:6379 -d -t redis:alpine`
* Verificar se a imagem está rodando: `docker ps

## :arrow_forward: Como rodar a aplicação

Agora navegue até a pasta criada e abra no Visual Studio Code, lembre-se de executar o comando `yarn` dentro da pasta no seu terminal para instalar todas as dependências. Após a instalação digite: `yarn dev:server`.

Pronto! Agora basta acessar a aplicação à partir do link: http://localhost:3333/

## :building_construction: Como rodar os testes

```bash
yarn test
```

## :sleeping: Insomnia

Para fazer o download do [insomnia](https://insomnia.rest/download/), para utilizar o mesmo workspace utilizado no projeto clique [aqui](), baixe e importe no seu Insominia.

## :scroll: Layout da Aplicação

Layout a ser seguido no [figma](https://www.figma.com/file/0xmu9mj2TJYoIOubBFWsk5/dtmoney-Ignite-(Copy)?node-id=0%3A1).

> Link do deploy da aplicação. Exemplo com netlify: https://certificates-for-everyone-womakerscode.netlify.app/

Web

<img src="" width="640" heigth="360" />

Mobile

<img src="" width="270" heigth="480" />

## :hammer: Resolvendo Problemas

Caso encontre algum problema, bug ou erro me conte [aqui]()!

## :pencil: Tarefas em aberto

🖊 Tarefa 1

🖊 Tarefa 2

🖊 Tarefa 3

## :octopus: Desenvolvedores

| [<img src="https://avatars1.githubusercontent.com/u/18315899?s=460&u=54d9c6ea66f2b27120bf39dabe1d36ff22a92b9d&v=4>][(https://github.com/MGustav0](https://avatars1.githubusercontent.com/u/18315899?s=460&u=54d9c6ea66f2b27120bf39dabe1d36ff22a92b9d&v=4))" width=115><br><sub>Gustavo Moreira</sub>](https://github.com/MGustav0) | [<img src="https://avatars1.githubusercontent.com/u/18315899?s=460&u=54d9c6ea66f2b27120bf39dabe1d36ff22a92b9d&v=4>][(https://github.com/MGustav0](https://avatars1.githubusercontent.com/u/18315899?s=460&u=54d9c6ea66f2b27120bf39dabe1d36ff22a92b9d&v=4))" width=115><br><sub>Gustavo Moreira</sub>](https://github.com/MGustav0) |  [<img src="https://avatars1.githubusercontent.com/u/18315899?s=460&u=54d9c6ea66f2b27120bf39dabe1d36ff22a92b9d&v=4>][(https://github.com/MGustav0](https://avatars1.githubusercontent.com/u/18315899?s=460&u=54d9c6ea66f2b27120bf39dabe1d36ff22a92b9d&v=4))" width=115><br><sub>Gustavo Moreira</sub>](https://github.com/MGustav0) |
| :---: | :---: | :---:

## :copyright: Licença

The [MIT License](https://opensource.org/licenses/MIT) - Use freely, I am not responsible for the actions of third parties.

©️ Copyright? 2020 - Proffy - Intellectual property does not exist! Copying Is Not Theft.
