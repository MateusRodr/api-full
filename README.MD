# API de Gerenciamento de Tasks

Uma API para gerenciar tasks, permitindo **criar, atualizar, listar e deletar tarefas**.  
Desenvolvida com **Node.js** e **Prisma**.

---

## 🧰 Tecnologias

- **Node.js** 20+
- **TypeScript**
- **Prisma ORM**
- **SQLite** (Desenvolvimento/Testes)
- **Express.js**
- **Jest** (Testes)
- **Docker** (Opcional)
- **Swagger/OpenAPI** (Documentação)
- **tsyringe** (Injeção de Dependência)
---

## ⚙️ Funcionalidades

- ✅ Criar uma nova task
- ✅ Listar todas as tasks
- ✅ Buscar task por ID
- ✅ Atualizar uma task existente
- ✅ Deletar uma task
- ✅ Validação de dados com Zod
- ✅ Documentação automática com Swagger
- ✅ Testes unitários
- ✅ Injeção de dependência

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

```

A API rodará em:  
👉 **http://localhost:3012**

---

📚 Documentação da API

A documentação interativa está disponível em:
http://localhost:3012/api-docs

---
## 📡 Endpoints da API

### 🔹 GET `/user`
Retorna todas as tasks.

**Resposta**
```json
[
  {
    "id": 1,
    "title": "estudar Laravel",
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
# Configurar e executar testes
npm run db:test:push
npm run db:test:generate
npm test
```

---

## 🧑‍💻 Autor

Desenvolvido por **Mateus dos Santos Rodrigues** 💻  
📦 [GitHub](https://github.com/MateusRodr)

---

## 📄 Licença

Este projeto está sob a licença **MIT**.