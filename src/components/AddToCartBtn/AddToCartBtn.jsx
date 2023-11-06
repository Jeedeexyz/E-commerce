/* eslint-disable react/prop-types */


export const AddToCartBtn = (props) => {
    const {title} = props
  return (
    <div><button className="bg-black text-white p-3 px-12">{title}</button></div>
  )
}


export default AddToCartBtn