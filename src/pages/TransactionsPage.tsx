import { AppSidebar } from "@/components/app-sidebar";
import { DynamicLogo } from "@/components/dynamic-logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  SidebarProvider, 
  SidebarInset, 
  SidebarTrigger 
} from "@/components/ui/sidebar";
import { Receipt, Plus, ArrowUpRight, ArrowDownLeft, Filter } from "lucide-react";

const TransactionsPage = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-4 border-b border-border/50 px-6">
            <SidebarTrigger />
            <div className="flex flex-1 items-center justify-between">
              <div className="flex items-center gap-3">
                <DynamicLogo size="sm" />
                <div>
                  <h1 className="text-2xl font-bold" style={{ color: `hsl(var(--primary))` }}>Transações</h1>
                  <p className="text-sm text-muted-foreground">Histórico de receitas e despesas</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filtros
                </Button>
                <Button className="gap-2" style={{ backgroundColor: `hsl(var(--primary))`, color: 'white' }}>
                  <Plus className="h-4 w-4" />
                  Nova Transação
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1 space-y-8 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(142 71% 45%)` }}>
                    <ArrowUpRight className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Receitas</h3>
                    <p className="text-sm text-muted-foreground">Este mês</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-success">R$ 5.500,00</p>
              </Card>

              <Card className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(0 72% 50%)` }}>
                    <ArrowDownLeft className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Despesas</h3>
                    <p className="text-sm text-muted-foreground">Este mês</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-destructive">R$ 3.247,80</p>
              </Card>

              <Card className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(var(--primary))` }}>
                    <Receipt className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Saldo</h3>
                    <p className="text-sm text-muted-foreground">Líquido</p>
                  </div>
                </div>
                <p className="text-2xl font-bold">R$ 2.252,20</p>
              </Card>
            </div>

            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Transações Recentes</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(var(--primary))` }}>
                        <Receipt className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">Transação {item}</p>
                        <p className="text-sm text-muted-foreground">Categoria</p>
                      </div>
                    </div>
                    <p className="font-semibold">R$ 150,00</p>
                  </div>
                ))}
              </div>
            </Card>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default TransactionsPage;