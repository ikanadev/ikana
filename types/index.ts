export enum Theme {
  Light = "light",
  Dark = "dark",
}

export type TechItem = {
  url: string;
  name: string;
  description: string;
};

export type QuoteItem = {
  author: string;
  quote: string;
};

export const THEME_KEY = "theme";
