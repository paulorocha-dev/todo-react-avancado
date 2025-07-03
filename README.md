# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# todo-react-avancado

Este projeto é uma aplicação de lista de tarefas desenvolvida com React, utilizando Hooks, Context API, Memoization e estilizada com Tailwind CSS. As tarefas são salvas em uma API externa fornecida pelo serviço CrudCrud.

Para rodar o projeto localmente, você precisa ter o Node.js e o npm instalados. Clone o repositório, instale as dependências com npm install e configure a URL da API CrudCrud no arquivo do hook useTarefas.js, substituindo pelo seu token pessoal da API. Depois, execute o comando npm run dev para iniciar o servidor de desenvolvimento e acesse o endereço no seu navegador.