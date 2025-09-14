import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface NavigationCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  color?: "primary" | "success" | "warning" | "destructive";
}

export function NavigationCard({ 
  title, 
  description, 
  icon: Icon, 
  onClick,
  color = "primary" 
}: NavigationCardProps) {
  const colorClasses = {
    primary: "bg-gradient-primary hover:shadow-glow",
    success: "bg-gradient-success hover:shadow-soft",
    warning: "bg-yellow-500/10 hover:bg-yellow-500/20",
    destructive: "bg-gradient-destructive hover:shadow-soft"
  };

  return (
    <Card 
      className={`glass-card p-4 md:p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${colorClasses[color]}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3 md:gap-4">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
          <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white text-sm md:text-base truncate">{title}</h3>
          <p className="text-xs md:text-sm text-white/70 mt-0.5 md:mt-1 line-clamp-2">{description}</p>
        </div>
      </div>
    </Card>
  );
}

interface QuickActionCardProps {
  title: string;
  icon: LucideIcon;
  onClick: () => void;
  variant?: "default" | "outline" | "secondary";
}

export function QuickActionCard({ 
  title, 
  icon: Icon, 
  onClick,
  variant = "default" 
}: QuickActionCardProps) {
  return (
    <Button
      variant={variant}
      className="h-20 md:h-24 w-full flex-col gap-2 md:gap-3 glass-card border border-card-border/50 hover:border-primary/50 transition-all duration-300 p-2 md:p-4"
      onClick={onClick}
    >
      <Icon className="h-4 w-4 md:h-6 md:w-6 shrink-0" />
      <span className="text-xs md:text-sm font-medium text-center leading-tight">{title}</span>
    </Button>
  );
}