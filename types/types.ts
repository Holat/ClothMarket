import React, { Dispatch, SetStateAction, ReactNode } from "react";

type ItemType = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
};

type MasonryListProp = {
  item: ItemType | any;
  i: number;
};

type CardProp = {
  imageUrl: string | undefined;
  onPress?: () => void;
  price: number;
  item: string;
};

type FlatLIstProp = {
  index: number;
  item: string;
  isSelected: boolean;
  setCategoryIndex: Dispatch<SetStateAction<number>>;
};

type PriceRangeSelectorProp = {
  minPrice?: number;
  maxPrice: number;
  startPrice: number;
  endPrice: number;
  onStartPriceChange: (value: number) => void;
  onEndPriceChange: (value: number) => void;
};

type ChipProp = {
  isSelected: boolean;
  label: string;
  left?: ReactNode;
};

export {
  MasonryListProp,
  ItemType,
  CardProp,
  FlatLIstProp,
  PriceRangeSelectorProp,
  ChipProp,
};
