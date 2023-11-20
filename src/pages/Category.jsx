import DefaultLayout from "../components/layouts/DefaultLayout";
import FourCardsList from "../components/FourCardsList";
import TwoCardsList from "../components/TwoCardsList";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByCategory } from "../store/categoryActions";

const Category = () => {
  const [view, setView] = useState(4);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const { products, loading, error } = useSelector((state) => state.category);

  const pathname = location.pathname;
  const parts = pathname.split("/");
  const categoryName = parts[2];
  useEffect(() => {
    dispatch(fetchProductByCategory(categoryName, filter));
  }, [dispatch, categoryName, filter]);

  console.log(products, "productsproducts");
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!products) {
    return <p>Product not found</p>;
  }

  const links = [
    {
      current: true,
      href: "#",
      name: "Home",
    },
    {
      current: false,
      href: "#",
      name: categoryName,
    },
  ];

  return (
    <DefaultLayout>
      <div className="px-6 py-6">
        <h3 className=" text-lg font-medium">
          Search Result for {categoryName}{" "}
        </h3>
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
              { label: "Price Low To High", value: "lowToHigh" },
              { label: "Price High To Low", value: "highToLow" },
            ]}
            onOptionClicked={(value) => setFilter(value)}
          />
        </div>
      </Breadcrumb>
      {products.length === 0 ? (
        <div className="flex items-center justify-center mt-8">
          <div className="text-red-500"></div>
          <p className="text-red-500">Product not found in selected category</p>
        </div>
      ) : view === 2 ? (
        <TwoCardsList products={products} />
      ) : (
        <FourCardsList products={products} />
      )}
    </DefaultLayout>
  );
};

export default Category;
