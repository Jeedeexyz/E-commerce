const Product = require("../models/product");

const addProduct = async (req, res) => {
  try {
    const {
      title,
      id,
      price,
      stock,
      sizes,
      description,
      sizeChart,
      fabric,
      content,
      fit,
      modelFit,
      modelSize,
      deliveryDetails,
      note,
      images,
      discount,
      category,
    } = req.body;
    const newProduct = new Product({
      title,
      id,
      price,
      stock,
      sizes,
      description,
      sizeChart,
      fabric,
      content,
      fit,
      modelFit,
      modelSize,
      deliveryDetails,
      note,
      images,
      discount,
      category,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const response = await Product.find();
    res.status(201).send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
// gets product by id
const getProductById = async (req, res) => {
  const { id } = req.query; // Accessing the id from the query parameters
  try {
    const response = await Product.findOne({ _id: id });

    if (!response) {
      res.status(404).send({ error: "Product not found" });
      return;
    }

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
//gets producrt according to price filter
const getProductsAccordingToPriceFilter = async (req, res) => {
  const { filter } = req.query;
  try {
    if (filter === "Price Low To High") {
      const response = await Product.find().sort({ price: 1 });
      res.status(201).send(response);
    } else {
      const response = await Product.find().sort({ price: -1 });
      res.status(201).send(response);
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

//gets all data according to category
const getProductsByCategory = async (req, res) => {
  const { category, sort } = req.query;
  console.log(category, sort);

  try {
    let query = { category };

    // Check if sort parameter is provided
    if (sort) {
      let sortOption = {};

      if (sort === "lowToHigh") {
        sortOption = { price: 1 }; // Ascending order
      } else if (sort === "highToLow") {
        sortOption = { price: -1 }; // Descending order
      }

      // Apply sorting to the query
      const response = await Product.find(query).sort(sortOption);
      res.status(200).send(response);
    } else {
      // If no sorting, simply retrieve products by category
      const response = await Product.find(query);
      res.status(200).send(response);
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deleteById = async (req, res) => {
  try {
    let { id } = req.query;
    console.log(id);
    let dataAgainstId = await Product.findByIdAndDelete({ _id: id });
    if (!dataAgainstId) {
      return res.status(404).json({ message: "DATA NOT FOUND" });
    }
    res.json({ message: "delete successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const searchProducts = async (req, res) => {
  try {
    const { term } = req.query;
    let query;

    if (term) {
      query = {
        $or: [
          { title: { $regex: new RegExp(term, "i") } },
          { category: { $regex: new RegExp(term, "i") } },
          { brand: { $regex: new RegExp(term, "i") } },
        ],
      };
    } else {
      query = {};
    }

    const response = await Product.find(query);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  addProduct,
  getProducts,
  getProductById,
  getProductsAccordingToPriceFilter,
  getProductsByCategory,
  // postPayment,
  deleteById,
  searchProducts,
};
