import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

interface AccountDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AccountDialog({ open, onOpenChange }: AccountDialogProps) {
  const [name, setName] = useState("");
  const [bank, setBank] = useState("");
  const [type, setType] = useState("");
  const [balance, setBalance] = useState("");
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !bank || !type || !balance) {
      toast({
        title: "Erro",
        description: "Preencha todos os campos obrigatórios",
        variant: "destructive",
      });
      return;
    }

    // Simular salvamento
    toast({
      title: "Sucesso!",
      description: "Conta adicionada com sucesso",
    });
    
    // Reset form
    setName("");
    setBank("");
    setType("");
    setBalance("");
    onOpenChange(false);
  };

  const content = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nome da Conta *</Label>
        <Input
          id="name"
          placeholder="Ex: Conta Corrente Principal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="bank">Banco *</Label>
          <Select value={bank} onValueChange={setBank}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o banco" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nubank">Nubank</SelectItem>
              <SelectItem value="itau">Itaú</SelectItem>
              <SelectItem value="bradesco">Bradesco</SelectItem>
              <SelectItem value="santander">Santander</SelectItem>
              <SelectItem value="bb">Banco do Brasil</SelectItem>
              <SelectItem value="caixa">Caixa Econômica</SelectItem>
              <SelectItem value="c6">C6 Bank</SelectItem>
              <SelectItem value="inter">Inter</SelectItem>
              <SelectItem value="picpay">PicPay</SelectItem>
              <SelectItem value="outros">Outros</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="type">Tipo da Conta *</Label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="checking">Conta Corrente</SelectItem>
              <SelectItem value="savings">Poupança</SelectItem>
              <SelectItem value="credit">Cartão de Crédito</SelectItem>
              <SelectItem value="investment">Investimento</SelectItem>
              <SelectItem value="prepaid">Cartão Pré-pago</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="balance">Saldo Inicial *</Label>
        <Input
          id="balance"
          type="number"
          step="0.01"
          placeholder="0,00"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descrição</Label>
        <Input
          id="description"
          placeholder="Informações adicionais (opcional)"
        />
      </div>
    </form>
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className="px-4">
          <DrawerHeader className="text-left">
            <DrawerTitle>Nova Conta</DrawerTitle>
            <DrawerDescription>
              Adicione uma nova conta bancária ou cartão.
            </DrawerDescription>
          </DrawerHeader>
          {content}
          <DrawerFooter className="pt-2">
            <Button 
              type="submit" 
              onClick={handleSubmit}
              style={{ backgroundColor: `hsl(var(--primary))`, color: 'white' }}
            >
              Salvar Conta
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Nova Conta</DialogTitle>
          <DialogDescription>
            Adicione uma nova conta bancária ou cartão.
          </DialogDescription>
        </DialogHeader>
        {content}
        <DialogFooter>
          <Button 
            type="submit" 
            onClick={handleSubmit}
            style={{ backgroundColor: `hsl(var(--primary))`, color: 'white' }}
          >
            Salvar Conta
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}