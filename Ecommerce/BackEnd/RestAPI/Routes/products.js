const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
require('../db.js');
const Product = require('../Models/product');
const cloudinary =  require('../Image/cloudinaryConfig');
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));
const circularJSON = require('circular-json');





router.get('/', async (req, res, next) => {  //to get all products
    try {
        const result = await Product.find();
        res.send(result);
    }
    catch {
        res.send('Error' + err);
    }
});


router.post('/addPrd', async (req, res, next) => {   // to add the products  using cloudinary to directly storing the images
    try {
       const result =req.body;
  
     
        const productImage = await cloudinary.uploader.upload(result.ProductImage, {
            public_id: 'ProductImage ' + result.ProductID,
            width: 500,
            height: 650,
            crop: 'fill',
            folder: 'Products'
        });

        const product = new Product({
            ProductID: result.ProductID,
            ProductImage: productImage.secure_url,
            ProductName: result.ProductName,
            ProductDetails: result.ProductDetails,
            Ratings: result.Ratings,
            Quantity: result.Quantity,
            Price: result.Price,
        });

        const dataRes = await product.save();
        //return res.json({ result: "product added succesfully"});
        return res.status(200).json({
            mesaage: "product added succesfully" 
        })
    }
    catch (err) {
        return res.status(500).json({
            error: err.message
        })
    }
});



router.put('/:id', async (req, res, next) => {  //to update product
    try
    {
        const productToUpdate = await Product.findOneAndUpdate({ "ProductID": req.params.id })
        if (!productToUpdate) {
            return res.status(404).json({
                mesaage: "product not found" 
            })
        }
        const productImage = await cloudinary.uploader.upload(req.body.ProductImage, {
            public_id: 'ProductImage' + req.params.id,
            width: 650,
            height: 500,
            crop: 'fill',
            folder: 'Products'
        });

        productToUpdate.ProductName = req.body.ProductName,
        productToUpdate.ProductImage = productImage.secure_url;
        productToUpdate.ProductID = req.params.id,
        productToUpdate.Ratings = req.body.Ratings,
        productToUpdate.ProductDetails = req.body.ProductDetails,
        productToUpdate.Quantity = req.body.Quantity,
        productToUpdate.Price = req.body.Price;

        const dataRes = await productToUpdate.save();
            return res.status(200).json({
                mesaage: "product updated succesfully" 
            })
    }
     catch(err) {
        return res.status(500).json({
            error: err.message
        })
    }
    

});

router.delete('/:id', async (req, res, next) => {   // to delete the product
    await Product.deleteOne({ "ProductID": req.params.id }).then(result => {
        return res.send("Product deleted successfully ");
    })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});


router.get('/:id', async (req, res, next) => {   //getbyID
    try {
        const result = await Product.find({ "ProductID": req.params.id });
        res.send(result);
    }
    catch {
        res.send('Error' + err);
    }
});



// router.put('/ratings/:id',async (req,res,next)=> {  //this to update ratings giving by user 
//     const bookToUpdate = await Book.findOneAndUpdate({"BookID":req.params.BookID});
//     try{
//     if(!bookToUpdate){
//         res.send("book not found");
//         return;
//     }
//     bookToUpdate.Ratings = Number(bookToUpdate.Ratings + Number(req.body.Ratings))/2;
//     await bookToUpdate.save().then(result => { 
//       return res.send("ratings updated " + bookToUpdate.Ratings);
//     })

//     } 
//     catch(err)
//         {
//             return res.send("Error" + err);
//         } 
//     });

module.exports = router;