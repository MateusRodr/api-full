# API de Gerenciamento de Tasks

Uma API para gerenciar tasks, permitindo **criar, atualizar, listar e deletar tarefas**.  
Desenvolvida com **Node.js** e **Prisma**.

---

## 🧰 Tecnologias

- Node.js  
- Prisma  
- SQLite  
- Docker (opcional)

---

## ⚙️ Funcionalidades

- Criar uma nova task  
- Atualizar uma task existente  
- Listar todas as tasks  
- Buscar task por ID  
- Deletar uma task  

---

## 📋 Pré-requisitos

- Node.js >= 20  
- npm ou yarn  
- Banco de dados: SQLite  
- Docker (opcional)

---

## 🚀 Instalação

```bash
# Clone o repositório
git clone https://github.com/MateusRodr/api-full.git
cd api-full

# Instale as dependências
npm install
# ou
yarn install
```

Crie o arquivo `.env` na raiz do projeto e adicione:

```env
DATABASE_URL="file:./dev.db"
```

Depois, rode as migrações do Prisma:

```bash
npx prisma migrate dev
```

E por fim, inicie o servidor:

```bash
npm run dev
# ou
yarn dev
```

A API rodará em:  
👉 **http://localhost:3012**

---

## 📡 Endpoints da API

### 🔹 GET `/user`
Retorna todas as tasks.

**Resposta**
```json
[
  {
    "id": 1,
    "title": "Comprar leite",
    "status": "in-progress"
  }
]
```

---

### 🔹 POST `/user`
Cria uma nova task.

**Requisição**
```json
{
  "title": "Estudar NestJS",
  "status": "in-progress"
}
```

**Resposta**
```json
{
  "id": 2,
  "title": "Estudar NestJS",
  "status": "in-progress"
}
```

---

### 🔹 GET `/user/:id`
Retorna uma task específica pelo ID.

---

### 🔹 PUT `/user/:id`
Atualiza uma task existente.

---

### 🔹 DELETE `/user/:id`
Deleta uma task pelo ID.

---

## 🧪 Testes (opcional)
Se houver testes, execute com:

```bash
npm test
# ou
yarn test
```

---

## 🧑‍💻 Autor

Desenvolvido por **Mateus dos Santos Rodrigues** 💻  
📦 [GitHub](https://github.com/MateusRodr)

---

## 📄 Licença

Este projeto está sob a licença **MIT**.