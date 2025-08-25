# Configuração do Supabase

Este documento contém as instruções para configurar o projeto no Supabase.

## 1. Criar Projeto no Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Faça login ou crie uma conta
3. Clique em "New Project"
4. Escolha sua organização
5. Defina um nome para o projeto (ex: "gestao-alunos")
6. Escolha uma senha forte para o banco de dados
7. Selecione a região mais próxima
8. Clique em "Create new project"

## 2. Configurar Variáveis de Ambiente

1. No dashboard do Supabase, vá para **Settings** > **API**
2. Copie a **Project URL** e a **anon public key**
3. No arquivo `.env.local` do projeto, substitua:

```env
NEXT_PUBLIC_SUPABASE_URL=sua_project_url_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_anon_key_aqui
```

## 3. Executar Script de Configuração

1. No dashboard do Supabase, vá para **SQL Editor**
2. Clique em "New query"
3. Copie todo o conteúdo do arquivo `supabase-setup.sql`
4. Cole no editor SQL
5. Clique em "Run" para executar o script

## 4. Verificar Configuração

Após executar o script, você deve ver as seguintes tabelas criadas:

- `profiles` - Perfis dos usuários
- `students` - Dados dos alunos
- `performance_tests` - Testes de performance

## 5. Configurar Autenticação

1. Vá para **Authentication** > **Settings**
2. Em **Site URL**, adicione: `http://localhost:3000`
3. Em **Redirect URLs**, adicione: `http://localhost:3000/auth/callback`
4. Salve as configurações

## 6. Testar a Aplicação

1. Execute `npm run dev` no terminal
2. Acesse `http://localhost:3000`
3. Teste o cadastro e login de usuários
4. Verifique se os dados estão sendo salvos corretamente

## 7. Configurações Adicionais

### Políticas de Segurança (RLS)

O script já configura as políticas de Row Level Security automaticamente:

- Usuários só podem ver/editar seus próprios dados
- Cada tabela tem políticas específicas de SELECT, INSERT, UPDATE e DELETE

### Triggers e Funções

- **update_updated_at_column()**: Atualiza automaticamente o campo `updated_at`
- **handle_new_user()**: Cria automaticamente um perfil quando um usuário se registra

### Índices

O script cria índices para otimizar as consultas mais comuns:

- Índices em `user_id` para filtros por usuário
- Índices em `active` para filtros de alunos ativos
- Índices em `test_date` para ordenação por data

## Troubleshooting

### Erro: "relation does not exist"

- Verifique se o script SQL foi executado completamente
- Confirme se você está no schema `public`
- Reexecute o script se necessário

### Erro de autenticação

- Verifique se as variáveis de ambiente estão corretas
- Confirme se as URLs de redirect estão configuradas
- Verifique se o projeto Supabase está ativo

### Problemas de permissão

- Verifique se as políticas RLS estão ativas
- Confirme se o usuário está autenticado
- Teste com dados de exemplo