<<<<<<< HEAD
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce", {useNewUrlParser: true, useUnifiedTopology: true}, 
//     (err) => {
//         if(err){
//             console.log("Connection Failed", err)
//         }
//         else{
//             console.log("Connection Success- Users");
//         }
//     }
// )

//users collection
const userSchema  = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
    }
)

const Users = new mongoose.model("Users", userSchema);

=======
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce", {useNewUrlParser: true, useUnifiedTopology: true}, 
//     (err) => {
//         if(err){
//             console.log("Connection Failed", err)
//         }
//         else{
//             console.log("Connection Success- Users");
//         }
//     }
// )

//users collection
const userSchema  = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
    }
)

const Users = new mongoose.model("Users", userSchema);

>>>>>>> d3ac1ef125df9d6cb008ac66d4c192a5688a26a4
module.exports = Users;