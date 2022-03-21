const mongoose=require("mongoose")

const commentSchema=mongoose.Schema({
    body:{type:String,required:true},
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    book_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book",
        required:true
    }   
},{
    timestamps:true,
    versionKey:false
});

const Comment=mongoose.model('comment',commentSchema)

module.exports=Comment;