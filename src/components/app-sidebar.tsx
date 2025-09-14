import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  CreditCard, 
  Receipt, 
  TrendingUp, 
  Target, 
  PieChart,
  Settings,
  HelpCircle,
  Wallet
} from "lucide-react";

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

const accountItems = [
  {
    title: "Contas Correntes",
    href: "/accounts/checking",
    icon: Wallet,
    balance: "R$ 5.247,80",
    bank: "Nubank"
  },
  {
    title: "Poupança",
    href: "/accounts/savings", 
    icon: CreditCard,
    balance: "R$ 2.890,45",
    bank: "Itaú"
  },
  {
    title: "Cartão de Crédito",
    href: "/accounts/credit",
    icon: CreditCard,
    balance: "R$ 1.240,30",
    bank: "C6 Bank"
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

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shrink-0">
            <Wallet className="h-4 w-4 text-primary-foreground" />
          </div>
          {!isCollapsed && (
            <h1 className="text-lg font-bold text-gradient-primary">FinanceApp</h1>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.href}
                      className={({ isActive }) => 
                        isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Minhas Contas</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountItems.map((account) => (
                <SidebarMenuItem key={account.href}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={account.href}
                      className={({ isActive }) => 
                        isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""
                      }
                    >
                      <account.icon className="h-4 w-4" />
                      {!isCollapsed && (
                        <div className="flex flex-col flex-1 min-w-0">
                          <span className="text-sm font-medium truncate">{account.title}</span>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span className="truncate">{account.bank}</span>
                            <span className="font-medium text-foreground ml-2">{account.balance}</span>
                          </div>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {bottomItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.href}
                      className={({ isActive }) => 
                        isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}