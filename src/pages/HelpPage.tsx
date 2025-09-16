import { AppSidebar } from "@/components/app-sidebar";
import { DynamicLogo } from "@/components/dynamic-logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  SidebarProvider, 
  SidebarInset, 
  SidebarTrigger 
} from "@/components/ui/sidebar";
import { Search, MessageCircle, Book, Video, Phone, Mail } from "lucide-react";

const HelpPage = () => {
  const faqItems = [
    {
      question: "Como adicionar uma nova conta?",
      answer: "Para adicionar uma nova conta, vá até a seção 'Contas & Cartões' e clique no botão 'Nova Conta'. Preencha as informações necessárias como nome da conta, banco e saldo inicial."
    },
    {
      question: "Como categorizar minhas transações?",
      answer: "As transações podem ser categorizadas automaticamente ou manualmente. Para categorizar manualmente, acesse a transação e selecione a categoria apropriada no menu dropdown."
    },
    {
      question: "Como definir objetivos financeiros?",
      answer: "Na seção 'Objetivos', clique em 'Novo Objetivo'. Defina o valor desejado, prazo e adicione uma descrição. O sistema calculará automaticamente quanto você precisa economizar por mês."
    },
    {
      question: "Como conectar minha conta bancária?",
      answer: "Por segurança, recomendamos inserir as transações manualmente. Estamos trabalhando em integrações seguras com bancos para futuras versões."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Sim! Utilizamos criptografia de ponta a ponta e não armazenamos dados bancários sensíveis. Suas informações são protegidas com os mais altos padrões de segurança."
    },
    {
      question: "Como exportar meus dados?",
      answer: "Você pode exportar seus dados em formato CSV ou PDF através da seção 'Análises'. Clique no botão 'Exportar' e escolha o formato desejado."
    }
  ];

  const helpTopics = [
    {
      title: "Primeiros Passos",
      description: "Aprenda a configurar sua conta e adicionar suas primeiras transações",
      icon: Book,
      color: "primary"
    },
    {
      title: "Gestão de Contas",
      description: "Como adicionar, editar e gerenciar suas contas bancárias",
      icon: Book,
      color: "success"
    },
    {
      title: "Relatórios e Análises",
      description: "Entenda como interpretar seus dados financeiros",
      icon: Book,
      color: "warning"
    },
    {
      title: "Configurações Avançadas",
      description: "Personalize o aplicativo conforme suas necessidades",
      icon: Book,
      color: "primary"
    }
  ];

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
                  <h1 className="text-xl md:text-2xl font-bold" style={{ color: `hsl(var(--primary))` }}>Central de Ajuda</h1>
                  <p className="text-sm text-muted-foreground hidden md:block">Encontre respostas e suporte</p>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 space-y-6 md:space-y-8 p-4 md:p-6">
            {/* Busca */}
            <Card className="glass-card p-4 md:p-6">
              <div className="flex items-center gap-4 mb-4">
                <Search className="h-6 w-6 text-muted-foreground" />
                <div className="flex-1">
                  <Input 
                    placeholder="Buscar por tópicos de ajuda..." 
                    className="w-full"
                  />
                </div>
              </div>
            </Card>

            {/* Tópicos de Ajuda */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Tópicos Populares</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {helpTopics.map((topic, index) => (
                  <Card key={index} className="glass-card p-4 md:p-6 hover:bg-accent/50 transition-colors cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(var(--primary))` }}>
                        <topic.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{topic.title}</h3>
                        <p className="text-sm text-muted-foreground">{topic.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Perguntas Frequentes</h2>
              <Card className="glass-card p-4 md:p-6">
                <Accordion type="single" collapsible className="space-y-2">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                      <AccordionTrigger className="text-left hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </div>

            {/* Contato */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Precisa de Mais Ajuda?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Card className="glass-card p-4 md:p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(var(--primary))` }}>
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Chat ao Vivo</h3>
                  <p className="text-sm text-muted-foreground mb-4">Fale conosco em tempo real</p>
                  <Button className="w-full" style={{ backgroundColor: `hsl(var(--primary))`, color: 'white' }}>
                    Iniciar Chat
                  </Button>
                </Card>

                <Card className="glass-card p-4 md:p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(var(--primary))` }}>
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground mb-4">Envie sua dúvida por email</p>
                  <Button variant="outline" className="w-full">
                    suporte@to.finance
                  </Button>
                </Card>

                <Card className="glass-card p-4 md:p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{ backgroundColor: `hsl(var(--primary))` }}>
                    <Video className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Tutoriais</h3>
                  <p className="text-sm text-muted-foreground mb-4">Assista aos vídeos tutoriais</p>
                  <Button variant="outline" className="w-full">
                    Ver Vídeos
                  </Button>
                </Card>
              </div>
            </div>

            {/* Status do Sistema */}
            <Card className="glass-card p-4 md:p-6">
              <h3 className="text-lg font-semibold mb-4">Status do Sistema</h3>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-success"></div>
                <span className="text-sm">Todos os sistemas operando normalmente</span>
              </div>
            </Card>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default HelpPage;