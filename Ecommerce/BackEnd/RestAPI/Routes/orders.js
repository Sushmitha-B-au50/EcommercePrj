const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
require('../db.js');
const Order = require('../Models/order.js');
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));
// const circularJSON = require('circular-json');





router.get('/', async (req, res, next) => {  //to get all order
    try {
        const result = await Order.find();
        res.send(result);
    }
    catch {
        res.send('Error' + err);
    }
});


router.post('/placeOrder', async (req, res, next) => {  
    try {
       const result =req.body;
        const order = new Order({
            Name: result.Name,
            Email: result.Email,
            Address: result.Address,
            PhoneNumber: result.PhoneNumber,
            TotalQuantity: result.TotalQuantity,
            Total: result.Total,
        });

        const dataRes = await order.save();
        //return res.json({ result: "product added succesfully"});
        return res.status(200).json({
            mesaage: "order placed succesfully" 
        })
    }
    catch (err) {
        return res.status(500).json({
            error: err.message
        })
    }
});





router.get('/:id', async (req, res, next) => {   //getbyID
    try {
        const result = await Order.find({ "ProductID": req.params.id });
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