import DefaultLayout from "../components/layouts/DefaultLayout";
import FourCardsList from "../components/FourCardsList";
import TwoCardsList from "../components/TwoCardsList";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Carousel from "../components/Carousel/Carousel";
import { useState } from "react";
import Dropdown from "../components/Dropdown/Dropdown";
import { getCurrentUser, getIsAuthenticated } from "../store/User.reducer";
import { useSelector } from "react-redux";

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

const images = [
  "https://beechtree.pk/cdn/shop/files/Web_Banner_Desktop_13.jpg?v=1699256988",
  "https://beechtree.pk/cdn/shop/files/Web_Banner_Desktop_outerwear.jpg?v=1699012714",
  "https://pk.sapphireonline.pk/cdn/shop/files/HOME-web-banners.webp?v=1698908393&width=1400",
];
const links = [
  {
    current: true,
    href: "#",
    name: "Home",
  },
  {
    current: false,
    href: "#",
    name: "Women",
  },
];
const HomePage = () => {
  const [view, setView] = useState(4);
  const isAuthenticated = useSelector(getIsAuthenticated);
  const currentUser = useSelector(getCurrentUser);

  console.log(currentUser, "currentUser", isAuthenticated);
  return (
    <DefaultLayout>
      <div className="">
        <Carousel
          images={images}
          duration={700}
          showIndicators={true}
          showControls={true}
        />
      </div>

      <Breadcrumb showDivider={false} links={links}>
        <div className="flex gap-6">
          <div className="flex gap-3">
            <span>view</span>
            <button
              onClick={() => setView(2)}
              className="bg-gray-800 text-white px-2"
            >
              2
            </button>
            <button
              onClick={() => setView(4)}
              className="bg-gray-800 text-white px-2"
            >
              4
            </button>
          </div>

          <Dropdown
            placeholder={"Filter +"}
            options={[
              { label: "Price Low To High", value: "Price Low To High" },
              { label: "Price High To Low", value: "Price High To Low" },
            ]}
          />
        </div>
      </Breadcrumb>
      {view === 2 ? (
        <TwoCardsList products={products} />
      ) : (
        <FourCardsList products={products} />
      )}
    </DefaultLayout>
  );
};

export default HomePage;
