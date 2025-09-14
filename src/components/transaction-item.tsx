import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TransactionItemProps {
  id: string;
  description: string;
  amount: number;
  currency: string;
  category: string;
  date: string;
  icon: LucideIcon;
  type: "income" | "expense" | "transfer";
  account?: string;
  className?: string;
}

export function TransactionItem({
  description,
  amount,
  currency,
  category,
  date,
  icon: Icon,
  type,
  account,
  className,
}: TransactionItemProps) {
  const isPositive = type === "income" || amount > 0;
  const formattedAmount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currency === "BRL" ? "BRL" : "USD",
    minimumFractionDigits: 2,
  }).format(Math.abs(amount));

  return (
    <div className={cn("glass-card p-4 hover:bg-card-glass/60 transition-all duration-200", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          <div className="space-y-1">
            <h4 className="font-medium text-foreground">{description}</h4>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{date}</span>
              {account && (
                <>
                  <span>•</span>
                  <span>{account}</span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="text-right space-y-1">
          <p
            className={cn(
              "font-semibold",
              isPositive ? "text-success" : "text-destructive"
            )}
          >
            {isPositive ? "+" : "-"}{formattedAmount}
          </p>
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
        </div>
      </div>
    </div>
  );
}