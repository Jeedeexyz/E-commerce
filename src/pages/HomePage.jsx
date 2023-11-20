import DefaultLayout from "../components/layouts/DefaultLayout";
import FourCardsList from "../components/FourCardsList";
import TwoCardsList from "../components/TwoCardsList";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Carousel from "../components/Carousel/Carousel";
import { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown/Dropdown";
import axios from "axios";

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
    name: "home",
  },
];
const HomePage = () => {
  const [view, setView] = useState(4);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:4000/productInfo/getallproducts")
        .then((response) => {
          setProducts(response.data);
          setLoading(false); // Set loading to false once data is fetched
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  const priceFilter = (value) => {
    try {
      setLoading(true);

      axios
        .get(
          "http://localhost:4000/productInfo/getProductsAccordingToPriceFilter?filter=" +
            value
        )
        .then((response) => {
          setProducts(response.data);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <div className="py-4 pb-12">
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
              onOptionClicked={(value) => priceFilter(value)}
              size={"lg"}
              className="w-28 border"
            />
          </div>
        </Breadcrumb>
        {loading ? (
          <p>Loading...</p> // Render a loading message while data is being fetched
        ) : view === 2 ? (
          <TwoCardsList products={products} />
        ) : (
          <FourCardsList products={products} />
        )}
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
