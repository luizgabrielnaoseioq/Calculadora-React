# 🧮 Calculadora – Fundamentos do React

Projeto desenvolvido durante os estudos de **React.js** com foco em **componentização, estados, contexto e hooks customizados**.
O objetivo é praticar os principais fundamentos do React criando uma aplicação funcional e responsiva.

---

## 🚀 Tecnologias

* [React.js](https://reactjs.org/)
* [TailwindCSS](https://tailwindcss.com/)
* [Babel](https://babeljs.io/)
* [LocalStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)

---

## ✨ Funcionalidades

* Interface de **calculadora moderna** com TailwindCSS
* **Componentes reutilizáveis** (Button, Text, Card)
* **Gerenciamento de estado** com React Hooks
* **Histórico de operações** salvo no LocalStorage
* **Hook customizado** (`useCalculator`) para lógica da calculadora
* Layout **responsivo** para diferentes tamanhos de tela

---

## 📂 Estrutura

* `Calculator` → componente principal da calculadora
* `CalculatorDisplay` → exibição da operação e resultado
* `Button` / `Text` / `Card` → componentes reutilizáveis de UI
* `CalculatorProvider` → contexto para armazenar histórico
* `OperationHistory` → exibe histórico persistido

---

## ▶️ Como rodar o projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repo.git
   ```
2. Abra o `index.html` diretamente no navegador
   *(este projeto não exige build nem dependências extras)*

---

## 📚 Aprendizados

* Uso de **componentização** para separar responsabilidades
* Prática com **hooks (`useState`, `useEffect`, `useContext`)**
* Persistência de dados com **LocalStorage**
* Estilização com **TailwindCSS inline no HTML**

---

## 🔮 Próximos Passos

* Migrar para projeto com Vite/CRA para build otimizado
* Adicionar testes automatizados
* Melhorar acessibilidade e usabilidade
