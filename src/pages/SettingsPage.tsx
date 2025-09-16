import { AppSidebar } from "@/components/app-sidebar";
import { DynamicLogo } from "@/components/dynamic-logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  SidebarProvider, 
  SidebarInset, 
  SidebarTrigger 
} from "@/components/ui/sidebar";
import { User, Bell, Lock, Palette, Globe, Database, HelpCircle } from "lucide-react";

const SettingsPage = () => {
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
                  <h1 className="text-xl md:text-2xl font-bold" style={{ color: `hsl(var(--primary))` }}>Configurações</h1>
                  <p className="text-sm text-muted-foreground hidden md:block">Gerencie suas preferências</p>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 space-y-6 md:space-y-8 p-4 md:p-6">
            {/* Perfil */}
            <Card className="glass-card p-4 md:p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(var(--primary))` }}>
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Perfil</h3>
                  <p className="text-sm text-muted-foreground">Informações pessoais</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" defaultValue="João Silva" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="joao@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" defaultValue="(11) 99999-9999" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Moeda Padrão</Label>
                  <Input id="currency" defaultValue="BRL" />
                </div>
              </div>
            </Card>

            {/* Notificações */}
            <Card className="glass-card p-4 md:p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(var(--primary))` }}>
                  <Bell className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Notificações</h3>
                  <p className="text-sm text-muted-foreground">Configure seus alertas</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Transações</Label>
                    <p className="text-sm text-muted-foreground">Notificar sobre novas transações</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Vencimentos</Label>
                    <p className="text-sm text-muted-foreground">Lembrar sobre contas a vencer</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Objetivos</Label>
                    <p className="text-sm text-muted-foreground">Atualizações sobre suas metas</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </Card>

            {/* Segurança */}
            <Card className="glass-card p-4 md:p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(var(--primary))` }}>
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Segurança</h3>
                  <p className="text-sm text-muted-foreground">Configurações de segurança</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button variant="outline" className="w-full md:w-auto">
                  Alterar Senha
                </Button>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Autenticação em Duas Etapas</Label>
                    <p className="text-sm text-muted-foreground">Adicione uma camada extra de segurança</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Aparência */}
              <Card className="glass-card p-4 md:p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(var(--primary))` }}>
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Aparência</h3>
                    <p className="text-sm text-muted-foreground">Personalização visual</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Modo Escuro</Label>
                    <Switch />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <Label>Animações</Label>
                    <Switch defaultChecked />
                  </div>
                </div>
              </Card>

              {/* Idioma */}
              <Card className="glass-card p-4 md:p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(var(--primary))` }}>
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Idioma & Região</h3>
                    <p className="text-sm text-muted-foreground">Configurações regionais</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Idioma</Label>
                    <Input id="language" defaultValue="Português (Brasil)" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Fuso Horário</Label>
                    <Input id="timezone" defaultValue="GMT-3 (Brasília)" />
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

export default SettingsPage;