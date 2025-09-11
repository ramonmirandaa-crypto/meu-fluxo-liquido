import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  CreditCard, 
  Receipt, 
  TrendingUp, 
  Target, 
  PieChart,
  Settings,
  HelpCircle
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navigationItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Contas & Cartões",
    href: "/accounts",
    icon: CreditCard,
  },
  {
    title: "Transações",
    href: "/transactions",
    icon: Receipt,
  },
  {
    title: "Investimentos",
    href: "/investments",
    icon: TrendingUp,
  },
  {
    title: "Objetivos",
    href: "/goals",
    icon: Target,
  },
  {
    title: "Análises",
    href: "/analytics",
    icon: PieChart,
  },
];

const bottomItems = [
  {
    title: "Configurações",
    href: "/settings",
    icon: Settings,
  },
  {
    title: "Ajuda",
    href: "/help",
    icon: HelpCircle,
  },
];

interface SidebarNavProps {
  className?: string;
}

export function SidebarNav({ className }: SidebarNavProps) {
  return (
    <div className={cn("flex flex-col h-full", className)}>
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">F</span>
          </div>
          <h1 className="text-xl font-bold text-gradient-primary">FinanceApp</h1>
        </div>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        {navigationItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-primary/20 text-primary border border-primary/30"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )
            }
          >
            <item.icon className="h-4 w-4" />
            {item.title}
          </NavLink>
        ))}
      </nav>

      <div className="px-4 pb-6 space-y-2">
        {bottomItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-primary/20 text-primary border border-primary/30"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )
            }
          >
            <item.icon className="h-4 w-4" />
            {item.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}