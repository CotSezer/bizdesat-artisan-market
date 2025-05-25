
import * as React from "react";
import { cn } from "@/lib/utils";

interface AnimatedInputProps extends React.ComponentProps<"input"> {
  label?: string;
}

const AnimatedInput = React.forwardRef<HTMLInputElement, AnimatedInputProps>(
  ({ className, type, label, placeholder, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value.length > 0);
    };

    const shouldLabelFloat = isFocused || hasValue;

    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-lg border-2 border-gray-200 bg-background px-3 py-2 text-base ring-offset-background transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-transparent focus-visible:outline-none focus-visible:border-[#0046C6] focus-visible:ring-2 focus-visible:ring-[#0046C6] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={shouldLabelFloat ? placeholder : ""}
          {...props}
        />
        <label
          className={cn(
            "absolute left-3 text-gray-500 transition-all duration-200 pointer-events-none",
            shouldLabelFloat
              ? "top-1 text-xs text-[#0046C6] font-medium"
              : "top-3.5 text-base"
          )}
        >
          {placeholder}
        </label>
      </div>
    );
  }
);

AnimatedInput.displayName = "AnimatedInput";

export default AnimatedInput;
