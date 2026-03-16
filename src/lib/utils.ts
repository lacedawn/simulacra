import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges conditional classes securely, resolving Tailwind specificity conflicts recursively.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
