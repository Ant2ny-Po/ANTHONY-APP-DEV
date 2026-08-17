import React from "react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <button 
      className={cn(
        "cursor-pointer inline-flex items-center justify-center font-semibold transition-colors focus:outline-none uppercase tracking-[0.15em]", 
        isPrimary ? "hover:bg-gray-800 shadow-lg" : "",
        className
      )}
      style={{
        backgroundColor: isPrimary ? '#000000' : variant === 'secondary' ? '#ffffff' : 'transparent', color: isPrimary ? '#ffffff' : '#111827', padding: '16px 36px',
        borderRadius: '9999px', border: variant === 'secondary' ? '1px solid #d1d5db' : 'none',
        ...props.style
      }}
      {...props}
    >
      {children}
    </button>
  );
}
