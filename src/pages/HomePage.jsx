import DefaultLayout from "../components/layouts/DefaultLayout";
import FourCardsList from "../components/FourCardsList";
import TwoCardsList from "../components/TwoCardsList";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Modal from "../components/Modal/modal";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Handcrafted Collection",
    imageSrc:
      "https://beechtree.pk/cdn/shop/files/BT1W23U28_1_720x.jpg?v=1698666626",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    size: "17x17",
  },
  {
    id: 2,
    name: "Organized Desk Collection",
    imageSrc:
      "https://beechtree.pk/cdn/shop/files/BT2W23U36_1_720x.jpg?v=1698666703",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    size: "17x17",
  },
  {
    id: 3,
    name: "Focus Collection",
    imageSrc:
      "https://beechtree.pk/cdn/shop/files/BT2W23U73_1.jpg?v=1698037924",
    imageAlt:
      "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    size: "17x17",
  },
  {
    id: 4,
    name: "Handcrafted Collection",
    imageSrc:
      "https://beechtree.pk/cdn/shop/files/BT2W23U76_1.jpg?v=1698037926",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    size: "17x17",
  },
  {
    id: 5,
    name: "Organized Desk Collection",
    imageSrc:
      "https://beechtree.pk/cdn/shop/products/BT2W22U94_1.jpg?v=1667235324",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    size: "17x17",
  },
  {
    id: 6,
    name: "Focus Collection",
    imageSrc:
      "https://beechtree.pk/cdn/shop/products/BT2W22U93_1.jpg?v=1667235329",
    imageAlt:
      "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    size: "17x17",
  },
];

const HomePage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb showDivider={true} />

      <TwoCardsList products={products} />
      <FourCardsList products={products} />
    </DefaultLayout>
  );
};

export default HomePage;
