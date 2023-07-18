const express=require("express");
const router=express.Router();
const Book=require("../model/Book");



router.get("/",getAllBooks=async(req,res,next)=>{
    let book;
    try{
    book=await Book.find();
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"No products found"})
    }
    return res.status(200).json({book});
});


router.post("/",addBooks=async(req,res,next)=>{
    const {namep,author,price,image}=req.body;
  let book;
  try{
      book=new Book({
          namep,
          author,
          price,
          image
      })
      await book.save();
  }catch(err){
      console.log(err);
  }
  
  if(!book){
      return res.status(500).json({"message":"unable to connect"})
  }
  return res.status(200).json({book})
 
  }
  );


router.get("/:id",getbyid=  async(req,res,next)=>{
  const id=req.params.id;
  let book;
  try{
  book=await Book.findById(id);
  res.status(200).json(book)
  }catch(err){
    console.log(err);
  }
})

router.put("/:id",upbookbyid= async(req,res,next)=>{
    const id=req.params.id;
    const {namep,author,price,image}=req.body;

    let book;
    try{
        book=await Book.findByIdAndUpdate(id,{
            namep,
            author,
            price,
            image
        })
        book= await book.save();
    }catch(err){
        console.log(err);
    }

    if(!book){
        return res.status(500).json({"message":"unable to connect"})
    }
    return res.status(200).json({book})
    
})

router.delete("/:id",async(req,res,next)=>{
 const id=req.params.id;
 let book;
 try{
  book=await Book.findByIdAndRemove(id)
 }
 catch(err){
    console.log(err);
 }

 if(!book){
    return res.status(500).json({"message":"unable to connect"})
}
return res.status(200).json({book})


})


module.exports=router