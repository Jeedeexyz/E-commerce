const mongoose = require ('mongoose');
// we are taking all the thing od produc in quantity
const quantity = new mongoose.Schema({
    
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    
    value:{
        type: Number,
        required: true
    }


})
//"procuctId": "652903b5009a829af6d52a85",
const Quantity = mongoose.model("Quantity", quantity);
module.exports = Quantity;