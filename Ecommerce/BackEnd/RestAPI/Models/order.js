<<<<<<< HEAD
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
        Products:[{ prd:String,
            qty:Number            
        }],
        Address:String,
        PhoneNumber:Number,
        TotalQuantity:Number,
        Total:mongoose.Types.Decimal128
    }
)

const Orders = new mongoose.model("Orders", orderSchema);

=======
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

>>>>>>> d3ac1ef125df9d6cb008ac66d4c192a5688a26a4
module.exports = Orders;