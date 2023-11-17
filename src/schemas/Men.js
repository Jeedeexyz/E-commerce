const men = [
  {
    type: "text",
    label: "Title",
    name: "title",
  },
  {
    type: "text",
    label: "ID",
    name: "id",
  },
  {
    type: "number",
    label: "Price",
    name: "price",
  },
  {
    type: "text",
    label: "Stock",
    name: "stock",
  },
  {
    type: "checkbox", // Assuming you want checkboxes for sizes
    label: "Sizes",
    name: "sizes",
    options: [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
      // Add more sizes as needed
    ],
  },
  {
    type: "text",
    label: "Size Chart",
    name: "sizeChart",
  },
  {
    type: "textarea",
    label: "Description",
    name: "description",
  },
  {
    type: "text",
    label: "Fabric",
    name: "fabric",
  },
  {
    type: "text",
    label: "Content",
    name: "content",
  },
  {
    type: "text",
    label: "Fit",
    name: "fit",
  },
  {
    type: "text",
    label: "Model Fit",
    name: "modelFit",
  },
  {
    type: "text",
    label: "Model Size",
    name: "modelSize",
  },
  {
    type: "text",
    label: "Delivery Details",
    name: "deliveryDetails",
  },
  {
    type: "text",
    label: "Note",
    name: "note",
  },
  {
    type: "images",
    label: "Images",
    name: "images",
  },
  {
    type: "text",
    label: "Discount",
    name: "discount",
  },
  {
    type: "text",
    label: "Category",
    name: "category",
  },
];

export default men;
