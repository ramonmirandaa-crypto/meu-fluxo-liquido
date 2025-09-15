import { AppSidebar } from "@/components/app-sidebar";
import { DynamicLogo } from "@/components/dynamic-logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  SidebarProvider, 
  SidebarInset, 
  SidebarTrigger 
} from "@/components/ui/sidebar";
import { PieChart, BarChart3, TrendingUp, Calendar } from "lucide-react";

const AnalyticsPage = () => {
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
                  <h1 className="text-2xl font-bold" style={{ color: `hsl(var(--primary))` }}>Análises</h1>
                  <p className="text-sm text-muted-foreground">Relatórios e insights financeiros</p>
                </div>
              </div>
              <Button className="gap-2" style={{ backgroundColor: `hsl(var(--primary))`, color: 'white' }}>
                <Calendar className="h-4 w-4" />
                Gerar Relatório
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
                    <h3 className="font-semibold">Crescimento</h3>
                    <p className="text-sm text-muted-foreground">12 meses</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-success">+23.5%</p>
                  <p className="text-sm text-muted-foreground">vs. ano anterior</p>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(142 71% 45%)` }}>
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Média Receitas</h3>
                    <p className="text-sm text-muted-foreground">Mensal</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold">R$ 5.250,00</p>
                  <p className="text-sm text-success">+12% este mês</p>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(0 72% 50%)` }}>
                    <PieChart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Média Gastos</h3>
                    <p className="text-sm text-muted-foreground">Mensal</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold">R$ 3.180,00</p>
                  <p className="text-sm text-destructive">+5% este mês</p>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(38 92% 50%)` }}>
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Taxa Poupança</h3>
                    <p className="text-sm text-muted-foreground">Mensal</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold">39.4%</p>
                  <p className="text-sm text-success">Excelente!</p>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Gastos por Categoria</h3>
                <div className="space-y-4">
                  {[
                    { name: "Alimentação", value: "R$ 850,00", percent: "35%" },
                    { name: "Transporte", value: "R$ 420,00", percent: "18%" },
                    { name: "Lazer", value: "R$ 380,00", percent: "16%" },
                    { name: "Compras", value: "R$ 290,00", percent: "12%" },
                    { name: "Outros", value: "R$ 460,00", percent: "19%" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span>{item.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{item.percent}</span>
                        <span className="font-semibold">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Tendências Mensais</h3>
                <div className="space-y-4">
                  {[
                    { month: "Janeiro", receitas: "R$ 5.500", despesas: "R$ 3.247", saldo: "R$ 2.253" },
                    { month: "Dezembro", receitas: "R$ 5.200", despesas: "R$ 3.180", saldo: "R$ 2.020" },
                    { month: "Novembro", receitas: "R$ 4.950", despesas: "R$ 2.980", saldo: "R$ 1.970" }
                  ].map((item, index) => (
                    <div key={index} className="p-3 rounded-lg bg-muted/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{item.month}</span>
                        <span className="text-sm font-semibold text-success">{item.saldo}</span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>R: {item.receitas}</span>
                        <span>D: {item.despesas}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AnalyticsPage;