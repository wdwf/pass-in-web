import { ComponentProps } from "react";

interface TableRowProps extends ComponentProps<"tr"> {
  className?: string;
}

export function TableRow({ ...props }: TableRowProps) {
  return (
    <tr {...props} className='border-b border-white/10 hover:bg-white/5' />
  );
}

