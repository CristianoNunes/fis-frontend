import { HTMLAttributes } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: "success" | "danger" | "primary";
  type?: "button" | "submit";
  disabled?: boolean;
}
