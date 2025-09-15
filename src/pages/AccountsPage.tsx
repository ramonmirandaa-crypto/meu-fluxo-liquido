import { AppSidebar } from "@/components/app-sidebar";
import { DynamicLogo } from "@/components/dynamic-logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  SidebarProvider, 
  SidebarInset, 
  SidebarTrigger 
} from "@/components/ui/sidebar";
import { CreditCard, Plus, Wallet, ArrowUpRight, ArrowDownLeft } from "lucide-react";

const AccountsPage = () => {
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
                  <h1 className="text-2xl font-bold" style={{ color: `hsl(var(--primary))` }}>Contas & Cartões</h1>
                  <p className="text-sm text-muted-foreground">Gerencie suas contas e cartões</p>
                </div>
              </div>
              <Button className="gap-2" style={{ backgroundColor: `hsl(var(--primary))`, color: 'white' }}>
                <Plus className="h-4 w-4" />
                Nova Conta
              </Button>
            </div>
          </header>

          <main className="flex-1 space-y-8 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(var(--primary))` }}>
                    <Wallet className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Conta Corrente</h3>
                    <p className="text-sm text-muted-foreground">Banco Principal</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold">R$ 8.547,30</p>
                  <p className="text-sm text-success">+2.5% este mês</p>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(var(--primary))` }}>
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Cartão Nubank</h3>
                    <p className="text-sm text-muted-foreground">Final 1234</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold">R$ 1.250,00</p>
                  <p className="text-sm text-muted-foreground">Limite disponível</p>
                </div>
              </Card>

              <Card className="glass-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(var(--primary))` }}>
                    <ArrowUpRight className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Poupança</h3>
                    <p className="text-sm text-muted-foreground">Reserva de Emergência</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold">R$ 15.000,00</p>
                  <p className="text-sm text-success">+0.5% este mês</p>
                </div>
              </Card>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AccountsPage;