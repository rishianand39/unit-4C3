const mongoose=require("mongoose")

const publicationSchema=mongoose.Schema({
    name:{type:String,required:true}    
},{
    timestamps:true,
    versionKey:false
});

const Publication=mongoose.model('book',publicationSchema)

module.exports=Publication;