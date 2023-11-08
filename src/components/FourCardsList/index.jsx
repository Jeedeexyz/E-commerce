/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Card from "../Card";

export default function FourCardsList(props) {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-10 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-y-0">
            {props.products.map((product) => (
              <div key={product.id}>
                <Card product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
