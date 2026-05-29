import { APIPromise } from "@coingecko/coingecko-typescript";
import MarketGetResponse from "@coingecko/coingecko-typescript";
import { LucideIcon } from "lucide-react";

export type SidebarStateTypes = {
  sidebarState: boolean;
};

/*export type CollectionTypes = {
  id: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_percentage_24h: number;
  total_supply: number;
  last_updated: string;
};
*/

export type CollectionTypes = {
  data: APIPromise<MarketGetResponse>;
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
