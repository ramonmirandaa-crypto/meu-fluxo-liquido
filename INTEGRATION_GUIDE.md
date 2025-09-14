# Guia de Integração - Interface Lovable + Financeito

## Visão Geral

Este documento orienta a integração da interface moderna com design liquid glass desenvolvida no Lovable com o projeto Financeito existente no GitHub.

## Arquitetura Atual do Financeito

- **Framework**: Next.js
- **Banco de Dados**: PostgreSQL com Prisma ORM
- **Autenticação**: Sistema próprio com 2FA
- **Integração Bancária**: API Pluggy
- **Funcionalidades**: Login, transações básicas, conexão de contas

## Componentes a Migrar

### 1. Design System Base
```
src/index.css → styles/globals.css (Next.js)
tailwind.config.ts → tailwind.config.ts (Next.js)
```

### 2. Componentes UI Shadcn
```
src/components/ui/ → components/ui/ (Next.js)
```

### 3. Componentes Customizados
```
src/components/app-sidebar.tsx → components/layout/AppSidebar.tsx
src/components/navigation-cards.tsx → components/dashboard/NavigationCards.tsx
src/components/stats-grid.tsx → components/dashboard/StatsGrid.tsx
src/components/transaction-item.tsx → components/transactions/TransactionItem.tsx
src/components/finance-card.tsx → components/dashboard/FinanceCard.tsx
```

### 4. Layout Principal
```
src/pages/Index.tsx → app/dashboard/page.tsx (App Router Next.js)
```

## Adaptações Necessárias

### 1. Estrutura de Pastas Next.js
```
financeito/
├── app/
│   ├── dashboard/
│   │   ├── page.tsx (nossa interface principal)
│   │   └── layout.tsx
│   ├── transactions/
│   │   └── page.tsx
│   ├── accounts/
│   │   └── page.tsx
│   └── layout.tsx (layout global)
├── components/
│   ├── ui/ (shadcn components)
│   ├── layout/
│   ├── dashboard/
│   └── transactions/
├── lib/
├── styles/
│   └── globals.css (nosso design system)
└── tailwind.config.ts
```

### 2. Integração com Dados Reais

#### Conectar com API do Financeito
```typescript
// lib/api.ts
export async function getTransactions() {
  const response = await fetch('/api/transactions');
  return response.json();
}

export async function getAccounts() {
  const response = await fetch('/api/accounts');
  return response.json();
}

export async function getBalance() {
  const response = await fetch('/api/balance');
  return response.json();
}
```

#### Adaptar Componentes para Dados Reais
```typescript
// components/dashboard/StatsGrid.tsx
export function StatsGrid() {
  const { data: balance } = useSWR('/api/balance', getBalance);
  const { data: transactions } = useSWR('/api/transactions', getTransactions);
  
  // Calcular estatísticas reais dos dados
  const statsData = calculateStats(balance, transactions);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}
```

### 3. Autenticação e Proteção de Rotas

#### Middleware de Autenticação
```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token');
  
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  return NextResponse.next();
}
```

#### Provider de Autenticação
```typescript
// components/providers/AuthProvider.tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Implementar lógica de autenticação
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
```

### 4. Integração com Pluggy

#### Serviço de Contas Bancárias
```typescript
// lib/pluggy.ts
export class PluggyService {
  async connectAccount(credentials: any) {
    // Integrar com API Pluggy existente
  }
  
  async syncTransactions(accountId: string) {
    // Sincronizar transações
  }
  
  async getAccountBalance(accountId: string) {
    // Obter saldo da conta
  }
}
```

### 5. Rotas Específicas

#### Dashboard
```typescript
// app/dashboard/page.tsx
import { AppSidebar } from '@/components/layout/AppSidebar';
import { StatsGrid } from '@/components/dashboard/StatsGrid';
import { NavigationCards } from '@/components/dashboard/NavigationCards';
import { SidebarProvider } from '@/components/ui/sidebar';

export default async function DashboardPage() {
  // Buscar dados do servidor
  const balance = await getBalance();
  const recentTransactions = await getRecentTransactions();
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <main className="flex-1">
          <StatsGrid balance={balance} />
          <NavigationCards />
          {/* Outros componentes */}
        </main>
      </div>
    </SidebarProvider>
  );
}
```

#### Transações
```typescript
// app/transactions/page.tsx
export default async function TransactionsPage() {
  const transactions = await getTransactions();
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Transações</h1>
      <TransactionsList transactions={transactions} />
    </div>
  );
}
```

## Passos de Implementação

### Fase 1: Preparação
1. Fazer backup do projeto atual
2. Criar branch nova para integração
3. Instalar dependências do shadcn/ui no projeto Next.js

### Fase 2: Design System
1. Migrar `globals.css` com nosso design system
2. Atualizar `tailwind.config.ts`
3. Instalar componentes shadcn necessários

### Fase 3: Componentes Base
1. Migrar componentes UI base
2. Adaptar sistema de roteamento para Next.js App Router
3. Implementar layout com sidebar colapsível

### Fase 4: Integração de Dados
1. Conectar componentes com APIs existentes
2. Implementar states de loading/error
3. Adicionar validação de dados

### Fase 5: Funcionalidades Avançadas
1. Adicionar filtros e buscas
2. Implementar notificações toast
3. Adicionar animações e transições

### Fase 6: Testes e Otimização
1. Testar todas as funcionalidades
2. Otimizar performance
3. Ajustar responsividade

## Dependências Adicionais

```json
{
  "dependencies": {
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "lucide-react": "^0.292.0",
    "tailwind-merge": "^2.0.0",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.8.0",
    "sonner": "^1.3.1"
  }
}
```

## Considerações de Segurança

1. **Tokens de API**: Manter chaves Pluggy no servidor
2. **Autenticação**: Validar tokens em todas as rotas
3. **Dados Sensíveis**: Criptografar informações bancárias
4. **CORS**: Configurar adequadamente para produção

## Monitoramento e Analytics

1. Implementar tracking de eventos importantes
2. Monitorar performance de APIs
3. Alertas para falhas de sincronização
4. Métricas de usabilidade

## Conclusão

A integração trará uma experiência visual moderna mantendo toda a funcionalidade existente do Financeito. O design liquid glass e a interface tablet-friendly proporcionarão melhor usabilidade e engajamento dos usuários.