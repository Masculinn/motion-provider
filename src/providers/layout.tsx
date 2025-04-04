import { ProviderLayoutProps } from "../interfaces";
import { cn } from "../lib/utils";

export default function Layout({ children, className }: ProviderLayoutProps) {
  return <main className={cn(className)}>{children}</main>;
}
