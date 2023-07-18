const express=require("express");
const app=express();
const mongoose=require("mongoose");
const router=require("./routes/book-routes");
const cors=require("cors");


app.use(express.json());
app.use(cors());
app.use('/books',router);

let password = `book123098`;

let connectstr = `mongodb+srv://adishnew:${password}@cluster0.c5yutly.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(connectstr).then(()=>console.log(`connected to db yay!!!!!`))
.then(()=>{
    app.listen(5000,()=>{
        console.log(`server is running on port 5000`);
    });
})
.catch((err)=>console.log(err));