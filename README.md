# Gestão de Estágios - Back-end

API REST desenvolvida com NestJS para gerenciar a aplicação de gestão de estágios. Projeto criado para a APS da disciplina Desenvolvimento Web III.

## 🛠️ Tecnologias utilizadas

- Node.js
- NestJS
- TypeORM
- MySQL

## 📚 Funcionalidades

- CRUD completo para alunos, empresas e estágios
- Relacionamento entre as entidades
- Validação e tratamento de dados
- API RESTful consumida pelo front-end

## 🚀 Como executar

Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/gestao-estagios-backend.git
cd gestao-estagios-backend
```

Instale as dependências:

```bash
npm install
```

Configure as variáveis de ambiente no arquivo .env:

```
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=gestao_estagios
```

Rode as migrações ou configure o TypeORM para sincronizar as tabelas automaticamente.

Inicie a aplicação:

```bash
npm run start
```

A API estará disponível em: http://localhost:3001

## 📌 Observações

- O back-end é consumido pelo front-end disponível no repositório: [gestao-estagios-frontend](https://github.com/LucasSaviolo/gestao-estagios-frontend)
- Certifique-se de que o banco de dados está rodando e as credenciais do .env estão corretas.

## 📁 Estrutura de pastas (exemplo)

```
src/
├── alunos/
├── empresas/
├── estagios/
└── main.ts
```

## 🤝 Contribuição

- Contribuições são bem-vindas! Abra uma issue ou envie um pull request.

## 📄 Licença

- Este projeto está licenciado sob a GNU General Public License (GPL). Consulte o arquivo LICENSE para mais detalhes.

