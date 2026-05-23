import { LucideIcon } from "lucide-react";

export type SidebarStateTypes = {
  sidebarState: boolean;
}

export type CalculateHeaderTypes = {
  title: string;
  description: string;
  logoColor: string;
  Icon: LucideIcon;
};

export type CalculateTypes = {
  index: number;
  title: string;
  description: string;
  Icon: LucideIcon;
};

export type CalculateInputTypes = {
  index: number;
  label: string;
  type: string;
  placeholder: string;
};

export type CalculateDisplayTypes = {
  index: number;
  title: string;
  value: number;
};
