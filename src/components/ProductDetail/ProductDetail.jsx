/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "../Button/Button";

export const ProductDetail = ({ product, handleClick }) => {
  const [quantity, setQuantity] = useState(1);
  const [descriptionDisplayProperty, setDescriptionDisplayProperty] =
    useState("");
  const [deliveryProperty, setDeliveryProperty] = useState("");
  const [noteProperty, setNoteProperty] = useState("");
  const [descriptionVisible, setDescriptionVisible] = useState(true);
  const [deliveryDetailVisible, setDeliveryDetailVisible] = useState(true);
  const [noteVisible, setNoteVisible] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    // Update the state with the selected size
    setSelectedSize(size);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < product.stock) setQuantity(quantity + 1);
  };
  const MaximizeDescription = () => {
    setDescriptionDisplayProperty("");
    setDescriptionVisible(true);
  };

  const MinimizeDescription = () => {
    setDescriptionDisplayProperty("hidden");
    setDescriptionVisible(false);
  };
  const MaximizeDeliveryDetail = () => {
    setDeliveryProperty("");
    setDeliveryDetailVisible(true);
  };

  const MinimizeDeliveryDetail = () => {
    setDeliveryProperty("hidden");
    setDeliveryDetailVisible(false);
  };

  const MaximizeNote = () => {
    setNoteProperty("");
    setNoteVisible(true);
  };

  const MinimizeNote = () => {
    setNoteProperty("hidden");
    setNoteVisible(false);
  };
  console.log(product.sizes, "product.sizes");
  return (
    <div className="tracking-wide w-[600px]">
      <h1 className="font-bold text-3xl pb-3">{product.title}</h1>
      <h4 className="text-sm pb-6">SKU:{product.id}</h4>
      <h2 className="pb-4 inline mr-8">Rs {product.price}</h2>
      <s>Rs 11,280</s>
      <h2 className="inline ml-20">Availability:{product.availability}</h2>
      <hr className="border-black" />
      {product.sizes && (
        <div className="flex flex-row gap-6 ml-12 items-center my-2">
          <h3>Size:</h3>

          {product.sizes.map((size) => (
            <p
              key={size._id}
              className={` cursor-pointer px-2 border ${
                selectedSize === size.size
                  ? "bg-black text-white"
                  : "bg-zinc-200  text-black"
              }`}
              onClick={() => handleSizeClick(size.size)}
            >
              {size.size}
            </p>
          ))}
        </div>
      )}

      <div className="py-5 mt-10">
        <label>Quantity:</label>
        <button onClick={handleDecrease} className="border-2 py-2 px-3 ml-10">
          -
        </button>
        <input
          onChange={handleQuantityChange}
          id="quantity"
          value={quantity}
          className="appearance-none w-16 py-2 px-5 text-center border border-gray-300 rounded"
        ></input>
        <button onClick={handleIncrease} className="border-2 py-2 px-3">
          +
        </button>

        <Button
          handleClick={(e) => {
            e.preventDefault;
            handleClick(quantity, product._id, selectedSize);
          }}
          title={"Add To Cart"}
        />

        <div className="text-sm">
          <div className="flex flex-row mt-20 mb-10 justify-between">
            <h2 className="font-bold">Description:</h2>
            {descriptionVisible ? (
              <button onClick={MinimizeDescription} className="pr-10 font-bold">
                -
              </button>
            ) : (
              <button onClick={MaximizeDescription} className="pr-10 font-bold">
                +
              </button>
            )}
          </div>
          <div className={descriptionDisplayProperty}>
            <p>{product.description}</p>
            {product.fabric && (
              <p className="mt-10">
                <b>Fabric:</b> {product.fabric}
              </p>
            )}

            <p className="mb-16">
              <b>What You'll Get:</b> {product.content}
            </p>

            {product.fit && (
              <p className="mb-16">
                <b>Fit:</b> {product.fit}
              </p>
            )}

            <p className="mb-8">
              <b>Size&Fit:</b>
            </p>
            <p className="mb-2">{product.modleSize}</p>
            <p className="mb-4">{product.modelFit}</p>
          </div>
          <hr className="border-black"></hr>
          <div className="flex flex-row mt-10 mb-10 justify-between">
            <h2 className="font-bold">Delivery Detail:</h2>
            {deliveryDetailVisible ? (
              <button
                onClick={MinimizeDeliveryDetail}
                className="pr-10 font-bold"
              >
                -
              </button>
            ) : (
              <button
                onClick={MaximizeDeliveryDetail}
                className="pr-10 font-bold"
              >
                +
              </button>
            )}
          </div>
          <div className={deliveryProperty}>
            <p className="mb-4">{product.deliveryDetails}</p>
          </div>
          <hr className="border-black"></hr>
          <div className="flex flex-row mt-10 mb-10 justify-between">
            <h2 className="font-bold">Note:</h2>
            {noteVisible ? (
              <button onClick={MinimizeNote} className="pr-10 font-bold">
                -
              </button>
            ) : (
              <button onClick={MaximizeNote} className="pr-10 font-bold">
                +
              </button>
            )}
          </div>
          <div className={noteProperty}>
            <p className="mb-4">{product.note}</p>
          </div>
          <hr className="border-black"></hr>
          <hr className="border-black"></hr>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
