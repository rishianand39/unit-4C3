const { default: mongoose } = require("mongoose");

const connect=()=>{
    return mongoose.connect('mongodb+srv://rishianand:1234@cluster0.blh55.mongodb.net/unit-4C3?retryWrites=true&w=majority')
}
// const connect=()=>{
//      mongoose.connect("mongodb+srv://rishianand:1234@cluster0.blh55.mongodb.net/unit-4C3?retryWrites=true&w=majority")
// }

module.exports=connect;