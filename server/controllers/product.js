const Product = require ("../models/product");

const addProduct = async(req,res)=>{
    try{
        const {
            title,
            id,
            stock,
            size,
            description,
            sizeChart,
            fabric,
            content,
            fit,
            modelFit,
            modelSize,
            deliveryDetails,
            note,
            images
        } = req.body;
        const newProduct = new Product({
            title,
            id,
            stock,
            size,
            description,
            sizeChart,
            fabric,
            content,
            fit,
            modelFit,
            modelSize,
            deliveryDetails,
            note,
            images
        });
        await newProduct.save();
        res.status(201).json(newProduct);
    }
    catch(error)
    {
       res.status(400).send({error: error.message});
    }
}

const getProducts= async(req,res)=>{
    try {
        const response = await Product.find();
        res.status(201).send(response);
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}

module.exports = {addProduct,getProducts}