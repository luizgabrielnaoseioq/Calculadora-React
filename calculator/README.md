# Calculadora React

Uma calculadora simples e moderna desenvolvida com React, TypeScript, Vite e TailwindCSS. O projeto possui histórico de operações, interface responsiva e design elegante.

## ✨ Funcionalidades

- Realiza operações matemáticas básicas: adição, subtração, multiplicação e divisão
- Suporte a números decimais (vírgula)
- Histórico de operações com opção de limpeza
- Interface responsiva e estilizada com TailwindCSS
- Armazenamento do histórico no localStorage

## 🚀 Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)

## 📁 Estrutura de Pastas

```
src/
  components/
    Calculator/         # Componentes da calculadora
    History/            # Histórico de operações
    ui/                 # Componentes de UI reutilizáveis
  context/              # Contexto global da calculadora
  hooks/                # Hooks customizados
  styles/               # Estilos globais
```

## 🖥️ Como Executar o Projeto

1. Instale as dependências:
   ```bash
   cd calculator && pnpm install
   # ou
   npm install
   # ou
   yarn install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm dev
   # ou
   npm run dev
   # ou
   yarn dev
   ```
3. Acesse `http://localhost:5173` no navegador.

## 📦 Scripts Disponíveis

- `dev`: inicia o servidor de desenvolvimento
- `build`: gera a build de produção
- `preview`: visualiza a build de produção localmente
- `lint`: executa o linter

## 📝 Observações

- O histórico é salvo no navegador e pode ser limpo pelo botão "Limpar Histórico".
- O projeto utiliza componentes funcionais, hooks e Context API para gerenciamento de estado.

---

Desenvolvido por Luiz Gabriel Nazário
