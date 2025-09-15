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
  HelpCircle
} from "lucide-react";
import { DynamicLogo } from "@/components/dynamic-logo";

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

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <DynamicLogo size="md" />
          {!isCollapsed && (
            <h1 className="text-lg font-bold text-gradient-primary">.tO Finance</h1>
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