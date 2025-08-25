# Cooper Pro

Um sistema completo para gestão de avaliandos e testes de performance, desenvolvido com Next.js 15, Supabase e TypeScript.

## 🚀 Funcionalidades

- **Autenticação completa** com Supabase Auth
- **CRUD de avaliandos** com informações pessoais e de contato
- **Gestão de testes de performance** com múltiplas métricas
- **Dashboard com estatísticas** e visualização de dados
- **PWA (Progressive Web App)** para instalação em dispositivos móveis
- **Interface responsiva** com Tailwind CSS
- **Testes automatizados** (unitários e end-to-end)

## 🛠️ Tecnologias

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Backend:** Supabase (PostgreSQL, Auth, Real-time)
- **Testes:** Jest, Testing Library, Playwright
- **Deploy:** Vercel
- **PWA:** Service Worker, Web App Manifest

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Conta no Supabase
- Conta na Vercel (para deploy)

## 🔧 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/luiguyxlim/cooper-pro.git
cd cooper-pro
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o Supabase

1. Crie um projeto no [Supabase](https://supabase.com)
2. Execute o script SQL em `supabase-setup.sql` no SQL Editor
3. Configure as variáveis de ambiente:

```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima
SUPABASE_SERVICE_ROLE_KEY=sua_chave_service_role
```

### 4. Execute o projeto

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 🗄️ Estrutura do Banco de Dados

### Tabelas Principais

- **profiles**: Perfis de usuário (criados automaticamente)
- **evaluatees**: Informações dos avaliandos
- **performance_tests**: Testes de performance com métricas

### Métricas de Performance

- Velocidade (0-10)
- Agilidade (0-10)
- Força (0-10)
- Resistência (0-10)
- Flexibilidade (0-10)
- Coordenação (0-10)
- Equilíbrio (0-10)
- Potência (0-10)
- Tempo de Reação (segundos)
- VO2 Max (ml/kg/min)

## 🧪 Testes

### Testes Unitários

```bash
# Executar todos os testes
npm run test

# Executar em modo watch
npm run test:watch

# Executar com coverage
npm run test:coverage
```

### Testes End-to-End

```bash
# Executar testes E2E
npm run test:e2e

# Executar com interface gráfica
npm run test:e2e:ui

# Executar todos os testes
npm run test:all
```

## 📱 PWA (Progressive Web App)

O Cooper Pro é uma PWA completa que pode ser instalada em dispositivos móveis e desktop:

- **Offline Support**: Funciona sem conexão
- **Instalável**: Pode ser instalado como app nativo
- **Responsivo**: Interface adaptada para todos os dispositivos
- **Service Worker**: Cache inteligente e atualizações automáticas

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente no painel da Vercel
3. Deploy automático a cada push na branch main

### Outras Plataformas

O projeto é compatível com:
- Netlify
- Railway
- Render
- AWS Amplify

## 📁 Estrutura do Projeto

```
cooper-pro/
├── src/
│   ├── app/                 # App Router (Next.js 15)
│   │   ├── (auth)/         # Rotas de autenticação
│   │   ├── dashboard/      # Dashboard principal
│   │   ├── evaluatees/     # Gestão de avaliandos
│   │   └── tests/          # Gestão de testes
│   ├── components/         # Componentes reutilizáveis
│   │   ├── ui/            # Componentes de UI
│   │   └── forms/         # Formulários
│   └── lib/               # Utilitários e configurações
├── public/                # Arquivos estáticos
├── e2e/                   # Testes end-to-end
├── supabase/              # Configurações do Supabase
└── docs/                  # Documentação
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte e dúvidas:
- Abra uma [issue](https://github.com/luiguyxlim/cooper-pro/issues)
- Entre em contato via email

## 🔄 Changelog

### v0.1.0 (2025-01-25)
- ✨ Versão inicial do Cooper Pro
- 🔐 Sistema de autenticação completo
- 👥 CRUD de avaliandos
- 📊 Gestão de testes de performance
- 📱 PWA implementado
- 🧪 Testes automatizados

---

**Cooper Pro** - Transformando a gestão de performance física com tecnologia moderna.