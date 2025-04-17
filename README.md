# 📝 ToDo FrontEnd

Aplicação de lista de tarefas (ToDo) desenvolvida em React + Tailwind Usando Api externa.

---

## 🔗 Backend (API)

Este projeto consome a seguinte API:

👉 [ToDo BackEnd (GitHub)](https://github.com/shadowstarrr/ToDo-BackEnd.git)


## 🚀 Como instalar e iniciar

```bash
# Instale as dependências
npm install

# Rode em modo de desenvolvimento
npm run dev

# Para gerar a versão de produção (build)
npm run build
```
---

## ⚠️ Erro de `fetch`?

Se estiver recebendo erro de `fetch` ao adicionar/remover dentre outros, **verifique se os arquivos abaixo estão apontando para a URL correta da sua API**:
```
./src/components/add_todo.tsx
./src/components/get_todo.tsx
./src/components/rem_todo.tsx
```
---