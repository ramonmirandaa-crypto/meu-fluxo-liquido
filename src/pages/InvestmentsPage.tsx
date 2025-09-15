import { AppSidebar } from "@/components/app-sidebar";
import { DynamicLogo } from "@/components/dynamic-logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  SidebarProvider, 
  SidebarInset, 
  SidebarTrigger 
} from "@/components/ui/sidebar";
import { TrendingUp, Plus, PieChart, BarChart3 } from "lucide-react";

const InvestmentsPage = () => {
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
                  <h1 className="text-2xl font-bold" style={{ color: `hsl(var(--primary))` }}>Investimentos</h1>
                  <p className="text-sm text-muted-foreground">Sua carteira de investimentos</p>
                </div>
              </div>
              <Button className="gap-2" style={{ backgroundColor: `hsl(var(--primary))`, color: 'white' }}>
                <Plus className="h-4 w-4" />
                Novo Investimento
              </Button>
            </div>
          </header>

          <main className="flex-1 space-y-8 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(var(--primary))` }}>
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Valor Total</h3>
                    <p className="text-sm text-muted-foreground">Carteira</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold">R$ 28.920,15</p>
                  <p className="text-sm text-success">+18.7% no ano</p>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(142 71% 45%)` }}>
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Renda Fixa</h3>
                    <p className="text-sm text-muted-foreground">60% da carteira</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold">R$ 17.352,09</p>
                  <p className="text-sm text-success">+3.2% no mês</p>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(var(--primary))` }}>
                    <PieChart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Ações</h3>
                    <p className="text-sm text-muted-foreground">30% da carteira</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold">R$ 8.676,05</p>
                  <p className="text-sm text-success">+12.5% no mês</p>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(38 92% 50%)` }}>
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Fundos</h3>
                    <p className="text-sm text-muted-foreground">10% da carteira</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold">R$ 2.892,01</p>
                  <p className="text-sm text-success">+8.1% no mês</p>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Performance por Categoria</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Renda Fixa</span>
                    <span className="text-success font-semibold">+3.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Ações</span>
                    <span className="text-success font-semibold">+12.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Fundos</span>
                    <span className="text-success font-semibold">+8.1%</span>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Próximos Vencimentos</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">CDB Banco XYZ</p>
                      <p className="text-sm text-muted-foreground">15/10/2025</p>
                    </div>
                    <span className="font-semibold">R$ 5.000,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">LCI Banco ABC</p>
                      <p className="text-sm text-muted-foreground">22/11/2025</p>
                    </div>
                    <span className="font-semibold">R$ 3.500,00</span>
                  </div>
                </div>
              </Card>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default InvestmentsPage;