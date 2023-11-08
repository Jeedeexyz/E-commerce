/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = (props) => {
  return (
    <div className="border mb-4">
      <div
        aria-hidden="true"
        className="relative aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:h-96 lg:aspect-h-8 lg:aspect-w-6 group-hover:opacity-75"
      >
        <div className="absolute inset-0">
          <img
            src={props.product.imageSrc}
            alt={props.product.imageAlt}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="mx-2 my-2 absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-24 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
          <p className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white  bg-red-600 text-base font-small text-white sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full">
            30% OFF
          </p>
        </div>
      </div>
      <div className="mx-auto mt-2 inline-flex lg:w-3/5">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          {props.product.name}
        </h3>
        <h3 className="mt-2 text-sm text-black">{props.product.size}</h3>
      </div>
    </div>
  );
};

export default Card;
