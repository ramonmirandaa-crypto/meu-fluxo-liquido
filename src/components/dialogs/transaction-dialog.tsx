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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

interface TransactionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TransactionDialog({ open, onOpenChange }: TransactionDialogProps) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [account, setAccount] = useState("");
  const [type, setType] = useState("expense");
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || !description || !category || !account) {
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
      description: "Transação adicionada com sucesso",
    });
    
    // Reset form
    setAmount("");
    setDescription("");
    setCategory("");
    setAccount("");
    setType("expense");
    onOpenChange(false);
  };

  const content = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="type">Tipo</Label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="income">Receita</SelectItem>
              <SelectItem value="expense">Despesa</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="amount">Valor *</Label>
          <Input
            id="amount"
            type="number"
            step="0.01"
            placeholder="0,00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Descrição *</Label>
        <Input
          id="description"
          placeholder="Ex: Compra no supermercado"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="category">Categoria *</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="alimentacao">Alimentação</SelectItem>
              <SelectItem value="transporte">Transporte</SelectItem>
              <SelectItem value="moradia">Moradia</SelectItem>
              <SelectItem value="saude">Saúde</SelectItem>
              <SelectItem value="educacao">Educação</SelectItem>
              <SelectItem value="lazer">Lazer</SelectItem>
              <SelectItem value="compras">Compras</SelectItem>
              <SelectItem value="salario">Salário</SelectItem>
              <SelectItem value="freelance">Freelance</SelectItem>
              <SelectItem value="investimentos">Investimentos</SelectItem>
              <SelectItem value="outros">Outros</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="account">Conta *</Label>
          <Select value={account} onValueChange={setAccount}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma conta" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nubank">Nubank</SelectItem>
              <SelectItem value="conta-corrente">Conta Corrente</SelectItem>
              <SelectItem value="c6-bank">C6 Bank</SelectItem>
              <SelectItem value="poupanca">Poupança</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Observações</Label>
        <Textarea
          id="notes"
          placeholder="Informações adicionais (opcional)"
          className="resize-none"
        />
      </div>
    </form>
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className="px-4">
          <DrawerHeader className="text-left">
            <DrawerTitle>Nova Transação</DrawerTitle>
            <DrawerDescription>
              Adicione uma nova receita ou despesa à sua conta.
            </DrawerDescription>
          </DrawerHeader>
          {content}
          <DrawerFooter className="pt-2">
            <Button 
              type="submit" 
              onClick={handleSubmit}
              style={{ backgroundColor: `hsl(var(--primary))`, color: 'white' }}
            >
              Salvar Transação
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
          <DialogTitle>Nova Transação</DialogTitle>
          <DialogDescription>
            Adicione uma nova receita ou despesa à sua conta.
          </DialogDescription>
        </DialogHeader>
        {content}
        <DialogFooter>
          <Button 
            type="submit" 
            onClick={handleSubmit}
            style={{ backgroundColor: `hsl(var(--primary))`, color: 'white' }}
          >
            Salvar Transação
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}