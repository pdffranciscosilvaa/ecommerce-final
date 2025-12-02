# Sinuelo do Pampa - E-commerce Gaúcho

Uma solução completa de e-commerce para venda de produtos gaúchos tradicionais, construída com tecnologias web modernas.

## Visão Geral

Sinuelo do Pampa é uma plataforma de e-commerce full-stack projetada para uma experiência de compra online fluida. Ela apresenta uma interface responsiva voltada para o cliente e um painel administrativo robusto para gerenciar produtos, pedidos e estoque.

## Principais Funcionalidades

*   **Catálogo de Produtos**: Navegue e pesquise uma ampla variedade de produtos com tema gaúcho.
*   **Carrinho de Compras**: Adicione itens facilmente, gerencie quantidades e prossiga para o checkout.
*   **Autenticação de Usuário**: Cadastro e login seguros para clientes e administradores.
*   **Painel Admin**: Controle total sobre produtos (CRUD), gerenciamento de estoque e processamento de pedidos.
*   **Design Responsivo**: Otimizado para todos os dispositivos, de desktops a celulares.

## Tecnologias

*   **Frontend**: HTML, CSS, JavaScript
*   **Backend**: Node.js, Express.js
*   **Banco de Dados**: MySQL

## Primeiros Passos

### Pré-requisitos

*   Node.js (v14+)
*   MySQL
*   npm

### Configuração

1.  **Clonar o repositório**:
    ```bash
    git clone [url_do_repositorio]
    cd ecommerce-project
    ```
2.  **Instalar dependências do backend**:
    ```bash
    cd BackEnd
    npm install
    ```
3.  **Configurar Ambiente**:
    Crie um arquivo `.env` no diretório `BackEnd` com suas credenciais de banco de dados e segredo JWT:
    ```
    DB_HOST=localhost
    DB_USER=seu_usuario
    DB_PASS=sua_senha
    DB_NAME=ecom
    JWT_SECRET=sua_chave_secreta_super_segura
    ```
4.  **Sincronizar Banco de Dados**:
    ```bash
    node sync.js
    ```
5.  **Executar o Servidor Backend**:
    ```bash
    npm start
    ```
6.  **Executar o Frontend**:
    Abra `ecommerce-final/FrontEnd/index.html` em seu navegador web.

## Autor

**Francisco Lisboa**