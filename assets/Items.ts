import { ItemType } from "../types/types";

const Categories = [
  "Clothing",
  "Shoes",
  "Accessories",
  "Jewelry",
  "Sportswear",
  "Bags and Purses",
];

const Sports = [
  "Running [13]",
  "BasketBall [4]",
  "Motorsport [2]",
  "Golf [5]",
  "Soccer [1]",
  "Training [1]",
  "Cycling [4]",
  "Skateboarding [6]",
];

const Colors = [
  "red",
  "green",
  "white",
  "orange",
  "tan",
  "yellow",
  "blue",
  "grey",
];

const collections = [
  {
    price: 120,
    item1:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    price: 100,
    item2:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    price: 130,
    item3:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
];

const listData: ItemType[] = [
  {
    id: "1234rsfdfs",
    imageUrl:
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    title: "Scuderia Ferrari Team Tee",
    price: 180,
  },
  {
    id: "1234refs",
    imageUrl:
      "https://images.unsplash.com/photo-1611042553484-d61f84d22784?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    title: "PUMA Everyday Hussle",
    price: 160,
  },
  {
    id: "1234refs32cv1",
    imageUrl:
      "https://images.unsplash.com/photo-1556217477-d325251ece38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80",
    title: "Fandom Men's Sweatpants",
    price: 200,
  },
  {
    id: "1234rewerfs",
    imageUrl:
      "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
    title: "PUMA Everyday Hussle",
    price: 160,
  },
  {
    id: "1234re`1233fs",
    imageUrl:
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    title: "PUMA Everyday Hussle",
    price: 180,
  },
  {
    id: "1234.lkrefs",
    imageUrl:
      "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    title: "PUMA Everyday Hussle",
    price: 120,
  },
];

const Sleeves = ["Short Sleeve [402]", "Long Sleeve [307]", "Sleeveless [24]"];

export { Categories, Sports, Sleeves, Colors, listData, collections };
