import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { TransactionDialog } from "@/components/dialogs/transaction-dialog";
import { NavigationCard, QuickActionCard } from "@/components/navigation-cards";
import { StatsGrid } from "@/components/stats-grid";
import { TransactionItem } from "@/components/transaction-item";
import { CurrencySelector } from "@/components/ui/currency-selector";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DynamicLogo } from "@/components/dynamic-logo";
import { 
  SidebarProvider, 
  SidebarInset, 
  SidebarTrigger 
} from "@/components/ui/sidebar";
import { 
  Wallet, 
  CreditCard, 
  TrendingUp, 
  ArrowUpRight,
  ArrowDownLeft,
  Coffee,
  Car,
  ShoppingBag,
  Home,
  Plus,
  Receipt,
  Target,
  PieChart,
  Banknote,
  Calculator,
  Bell,
  Settings
} from "lucide-react";

const Index = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("BRL");
  const [isTransactionDialogOpen, setIsTransactionDialogOpen] = useState(false);

  // Stats data
  const statsData = [
    {
      title: "Saldo Total",
      value: "R$ 12.847,50",
      subtitle: "Todas as contas",
      icon: Wallet,
      trend: { value: "2.5%", positive: true },
      color: "primary" as const,
    },
    {
      title: "Receitas (Mês)",
      value: "R$ 5.500,00",
      subtitle: "Janeiro 2025",
      icon: ArrowUpRight,
      trend: { value: "12.3%", positive: true },
      color: "success" as const,
    },
    {
      title: "Despesas (Mês)",
      value: "R$ 3.247,80",
      subtitle: "Janeiro 2025",
      icon: ArrowDownLeft,
      trend: { value: "5.1%", positive: false },
      color: "destructive" as const,
    },
    {
      title: "Investimentos",
      value: "R$ 8.920,15",
      subtitle: "Carteira total",
      icon: TrendingUp,
      trend: { value: "18.7%", positive: true },
      color: "primary" as const,
    },
  ];

  // Navigation cards data
  const navigationCards = [
    {
      title: "Transações",
      description: "Gerencie suas receitas e despesas",
      icon: Receipt,
      color: "primary" as const,
    },
    {
      title: "Investimentos",
      description: "Acompanhe sua carteira",
      icon: TrendingUp,
      color: "success" as const,
    },
    {
      title: "Objetivos",
      description: "Defina e monitore suas metas",
      icon: Target,
      color: "warning" as const,
    },
    {
      title: "Análises",
      description: "Relatórios e insights",
      icon: PieChart,
      color: "primary" as const,
    },
  ];

  // Quick actions data
  const quickActions = [
    { title: "Nova Transação", icon: Plus },
    { title: "Pagar Conta", icon: Banknote },
    { title: "Transferir", icon: ArrowUpRight },
    { title: "Investir", icon: TrendingUp },
    { title: "Cartões", icon: CreditCard },
    { title: "Orçamento", icon: Calculator },
    { title: "Notificações", icon: Bell },
    { title: "Configurações", icon: Settings },
  ];

  // Mock transaction data
  const recentTransactions = [
    {
      id: "1",
      description: "Starbucks Coffee",
      amount: -25.50,
      currency: selectedCurrency,
      category: "Alimentação",
      date: "Hoje, 14:30",
      icon: Coffee,
      type: "expense" as const,
      account: "Nubank",
    },
    {
      id: "2",
      description: "Salário",
      amount: 5500.00,
      currency: selectedCurrency,
      category: "Salário",
      date: "Ontem, 09:00",
      icon: ArrowUpRight,
      type: "income" as const,
      account: "Conta Corrente",
    },
    {
      id: "3",
      description: "Uber",
      amount: -18.90,
      currency: selectedCurrency,
      category: "Transporte",
      date: "2 dias atrás",
      icon: Car,
      type: "expense" as const,
      account: "C6 Bank",
    },
    {
      id: "4",
      description: "Shopping Online",
      amount: -159.99,
      currency: selectedCurrency,
      category: "Compras",
      date: "3 dias atrás",
      icon: ShoppingBag,
      type: "expense" as const,
      account: "Nubank",
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-4 border-b border-border/50 px-4 md:px-6">
            <SidebarTrigger />
            <div className="flex flex-1 items-center justify-between">
              <div className="flex items-center gap-2 md:gap-3">
                <DynamicLogo size="sm" />
                <div>
                  <h1 className="text-lg md:text-2xl font-bold" style={{ color: `hsl(var(--primary))` }}>Dashboard</h1>
                  <p className="text-sm text-muted-foreground hidden sm:block">Visão geral das suas finanças</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                <div className="hidden md:block">
                  <CurrencySelector 
                    value={selectedCurrency} 
                    onValueChange={setSelectedCurrency}
                  />
                </div>
                <Button 
                  className="gap-2" 
                  style={{ backgroundColor: `hsl(var(--primary))`, color: 'white' }}
                  onClick={() => setIsTransactionDialogOpen(true)}
                  size="sm"
                >
                  <Plus className="h-4 w-4" />
                  <span className="hidden sm:inline">Nova Transação</span>
                  <span className="sm:hidden">Nova</span>
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1 space-y-6 md:space-y-8 p-4 md:p-6">
            {/* Stats Overview */}
            <StatsGrid stats={statsData} />

            {/* Navigation Grid */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Acesso Rápido</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {navigationCards.map((card, index) => (
                  <NavigationCard
                    key={index}
                    {...card}
                    onClick={() => console.log(`Navigate to ${card.title}`)}
                  />
                ))}
              </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Ações Rápidas</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {quickActions.map((action, index) => (
                  <QuickActionCard
                    key={index}
                    {...action}
                    onClick={() => console.log(`Execute ${action.title}`)}
                  />
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Transações Recentes</h2>
                <Button variant="outline" size="sm">Ver Todas</Button>
              </div>
              
              <Card className="glass-card">
                <div className="p-6 space-y-4">
                  {recentTransactions.map((transaction) => (
                    <TransactionItem
                      key={transaction.id}
                      {...transaction}
                    />
                  ))}
                </div>
              </Card>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Próximos Vencimentos</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cartão Nubank</span>
                    <span className="text-sm font-medium">R$ 450,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Financiamento Casa</span>
                    <span className="text-sm font-medium">R$ 1.200,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Seguro Carro</span>
                    <span className="text-sm font-medium">R$ 180,00</span>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Objetivos em Andamento</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Viagem Europa</span>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Carro Novo</span>
                      <span className="text-sm font-medium">32%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '32%' }}></div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Carteira Investimentos</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Renda Fixa</span>
                    <span className="text-sm font-medium text-success">+3.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Ações</span>
                    <span className="text-sm font-medium text-success">+12.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Fundos</span>
                    <span className="text-sm font-medium text-success">+8.1%</span>
                  </div>
                </div>
              </Card>
            </div>
          </main>
        </SidebarInset>
      </div>
      
      <TransactionDialog 
        open={isTransactionDialogOpen} 
        onOpenChange={setIsTransactionDialogOpen} 
      />
    </SidebarProvider>
  );
};

export default Index;
