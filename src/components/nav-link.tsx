import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  children: string;
  className?: string;
}

export function NavLink({ children, className, ...props }: NavLinkProps) {
  return (
    <a {...props} className={`font-medium text-sm ${className}`}>
      {children}
    </a>
  );
}

