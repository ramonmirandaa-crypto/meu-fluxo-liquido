import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const currencies = [
  { value: "BRL", label: "R$ Brazilian Real", symbol: "R$", flag: "🇧🇷" },
  { value: "USD", label: "$ US Dollar", symbol: "$", flag: "🇺🇸" },
  { value: "EUR", label: "€ Euro", symbol: "€", flag: "🇪🇺" },
  { value: "GBP", label: "£ British Pound", symbol: "£", flag: "🇬🇧" },
  { value: "JPY", label: "¥ Japanese Yen", symbol: "¥", flag: "🇯🇵" },
  { value: "CAD", label: "$ Canadian Dollar", symbol: "C$", flag: "🇨🇦" },
  { value: "AUD", label: "$ Australian Dollar", symbol: "A$", flag: "🇦🇺" },
  { value: "CHF", label: "₣ Swiss Franc", symbol: "₣", flag: "🇨🇭" },
];

interface CurrencySelectorProps {
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export function CurrencySelector({
  value = "BRL",
  onValueChange,
  className,
}: CurrencySelectorProps) {
  const [open, setOpen] = React.useState(false);
  const selectedCurrency = currencies.find((currency) => currency.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="glass"
          role="combobox"
          aria-expanded={open}
          className={cn("justify-between min-w-[140px]", className)}
        >
          {selectedCurrency ? (
            <div className="flex items-center gap-2">
              <span className="text-lg">{selectedCurrency.flag}</span>
              <span className="font-medium">{selectedCurrency.symbol}</span>
              <span className="text-muted-foreground text-sm">
                {selectedCurrency.value}
              </span>
            </div>
          ) : (
            "Selecionar moeda..."
          )}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-0 glass-card">
        <Command>
          <CommandInput placeholder="Buscar moeda..." className="h-9" />
          <CommandList>
            <CommandEmpty>Nenhuma moeda encontrada.</CommandEmpty>
            <CommandGroup>
              {currencies.map((currency) => (
                <CommandItem
                  key={currency.value}
                  value={currency.value}
                  onSelect={(currentValue) => {
                    onValueChange?.(currentValue.toUpperCase());
                    setOpen(false);
                  }}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-lg">{currency.flag}</span>
                    <div className="flex flex-col">
                      <span className="font-medium">{currency.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {currency.value}
                      </span>
                    </div>
                  </div>
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === currency.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}