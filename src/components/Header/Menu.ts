import type { ToPathOption } from "@tanstack/react-router";
import type { ReactNode } from "react";

export type MenuItemNode = {
  to: ToPathOption;
  label: ReactNode;
  isIcon?: boolean;
  children?: never;
};

export type MenuItemGroup = {
  to?: never;
  children: MenuItemNode[];
  label: ReactNode;
};

export type MenuItem = MenuItemNode | MenuItemGroup;
