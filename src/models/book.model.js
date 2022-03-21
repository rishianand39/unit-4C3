const mongoose=require("mongoose")

const bookSchema=mongoose.Schema({
    likes:{type:Number},
    coverImage:{type:String,required:true},
    content:{type:String,required:true},
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    publication_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"publication",
        required:true   
    }   
},{
    timestamps:true,
    versionKey:false
});

const Book=mongoose.model('book',bookSchema)

module.exports=Book;