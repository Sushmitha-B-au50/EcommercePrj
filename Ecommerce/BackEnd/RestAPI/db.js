<<<<<<< HEAD
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://sushmi1024:sushmitha24@ecommerce.bwyybd5.mongodb.net/Ecommerce?retryWrites=true&w=majority", 
    (err) => {
        if(err){
            console.log("Connection Failed", err)
        }
        else{
            console.log("Connection Success");
        }
    }
=======
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://sushmi1024:sushmitha24@ecommerce.bwyybd5.mongodb.net/Ecommerce?retryWrites=true&w=majority", 
    (err) => {
        if(err){
            console.log("Connection Failed", err)
        }
        else{
            console.log("Connection Success");
        }
    }
>>>>>>> d3ac1ef125df9d6cb008ac66d4c192a5688a26a4
)