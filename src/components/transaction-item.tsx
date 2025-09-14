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
    <div className={cn("glass-card p-3 md:p-4 hover:bg-card-glass/60 transition-all duration-200", className)}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
          <div className="p-2 rounded-lg bg-primary/10 shrink-0">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          <div className="space-y-1 min-w-0 flex-1">
            <h4 className="font-medium text-foreground text-sm md:text-base truncate">{description}</h4>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="truncate">{date}</span>
              {account && (
                <>
                  <span className="hidden sm:inline">•</span>
                  <span className="truncate hidden sm:inline">{account}</span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="text-right space-y-1 shrink-0">
          <p
            className={cn(
              "font-semibold text-sm md:text-base",
              isPositive ? "text-success" : "text-destructive"
            )}
          >
            {isPositive ? "+" : "-"}{formattedAmount}
          </p>
          <Badge variant="outline" className="text-xs">
            <span className="truncate max-w-16 md:max-w-none">{category}</span>
          </Badge>
        </div>
      </div>
    </div>
  );
}