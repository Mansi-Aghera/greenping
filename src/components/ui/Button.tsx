

import {
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef,
  useState,
} from "react";
import { cn } from "@/src/utils/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold" | "dark";
  size?: "navbar" | "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  withRipple?: boolean;
  withGlow?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean; // Added loading prop instead of aria-busyset
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      withRipple = false,
      withGlow = false,
      icon,
      iconPosition = "left",
      disabled,
      loading = false, // Added loading state
      onClick,
      ...props
    },
    ref
  ) => {
    const [ripple, setRipple] = useState<{ x: number; y: number; id: number } | null>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (withRipple && !loading && !disabled) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setRipple({ x, y, id: Date.now() });
        setTimeout(() => setRipple(null), 600);
      }
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        onClick={handleClick}
        className={cn(
          // Base styles
          "relative inline-flex items-center justify-center gap-2 overflow-hidden",
          "whitespace-nowrap rounded-2xl font-semibold tracking-wide",
          "transition-all duration-300 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50 disabled:scale-100",
          "active:scale-[0.96] active:transition-all active:duration-150",
          
          // Shadow effects
          "shadow-md hover:shadow-xl",
          "hover:-translate-y-0.5 active:translate-y-0",
          
          // Sizes
          size === "navbar" && "h-10 px-5 text-sm font-medium sm:h-11 sm:px-6 sm:text-base rounded-xl",
          size === "sm" && "h-9 px-4 text-xs sm:h-10 sm:px-5 sm:text-sm rounded-xl",
          size === "md" && "h-11 px-6 text-sm sm:h-12 sm:px-7 sm:text-base",
          size === "lg" && "h-12 px-7 text-base sm:h-14 sm:px-9 sm:text-lg",
          size === "xl" && "h-14 px-8 text-lg sm:h-16 sm:px-10 sm:text-xl rounded-2xl",
          
          // Full width
          fullWidth && "w-full",
          
          // Variants with premium effects
          variant === "primary" && [
            "bg-gradient-to-r from-primary-dark via-primary to-primary-light",
            "text-white font-bold",
            "shadow-primary hover:shadow-primary-lg",
            "before:absolute before:inset-0 before:-translate-x-full",
            "before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent",
            "before:transition-transform before:duration-700 hover:before:translate-x-full",
            "hover:shadow-2xl",
          ],
          
          variant === "secondary" && [
            "bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900",
            "text-white",
            "shadow-lg hover:shadow-xl",
            "hover:from-slate-800 hover:to-slate-950",
            "border border-white/10",
          ],
          
          variant === "outline" && [
            "border-2 border-primary/50 bg-white/90 backdrop-blur-sm",
            "text-primary-dark font-semibold",
            "hover:bg-gradient-to-r hover:from-primary-dark hover:to-primary",
            "hover:text-white hover:border-transparent",
            "hover:shadow-primary",
          ],
          
          variant === "ghost" && [
            "bg-transparent",
            "text-foreground hover:text-primary",
            "hover:bg-primary/10",
            "shadow-none hover:shadow-none",
            "hover:-translate-y-0.5",
          ],
          
          variant === "gold" && [
            "bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500",
            "text-white font-bold",
            "shadow-lg hover:shadow-amber-500/50",
            "hover:shadow-2xl",
          ],
          
          variant === "dark" && [
            "bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950",
            "text-white",
            "shadow-xl hover:shadow-2xl",
            "border border-white/20",
          ],
          
          // Glow effect
          withGlow && variant === "primary" && "animate-glow",
          
          className
        )}
        {...props}
      >
        {/* Ripple Effect */}
        {withRipple && ripple && (
          <span
            className="absolute pointer-events-none"
            style={{
              left: ripple.x - 8,
              top: ripple.y - 8,
              width: "16px",
              height: "16px",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              borderRadius: "50%",
              transform: "scale(0)",
              animation: "buttonRipple 0.6s ease-out",
            }}
          />
        )}
        
        {/* Loading Spinner */}
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-inherit">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
        )}
        
        {/* Icon Left */}
        {!loading && icon && iconPosition === "left" && (
          <span className="relative z-10 text-current group-hover:scale-110 transition-transform duration-300">
            {icon}
          </span>
        )}
        
        {/* Button Text */}
        {!loading && <span className="relative z-10">{children}</span>}
        
        {/* Icon Right */}
        {!loading && icon && iconPosition === "right" && (
          <span className="relative z-10 text-current group-hover:translate-x-1 transition-transform duration-300">
            {icon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;