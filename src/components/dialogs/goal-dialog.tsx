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
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface GoalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GoalDialog({ open, onOpenChange }: GoalDialogProps) {
  const [title, setTitle] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [currentAmount, setCurrentAmount] = useState("");
  const [category, setCategory] = useState("");
  const [targetDate, setTargetDate] = useState<Date>();
  const [description, setDescription] = useState("");
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !targetAmount || !category || !targetDate) {
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
      description: "Objetivo criado com sucesso",
    });
    
    // Reset form
    setTitle("");
    setTargetAmount("");
    setCurrentAmount("");
    setCategory("");
    setTargetDate(undefined);
    setDescription("");
    onOpenChange(false);
  };

  const content = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Título do Objetivo *</Label>
        <Input
          id="title"
          placeholder="Ex: Viagem para Europa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="targetAmount">Valor Objetivo *</Label>
          <Input
            id="targetAmount"
            type="number"
            step="0.01"
            placeholder="15000,00"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="currentAmount">Valor Atual</Label>
          <Input
            id="currentAmount"
            type="number"
            step="0.01"
            placeholder="0,00"
            value={currentAmount}
            onChange={(e) => setCurrentAmount(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="category">Categoria *</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="viagem">Viagem</SelectItem>
              <SelectItem value="casa">Casa</SelectItem>
              <SelectItem value="veiculo">Veículo</SelectItem>
              <SelectItem value="educacao">Educação</SelectItem>
              <SelectItem value="emergencia">Emergência</SelectItem>
              <SelectItem value="aposentadoria">Aposentadoria</SelectItem>
              <SelectItem value="casamento">Casamento</SelectItem>
              <SelectItem value="outros">Outros</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>Data Objetivo *</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !targetDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {targetDate ? format(targetDate, "PPP") : "Selecione uma data"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={targetDate}
                onSelect={setTargetDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descrição</Label>
        <Textarea
          id="description"
          placeholder="Descreva seu objetivo e motivação..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="resize-none"
        />
      </div>

      {targetAmount && targetDate && (
        <div className="p-4 bg-muted/20 rounded-lg">
          <h4 className="font-medium mb-2">Resumo do Objetivo</h4>
          <div className="text-sm space-y-1">
            <p>Valor mensal necessário: <span className="font-medium">R$ {
              (parseFloat(targetAmount) / Math.max(1, Math.ceil((targetDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24 * 30)))).toFixed(2)
            }</span></p>
            <p>Meses restantes: <span className="font-medium">{
              Math.ceil((targetDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24 * 30))
            }</span></p>
          </div>
        </div>
      )}
    </form>
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className="px-4">
          <DrawerHeader className="text-left">
            <DrawerTitle>Novo Objetivo</DrawerTitle>
            <DrawerDescription>
              Defina uma meta financeira e acompanhe seu progresso.
            </DrawerDescription>
          </DrawerHeader>
          {content}
          <DrawerFooter className="pt-2">
            <Button 
              type="submit" 
              onClick={handleSubmit}
              style={{ backgroundColor: `hsl(var(--primary))`, color: 'white' }}
            >
              Criar Objetivo
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
          <DialogTitle>Novo Objetivo</DialogTitle>
          <DialogDescription>
            Defina uma meta financeira e acompanhe seu progresso.
          </DialogDescription>
        </DialogHeader>
        {content}
        <DialogFooter>
          <Button 
            type="submit" 
            onClick={handleSubmit}
            style={{ backgroundColor: `hsl(var(--primary))`, color: 'white' }}
          >
            Criar Objetivo
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}