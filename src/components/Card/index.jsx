/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = (props) => {
  console.log(props, "props");
  return (
    <a href={`/detail/${props.product._id}`}>
      <div className="border mb-4">
        <div
          aria-hidden="true"
          className="relative aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:h-96 lg:aspect-h-8 lg:aspect-w-6 group-hover:opacity-75"
        >
          <div className="absolute">
            <img
              src={
                props.product?.images[0]?.src ||
                "https://beechtree.pk/cdn/shop/products/BT2W22U93_1.jpg?v=1667235329"
              }
              alt={props.product.images[0]?.alt || "img"}
              className=" h-full w-full object-cover object-center"
            />
          </div>
          {props.product.stock !== "In Stock" && (
            <div className="mx-2 my-2 absolute top-2 left-2 rounded-bl-lg rounded-br-lg sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-24 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
              <p className="mt-6 flex px-2 flex-shrink-0 items-center justify-center rounded-md  bg-black text-base font-small text-white sm:mt-0 lg:ml-0 lg:w-full">
                Sold Out
              </p>
            </div>
          )}
          {props.product.stock === "In Stock" && (
            <div className="mx-2 my-2 absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-24 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
              <p className="mt-6 flex px-2 flex-shrink-0 items-center justify-center rounded-md  bg-red-600 text-base font-small text-white sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full">
                30% off
              </p>
            </div>
          )}
        </div>
        <div className=" mt-2 p-2 ">
          <p className="text-base font-semibold leading-6 text-gray-900">
            {props.product.title || "title goes here"}
          </p>
          <p className="flex justify-between">
            <span>{props.product.price || "PKR 1600"}</span>
            <span className="mt-2 text-sm text-black">
              {props.product.size}
            </span>
          </p>
        </div>
      </div>
    </a>
  );
};

export default Card;
