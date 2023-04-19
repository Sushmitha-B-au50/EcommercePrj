const mongoose = require('mongoose');
mongoose.set('strictQuery', true);


// mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce", {useNewUrlParser: true, useUnifiedTopology: true}, 
//     (err) => {
//         if(err){
//             console.log("Connection Failed", err)
//         }
//         else{
//             console.log("Connection Success - Orders");
//         }
//     }
// )

//orders collection
const orderSchema  = new mongoose.Schema(
    {
        Name: String,
        Email: String,
        Products:String,
        Address:String,
        PhoneNumber:Number,
        Quantity:Number,
        Total:mongoose.Types.Decimal128
    }
)

const Orders = new mongoose.model("Orders", orderSchema);

module.exports = Orders;