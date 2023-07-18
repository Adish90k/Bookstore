const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const bookSchema= new Schema(
    {
     namep:{
        type:String,
      //   required:true
     },
     author:{
        type:String,
      //   required:true
     }, 
     price:{
        type:String,
      //   required:true
     },
     image:{
      type:String,
      // required:true
     }

    }
);




module.exports=mongoose.model("Book",bookSchema);