</p>
<h1 align="center">
	ReactJS Challenge Allintra 📶
</h1>

<!-- ![alt text](src/shared/assets/screenshots/SCHT1.jpg)
![alt text](src/shared/assets/screenshots/SCHT2.jpg)
![alt text](src/shared/assets/screenshots/SCHT3.jpg)
![alt text](src/shared/assets/screenshots/SCHT4.jpg) -->

<h4 align="center"> 
🧾 Dashboard  Concluído 🚀 
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

 O site consiste em um dashboard que mostra em tempo real os valores de algumas criptomoedas em USDT onde o usuário pode visualizar o valor atual, a variação de preço desde que a página foi carregada e o percentual de variação.

Projeto desenvolvido durante a avaliação para o teste de Desenvolvedor React Senior para  **[Allintra](https://ant.design/)**.

---

## ⚙️ Funcionalidades

- 👀 Visualizar o valor atual da moeda em USDT 
- ➕ Percentual de variação
- ✏️ Variação de preço
- 🔄 Sincronização automática quando houver uma nova mensagem emitida pela binance
---

## 🚀 Como executar o projeto
 - #### Renomeie o .env.example para .env.local e adicione a url do WebSocket da binance (eu utilizei o wss://stream.binance.com:9443)

### Pré-requisitos para rodar com 🐳 **Docker**:
  - #### ⚠️ Certifique-se de ter o  🐳 **Docker** instalado em sua maquina
  - #### 📂 Abra o terminal e navegue até a pasta raiz do projeto (onde está localizado o arquivo Dockerfile) 
  
  - #

  ### 🎲 Vamos executar os comandos
---
  
  - #### ⚠️ Caso fique dando erro de permissão e você esteja no linux, execute o comando com sudo no inicio
```sh
# Execute o Build da imagem:
$ docker build -t allintra .  
```

```sh
# Agora rode o comando para executar o container:
$ docker run  -d  -p 3000:3000 allintra--name allintra-container allintra
```
### ✨ Se tudo correu bem, agora você estará com seu **DASHBOARD** funcionando perfeitamente!🎉 Acesse aqui: http://localhost:3000/

#

### Pré-requisitos para rodar sem docker:
  - #### ⚠️ Certifique-se de ter o **node 18**  e o **yarn** instalados na sua maquina 

  ### 🎲 Vamos executar os comandos
---
  

```sh
# Instale as dependencias:
$ yarn install
```
```sh
# Agora execute o projeto em modo de desenvolvimento:
$ yarn dev
```
### ✨ Se tudo correu bem, agora você estará com seu **DASHBOARD** funcionando perfeitamente!🎉 Acesse aqui: http://localhost:3000/

#


## 🛠 Tecnologias

#### **Web**  ([React](https://react.dev/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Antd](https://ant.design/)**
-   **[Redux](https://redux.js.org/introduction/getting-started)**
-   **[Styled Components](https://www.styled-components.com)**
-   **[React useWebSocket](https://github.com/robtaussig/react-use-websocket#readme)**

> Veja o arquivo  [package.json](https://)

---

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Lucas Santos 👋🏽 [Entre em contato!](https://www.linkedin.com/in/lucas-santos-758084112)

---
