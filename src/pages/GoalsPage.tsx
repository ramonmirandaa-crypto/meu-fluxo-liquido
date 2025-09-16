import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { DynamicLogo } from "@/components/dynamic-logo";
import { GoalDialog } from "@/components/dialogs/goal-dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  SidebarProvider, 
  SidebarInset, 
  SidebarTrigger 
} from "@/components/ui/sidebar";
import { Target, Plus, Calendar, Trophy } from "lucide-react";

const GoalsPage = () => {
  const [isGoalDialogOpen, setIsGoalDialogOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-4 border-b border-border/50 px-4 md:px-6">
            <SidebarTrigger />
            <div className="flex flex-1 items-center justify-between">
              <div className="flex items-center gap-3">
                <DynamicLogo size="sm" />
                <div>
                  <h1 className="text-lg md:text-2xl font-bold" style={{ color: `hsl(var(--primary))` }}>Objetivos</h1>
                  <p className="text-sm text-muted-foreground hidden sm:block">Defina e monitore suas metas financeiras</p>
                </div>
              </div>
              <Button 
                className="gap-2" 
                style={{ backgroundColor: `hsl(var(--primary))`, color: 'white' }}
                onClick={() => setIsGoalDialogOpen(true)}
              >
                <Plus className="h-4 w-4" />
                Novo Objetivo
              </Button>
            </div>
          </header>

          <main className="flex-1 space-y-6 md:space-y-8 p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(var(--primary))` }}>
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Viagem Europa</h3>
                    <p className="text-sm text-muted-foreground">Meta: R$ 15.000</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Progresso</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="h-2 rounded-full" style={{ backgroundColor: `hsl(var(--primary))`, width: '65%' }}></div>
                  </div>
                  <p className="text-lg font-bold">R$ 9.750,00</p>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(38 92% 50%)` }}>
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Carro Novo</h3>
                    <p className="text-sm text-muted-foreground">Meta: R$ 45.000</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Progresso</span>
                    <span className="text-sm font-medium">32%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-warning h-2 rounded-full" style={{ width: '32%' }}></div>
                  </div>
                  <p className="text-lg font-bold">R$ 14.400,00</p>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(142 71% 45%)` }}>
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Reserva Emergência</h3>
                    <p className="text-sm text-muted-foreground">Meta: R$ 20.000</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Progresso</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-lg font-bold">R$ 15.000,00</p>
                </div>
              </Card>
            </div>

            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Simulador de Objetivos</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-muted/20">
                  <p className="text-sm text-muted-foreground mb-1">Valor do Objetivo</p>
                  <p className="text-xl font-bold">R$ 25.000,00</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/20">
                  <p className="text-sm text-muted-foreground mb-1">Prazo</p>
                  <p className="text-xl font-bold">18 meses</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/20">
                  <p className="text-sm text-muted-foreground mb-1">Valor Mensal</p>
                  <p className="text-xl font-bold">R$ 1.388,89</p>
                </div>
              </div>
            </Card>
          </main>
        </SidebarInset>
      </div>
      
      <GoalDialog 
        open={isGoalDialogOpen} 
        onOpenChange={setIsGoalDialogOpen} 
      />
    </SidebarProvider>
  );
};

export default GoalsPage;