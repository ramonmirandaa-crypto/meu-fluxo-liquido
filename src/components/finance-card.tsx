import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FinanceCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
  className?: string;
}

export function FinanceCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  className,
}: FinanceCardProps) {
  return (
    <div className={cn("glass-card p-6 group hover:glass-card-elevated transition-all duration-300", className)}>
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-primary" />
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-gradient-primary">{value}</h3>
            {subtitle && (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
        </div>
        {trend && (
          <div
            className={cn(
              "text-xs font-medium px-2 py-1 rounded-full",
              trend.positive
                ? "text-success bg-success/10"
                : "text-destructive bg-destructive/10"
            )}
          >
            {trend.positive ? "+" : ""}{trend.value}
          </div>
        )}
      </div>
    </div>
  );
}