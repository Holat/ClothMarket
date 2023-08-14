import React, { Dispatch, SetStateAction } from "react";

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

export { MasonryListProp, ItemType, CardProp, FlatLIstProp };
