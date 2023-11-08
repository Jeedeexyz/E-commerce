import React from "react";
import Card from "../Card";

export default function TwoCardsList(props) {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-10 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0">
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
