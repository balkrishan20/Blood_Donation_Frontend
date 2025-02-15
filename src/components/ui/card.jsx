import { cn } from "@/lib/utils";

export function Card({ className, ...props }) {
  return <div className={cn("bg-white rounded-lg shadow-md p-4", className)} {...props} />;
}

export function CardContent({ className, ...props }) {
  return <div className={cn("mt-2", className)} {...props} />;
}
