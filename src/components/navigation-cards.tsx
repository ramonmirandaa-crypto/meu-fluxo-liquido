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
      className={`glass-card p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${colorClasses[color]}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="text-sm text-white/70 mt-1">{description}</p>
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
      className="h-24 w-full flex-col gap-3 glass-card border border-card-border/50 hover:border-primary/50 transition-all duration-300"
      onClick={onClick}
    >
      <Icon className="h-6 w-6" />
      <span className="text-sm font-medium">{title}</span>
    </Button>
  );
}