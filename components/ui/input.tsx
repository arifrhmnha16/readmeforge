import * as React from "react";
import { cn } from "@/lib/utils";

export const inputClass =
  "min-h-11 w-full rounded-lg border border-border bg-[#0d131a] px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => <input className={cn(inputClass, className)} ref={ref} {...props} />,
);

Input.displayName = "Input";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea className={cn(inputClass, "min-h-28 resize-y leading-6", className)} ref={ref} {...props} />
  ),
);

Textarea.displayName = "Textarea";

export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, ...props }, ref) => <select className={cn(inputClass, "cursor-pointer", className)} ref={ref} {...props} />,
);

Select.displayName = "Select";
