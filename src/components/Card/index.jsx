/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = (props) => {
  return (
    <a href={`/detail/${props.product._id}`}>
      <div className="border shadow-lg transition duration-500 ease-in-out transform hover:scale-105 mb-4">
        <div
          aria-hidden="true"
          className="relative aspect-h-2 aspect-w-3 overflow-hidden  lg:h-96 lg:aspect-h-8 lg:aspect-w-6 group-hover:opacity-75"
        >
          <div className="absolute">
            <img
              src={
                props.product?.images?.[0]?.src ||
                "https://beechtree.pk/cdn/shop/products/BT2W22U93_1.jpg?v=1667235329"
              }
              alt={props.product?.images?.[0]?.alt || "img"}
              className="h-full w-full object-cover object-center"
            />
          </div>
          {props.product.stock === undefined && (
            <div className="mx-2 my-2 absolute top-2 left-2 rounded-bl-lg rounded-br-lg sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-24 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
              <p className="mt-6 flex px-2 flex-shrink-0 items-center justify-center rounded-md  bg-black text-base font-small text-white sm:mt-0 lg:ml-0 lg:w-full">
                Sold Out
              </p>
            </div>
          )}
          {props.product.discount && (
            <div className="mx-2 my-2 absolute inset-x-0 bottom-0 rounded-bl-lg  rounded-br-lg sm:flex sm:items-start xs:flex xs:items-start md:flex md:items-start  lg:inset-x-auto lg:inset-y-auto  lg:flex-col lg:w-auto lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
              <p className="mt-6 flex px-2 flex-shrink-0 items-center justify-center rounded-md  bg-red-600 text-base font-small text-white sm:ml-0 sm:mt-0 xs:ml-0 xs:mt-0 lg:ml-0 lg:w-full">
                {props.product.discount}
              </p>
            </div>
          )}
        </div>
        <div className=" mt-2 p-2 ">
          <p
            title={props.product.title}
            className="text-base font-semibold leading-6 text-gray-900 line-clamp-1"
          >
            {props.product.title || "title goes here"}
          </p>
          <p className="flex justify-between">
            <span>PKR {props.product.price || "PKR 1600"}</span>
            <span className=" text-sm text-black">
              {props.product.sizes.map((size) => {
                <span className="text-black border">{size.size}</span>;
              })}
              {props.product.category}
            </span>
          </p>
        </div>
      </div>
    </a>
  );
};

export default Card;
