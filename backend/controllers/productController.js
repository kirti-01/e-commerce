const Product = require("../models/productModel");

// createProduct function remains unchanged
exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    });
};

const getAllProducts = (req, res) => {
    res.status(200).json({ message: "Route is working fine" });
};

module.exports = {
    getAllProducts,
};


/*const Product=require("../models/productModel");
//create product 
exports.createProduct=async(req,res,next)=>{
    const product=await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

const getAllProducts=(req,res)=>{
    res.status(200).json({message:"Route is working fine"})
}
module.exports = {
    getAllProducts,
};*/