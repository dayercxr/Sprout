import Coingecko from "@coingecko/coingecko-typescript";
import { LucideIcon } from "lucide-react";
import { Dispatch, SetStateAction, ChangeEvent } from "react";

// AuthenticationTypes

export interface SignupTypes {
  name: string;
  email: string;
  password: string;
}

export type LoginTypes = {
  email: string;
  password: string;
};

// API Types

export interface CoinGeckoTypes {
  data: Coingecko;
}

export interface MarketChartTypes {
  prices: [Date, number][];
}

// UI Types

export type SidebarStateTypes = {
  sidebarState: boolean;
};

export interface TrendingCollectionsProps {
  selectedCollection: string;
  onSelectCollection: (id: string) => void;
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
};

export type CalculateInputTypes = {
  index: number;
  label: string;
  type: string;
  placeholder: string;
  name: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type CalculateDisplayTypes = {
  index: number;
  title: string;
  value: number;
};

export interface DialogTypes {
  dialogState: boolean;
  setDialogState: Dispatch<SetStateAction<boolean>>;
}

export interface WatchlistDataTypes {
  userId: string;
  buyPrice: number | null;
  quantity: number | null;
  coinId: string;
  priceUsd: number | null;
  marketCap: number | null;
  change24h: number | null;
  updatedAt: Date | null;
}

export interface WatchlistArrayDataTypes {
  data: WatchlistDataTypes[];
}
