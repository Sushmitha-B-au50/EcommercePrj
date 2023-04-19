const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
// mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce", {useNewUrlParser: true, useUnifiedTopology: true}, 
//     (err) => {
//         if(err){
//             console.log("Connection Failed", err)
//         }
//         else{
//             console.log("Connection Success - Products");
//         }
//     }
// )

//products collection 
const productSchema  = new mongoose.Schema(
    {
        ProductID : Number,
        ProductName: String,
        ProductImage:String,
        ProductDetails: String,
        Ratings: Number,
        Quantity:Number,
        Price:mongoose.Types.Decimal128,
        Category:String

    }
)

const Products = new mongoose.model("Products",productSchema);

module.exports = Products;
