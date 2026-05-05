import type { ToPathOption } from "@tanstack/react-router";
import type { ReactNode } from "react";

export interface MenuItem {
  to: ToPathOption;
  label: ReactNode;
}
