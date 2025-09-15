import { useLocation } from "react-router-dom";
import logoImage from "@/assets/logo-to.png";

interface DynamicLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function DynamicLogo({ className = "", size = "md" }: DynamicLogoProps) {
  const location = useLocation();
  
  // Map routes to colors based on the uploaded color variations
  const getPageColor = (pathname: string) => {
    switch (pathname) {
      case "/":
        return "hsl(170 75% 45%)"; // Green - Dashboard
      case "/accounts":
        return "hsl(217 91% 59%)"; // Blue - Accounts
      case "/transactions":
        return "hsl(25 95% 53%)"; // Orange - Transactions  
      case "/investments":
        return "hsl(270 65% 50%)"; // Purple - Investments
      case "/goals":
      case "/analytics":
        return "hsl(170 60% 65%)"; // Light Green - Goals/Analytics
      default:
        return "hsl(170 75% 45%)"; // Default green
    }
  };

  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  const currentColor = getPageColor(location.pathname);

  return (
    <div 
      className={`${sizeClasses[size]} rounded-lg flex items-center justify-center shrink-0 ${className}`}
      style={{
        background: `linear-gradient(135deg, ${currentColor}, ${currentColor}dd)`,
        boxShadow: `0 4px 20px ${currentColor}40`
      }}
    >
      <img 
        src={logoImage} 
        alt=".tO Logo" 
        className="w-full h-full object-contain p-1"
        style={{
          filter: `brightness(0) saturate(100%) invert(100%)` // Makes logo white
        }}
      />
    </div>
  );
}