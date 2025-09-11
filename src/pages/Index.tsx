import { useState } from "react";
import { SidebarNav } from "@/components/sidebar-nav";
import { FinanceCard } from "@/components/finance-card";
import { TransactionItem } from "@/components/transaction-item";
import { CurrencySelector } from "@/components/ui/currency-selector";
import { Button } from "@/components/ui/button";
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
  Plus
} from "lucide-react";

const Index = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("BRL");

  // Mock data
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
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 glass-card border-r border-card-border/50">
        <SidebarNav />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gradient-primary">Dashboard</h1>
            <p className="text-muted-foreground mt-1">Visão geral das suas finanças</p>
          </div>
          <div className="flex items-center gap-4">
            <CurrencySelector 
              value={selectedCurrency} 
              onValueChange={setSelectedCurrency}
            />
            <Button variant="hero" className="gap-2">
              <Plus className="h-4 w-4" />
              Nova Transação
            </Button>
          </div>
        </div>

        {/* Finance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FinanceCard
            title="Saldo Total"
            value="R$ 12.847,50"
            subtitle="Todas as contas"
            icon={Wallet}
            trend={{ value: "2.5%", positive: true }}
          />
          <FinanceCard
            title="Receitas (Mês)"
            value="R$ 5.500,00"
            subtitle="Janeiro 2025"
            icon={ArrowUpRight}
            trend={{ value: "12.3%", positive: true }}
          />
          <FinanceCard
            title="Despesas (Mês)"
            value="R$ 3.247,80"
            subtitle="Janeiro 2025"
            icon={ArrowDownLeft}
            trend={{ value: "5.1%", positive: false }}
          />
          <FinanceCard
            title="Investimentos"
            value="R$ 8.920,15"
            subtitle="Carteira total"
            icon={TrendingUp}
            trend={{ value: "18.7%", positive: true }}
          />
        </div>

        {/* Recent Transactions */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Transações Recentes</h2>
            <Button variant="outline">Ver Todas</Button>
          </div>
          
          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <TransactionItem
                key={transaction.id}
                {...transaction}
              />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Ações Rápidas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="glass" className="h-20 flex-col gap-2">
              <Home className="h-6 w-6" />
              <span className="text-sm">Pagar Conta</span>
            </Button>
            <Button variant="glass" className="h-20 flex-col gap-2">
              <ArrowUpRight className="h-6 w-6" />
              <span className="text-sm">Transferir</span>
            </Button>
            <Button variant="glass" className="h-20 flex-col gap-2">
              <TrendingUp className="h-6 w-6" />
              <span className="text-sm">Investir</span>
            </Button>
            <Button variant="glass" className="h-20 flex-col gap-2">
              <CreditCard className="h-6 w-6" />
              <span className="text-sm">Cartões</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
