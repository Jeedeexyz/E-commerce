/* eslint-disable react/prop-types */


export const ProductDetailSection = (props) => {
    const {product} = props
  return (
    <div className="tracking-wide">
        <h1 className="font-bold text-3xl pb-3">{product.title}</h1>
        <h4 className="text-sm pb-6">SKU:{product.id}</h4>
        <h2 className="pb-4 inline mr-8">Rs {product.price}</h2>
        <s>Rs 11,280</s>
        <h2 className="inline ml-20">Availability:{product.availability}</h2>
        <hr />
    </div>
  )
}

export default ProductDetailSection
