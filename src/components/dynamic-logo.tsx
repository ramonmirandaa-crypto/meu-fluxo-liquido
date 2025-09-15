import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import logoImage from "@/assets/logo-to.png";

interface DynamicLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function DynamicLogo({ className = "", size = "md" }: DynamicLogoProps) {
  const location = useLocation();
  
  // Map routes to colors and update CSS variables
  const getPageTheme = (pathname: string) => {
    switch (pathname) {
      case "/":
        return {
          color: "170 75% 45%",
          name: "dashboard"
        };
      case "/accounts":
        return {
          color: "217 91% 59%",
          name: "accounts"
        };
      case "/transactions":
        return {
          color: "25 95% 53%",
          name: "transactions"
        };
      case "/investments":
        return {
          color: "270 65% 50%",
          name: "investments"
        };
      case "/goals":
      case "/analytics":
        return {
          color: "170 60% 65%",
          name: "goals"
        };
      default:
        return {
          color: "170 75% 45%",
          name: "dashboard"
        };
    }
  };

  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  const currentTheme = getPageTheme(location.pathname);

  // Update CSS variables when route changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary', currentTheme.color);
    root.style.setProperty('--primary-glow', currentTheme.color.replace(/(\d+)%/, (match, p1) => `${parseInt(p1) + 10}%`));
    root.style.setProperty('--ring', currentTheme.color);
    root.style.setProperty('--sidebar-primary', currentTheme.color);
    root.style.setProperty('--sidebar-ring', currentTheme.color);
  }, [currentTheme.color]);

  return (
    <div 
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center shrink-0 overflow-hidden ${className}`}
      style={{
        background: `hsl(${currentTheme.color})`,
        boxShadow: `0 4px 20px hsl(${currentTheme.color} / 0.4)`
      }}
    >
      <img 
        src={logoImage} 
        alt=".tO Logo" 
        className="w-full h-full object-cover"
        style={{
          mixBlendMode: 'multiply',
          filter: 'brightness(0) invert(1)'
        }}
      />
    </div>
  );
}